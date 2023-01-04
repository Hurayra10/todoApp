import React from 'react'
import Child from './Child'

const Parents = () => {
    const handleChildData =(data) =>{
        console.log(data);
    }

    const parents = 'ami parents'
  return (
    <div>
        <p>I am from parents</p>
        
        <Child onChildData={handleChildData} parents={parents} />
    </div>
  )
}

export default Parents