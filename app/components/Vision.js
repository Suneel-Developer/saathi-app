"use client"
import React, { useState } from 'react'


const Vision = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };
    return (
        <section className='bg-[#BA9BFA] w-full px-4 py-12 md:py-[100px]'>
            <div className='max-w-[600px] lg:max-w-[1260px] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5'>

                <div>
                    <img src="/assets/vision.svg" alt="Making travel effortless for All" className='opacity-85' />
                </div>

                <div className='flex lg:justify-end'>
                    <div className='max-w-[520px] w-full'>
                        <h1 className='uppercase text-[36px] md:text-[65px] font-extrabold leading-[36px] md:leading-[65px] text-white tracking-[1px] mb-4 md:mb-9'>
                            What&apos;s make us different?
                        </h1>

                        <p className='text-white hidden md:inline text-2xl font-normal leading-[32.74px] max-w-[500px] w-full'>
                            Our vision is to make travel accessible and effortless for everyone. We provide comprehensive tools and insights, from customizable checklists to real-time safety alerts, ensuring you have a smooth and enjoyable travel experience every time. Our mission is to be your trusted travel companion, helping you discover new places, manage your trips efficiently, and create unforgettable memories.
                        </p>
                        <div className='text-white inline md:hidden text-base font-normal leading-[21.82px]'>
                            <p className='inline'>
                                Our vision is to make travel accessible and effortless for everyone. We provide comprehensive tools and insights, from customizable checklists to real-time safety alerts, ensuring you have a smooth and enjoyable travel experience every time. Our mission is to be your trusted travel companion, helping you discover new places, manage your trips efficiently, and create unforgettable memories.
                                {isExpanded && (
                                    <>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus Lorem ipsum.
                                    </>
                                )}
                                <span onClick={handleToggle} className='text-base text-black underline ml-1 font-semibold'>{isExpanded ? 'less' : 'more'}</span>
                            </p>

                        </div>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Vision