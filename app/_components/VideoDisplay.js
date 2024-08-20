import React from 'react';
import { Video } from './Video';

// To manually upload the all videos

export default function VideoDisplay() {
    return (
        <div className="px-4 py-8">

            <div className="flex flex-col md:flex-row gap-12 mb-12">
        
                <div className="flex-1">
                    <div className="text-2xl font-semibold text-primary-100 text-center mb-4">Showreel</div>
                    <div>
                        <Video
                            video='983213733'
                            title='Showreel'
                        />
                    </div>
                </div>
            
                <div className="flex-1">
                    <div className="text-2xl font-semibold text-primary-100 text-center mb-4">Thumbnail</div>
                    <div>
                        <Video
                            video='983883259'
                            title='Thumbnail'
                        />
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center">
                <div className="text-2xl font-semibold text-primary-100 text-center mb-4">Shorts</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-screen-lg">
                    <div className="w-full">
                        <Video
                            video='983244019'
                            title='Shorts'
                        />
                    </div>
                    <div className="w-full">
                        <Video
                            video='983243873'
                            title='Shorts'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
