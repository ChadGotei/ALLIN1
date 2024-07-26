export function Video({ video, title }) {
    return (
        <div>
            <iframe
                src={`https://player.vimeo.com/video/${video}`}
                width="640"
                height="360"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
                title={title}
            ></iframe>
        </div>
    );
}
