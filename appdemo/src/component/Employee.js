import React from 'react'

function Employee() {
  return (
    <div>
        <div class="card" style={{width:"30%",margin:"50px auto"}}>
      <div class="card-body bg-success">
    <input type='text'   className ="form-control bg-primary text-danger" placeholder='Enter Name'/><br></br><br></br>
    <input type='email' className ="form-control  bg-primary text-danger" placeholder='Enter email'/><br></br><br></br>
    <input type='number' className ="form-control  bg-primary text-danger" placeholder='Enter phno'/><br></br><br></br>
    <button className='btn btn-outline-primary bg-warning '>Register</button>
  </div>
</div>
    </div>
  )
}

export default Employee
