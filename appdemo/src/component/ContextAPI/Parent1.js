import React from 'react'
import { useState } from 'react'
import Child1 from './Child1'
import myContext from './Context'
function Parent1() {
    let[state,setState]=useState("")

    const populateData=(event)=>
    {
        setState(event.target.value)
    }
  return (
    <div>
  <h2>Parent Component</h2>
<input type='text' placeholder='Enter the name' onChange={populateData}/>
<myContext.Provider value={state}><Child1/></myContext.Provider>


    </div>
  )
}

export default Parent1