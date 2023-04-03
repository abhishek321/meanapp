import React, { useEffect, useState } from 'react'
import Product from './Product';
import axios from 'axios';

const Products = () => {
  const [products,setProducts] = useState([]);
  const getProduct = async ()=>{
    const product = (await axios('/products')).data;
    setProducts(product);
  }
  useEffect(()=>{
    getProduct();
    console.log(products);
  },[]);
  return (
    <div className="container my-4">
      <div className="row row-cols-1 row-cols-md-3 g-4">
      {products && products.map((product)=>{
        return <div className="col" key={product._id}>
         <Product _id={product._id} title={product.title} description={product.description} price={product.price} discountPercentage={product.discountPercentage} rating={product.rating} brand={product.brand} category={product.category} thumbnail={product.thumbnail} />
         </div>
      })}
      </div>
    </div>
  )
}

export default Products
