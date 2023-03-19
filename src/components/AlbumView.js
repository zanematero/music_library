// These components will be making separate API calls from the app
// component to serve specific data about a given album
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

function AlbumView() {
    const [ albumData, setAlbumData ] = useState({})
    const [ songData, setSongData ] = useState ([])
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:4000/song/${id}`)
        .then(response => response.json())
        .then(({results}) => {
            console.log(results)
            setAlbumData(results.shift())
            setSongData(results)
        })
    },[id]);
    
    return (
        <div>
        <Link to={"/"}>Home</Link>
        <h1>{albumData.collectionName}</h1>
        <h2>By <Link to={`/../artist/${albumData.artistId}`}>{albumData.artistName}</Link></h2>
        <h2>{albumData.primaryGenreName}</h2>
        <h3>Songs:</h3>
        <ul>
            {songData.map((song) => {
                return <li>{song.trackName}</li>
            })}
        </ul>
    </div>
    )
}

export default AlbumView
