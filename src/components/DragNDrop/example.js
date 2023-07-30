import React, { useState, useRef } from 'react'

export function DreagNDrop() {
    const iteam = [
        {
          taskName: 'Vijay',
          taskDisc: 'Complete the to-task today',
          priority: '2',
          status: '2',
          id: 'lf818tccgvfioend9f'
        },
        {
          taskName: 'Mahesh',
          taskDisc: 'Sharma',
          priority: '2',
          status: '3',
          id: 'lf70hnk72ohrnuh6ao2'
        }
      ];
  const [list, setList] = useState(iteam)

  const dragItem = useRef()
  const dragStart = (e, position) => {
    dragItem.current = position
    // console.log(position)
  }

  const dragOverItem = useRef()
  const dragEnter = (e, position) => {
    dragOverItem.current = position
    // console.log(position)
    // console.log(e.target.innerHTML)
  }

  const drop = (e) => {
    const copyListItems = [...list]
    console.log(copyListItems)
    const dragItemContent = copyListItems[dragItem.current]
    console.log(dragItemContent)
    copyListItems.splice(dragItem.current, 1)
    console.log(copyListItems)
    copyListItems.splice(dragOverItem.current, 0, dragItemContent)
    console.log(copyListItems)
    dragItem.current = null
    dragOverItem.current = null
    setList(copyListItems)
  }

  return (
    <div className='container-fluid w-50 my-5 py-5'>
      <table className='table table-striped table-dark'>
        {list &&
          list.map((value, key) => (
            <tr scope="row"
            onDragStart={(e) => dragStart(e, key)}
                  onDragEnter={(e) => dragEnter(e, key)}
                  onDragEnd={drop}
                  value={key}
                  draggable
            >
              <td scope="col">
                <div>
                  {value.taskName}
                </div>
              </td>
            </tr>
          ))}
      </table>
    </div>
  )
}
