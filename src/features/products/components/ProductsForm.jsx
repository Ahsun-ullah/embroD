'use client';

import { ErrorToast } from '@/components/Common/ErrorToast';
import { SuccessToast } from '@/components/Common/SuccessToast';
import {
  useGetPublicProductCategoriesQuery,
  useGetPublicProductSubCategoriesQuery,
} from '@/lib/redux/admin/categoryAndSubcategory/categoryAndSubcategorySlice';
import {
  useAddProductMutation,
  useUpdateProductMutation,
} from '@/lib/redux/admin/protectedProducts/protectedProductSlice';
import { useAllProductsQuery } from '@/lib/redux/public/products/productSlice';
import { productSchema } from '@/lib/zodValidation/productValidation';
import { Card } from '@heroui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import MDEditor from '@uiw/react-md-editor';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import { ZipFileUpload } from './FileDragAndDropInput';
import { ImageFileUpload } from './ImageDragAndDropInput';
import { CreatableTagsInput } from './TagsInput';
import LoadingSpinner from '@/components/Common/LoadingSpinner';

export function ProductsForm({ product }) {
  const router = useRouter();
  const [categoryOption, setCategoryOption] = useState([]);
  const [subCategoryOption, setSubCategoryOption] = useState([]);
  const [description, setDescription] = useState(product?.description || '');

  const { data: categoryData } = useGetPublicProductCategoriesQuery();
  const { data: subCategoryData } = useGetPublicProductSubCategoriesQuery();

  const [addProduct] = useAddProductMutation();
  const [updateProduct] = useUpdateProductMutation();
  const { refetch: allProductRefetch } = useAllProductsQuery();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
  } = useForm({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: '',
      price: null,
      description: '',
      category: '',
      sub_category: '',
      meta_description: '',
      meta_title: '',
      meta_keywords: [],
      image: null,
      file: null,
    },
  });

  useEffect(() => {
    if (product) {
      reset({
        name: product.name ?? '',
        category: product.category?._id ?? '',
        sub_category: product.sub_category ?? '',
        price: product.price ?? null,
        description: product.description ?? '',
        meta_title: product.meta_title ?? '',
        meta_description: product.meta_description ?? '',
        meta_keywords: product.meta_keywords ?? [],
        image: product.image ?? null,
        file: product.file ?? null,
      });
      setDescription(product.description ?? '');
    }
  }, [product, reset]);

  useEffect(() => {
    if (categoryData?.data?.length > 0) {
      console.log('categoryData:', categoryData);
      const formattedCategory = categoryData.data.map((cat) => ({
        label: cat?.name,
        value: cat?._id,
      }));
      setCategoryOption(formattedCategory);
    }
    if (subCategoryData?.data?.length > 0) {
      console.log('subCategoryData:', subCategoryData);
      const formattedSubCategory = subCategoryData.data.map((subcat) => ({
        label: subcat?.name,
        value: subcat?._id,
      }));
      setSubCategoryOption(formattedSubCategory);
    }
  }, [subCategoryData]);

  const onSubmit = async (data) => {
    console.log('Submitted Data:', data);
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (value !== null && value !== undefined) {
          if (key === 'image' || key === 'file') {
            if (value instanceof File) {
              formData.append(key, value);
            }
          } else if (key === 'meta_keywords') {
            value.forEach((tag, index) => {
              formData.append(`meta_keywords[${index}]`, tag);
            });
          } else {
            formData.append(key, value);
          }
        }
      });

      if (product?._id) {
        formData.append('id', product._id);
        const response = await updateProduct(formData).unwrap();
        // console.log('API Response:', response);
        if (response.error) {
          ErrorToast('Error', response.error.data.message || 'API Error', 3000);
        } else {
          SuccessToast(
            'Success',
            response.data.message || 'Action successfully done!',
            3000,
          );
          allProductRefetch();
          reset();
          setDescription('');
          router.push('/admin/all-products');
        }
      } else {
        // Here you would typically make an API call
        const response = await addProduct(formData).unwrap();
        // console.log('API Response:', response);
        if (response.error) {
          ErrorToast('Error', response.error.data.message || 'API Error', 3000);
        } else {
          SuccessToast(
            'Success',
            response.data.message || 'Action successfully done!',
            3000,
          );
          allProductRefetch();
          reset();
          setDescription('');
          router.push('/admin/all-products');
        }
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      ErrorToast('Error', error || 'API Error', 3000);
    }
  };

  return (
    <Card className='w-full p-6'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='grid grid-cols-3 gap-4'
      >
        {/* Product Name */}
        <div>
          <label
            className='text-lg font-medium tracking-tight leading-5'
            htmlFor='name'
          >
            Product Name <span className='text-red-600'>*</span>
          </label>
          <input
            id='name'
            placeholder='Product Name'
            {...register('name')}
            className='flex w-full flex-wrap md:flex-nowrap gap-4 border-[1.8px] rounded-[4px] p-2'
          />
          {errors.name && (
            <p className='text-red-500 font-light'>{errors.name.message}</p>
          )}
        </div>

        {/* Category */}
        <div>
          <label
            className='text-lg font-medium tracking-tight leading-5'
            htmlFor='category'
          >
            Category <span className='text-red-600'>*</span>
          </label>
          <Controller
            name='category'
            control={control}
            render={({ field }) => (
              <Select
                options={categoryOption}
                onChange={(selected) =>
                  field.onChange(selected ? selected.value : '')
                }
                value={
                  categoryOption.find(
                    (option) => option.value === field.value,
                  ) || null
                }
                placeholder='Select a category'
                aria-label='Category'
              />
            )}
          />
          {errors.category && (
            <p className='text-red-500 font-light'>{errors.category.message}</p>
          )}
        </div>

        {/* sub_category */}
        <div>
          <label
            className='text-lg font-medium tracking-tight leading-5'
            htmlFor='sub_category'
          >
            Sub Category <span className='text-red-600'>*</span>
          </label>
          <Controller
            name='sub_category'
            control={control}
            render={({ field }) => (
              <Select
                options={subCategoryOption}
                onChange={(selected) =>
                  field.onChange(selected ? selected.value : '')
                }
                value={
                  subCategoryOption.find(
                    (option) => option.value === field.value,
                  ) || null
                }
                placeholder='Select a category'
                aria-label='Category'
              />
            )}
          />
          {errors.sub_category && (
            <p className='text-red-500 font-light'>
              {errors.sub_category.message}
            </p>
          )}
        </div>

        {/* Price */}
        <div>
          <label
            className='text-lg font-medium tracking-tight leading-5'
            htmlFor='price'
          >
            Price <span className='text-red-600'>*</span>
          </label>
          <input
            id='price'
            type='number'
            step='0.01'
            placeholder='Price'
            {...register('price', { valueAsNumber: true })}
            className='flex w-full flex-wrap md:flex-nowrap gap-4 border-[1.8px] rounded-[4px] p-2'
          />
          {errors.price && (
            <p className='text-red-500 font-light'>{errors.price.message}</p>
          )}
        </div>

        {/* Description */}
        <div data-color-mode='light' className='col-span-3'>
          <label
            className='text-lg font-medium tracking-tight leading-5'
            htmlFor='description'
          >
            Product Description <span className='text-red-600'>*</span>
          </label>
          <Controller
            name='description'
            control={control}
            render={({ field }) => (
              <MDEditor
                {...field}
                value={description}
                onChange={(value) => {
                  setDescription(value);
                  field.onChange(value);
                }}
                preview='edit'
                height={300}
                textareaProps={{
                  placeholder: 'Enter Product Description',
                }}
                previewOptions={{
                  disallowedElements: ['style'],
                }}
                className='rounded-[4px] p-2 overflow-hidden'
              />
            )}
          />
          {errors.description && (
            <p className='text-red-500 font-light'>
              {errors.description.message}
            </p>
          )}
        </div>
        {/* meta_title  */}
        <div className='flex flex-col gap-2'>
          <label
            className='text-lg font-medium tracking-tight leading-5'
            htmlFor='meta_title'
          >
            Meta Title <span className='text-red-600'>*</span>
          </label>
          <input
            id='meta_title'
            placeholder='Category Name'
            {...register('meta_title')}
            className='flex w-full flex-wrap md:flex-nowrap gap-4 border-[1.8px] rounded-[4px] p-2'
          />
          {errors.meta_title && (
            <p className='text-red-500 font-light'>
              {errors.meta_title.message}
            </p>
          )}
        </div>
        {/* Meta Description */}
        <div className='col-span-3'>
          <label
            className='text-lg font-medium tracking-tight leading-5'
            htmlFor='meta_description'
          >
            Meta Description <span className='text-red-600'>*</span>
          </label>
          <textarea
            rows={8}
            id='meta_description'
            placeholder='Meta description'
            {...register('meta_description')}
            className='flex w-full flex-wrap md:flex-nowrap gap-4 border-[1.8px] rounded-[4px] p-2'
          />
          {errors.meta_description && (
            <p className='text-red-500 font-light'>
              {errors.meta_description.message}
            </p>
          )}
        </div>

        {/* Product Tags */}
        <div>
          <label
            className='text-lg font-medium tracking-tight leading-5'
            htmlFor='meta_keywords'
          >
            Product Tags <span className='text-red-600'>*</span>
          </label>
          <Controller
            name='meta_keywords'
            control={control}
            render={({ field }) => (
              <CreatableTagsInput
                value={field.value || []}
                onChange={(tags) => field.onChange(tags)}
              />
            )}
          />
          {errors.meta_keywords && (
            <p className='text-red-500 font-light'>
              {errors.meta_keywords.message}
            </p>
          )}
        </div>

        {/* Product Image Upload */}
        <div className='col-span-2'>
          <label className='text-lg font-medium tracking-tight leading-5'>
            Product Image <span className='text-red-600'>*</span>
          </label>
          <ImageFileUpload
            label='Upload product image (.jpg, .png). Min: 580px × 386px, Max: 5000px × 5000px'
            accept={{ 'image/jpeg': [], 'image/png': [] }}
            onDrop={(file) => setValue('image', file, { shouldValidate: true })}
            error={errors.image?.message}
            itemData={product}
          />
        </div>

        {/* Design File Upload */}
        <div className='col-span-3'>
          <label className='text-lg font-medium tracking-tight leading-5'>
            Design File (Zip only) <span className='text-red-600'>*</span>
          </label>
          <ZipFileUpload
            label='Upload embroidery files (.zip only)'
            accept={{ 'application/zip': [] }}
            onDrop={(file) => setValue('file', file, { shouldValidate: true })}
            error={errors.file?.message}
            product={product}
          />
        </div>

        {/* Submit Button */}
        <div className='col-span-3 flex justify-center w-full my-20'>
          <button
            type='submit'
            disabled={isSubmitting}
            className={`w-full md:w-auto px-6 py-3 rounded-md font-medium text-white
             bg-slate-800
              hover:bg-teal-600  hover:shadow-lg
              disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed
              transition-all duration-300 ease-in-out
              ${isSubmitting ? 'cursor-wait' : ''}`}
          >
            {isSubmitting
              ? <LoadingSpinner />
              : product
                ? 'Update Product'
                : 'Create Product'}
          </button>
        </div>
      </form>
    </Card>
  );
}
