import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';

export default function Header() {
  return (
    <header className='bg-primary-700 text-white py-4 top-0 left-0 right-0 z-20 shadow-md'>
      <div className='flex justify-between items-center max-w-7xl mx-auto px-4'>
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}
