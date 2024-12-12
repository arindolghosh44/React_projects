import React from 'react'
import myContext from './Context'
import { useContext } from 'react'
function Child3() {
    var data=useContext(myContext);
  return (
    <div>


        <h2>Child3 Component</h2>
        <p>{data}</p>
    </div>
  )
}

export default Child3