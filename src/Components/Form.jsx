import React, { useState } from 'react'

const Form = () => {
  const [user, setUser] = useState({name:'', email:'', password:''});
  const{name, email, password} = user;


const handleChange = (e) =>{
  setUser({...user,[e.target.name] : e.target.value})
  
}

const handleSubmit =(e) =>{
  console.log(user);
  console.log('Form is submitted');
  e.preventDefault();
  

}
  return (
    <div>
      <h1>Registration</h1>
      <form onSubmit={handleSubmit}>
        <div>
        <label htmlFor="name">Name: </label>
        <input 
          type="text" 
          name='name'
          id='name'
          value={name}
          onChange={handleChange}
          required/>
        </div>

       <div>
       <label htmlFor="email">Email: </label>
        <input
          type="email" 
          name='email'
          id='email'
          value={email}
          onChange={handleChange}
          required
          />
       </div>

      <div>
      <label htmlFor="password">Password: </label>
        <input 
          type="password" 
          name='password'
          id='password'
          value={password}
          onChange={handleChange}
          required
          />
      </div>
        
        <button type='submit' >Register </button>
      </form>
    </div>
  )
}

export default Form