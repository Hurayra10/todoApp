import React, { useState } from 'react'

const NewTodo = (props) => {
    const [todo, setTodo] = useState('');

    const handleInputChange = (event) =>{
        setTodo(event.target.value)
        
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        // console.log(todo);
        props.onTodo(todo)
    }



  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="todo">New Todo : </label>
        <input 
            type="text" 
            name="todo" 
            id="todo" 
            value={todo} 
            onChange={handleInputChange}
        /> 
        <button>Add Todo</button>

    </form>
  )
}

export default NewTodo