import React from 'react';
import Logo from '../_components/Logo';

export const metadata = {
    title: "About"
}

export default function Page() {
    return (
        <div className='flex justify-center items-center min-h-80'>
            <Logo />
        </div>
    );
}
