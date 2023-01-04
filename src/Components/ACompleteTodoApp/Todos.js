import React from 'react'
import Todo from './Todo';
import './todos.modiul.css'

const Todos = (props) => {

  return <section className='todos'>
      {
            props.todos.map((todo )=>(
                <Todo key={todo.id} todo={todo}/>
                
            ))
        }
  </section>
}

export default Todos