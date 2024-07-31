import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className='px-4 pt-8 md:pt-10 pb-8 md:pb-14'>
            <div className='max-w-[1260px] w-full mx-auto'>
                <div className='border-b-[0.5px] border-[#828282] pb-4 md:pb-7 mb-4 md:mb-7 flex justify-between flex-col md:flex-row gap-6 md:gap-2'>
                    <div className='flex items-start md:items-center gap-4 md:gap-10 flex-col md:flex-row'>
                        <img src="/assets/saathi-logo.svg" alt="saathi-logo" />

                        <button className='px-[22px] h-[50px] border border-[#6F6F6F] flex items-center gap-2 rounded-[50px] justify-center text-[15px] font-normal leading-[20.46px]'>
                            <img src="/assets/globe.svg" alt="globe" />
                            English (United Kingdom)
                        </button>
                    </div>

                    <div>
                        <div className='flex items-center justify-between md:justify-normal gap-[10px]'>
                            <img src="/assets/app-store.svg" alt="app-store" className='cursor-pointer' />
                            <img src="/assets/google-play.svg" alt="google-play" className='cursor-pointer' />
                        </div>
                        <p className='mt-3 font-light text-[11px] text-[#0A0A0A] leading-[15px] max-w-[293px] w-full'>
                            Apple and the Apple Logo are the trademarks of Apple Inc. Google Play and the Google Play are trademarks of Google LLC
                        </p>
                    </div>
                </div>

                <div className='flex justify-between flex-col md:flex-row gap-7'>
                    <div className='flex items-center gap-10'>
                        <Link href="#" className='text-base leading-[21.82px] font-normal'>Terms & Condition</Link>
                        <Link href="#" className='text-base leading-[21.82px] font-normal'>Contact us</Link>
                    </div>

                    <div>
                        <div>
                            <ul className='flex items-center gap-6'>
                                <li><Link href="#"><img src="/assets/facebook.svg" alt="facebook" className='opacity-60' /></Link></li>
                                <li><Link href="#"><img src="/assets/instagram.svg" alt="instagram" className='opacity-60' /></Link></li>
                                <li><Link href="#"><img src="/assets/linkedn.svg" alt="linkedn" className='opacity-60' /></Link></li>
                                <li><Link href="#"><img src="/assets/twitter.svg" alt="twitter" className='opacity-60' /></Link></li>
                            </ul>
                            <p className='mt-6 font-light text-xs leading-[16.37px]'>
                                Copyright © 2024 - present. Saathi. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer