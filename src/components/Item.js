import { useState } from 'react'

export default function Item({song}) {
    let [view, setView] = useState(false)

    const simpleStyle = {
        'width': '25vw',
        'height': '20vh',
        'border': '1px solid black',
        'margin': '2px'
    }
    
    const detailStyle = {
        'width': '80vw',
        'height': '20vh',
        'border': '1px solid black',
        'margin': '2px',
        'backgroundImage': `url(${song.artworkUrl100})`,
        'backgroundRepeat': 'no-repeat',
        'backgroundSize': 'cover',
        'color': 'yellow'
    }
    
    const simpleView = (
            <div style={simpleStyle}>
                <h3>{song.trackName}</h3>
                <h4>{song.collectionName}</h4>
            </div>
    )

    const detailView = (
            <div style={detailStyle}>
                <h2>{song.trackName}</h2>
                <h3>{song.collectionName}</h3>
                <h4>{song.primaryGenreName}</h4>
                <h4>{song.releaseDate}</h4>
            </div>
    )

    return (
        <div onClick={() => setView(!view)}
        style={{'display': 'inline-block'}}>
        
            {/* This simple ternary shows the simple view when 'view' is false! */}
            {view ? detailView : simpleView}

        </div>
    )

}
