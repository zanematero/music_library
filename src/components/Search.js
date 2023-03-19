import { useContext, useState } from "react";
import { searchContext } from "../context/searchContext";

export default function Search(props) {
    const [query, setQuery] = useState('')
    const {ref, fetchData} = useContext(searchContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        fetchData()
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" ref={ref}/>
            <input type="submit" value="Find Music!"/>
        </form>
    )
}