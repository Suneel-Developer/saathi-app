"use client";
import React, { useEffect, useState } from 'react';
import Header from './Header';
import Link from 'next/link';

const Hero = () => {
    const [isAndroid, setIsAndroid] = useState(false);
    const [isIOS, setIsIOS] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const userAgent = navigator.userAgent || navigator.vendor || window.opera;

            setIsAndroid(/Android/i.test(userAgent));
            setIsIOS(/iPhone|iPad|iPod/i.test(userAgent));
        }
    }, []);

    return (
        <section className="h-screen w-full relative bg-[url('/assets/mobile-img.jfif')] md:bg-none bg-cover bg-center bg-no-repeat px-4 md:px-0 flex items-start md:items-center justify-center md:justify-center">
            <video className="hero-video hidden md:block" autoPlay loop muted playsInline>
                <source src="/assets/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="hero-content">
                <div className='hidden md:block absolute top-0 w-full left-0 right-0'>
                    <Header />
                </div>
                <div className='flex flex-col items-center justify-center pt-[50px] mt-[60px] md:mt-[0px]'>
                    <img src="/assets/Your-ultimate-travel-companion.svg" alt="Your-ultimate-travel-companion" className='hidden md:flex' loading='lazy' />
                    <h1 className='flex md:hidden text-5xl font-black text-white leading-[65.47px] text-center'>Your Ultimate Travel Companion</h1>
                    <img src="/assets/qr.svg" alt="qr" className='mt-3 hidden md:flex' loading='lazy' />

                    <p className='text-center text-black md:text-white font-semibold md:font-bold leading-[16.37px] md:leading-[32.74px] text-xs md:text-2xl mt-10 md:mt-12'>The app experience is unbeatable!</p>
                    <button className='w-[200px] md:w-[239px] h-[50px] hidden md:flex md:h-[60px] bg-white rounded-[50px] text-center text-xl md:text-2xl text-[#0A0A0A] font-semibold leading-[27.28px] md:leading-[32.74px] mt-7 md:mt-8 items-center justify-center gap-1'>
                        Download Now
                    </button>

                    {isAndroid && (
                        <Link href="https://play.google.com/store/apps/details?id=app.saathi.android" className='w-[200px] md:w-[239px] h-[50px] flex md:h-[60px] bg-white rounded-[50px] text-center text-xl md:text-2xl text-[#0A0A0A] font-semibold leading-[27.28px] md:leading-[32.74px] mt-7 md:mt-8 items-center justify-center gap-1'>
                            <img src="/assets/andriod.svg" alt="andriod" className='h-7 w-[23px]' />
                            Download Now
                        </Link>
                    )}
                    
                    {isIOS && (
                        <Link href="https://apps.apple.com/app/apple-store/id6479198766" className='w-[200px] md:w-[239px] h-[50px] flex md:h-[60px] bg-white rounded-[50px] text-center text-xl md:text-2xl text-[#0A0A0A] font-semibold leading-[27.28px] md:leading-[32.74px] mt-7 md:mt-8 items-center justify-center gap-1'>
                            <img src="/assets/apple.svg" alt="apple" className='h-7 w-[23px]' />
                            Download Now
                        </Link>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Hero;
