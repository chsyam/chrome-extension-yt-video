function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        video_url: params.get('video_url') || 'Not provided'
    };
}

function displayVideo() {
    const params = getQueryParams();
    const videoUrl = params.video_url;
    const videoId = new URL(videoUrl).searchParams.get('v');
    if (videoId) {
        const embedUrl = `https://www.youtube.com/embed/${videoId}`;
        document.getElementById('videoContainer').innerHTML = `<iframe width="560" height="315" src="${embedUrl}" title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
    }
}

displayVideo();