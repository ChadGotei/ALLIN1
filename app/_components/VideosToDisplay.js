"use client";

import { useSearchParams } from 'next/navigation';
import { Video } from '../_components/Video';
import videos from '../_data/videos.json';
import VideoDisplay from './VideoDisplay';

export default function VideosToDisplay() {
    const searchParams = useSearchParams();
    const filter = searchParams.get('type') ?? 'all';
    console.log(filter);

    const toDisplay = filter === 'all' ? videos : videos.filter((video) => video.category === filter);

    if (filter === 'all') {
        return (
            <div>
                <VideoDisplay />
            </div>
        );
    } else if (toDisplay.length === 0) {
        return (
            <p className="text-center text-white text-xl pt-8">
                No videos available for the selected filter.
            </p>
        );
    } else {
        return (
            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-8 px-4 py-4 ${filter === 'edits' ? 'gap-4 md:gap-7' : 'gap-0 pt-12'}`}>
                {toDisplay.map((v) => (
                    <div key={v.id} className={`flex justify-center`}>
                        <Video
                            video={v.link}
                            title={v.name}
                        />
                    </div>
                ))}
            </div>
        );
    }
}
