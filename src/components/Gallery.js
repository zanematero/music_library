import Item from "./Item"

export default function Gallery({data}) {
    const songs = data.filter((result) => result.kind === "song")
    return(
        <div>
            {songs.map((song) => <Item song={song} key={song.trackId}/>)}
        </div>
    )
}