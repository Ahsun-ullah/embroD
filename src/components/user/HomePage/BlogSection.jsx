import { Divider } from '@heroui/react';

const BlogSection = () => {
  return (
    <>
      <section className='bg-blue-50 text-black my-8 py-6'>
        <div className='flex items-center justify-center'>
          <h1 className='text-3xl font-bold'>Latest News</h1>
        </div>
        <div className='flex items-center justify-center mt-4'>
          <h3 className='font-bold text-3xl'>Latest from Blog</h3>
        </div>
      </section>
      <section className='text-black my-8 py-6'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className='bg-white border rounded-2xl shadow-xl'
              >
                <div
                  style={{
                    backgroundImage: `url('/category.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    height: '200px',
                    width: '100%',
                  }}
                  className='p-6 flex items-center justify-center rounded-t-2xl'
                />
                <Divider />
                <div className='bg-blue-50 border-default-600 dark:border-default-100 p-4 rounded-2xl'>
                  <div className='text-wrap'>
                    <h1 className='text-lg font-bold'>
                      How to Edit a Machine Embroidery Design
                    </h1>
                    <p className='text-sm'>
                      Have you ever had one of those craft days that make you
                      want to just put down your scissors and...
                    </p>
                  </div>
                  <div className='flex items-center justify-between gap-4'>
                    <p className='text-sm text-black/90 font-medium'>
                      By <strong>Embring</strong>
                    </p>
                    <button className='bg-black hover:bg-white hover:text-black text-white rounded-md px-2 font-semibold'>
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSection;
