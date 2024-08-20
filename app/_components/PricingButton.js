"use client";

import React from 'react';
import { useModal } from '../_utils/ModalContext';
import { saveAs } from 'file-saver';

export default function PricingButton() {
    const { setVisible } = useModal();
    const handleClick = () => {
        setVisible(true);

        saveAs(
            "https://drive.google.com/uc?export=download&id=15RiUYP1Pl65STZXCEPT-SvFXkGRUlKlo",
            "pricing.pdf"
        );
    }

    return (
        <button
            className='text-2xl px-6 py-3 rounded-lg border-2 text-black bg-yellow-400 font-semibold shadow-md transition-all duration-300 ease-in-out border-yellow-400 hover:bg-yellow-500 hover:border-yellow-500 hover:text-black/95'
            onClick={handleClick}
        >
            Pricing
        </button>
    )
}
