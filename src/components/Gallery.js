import { createContext } from "react"
import { dataContext } from "../context/dataContext"
import Item from "./Item"

export default function Gallery(props) {

    const data = createContext(dataContext)
    const songs = data.filter((result) => result.kind === "song")
    
    return(
        <div>
            {songs.map((song) => <Item song={song} key={song.trackId}/>)}
        </div>
    )
}