"use client"
import { useState } from 'react'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    // State to manage mobile menu visibility
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Toggle the mobile menu visibility
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className='relative z-40'>
            <div className='flex items-center justify-between h-[60px] md:h-auto w-full fixed md:relative top-0 bg-white md:bg-transparent py-3 md:py-6 px-4 lg:px-[10%]'>
                <Link href="/" className='flex items-center gap-[6px]'>
                    <img src="/assets/logo.svg" alt="saathi-logo" className='h-[24px] md:h-[28px]' />
                    <p className='text-[#605CD4] tracking-[-1px] text-[26px] md:text-3xl font-semibold md:mt-[5px]'>Saathi.app</p>
                </Link>


                {/* Links  */}
                <ul className='hidden md:flex items-center gap-10'>
                    <li>
                        <Link href="#" className='text-[#0A0A0A] text-base font-semibold hover:text-black hover:font-bold transition-colors duration-200'>About</Link>
                    </li>
                    <li>
                        <Link href="#" className='text-[#0A0A0A] text-base font-semibold hover:font-bold transition-colors duration-200'>Get visa</Link>
                    </li>
                    <li>
                        <Link href="#" className='text-[#0A0A0A] text-base font-semibold hover:font-bold transition-colors duration-200'>Blog</Link>
                    </li>
                    <li>
                        <Link href="#" className='text-[#0A0A0A] text-base font-semibold hover:font-bold transition-colors duration-200'>Ambassador</Link>
                    </li>
                    <li>
                        <Link href="#" className='text-[#0A0A0A] text-base font-semibold hover:font-bold transition-colors duration-200'>Partner with us</Link>
                    </li>
                </ul>

                {/* Toggle button  */}
                <img
                    src={isMobileMenuOpen ? "/assets/close.svg" : "/assets/toggle.svg"}
                    alt={isMobileMenuOpen ? "close" : "toggle"}
                    className='block md:hidden cursor-pointer'
                    onClick={toggleMobileMenu}
                />
            </div>

            {/* Mobile nav  */}
            <div
                className={`fixed top-[60px] bg-white h-full w-full block md:hidden left-0 right-0 transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-y-0' : 'translate-y-full'}`}
                style={{ zIndex: 20 }}
            >
                <div className='px-5 py-9 h-full flex flex-col justify-between'>
                    <div>
                        {/* Links  */}
                        <ul className='flex flex-col gap-8'>
                            <li>
                                <Link href="#" className='text-[#0A0A0A] text-2xl font-semibold hover:text-black hover:font-bold transition-colors duration-200'>About</Link>
                            </li>
                            <li>
                                <Link href="#" className='text-[#0A0A0A] text-2xl font-semibold hover:font-bold transition-colors duration-200'>Get visa</Link>
                            </li>
                            <li>
                                <Link href="#" className='text-[#0A0A0A] text-2xl font-semibold hover:font-bold transition-colors duration-200'>Blog</Link>
                            </li>
                            <li>
                                <Link href="#" className='text-[#0A0A0A] text-2xl font-semibold hover:font-bold transition-colors duration-200'>Ambassador</Link>
                            </li>
                            <li>
                                <Link href="#" className='text-[#0A0A0A] text-2xl font-semibold hover:font-bold transition-colors duration-200'>Partner with us</Link>
                            </li>
                        </ul>
                    </div>


                    <div className='pb-10'>

                        {/* Social Links  */}
                        <ul className='flex items-center gap-6'>
                            <li><Link href="#"><img src="/assets/facebook.svg" alt="facebook" /></Link></li>
                            <li><Link href="#"><img src="/assets/instagram.svg" alt="instagram" /></Link></li>
                            <li><Link href="#"><img src="/assets/linkedn.svg" alt="linkedn" /></Link></li>
                            <li><Link href="#"><img src="/assets/twitter.svg" alt="twitter" /></Link></li>
                        </ul>

                        <div className='h-[.5px] mb-5 mt-8 bg-[#0A0A0A] w-full'></div>

                        <div className='flex items-center justify-between gap-3'>
                            <img src="/assets/app-store.svg" alt="app-store" />
                            <img src="/assets/google-play.svg" alt="google-play" />
                        </div>
                        <p className='mt-[10px] font-light text-[11px] text-[#0A0A0A] leading-[15px]'>
                            Apple and the Apple Logo are the trademarks of Apple Inc. Google Play and the Google Play are trademarks of Google LLC
                        </p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
