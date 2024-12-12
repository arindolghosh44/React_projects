import React, { useState } from 'react'
import B from './B'

function A() {

let[state,setState]=useState("");

const populateData=(event)=>{
    setState(event.target.value);
}


  return (
    <div><h1>A component</h1>
    
    <input type='text' placeholder='enter the name' onChange={populateData}/>
    <B data={state}/>
    </div>
    
  )
}

export default A