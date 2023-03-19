import { useState } from 'react'
import { Link } from 'react-router-dom'

function Item(props) {
    let [view, setView] = useState(false)

    const simpleStyle = {
        'width': '25vw',
        'height': '20vh',
        'border': '1px solid black',
        'margin': '2px'
    }

    const detailStyle = {
        'width': '80vw',
        'height': '30vh',
        'border': '1px solid black',
        'margin': '2px',
        'backgroundImage': `url(${props.item.artworkUrl100})`,
        'backgroundRepeat': 'no-repeat',
        'backgroundSize': 'cover',
        'color': 'yellow'
    }

    const simpleView = () => {
        return (
            <div style={simpleStyle}>
                <h2>{props.item.trackName}</h2>
                <h3><Link to={`/artist/${props.item.artistId}`}>{props.item.artistName}</Link></h3>
            </div>
        )
    }

    const detailView = () => {
        return (
            <div style={detailStyle}>
                <h2>{props.item.trackName}</h2>
                <h2><Link to={`/artist/${props.item.artistId}`}>{props.item.artistName}</Link></h2>
                <h3><Link to={`/album/${props.item.collectionId}`}>{props.item.collectionName}</Link></h3>
                <h4>{props.item.primaryGenreName}</h4>
                <h4>{props.item.releaseDate}</h4>
            </div>
        )
    }

    return (
        <div onClick={() => setView(!view)} style={{ 'display': 'inline-block' }}>
            {view ? detailView() : simpleView()}
        </div>
    )
}

export default Item