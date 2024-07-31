import React from 'react'

const MakingTravel = () => {
    return (
        <section className='bg-[#A094FF] w-full px-4 py-12 md:py-[100px]'>
            <div className='max-w-[1260px] w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-5'>
                <div className='order-2 md:order-1'>
                    <h1 className='md:max-w-[459px] w-full uppercase text-[36px] md:text-[65px] font-extrabold leading-[36px] md:leading-[65px] text-white tracking-[1px]'>
                        Making travel effortless for All
                    </h1>

                    <p className='text-white text-xl font-normal leading-[27.28px] md:max-w-[526px] w-full mt-4 md:mt-[60px]'>
                        Seamlessly plan, manage, and enjoy your trips with ease. Discover Hidden Treasures and Unique Adventures in Our Latest Travel Blogs
                    </p>

                    <button className='w-[162px] md:w-[217px] h-[50px] bg-white rounded-[50px] text-center text-base md:text-2xl text-[#0A0A0A] font-semibold leading-[32.74px] mt-8 md:mt-[60px]'>
                        See what&apos;s new
                    </button>
                </div>

                <div className='order-1 md:order-2'>
                    <img src="/assets/1.svg" alt="Making travel effortless for All" className='opacity-85' />
                </div>
            </div>
        </section>
    )
}

export default MakingTravel