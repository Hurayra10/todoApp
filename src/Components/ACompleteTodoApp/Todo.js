import React from 'react'
import './todo.modiul.css'

const Todo = (props) => {
    const{title, desc} = props.todo;

  return (
    <article className='todo'>
       <div>
        <h3>{title}</h3>
        <p>{desc}</p>
       </div>

       <div>

        <button>
        <i className="fa-solid fa-trash-can btn"></i>
        </button>
        
       </div>
    </article>
  )
}

export default Todo