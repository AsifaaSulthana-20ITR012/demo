import React, { useState } from 'react'
import axios from "axios"
import FileBase64 from 'react-file-base64';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import './Product.css'
function AddProduct() {

    const [item, setItem] = useState({ foodName: '', image: '', desc: '', price: ' ' });
    const successNotify = () => {
        
        toast.success("Successfully Submitted!");
        this.setState({ foodName: '', image: '', desc: '', price: '' })
    }
    const handleFormSubmit = async(event) => {
        // event.preventDefault();
        console.log(item)
        try {
            const {data}=await axios.post('https://sanjays-fine-foods.onrender.com/upload',item)
            console.log(data)
        } catch (error) {
            console.log(error.message)
        }
        this.setState({ foodName: '', image: '', desc: '', price: '' })
    }

    return (
        <>
        <br/>
        <br/>
        <div><h2 style={{textAlign:"center",alignContent:"center"}}>Add a New Product</h2>
        <br/>
            <div className="create" >
            <br/>
                <div className="col-6 formStyle" >
                    <div className="card-body">
                        <form onSubmit={handleFormSubmit} action="/admin" >
                            <label className="form-label" style={{float:'left',padding:"20px"}}>Product Name:
                            <input type="text" required 
                                onChange={e => setItem({ ...item, foodName: e.target.value })}
                            />
                            </label>
                            <label className="form-label" style={{float:'left',padding:"20px"}}>Product Price:
                            <input type="text" placeholder='in Rupees' required 
                                onChange={e => setItem({ ...item, price: e.target.value })}
                            /></label>
                        
                             <br/><br/>
                            <label className="form-label" style={{float:'left',padding:"20px"}}>Attach Image
                            <FileBase64
                                type="file" required
                                multiple={false}
                                onDone={({ base64 }) => setItem({ ...item, image: base64 })}
                            /></label>
                             <br/><br/>
                             <div>
                            <label className="form-label" style={{float:'left',padding:"20px"}}>Description:
                            <br/>
                            <input type="text"  className="form-label" placeholder='in grams...'
                                onChange={e => setItem({ ...item, desc: e.target.value })}
                            /></label>
                            </div>
                             <br/>
                             <br/>
                            
                             <div style={{display:"block",alignItems:"center",justifyContent:"center"}} >
                             <label>  <button className="card__btn" onClick={successNotify} >SUBMIT</button>
                             </label>
                            </div>
                            
                            <ToastContainer />
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default AddProduct;