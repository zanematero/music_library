import { useEffect, useState, useRef } from 'react'
import Search from './components/Search'
import Wrapper from './components/Wrapper'
import { dataContext } from './context/dataContext'
import { searchContext } from './context/searchContext'
function App(){
    let [message, setMessage] = useState('Search for Music!')
    let [data, setData] = useState([])
    let inputRef = useRef()

  const fetchData = () => {
    document.title = inputRef.current.value
        fetch(`https://itunes.apple.com/search?term=${inputRef.current.value}`)
          .then(response => response.json())
          .then(({resultCount, results}) => {
            const successMessage = `Successfully fetched ${resultCount} result(s)!`
            const failMessage = 'Failed to find any results for your search'
            setMessage(resultCount ? successMessage : failMessage)
            setData(results)
          })
  } 
    return (
        <div>
            <searchContext.Provider value={{ref: inputRef, fetchData}}>
              <Search/>
            </searchContext.Provider>
            {message}
            <dataContext.Provider value={data} >
              <Wrapper data={data}/>
            </dataContext.Provider>
        </div>
    )
}

export default App
