import { useEffect, useState } from "react";

export default function Search({setSearch}) {
    const [query, setQuery] = useState('')

    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    useEffect(() => {
        setSearch(query)
    },[query])
    const handleSubmit = (e) => {
        e.preventDefault()
        setSearch(query)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={query} onChange={handleChange}/>
            <input type="submit" value="Find Music!"/>
        </form>
    )
}