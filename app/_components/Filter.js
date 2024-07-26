"use client";

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

const Button = ({ filter, handleFilter, activeFilter, children }) => {
    return (
        <button
            className={`hover:text-primary-300 cursor-pointer px-4 ${filter === activeFilter ? 'text-main' : ''}`}
            onClick={() => handleFilter(filter)}
        >
            {children}
        </button>
    );
};

export default function Filter() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const activeFilter = searchParams.get('type') ?? 'all';

    const handleFilter = (filter) => {
        const params = new URLSearchParams(searchParams);
        params.set('type', filter);

        router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    };

    return (
        <div className="flex justify-center text-xl border border-primary-800 p-4 text-white rounded-lg shadow-md w-auto">
            <Button filter="all" handleFilter={handleFilter} activeFilter={activeFilter}>
                All
            </Button>
            <div className="border-l border-primary-800">
                <Button filter="edits" handleFilter={handleFilter} activeFilter={activeFilter}>
                    Edits
                </Button>
            </div>
            <div className="border-l border-primary-800">
                <Button filter="shorts" handleFilter={handleFilter} activeFilter={activeFilter}>
                    Shorts
                </Button>
            </div>
        </div>
    );
}
