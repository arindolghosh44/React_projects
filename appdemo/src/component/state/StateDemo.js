import React from 'react'
import { useState } from 'react'
export const StateDemo = () => {

let[state,setState]=useState("https://tse1.mm.bing.net/th?id=OIP.hBQTaGZ6p9SmWOyg4XbotQHaFY&pid=Api&P=0&h=180")
const changeToAngular=()=>
    {
      setState("https://tse3.mm.bing.net/th?id=OIP.MbDxBiUQVv90dsEu61PAKgHaH1&pid=Api&P=0&h=180")
    }
    const changeToReact=()=>
        {
          setState("https://tse1.mm.bing.net/th?id=OIP.K-4RqDC6zFrpAG31ayDDOgHaHa&pid=Api&P=0&h=180")
        }
  return (
    <div>
        <img src={state} height="200px" width="200px" alt='NO IMAGE'/><br></br><br></br>
        <button onClick={changeToAngular}>
            Angular
        </button>
        <button onClick={changeToReact}>

         react
        </button>
    </div>
  )
}
export default StateDemo

