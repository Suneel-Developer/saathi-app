"use client"

import React, { useRef, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Blog = () => {
    const sliderRef = useRef(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        appendDots: dots => (
            <div style={{ padding: "10px" }}>
                <ul className='custome-dots'>
                    {dots}
                </ul>
            </div>
        )
    };

    const goToPrev = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    const goToNext = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <section className='bg-[#A094FF] w-full px-4 pt-12 md:pt-[100px] pb-36'>

            <div className='lg:max-w-[850px] lgx:max-w-[950px] xlg:max-w-[1060px] xxlg:max-w-[1260px] mx-auto w-full'>
                <h1 className='uppercase text-[36px] md:text-[60px] font-extrabold leading-[36px] md:leading-[60px] text-white tracking-[1px] mb-12 md:mb-[60px] max-w-[714px] w-full'>
                    Journey Highlights from Our Users
                </h1>
            </div>



            <div className='rounded-2xl max-w-[1020px] lgx:max-w-[1120px] xlg:max-w-[1260px] xxlg:max-w-[1390px] w-full mx-auto flex items-center gap-3'>
                {/* Right btn */}
                <div
                    className='cursor-pointer z-20 w-[50px] h-[50px] rounded-full bg-[#0A0A0A] hidden lg:flex justify-center items-center'
                    onClick={goToPrev}
                >
                    <img src="/assets/left-arrow.svg" alt="Previous" />
                </div>

                {/* Slides */}
                <div className='slider-container rounded-[18px] md:rounded-[40px] flex-1 lg:max-w-[850px] lgx:max-w-[950px] xlg:max-w-[1060px] xxlg:max-w-[1260px] w-full mx-auto'>
                    <Slider {...settings} ref={sliderRef}>
                        <div className='px-2'>
                            <div className='w-full bg-white rounded-[18px] md:rounded-[40px] overflow-hidden'>
                                <div className='grid grid-cols-1 md:grid-cols-2 w-full md:h-[400px]'>
                                    <div className='w-full h-[220px] md:h-full bg-[url("/assets/blog.webp")] bg-no-repeat bg-cover bg-center'></div>

                                    <div className='bg-white p-3 md:p-10 max-w-[530px] w-full'>
                                        <h1 className='text-xl md:text-4xl text-[#292929] font-normal leading-[27.28px] md:leading-[49.1px] mb-2 md:mb-4'>
                                            Travel journey of Alex and Julian with Saathi
                                        </h1>
                                        <p className='text-sm md:text-xl hidden md:inline text-[#292929] font-normal leading-[19.1px] md:leading-[27.28px]'>
                                            Perfect for couple trips! The custom checklists ensured we packed everything we needed, making our vacation stress-free and unforgettable. Highly recommend for any couple travelers
                                        </p>

                                        <div className='text-[#292929] inline md:hidden text-sm font-normal leading-[19.1px]'>
                                            <p className='inline'>
                                                Perfect for couple trips! The custom checklists ensured we packed everything we needed, making our
                                                {isExpanded && (
                                                    <> vacation stress-free and unforgettable. Highly recommend for any couple travelers</>
                                                )}
                                                <span onClick={handleToggle} className='text-base text-black underline ml-1 font-semibold'>{isExpanded ? 'less' : 'more'}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='px-2'>
                            <div className='w-full bg-white rounded-[18px] md:rounded-[40px] overflow-hidden'>
                                <div className='grid grid-cols-1 md:grid-cols-2 w-full md:h-[400px]'>
                                    <div className='w-full h-[220px] md:h-full bg-[url("/assets/blog-2.webp")] bg-no-repeat bg-cover bg-center'></div>

                                    <div className='bg-white p-3 md:p-10 max-w-[530px] w-full'>
                                        <h1 className='text-xl md:text-4xl text-[#292929] font-normal leading-[27.28px] md:leading-[49.1px] mb-2 md:mb-4'>
                                            Travel journey of Alex and Julian with Saathi
                                        </h1>
                                        <p className='text-sm md:text-xl hidden md:inline text-[#292929] font-normal leading-[19.1px] md:leading-[27.28px]'>
                                            Perfect for couple trips! The custom checklists ensured we packed everything we needed, making our vacation stress-free and unforgettable. Highly recommend for any couple travelers
                                        </p>

                                        <div className='text-[#292929] inline md:hidden text-sm font-normal leading-[19.1px]'>
                                            <p className='inline'>
                                                Perfect for couple trips! The custom checklists ensured we packed everything we needed, making our
                                                {isExpanded && (
                                                    <> vacation stress-free and unforgettable. Highly recommend for any couple travelers</>
                                                )}
                                                <span onClick={handleToggle} className='text-base text-black underline ml-1 font-semibold'>{isExpanded ? 'less' : 'more'}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='px-2'>
                            <div className='w-full bg-white rounded-[18px] md:rounded-[40px] overflow-hidden'>
                                <div className='grid grid-cols-1 md:grid-cols-2 w-full md:h-[400px]'>
                                    <div className='w-full h-[220px] md:h-full bg-[url("/assets/blog.webp")] bg-no-repeat bg-cover bg-center'></div>

                                    <div className='bg-white p-3 md:p-10 max-w-[530px] w-full'>
                                        <h1 className='text-xl md:text-4xl text-[#292929] font-normal leading-[27.28px] md:leading-[49.1px] mb-2 md:mb-4'>
                                            Travel journey of Alex and Julian with Saathi
                                        </h1>
                                        <p className='text-sm md:text-xl hidden md:inline text-[#292929] font-normal leading-[19.1px] md:leading-[27.28px]'>
                                            Perfect for couple trips! The custom checklists ensured we packed everything we needed, making our vacation stress-free and unforgettable. Highly recommend for any couple travelers
                                        </p>

                                        <div className='text-[#292929] inline md:hidden text-sm font-normal leading-[19.1px]'>
                                            <p className='inline'>
                                                Perfect for couple trips! The custom checklists ensured we packed everything we needed, making our
                                                {isExpanded && (
                                                    <> vacation stress-free and unforgettable. Highly recommend for any couple travelers</>
                                                )}
                                                <span onClick={handleToggle} className='text-base text-black underline ml-1 font-semibold'>{isExpanded ? 'less' : 'more'}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>




                    </Slider>
                </div>

                {/* Next btn */}
                <div
                    className='cursor-pointer z-20 w-[50px] h-[50px] rounded-full bg-[#0A0A0A] hidden lg:flex justify-center items-center'
                    onClick={goToNext}
                >
                    <img src="/assets/right-arrow.svg" alt="Next" />
                </div>

            </div>

        </section>
    );
}

export default Blog;
