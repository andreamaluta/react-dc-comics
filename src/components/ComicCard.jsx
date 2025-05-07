import React from 'react'

const ComicCard = (props) => {
    return (
        <div className="comic-card">
            <img src={props.comic.thumb} alt="" />
            <h4>{props.comic.title}</h4>
        </div>
    )
}

export default ComicCard
