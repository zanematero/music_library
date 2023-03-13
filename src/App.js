import { useEffect, useState } from 'react'
import Gallery from './components/Gallery'
import Search from './components/Search'

function App(){
    let [search, setSearch] = useState('')
    let [message, setMessage] = useState('Search for Music!')
    let [data, setData] = useState([])

    useEffect(() => {
      fetch('https://itunes.apple.com/search?term=the%20grateful%20dead')
        .then(response => response.json())
        .then(({resultCount, results}) => {
          setMessage(`Successfully fetched ${resultCount} result(s)!`)
          setData(results)
          console.log(results)
        })

    }, [])
  
    return (
        <div>
            <Search />
            {message}
            <Gallery data={data}/>
        </div>
    )
}

export default App
