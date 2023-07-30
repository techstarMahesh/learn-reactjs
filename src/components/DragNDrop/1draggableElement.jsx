import React, { useState, useRef } from 'react'

const Draggable = () => {
  const [list, setList] = useState([
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 6',
  ])

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
            key={index}
            draggable
          >
            {item}
          </div>
        ))}
    </>
  )
}
export default Draggable
