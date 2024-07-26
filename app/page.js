import Image from 'next/image'
import React from 'react'
import bgImg from '@/public/bg.png';
import MainPageContent from './_components/MainPageContent';


export default function Page() {
  return (
    <div className='flex flex-col pt-20'>
      
      <Image
        src={bgImg}
        alt='Dotted fish eyes'
        fill
        objectFit='cover'
        className='glass-effect absolute inset-0 glass-effect opacity-15'
      />

     {
      <MainPageContent />
     }

    </div>
  )
}
