import React from 'react'
import "./Profile.css"
import { useState } from 'react'
function Profile() {
  let[state,setState]=useState("https://tse2.mm.bing.net/th?id=OIP.auvTJbvswh3Bn4nlqQvRegHaLG&pid=Api&P=0&h=180")
  let[theme,Settheme]=useState(
    {
    bgcolor:"",
    textcolor:"",
    title:""

    }
  );


  const changeTheme=(event)=>
  {
    if(event.target.checked)
    {
      Settheme(
      {
        bgcolor:"black",
        textcolor:"white",
        title:" Change to dark mode"



      }


      )
    }
    else{
      Settheme(
        {
          bgcolor:"white",
          textcolor:"black",
          title:"Change to dark mode"
  
  
  
        }
  
  
        )



    }







  }
  


  const changeToAngular=()=>
    {
      setState("https://tse1.mm.bing.net/th?id=OIP.wuNSZ6d6wA_W3SeBsBQd7AHaJQ&pid=Api&P=0&h=180")
      setUse(
{

Name:"Rajat",
     Gender:"Male ",
     Gmail:" ajjr",
     desc:" dhd"



}

      )








    }
    const changeToReact=()=>
        {
          setState("https://tse2.mm.bing.net/th?id=OIP.kTfRhY8OcFwwZs8P_5GVLQHaJ9&pid=Api&P=0&h=180")
          setUse(
            {
            
            Name:"sani",
                 Gender:"Male ",
                 Gmail:"hgjgj",
                 desc:" dhd"
            
            
            
            })
        }

     let[use,setUse]=useState(
     {
     Name:" ",
     Gender:" ",
     Gmail:" ",
     desc:" "


     }


     );

     


  return (

    


    <div className='mainConatiner' style={{backgroundColor:theme.bgcolor,color:theme.textcolor}}>
     
      
      <div className='leftConatiner'>
          <img src={state} height="200px" width="200px" alt='thor'/>
      </div>


      <div className='rightConatiner' >
      
    <h1>Name:{use.Name}</h1><br></br><br></br>
    <h1>Gender:{use.Gender}</h1><br></br><br></br>
    <h1>Email:{use.Gmail}</h1><br></br><br></br>
    <h1>Desc:{use.desc}</h1><br></br><br></br>
    <button onClick={changeToAngular}>Rajat</button>
    <button onClick={changeToReact} >sani</button>
    <br></br><br></br>
    <input type='checkbox' onChange={changeTheme}/>





      </div>
      



    </div>
  )
}

export default Profile
