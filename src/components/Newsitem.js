import React from 'react'

export default function Newsitem(props) {
    return (
        <>
            <div className="newsCards max-w-sm rounded overflow-hidden shadow-lg">
                <span className="position-absolute top-0 right-1 translate-middle badge rounded-pill bg-danger">
                    <span className="visually-hidden">{props.source}</span>
                </span>

                <img className="w-full" src={!props.imageUrl ? "https://static.vecteezy.com/system/resources/thumbnails/004/216/831/original/3d-world-news-background-loop-free-video.jpg" : props.imageUrl} alt="Sunset in the mountains" />
                <div className="px-6 pt-4">
                    <div className="font-bold text-xl mb-2">{props.title}...</div>
                    <p className="text-base">
                        {props.desc}...
                    </p>
                    <p style={{ 'fontSize': '0.8rem' }} className='textgrey-700'>{props.published} by {props.author}</p>
                </div>
                <a href={props.newsUrl} target='_blank' className='btn btn-sm btn-primary mx-2'>Read More</a>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block rounded-full py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#news</span>
                    <span className="inline-block rounded-full py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#dailyStuff</span>
                    <span className="inline-block rounded-full py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#updates</span>
                </div>
            </div>
        </>
    )
}
