import React from 'react'
import Main from './Main'

function Login() {
  return (
    <div>
       <h2>Login</h2>
     <card >
<card-body  >
  <div style={{width:"30%",margin:"50px auto",backgroundColor:"green"}} className='p-5 w-25 bg-warning'>

  <input type='text' placeholder='Enter the name' className='form-control'/><br></br><br></br>
<input type='text' placeholder='Enter the password' className='form-control'/><br></br><br></br>
<button className='bg-primary btn btn-outline-success '>Login</button><br></br><br></br>
  </div>

</card-body>


     </card>
    

      
    </div>
  )
}

export default Login