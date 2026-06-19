import "./Video.css"

function Video({ url }) {
    return (
        <>
            <figure>
                <iframe
                    width="560"
                    height="315"
                    src={url}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen>
                </iframe>
            </figure>
        </>
    )
}

export default Video;