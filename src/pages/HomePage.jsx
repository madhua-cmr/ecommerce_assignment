import axios from 'axios';
import React, { useEffect, useState } from 'react'

import Product from '../Component/Product';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const HomePage = () => {
  const[products,setProducts]=useState([]);
  const navigate=useNavigate();
  const getProducts=async()=>{
    try {
      const res=await axios.get("https://fakestoreapi.com/products");
      setProducts(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  }
  useEffect(()=>{
    getProducts();
  },[])
  return (
    <div className='home'>
      <h1>Products</h1>
      <div className='products'>
    {products.length!==0&&products.map((product,idx)=>(<Product key={idx} onClick={()=>navigate(`/product/${product.id}`)} image={product.image} title={product.title} description={product.description} price={product.price}/>))}
        
      </div>
    </div>
  )
}

export default HomePage
