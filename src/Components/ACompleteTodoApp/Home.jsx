import React from 'react'
import Todos from './Todos'
import './home.modiul.css'
import NewTodo from './NewTodo'



const dummyTodos =[
    {
        id:1,
        title :'todo title 1',
        desc : 'todo1 desc is here'
    },
    {
        id:2,
        title :'todo title 2',
        desc : 'todo2 desc is here'
    },
    {
        id:3,
        title :'todo title 3',
        desc : 'todo3 desc is here'
    },
]

const Home = () => {
  return (
    <div className='container'>
      
        <h1 style={{color: 'white'}}>Todo App</h1>
        <NewTodo />
        <Todos todos={dummyTodos} />
    </div>
  )
}

export default Home