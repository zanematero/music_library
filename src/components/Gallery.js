import { useContext } from 'react'
import { DataContext } from '../context/DataContext'
import Item from './Item'

function Gallery() {
  const data = useContext(DataContext)

  const display = data.map((item, index) => {
    return (
      <Item item={item} key={index} />
    )
  })
  return (
    <div>
      {display}
    </div>
  )
}

export default Gallery