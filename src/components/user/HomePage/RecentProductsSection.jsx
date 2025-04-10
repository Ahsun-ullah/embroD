import ProductCard from '@/components/Common/ProductCard';
import Link from 'next/link';

const RecentProductsSection = () => {
  return (
    <>
      <section className='bg-blue-50 text-black my-8 py-6'>
        <div className='flex items-center justify-center'>
          <h1 className='text-3xl font-bold'>Recent Approved Products</h1>
        </div>
        <div className='flex items-center justify-center mt-4'>
          <h3 className='font-semibold'>
            Design for every Budget & every Project.
          </h3>
        </div>
      </section>
      <section className='text-black my-8 py-6'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
            {Array.from({ length: 4 }).map((item, index) => (
              <ProductCard key={index} item={item} />
            ))}
          </div>
          <div className='flex justify-center items-center mt-14'>
            <Link
              href={'#'}
              className='bg-black rounded-full hover:bg-blue-400 text-white font-medium px-6 py-2'
            >
              View All
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default RecentProductsSection;
