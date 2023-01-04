import React, { useState } from 'react';
import './newTodo.modiul.css'

const NewTodo = () => {

  const [todo, setTodo] = useState({title: '', desc: ''});
  const{title, desc} = todo;



  const handleChange= (e) =>{
   const name = e.target.value;
   setTodo((oldTodo) =>{
    return{ ...oldTodo, [name] : e.target.value}
    
   }
   );

 
  };

  const handleSubmit = (event) =>{
    event.preventDefault();
    console.log(todo);
    setTodo({title : '', desc : ''});
  }
  return (
    <form className='form' onSubmit={handleSubmit}>


        <div className='form-field'>
            <label className='form-field-level'> Title: </label>
            <input type="text" 
              id='title' 
              name='title' 
              className='form-field input' 
              value={title}
              onChange ={handleChange}
            />
        </div>

      
        <div className='form-field'>
            <label  className='form-field-level'> Description: </label>
            <textarea type="text" 
              id='desc' 
              name='desc' 
              className='form-field-textaarea'
              value={desc}
              onChange ={handleChange}
             />
        </div>

      

        <button type='submit' className='form-button'>Add Todo</button>
    </form>
  )
}

export default NewTodo