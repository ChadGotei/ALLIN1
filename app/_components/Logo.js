import Image from 'next/image'
import React from 'react'
import logo from '@/public/logo.png';
import Link from 'next/link';

export default function Logo() {
    return (
        <Link
            href="/"
            className='hidden sm:block'
        >
            <Image
                src={logo}
                width="60"
                height="60"
                alt="Logo"
                quality={100}
                placeholder='blur'
            />
        </Link>
    )
}
