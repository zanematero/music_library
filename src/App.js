import { useEffect, useState } from 'react'
import Gallery from './components/Gallery'
import Search from './components/Search'
import Wrapper from './components/Wrapper'
import { dataContext } from './context/dataContext'

function App(){
    let [search, setSearch] = useState('')
    let [message, setMessage] = useState('Search for Music!')
    let [data, setData] = useState([])

    useEffect(() => {
      fetch(`https://itunes.apple.com/search?term=${search}`)
        .then(response => response.json())
        .then(({resultCount, results}) => {
          const successMessage = `Successfully fetched ${resultCount} result(s)!`
          const failMessage = 'Failed to find any results for your search'
          setMessage(resultCount ? successMessage : failMessage)
          setData(results)
          console.log(results)
        })

    }, [search])
  
    return (
        <div>
            <Search setSearch={setSearch}/>
            {message}
            <dataContext.Provider value={data} >
              <Wrapper data={data}/>
            </dataContext.Provider>
        </div>
    )
}

export default App
