import React from 'react'

const Child = (props) => {
    const data = 'I am from child ..........!';
    props.onChildData(data);

  return (
    <div>
       <h1>{props.parents}</h1>
       <h2>{data}</h2>
    </div>
  )
}

export default Child