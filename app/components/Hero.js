import React from 'react';
import Header from './Header';

const Hero = () => {
    return (
        <section className="h-[698px] md:h-screen w-full relative bg-[url('/assets/mobile-img.jfif')] md:bg-none bg-cover bg-center bg-no-repeat">
            <video className="hero-video hidden md:block" autoPlay loop muted>
                <source src="/assets/vecteezy_3d-summer-travel-with-wooden-bridge-leading-into-the-sea-on_37998758.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="hero-content">
                <div className='hidden md:block'>
                    <Header />
                </div>
                <div className='flex flex-col items-center justify-center pt-[50px] mt-[60px] md:mt-[0px]'>
                    <img src="/assets/Your-ultimate-travel-companion.svg" alt="Your-ultimate-travel-companion" className='hidden md:flex' />
                    <h1 className='flex md:hidden text-5xl font-black text-white leading-[65.47px] text-center'>Your Ultimate Travel Companion</h1>
                    <img src="/assets/qr.svg" alt="qr" className='mt-3 hidden md:flex' />

                    <p className='text-center text-black md:text-white font-semibold md:font-bold leading-[16.37px] md:leading-[32.74px] text-xs md:text-2xl mt-10 md:mt-12'>The app experience is unbeatable!</p>
                    <button className='w-[200px] md:w-[239px] h-[50px] md:h-[60px] bg-white rounded-[50px] text-center text-xl md:text-2xl text-[#0A0A0A] font-semibold leading-[27.28px] md:leading-[32.74px] mt-7 md:mt-8 flex items-center justify-center gap-1'>
                        <img src="/assets/apple.svg" alt="apple" className='block md:hidden h-7 w-[23px]' />
                        Download Now
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Hero;
