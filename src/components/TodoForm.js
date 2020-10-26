import React from 'react'

export default function TodoForm(props) {
  const [ newTodo, setNewTodo ] = React.useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    props.addNewTodo(newTodo)
    setNewTodo('')
  }

  // console.log("rendered")
  return (
    <form onSubmit={e => handleSubmit(e)}>
      Todo Form
      <input type="text" value={newTodo} onChange={e => setNewTodo(e.target.value)}/>
      <button type="submit">
        Submit
      </button>
    </form>
  )
}