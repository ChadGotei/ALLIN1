"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const navLinks = [
  {
    id: 1,
    href: '/',
    name: 'Home'
  },
  {
    id: 2,
    href: '/portfolio',
    name: 'Portfolio'
  },
  {
    id: 3,
    href: '/about',
    name: 'About'
  },
];

export default function Navigation() {
  const instaLink = `https://www.instagram.com/allin1mediain?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==`;
  const path = usePathname();

  return (
    <ul className='flex flex-1 items-center gap-6 md:gap-10 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold glow justify-end'>
      {navLinks.map((link) => (
        <li key={link.id} className={`${link.href === path ? 'text-primary-300 no-glow' : ''}`}>
          <Link href={link.href}>
            {link.name}
          </Link>
        </li>
      ))}
      <li key={123} className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold glow'>
        <a
          href={instaLink}
          target="_blank"
          rel="noopener noreferrer"
          className='bg-slate-700 text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors'
        >
          Contact
        </a>
      </li>
    </ul>
  );
}
