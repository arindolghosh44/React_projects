import React from 'react'
import { useState } from 'react'
import Child1 from './Child1';
function Parent() {

    let[state,setState]=useState("");

    const populatedata=(event)=>{


       setState(event.target.value);


    }


  return (
    <div>
      <h2>PARENT COMPINENT</h2>
      <input type='text' placeholder='Enter Your name' onChange={populatedata}></input>
    <Child1 data={state}/>
    </div>
  )
}

export default Parent
