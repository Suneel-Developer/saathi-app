import React from 'react'

const Features = () => {
    return (
        <section className='bg-white w-full px-2 py-12 md:py-[100px]'>
            <div className='max-w-[1260px] w-full mx-auto'>
                <div>
                    <h1 className='uppercase text-[36px] md:text-[65px] font-extrabold leading-[36px] md:leading-[88px] text-[#292929] tracking-[1px] mb-12 md:mb-[60px]'>
                        OUR KEY FEATURES
                    </h1>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mx-auto'>
                    <div className='relative flex items-end justify-center w-[310px] xxs:w-[345px] lg:w-full h-[345px] lg:h-[470px] mx-auto'>
                        <div className='features1'></div>
                        <div className='flex flex-col absolute top-0 bottom-0 w-full h-full left-0 z-30 items-center justify-center bg-[#FAF8FF] rounded-[45px] px-4 md:px-10 py-4 md:py-10'>
                            <img src="/assets/features1.webp" alt="3D Flight Ticket Model With Airplane Icon" className='h-[189px] md:h-[266px]' />
                            <h2 className='text-[#292929] text-xl md:text-2xl font-semibold text-center mb-4 md:mb-5 mt-1'>Manage Trips</h2>
                            <h2 className='text-[#292929] text-base font-normal leading-[21.82px] text-center'>
                                onsectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </h2>
                        </div>
                    </div>

                    <div className='relative flex items-end justify-center w-[310px] xxs:w-[345px] lg:w-full h-[345px] lg:h-[470px] mx-auto'>
                        <div className='features2'></div>
                        <div className='flex flex-col absolute top-0 bottom-0 w-full h-full left-0 z-30 items-center justify-center bg-[#FAF8FF] rounded-[45px] px-4 md:px-10 py-4 md:py-10'>
                            <img src="/assets/features2.webp" alt="monthly-bills" className='h-[189px] md:h-[266px]' />
                            <h2 className='text-[#292929] text-xl md:text-2xl font-semibold text-center mb-4 md:mb-5 mt-1'>Track Expenses</h2>
                            <h2 className='text-[#292929] text-base font-normal leading-[21.82px] text-center'>
                                onsectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </h2>
                        </div>
                    </div>

                    <div className='relative flex items-end justify-center w-[310px] xxs:w-[345px] lg:w-full h-[345px] lg:h-[470px] mx-auto'>
                        <div className='features3'></div>
                        <div className='flex flex-col absolute top-0 bottom-0 w-full h-full left-0 z-30 items-center justify-center bg-[#FAF8FF] rounded-[45px] px-4 md:px-10 py-4 md:py-10'>
                            <img src="/assets/features3.webp" alt="3D-checklist-model-with-checked-boxes" className='h-[189px] md:h-[266px]' />
                            <h2 className='text-[#292929] text-xl md:text-2xl font-semibold text-center mb-4 md:mb-5 mt-1'>Travel Checklist</h2>
                            <h2 className='text-[#292929] text-base font-normal leading-[21.82px] text-center'>
                                onsectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features