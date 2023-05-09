import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Main() {
  const Styling={
    paddingTop:"150px",
  }
  const navigate=useNavigate();
  const addProduct=()=>{
    navigate('/addpro')
  }
  const addGift=()=>{
    navigate('/addGift')
  }
  const addAdmin=()=>{
    navigate('/signup')
  }
  return (
    < div style={Styling}> 
        <div style={{display:"flex",justifyContent:"space-evenly",height:"100px",fontSize:"20rem"}}>
        <button type="button" class="btn btn-danger btn-lg col-3 " onClick={addProduct}>
           <b>Add new Products</b> 
        </button>
        <button type="button" class="btn btn-danger btn-lg col-3" onClick={addGift}>
           <b>Add new Gift Products</b>
        </button>
        </div>
        <br/>
        <div style={{display:"flex",justifyContent:"center",height:"100px",fontSize:"100px"}} >
        <button type="button" class="btn btn-danger btn-lg col-3" onClick={addAdmin}>
            <b>Add new Admin</b>
        </button>
        </div>
    </div>
  )
}
