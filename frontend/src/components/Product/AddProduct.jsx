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
    const handleFormSubmit = (event) => {
        // event.preventDefault();
        console.log(item)
        axios({
            method: 'post',
            url: 'http://localhost:5000/upload',
            data: item //formData
        })
        this.setState({ foodName: '', image: '', desc: '', price: '' })
    }

    return (
        <>
        <div><h2>Add a New Product</h2>
            <div className="create">
            <br/>
                <div className=" col-7 formStyle" >
                    <div className="card-body">
                        <form onSubmit={handleFormSubmit} action="/admin" >
                            <label className="form-label">Product Name:</label>
                            <input type="text" required
                                onChange={e => setItem({ ...item, foodName: e.target.value })}
                            />
                             <br/><br/>
                            <label className="form-label">Attach Image</label>
                            <FileBase64
                                type="file" required
                                multiple={false}
                                onDone={({ base64 }) => setItem({ ...item, image: base64 })}
                            />
                             <br/><br/>
                            <label className="form-label">Description:</label>
                            <textarea type="text" row="5" className="form-label" placeholder='main Ingredients'
                                onChange={e => setItem({ ...item, desc: e.target.value })}
                            />
                             <br/>
                            <label className="form-label">Product Price:</label>
                            <input type="text" placeholder='in Rupees' required
                                onChange={e => setItem({ ...item, price: e.target.value })}
                            />
                            <br/>
                            <button className="card__btn" onClick={successNotify}>SUBMIT</button>
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