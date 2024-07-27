import React from 'react';
import InnovationContent from '../_components/InnovationContent';

export const metadata = {
    title: "About"
}

const innovationTitle = "Innovative Video Editing Techniques";


export default function Page() {

    return (
        <div className='flex flex-col items-center justify-center'>
            <div>
                <h1 className="text-white text-3xl md:text-5xl font-bold text-center mt-14 sm:mt-18 cursor-pointer">
                    {innovationTitle.split('').map((char, index) => (
                        <span
                            key={index}
                            className="hover:text-black transition-colors duration-300 selection:bg-white selection:text-main"
                        >
                            {char}
                        </span>
                    ))}
                </h1>

                <InnovationContent />
            </div>


        </div>
    );
}
