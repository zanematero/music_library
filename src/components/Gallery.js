import Item from './Item'

function Gallery(props) {
  const display = props.data.map((item, index) => {
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