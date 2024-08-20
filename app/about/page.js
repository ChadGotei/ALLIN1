import React from 'react';
import InnovationContent from '../_components/InnovationContent';
import FadeInOnScroll from '../_components/FadeInOnScroll';
import FadeAnimation from '../_components/FadeAnimation';

export const metadata = {
    title: "About"
}

export default function Page() {

    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='md:min-h-screen md:flex md:flex-col md:justify-center md:mt-[-10%]'>
                <Heading
                    heading="Innovative Video Editing Techniques"
                    className='pt-10'
                />
                <InnovationContent />
            </div>

            {/* Contact us part */}

            <div className="flex flex-col items-center pb-40">
                <FadeInOnScroll>
                    <Heading
                        heading="Contact Us for Your Next Project"
                        className='pt-36 pb-10 sm:pt-0'
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
                        <div className="flex items-start gap-4">
                            <div className="bg-main text-primary-100 h-20 w-20 rounded-full flex items-center justify-center text-2xl font-bold">
                                1
                            </div>
                            <FadeAnimation>
                                <p className="text-lg text-white">
                                    Discuss your project ideas and goals with our experienced team.
                                </p>
                            </FadeAnimation>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="bg-main text-primary-100 h-20 w-20 rounded-full flex items-center justify-center text-2xl font-bold">
                                2
                            </div>
                            <FadeAnimation>
                                <p className="text-lg text-white">
                                    We work with you to develop a detailed project plan and timeline.
                                </p>
                            </FadeAnimation>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="bg-main text-primary-100 h-20 w-20 rounded-full flex items-center justify-center text-2xl font-bold">
                                3
                            </div>
                            <FadeAnimation>
                                <p className="text-lg text-white">
                                    We bring your vision to life with exceptional video editing skills.
                                </p>
                            </FadeAnimation>
                        </div>
                    </div>
                </FadeInOnScroll>
            </div>

        </div>
    );
}


function Heading({ heading, className = '' }) {
    return (
        <h1 className={`text-white text-3xl md:text-5xl font-bold text-center sm:mt-18 cursor-pointer ${className}`}>
            {heading.split('').map((char, index) => (
                <span
                    key={index}
                    className="hover:text-black transition-colors duration-300 selection:bg-white selection:text-main"
                >
                    {char}
                </span>
            ))}
        </h1>
    )
}