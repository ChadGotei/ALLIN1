import React from 'react';

export function Video({ video, title }) {
    return (
        <div className="w-full">
            <iframe
                src={`https://player.vimeo.com/video/${video}`}
                className="w-full h-56 sm:h-64 md:h-80 lg:h-96 2xl:h-[360px]"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
                title={title}
            ></iframe>
        </div>
    );
}
