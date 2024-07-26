import React from 'react'
import { Video } from './Video'

export default function VideoDisplay() {
    return (
        <div className='flex flex-col gap-12 items-center pt-4'>

            <div className='flex flex-col md:flex-row gap-12 px-4 md:px-0'>
                <div className='flex-1'>
                    <div className="text-2xl font-semibold text-primary-100 text-center mb-4">Showreel</div>
                    <div className="flex justify-center mx-[-10px]"> {/* Adjusted margin */}
                        <Video
                            video='983213733'
                            title='Showreel'
                        />
                    </div>
                </div>

                <div className='flex-1'>
                    <div className="text-2xl font-semibold text-primary-100 text-center mb-4">Thumbnails</div>
                    <div className="flex justify-center mx-[-10px]"> {/* Adjusted margin */}
                        <Video
                            video='983883259'
                            title='Thumbnails'
                        />
                    </div>
                </div>
            </div>

            <div className='w-full max-w-full px-4'>
                <div className="text-2xl font-semibold text-primary-100 text-center mb-4">Shorts</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex justify-center">
                        <Video
                            video='983244019'
                            title='Richest women in India'
                        />
                    </div>
                    <div className="flex justify-center">
                        <Video
                            video='983243873'
                            title='Longest Sea link-ATAL Setu (MTHL)'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
