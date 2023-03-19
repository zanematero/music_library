// These components will be making separate API calls from the app
// component to serve specific data about our artist
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

function ArtistView() {
    const [albumData, setAlbumData] = useState([])
    const [aristData, setArtistData] = useState({})
    const { id } = useParams()

    useEffect(() => {
        fetch(`http://localhost:4000/album/${id}`)
        .then(response => response.json())
        .then(({results}) => {
            console.log(results)
            setArtistData(results.shift())
            setAlbumData(results)
        })
    },[id]);

    return (
        <div>
            <Link to={"/"}>Home</Link>
            <h1>{aristData.artistName}</h1>
            <h2>{aristData.primaryGenreName}</h2>
            <h3>Albums:</h3>
            <ul>
                {albumData.map((album) => {
                    return <Link to={`/album/${album.collectionId}`}><li>{album.collectionName}</li></Link>
                })}
            </ul>
        </div>
    )
}

export default ArtistView
