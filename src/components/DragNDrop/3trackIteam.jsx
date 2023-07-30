import React, { useState, useRef } from 'react'

const Tracked = () => {
  const dragItem = useRef()
  const dragOverItem = useRef()
  const [list, setList] = useState([
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 6',
  ])

  const dragStart = (e, position) => {
    dragItem.current = position
    console.log(e.target.innerHTML)
  }

  const dragEnter = (e, position) => {
    dragOverItem.current = position
    console.log(e.target.innerHTML)
  }

  return (
    <>
      {list &&
        list.map((item, index) => (
          <div
            style={{
              backgroundColor: 'lightblue',
              margin: '20px 25%',
              textAlign: 'center',
              fontSize: '40px',
            }}
            onDragStart={(e) => dragStart(e, index)}
            onDragEnter={(e) => dragEnter(e, index)}
            key={index}
            draggable
          >
            {item}
          </div>
        ))}
    </>
  )
}
export default Tracked
