import React from 'react'

const img_url = "https://image.tmdb.org/t/p/original"


function Cards({ show }) {
    
    return (
        <div className="card_poster">
            <img className="card_img" src={`${img_url}${show.backdrop_path}`} alt={show.original_title} />
            <h3 className='card_title'>{show.original_title}</h3>
        </div>
    )
}

export default Cards