
import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
function RegisterPage() {
  let [order, setOrder] = useState({
    nid:"",
    pqty:"",
    price:""



  });


  let [mas,setMsg] = useState(" ");
const refreshData=()=>{


  setOrder({

    nid:"",
    pqty:"",
    price:""

  })
  setMsg("")

}
  const addData=()=>{
    axios.post("http://localhost:1004/order/add",order)
    .then((res)=>{
      console.log(res.data);
           setOrder(res.data);
           setMsg(res.data);
    }) .catch((error)=>{
      console.log(error);
      alert("Something wrong with adding with tuhin");
   })
}
  
  
  return (
    <div>
     
     <div class="card">
      <div class="card-body bg-primary w-2">
    <input type='text' placeholder='Enter NID' value={order.nid} onChange={(event)=>
{
 setOrder({

  ...order,
  nid:event.target.value
 })

}

    }/><br></br><br></br>
    <input type='number' placeholder='Enter QTY' value={order.pqty} onChange={(event)=>
{
 setOrder({

  ...order,
  pqty:event.target.value
 })

}

    }/><br></br><br></br>
    <input type='number' placeholder='Enter PRICE'value={order.price}
    onChange={(event)=>
      {
       setOrder({
      
        ...order,
        price:event.target.value
       })
      
      }
      
          }/><br></br><br></br>
    <button className='btn btn-outline-warning' onClick={addData} style={{marginTop: '10px'}}>Add</button>&nbsp;&nbsp;&nbsp;
    <button className='btn btn-outline-warning' style={{marginTop: '10px'}} onClick={refreshData}>REFRESH</button>&nbsp;&nbsp;&nbsp;
    <h2>{mas}</h2>
  </div>
</div>

    </div>
    
  )
}

export default RegisterPage
