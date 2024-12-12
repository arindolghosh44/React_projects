import React from 'react'
import Main from './Main'

function Register({setState}) {
 const addData=()=>
 {
  setState(false);
 }


  return (
    <div>
     <h2>Register</h2>
    <card>

      <card-body>
        <div style={{width:"30%",margin:"50px auto",backgroundColor:"green"}} className='p-5 w-25'>
        <input type='text' placeholder='Enter the name' className='form-control'/><br></br><br></br>
<input type='text' placeholder='Enter the email' className='form-control'/><br></br><br></br>
<input type='text' placeholder='Enter the phno' className='form-control'/><br></br><br></br>
<input type='text' placeholder='Enter the password'className='form-control'/><br></br><br></br>
<button className='bg-primary btn btn-outline-warning ' onClick={addData}>Register</button>
        </div>
     
      </card-body>
    </card>


    
     
     
    </div>
  )
}

export default Register