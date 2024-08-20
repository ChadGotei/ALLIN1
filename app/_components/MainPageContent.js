"use client";

import React from 'react'
import { useModal } from '../_utils/ModalContext';
import Pricing from './Pricing';
import PricingButton from './PricingButton';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700'] });

export default function MainPageContent() {
    const { visible } = useModal();

    return (
        visible ? <Pricing />
            :

            <div className={`flex flex-col gap-[3rem] justify-center items-center z-10 text-center`}>
                <h1 className='text-[2.5rem] sm:text-[3rem] font-bold flex flex-col sm:gap-2 mt-10 sm:mt-4'>
                    <div>Creating videos</div>
                    <div>that spark</div>
                    <div className='bg-white text-main rounded-3xl px-2 sm:px-4 inline-block pb-1'>
                        dynamic growth
                    </div>
                    <div>
                        for your <span className='bg-white text-main rounded-3xl px-[10px] pt-0'>brand</span>
                    </div>
                </h1>

                <div className='flex flex-col md:flex-row gap-6 mt-20 md:mt-8 justify-center'>
                    <PricingButton />
                    <button className='text-2xl px-6 py-3 rounded-lg border-2 text-white font-semibold shadow-md transition-all duration-300 ease-in-out hover:bg-white hover:text-main'>
                        <a href='https://www.instagram.com/allin1mediain?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D' target='_blank'>Book</a>
                    </button>
                </div>
            </div>

    )
}
