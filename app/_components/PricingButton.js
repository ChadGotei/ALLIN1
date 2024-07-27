"use client";

import React from 'react';
import { useModal } from '../_utils/ModalContext';
import { saveAs } from 'file-saver';

export default function PricingButton() {
    const { setVisible } = useModal();
    const handleClick = () => {
        setVisible(true);

        // saveAs(
        //     "https://drive.google.com/uc?export=download&id=1iAU87hbGH6OIOk7cbx2y7qGYe3fRnhlR",
        //     "pricing.pdf"
        // );
    }

    return (
        <button
            className='text-2xl px-6 py-3 rounded-lg border-4 border-transparent bg-gradient-to-r from-yellow-400 to-yellow-500 text-main font-semibold shadow-lg hover:from-main hover:to-black hover:text-yellow-500  hover:shadow-xl transition-all duration-300 ease-in-out'
            onClick={handleClick}
        >
            Pricing
        </button>
    )
}
