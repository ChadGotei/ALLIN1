"use client";

import React from 'react';
import data from '../_data/pricing.json';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useModal } from '../_utils/ModalContext';

const headingStyle = `border border-gray-300 px-4 py-2 text-lg`;

export default function Pricing() {
    const { visible, setVisible } = useModal();

    const handleClose = () => {
        setVisible(false);
    }

    return visible ? (
        <>
            <div
                className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10"
                onClick={handleClose}
            ></div>
            <div className="relative p-4 md:p-16 bg-primary-600 min-h-96 z-10 max-w-full overflow-x-auto">
                <button
                    className="absolute top-4 right-4 text-white"
                    onClick={handleClose}
                >
                    <XMarkIcon className="h-8 w-8" />
                </button>

                <table className="min-w-full border-collapse border border-gray-300 shadow-lg rounded-lg overflow-hidden text-sm md:text-base">
                    <thead className="bg-gradient-to-l from-primary-700 to-primary-500 text-white">
                        <tr>
                            <th className={`${headingStyle} hidden md:table-cell`}>Category</th>
                            <th className={headingStyle}>Service</th>
                            <th className={headingStyle}>Description</th>
                            <th className={headingStyle}>Price</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {data.map((category, catIndex) => (
                            category.services.map((service, srvIndex) => (
                                <tr key={`${catIndex}-${srvIndex}`} className={`text-center hover:bg-gray-100 hover:cursor-pointer ${srvIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                                    {srvIndex === 0 && (
                                        <td className="border border-gray-300 px-4 py-2 text-gray-700 font-bold bg-gray-100 hidden md:table-cell" rowSpan={category.services.length}>
                                            {category.category}
                                        </td>
                                    )}
                                    <td className="border border-gray-300 px-4 py-2 text-gray-600">{service.name}</td>
                                    <td className="border border-gray-300 px-4 py-2 text-gray-600">{service.description}</td>
                                    <td className="border border-gray-300 px-4 py-2 text-gray-600 font-mono">{service.price}</td>
                                </tr>
                            ))
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    ) : null;
}
