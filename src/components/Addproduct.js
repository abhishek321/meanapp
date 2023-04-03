import axios from 'axios';
import React, { useState } from 'react'

const Addproduct = () => {
    const [product,setProduct] = useState({title:"",description:"",tag:""});
    const onChange=(e)=>{
        setProduct({...product,[e.target.name]:e.target.value});
    }
    const addProduct = async (e)=>{
        e.preventDefault();
        const {data} = await axios.post('/products',document.querySelector('#productForm'), {
            headers: {
              'Content-Type': 'application/json'
            }
          });
    }
    const handleClick = (e)=>{
        e.preventDefault();
        addProduct(product);
    }
    return (
        <div className='container my-4'>
            <div className='row'>
                <form id='productForm' onSubmit={addProduct} method='post'>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="title">Title</label>
                            <input type="text" name='title'  className="form-control" id="title" placeholder="Enter title" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="price">Price</label>
                            <input type="number" name='price' className="form-control" id="price" placeholder="Enter price" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="discountPercentage">Discount</label>
                            <input type="number" name='discountPercentage' className="form-control" id="discountPercentage" placeholder="Enter discount" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="rating">Rating</label>
                            <input type="text" name='rating' className="form-control" id="rating" placeholder="Enter rating" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="thumbnail">Image</label>
                        <input type="text" className="form-control" id="thumbnail" name='thumbnail' placeholder="https://" />
                    </div>
                    
                    <div className="form-row">                        
                        <div className="form-group col-md-4">
                            <label htmlFor="brand">Brand</label>
                            <select id="brand" name='brand' className="form-control">
                                <option value="">Choose...</option>
                                <option value="samsung"> Samsung </option>
                                <option value="apple"> Apple </option>
                            </select>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="category">Category</label>
                            <select id="category" name='category' className="form-control">
                                <option  value="">Choose...</option>
                                <option value="laptops"> laptops </option>
                                <option value="desktop"> desktop </option>
                                <option value="mobile"> mobile </option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea className="form-control" name='description' id="description" rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Sign in</button>
                </form>
                </div>    
        </div>
    )
}
export default Addproduct
