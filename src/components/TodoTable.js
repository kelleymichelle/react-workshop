import React from 'react'

export default function TodoTable({todosArray, deleteTodo}) {

  const completed = row => {
    console.log(row)
    row.style.textDecoration = 'line-through'
  }
  
  return (
    <center>
      <table>
        <tbody>

          { todosArray.map((task, i) => (
            <tr key={i} >
            
              <div>{task}</div>
              <div  onClick={e => completed(e.target.previousSibling)}> ✅ </div>
              <div onClick={e => deleteTodo(task)}> 🗑️ </div>
            </tr>
          )) }

        </tbody>
      </table>
    </center>
  )
}