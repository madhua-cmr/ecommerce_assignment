import axios from 'axios';
import { FaHeart } from "react-icons/fa";
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { PiStarFill } from "react-icons/pi";
import { AppContext } from '../App';
import toast from 'react-hot-toast';

const ProductPage = () => {
const {cart,setCart}=useContext(AppContext);

  const {id}=useParams();
  const[quantity,setQuantity]=useState(1);
  const[product,setProduct]=useState(null);

  const addtocart=()=>{

    const foundedpro=cart.find((item)=>id==item?.id);

  if(foundedpro!=null){
    const updatedcart=cart.map((item)=>{
      if(item.id==foundedpro.id){
    
        return {...foundedpro,quantity:(item.quantity+quantity)}
      }else{
        console.log("me");
        return item;
      }
    })
    setCart(updatedcart);

  }else{
    const itemnew={title:product?.title,
      id:product?.id,description:product?.description,image:product?.image,quantity:quantity,price:product?.price,category:product?.category};
   
  setCart([...cart,itemnew]);

  }
  }
 const getProduct=async(id)=>{
  try {
    const res=await axios(`https://fakestoreapi.com/products/${id}`);
    if(res.data){
      console.log(res.data);
      setProduct(res.data);
    }
  } catch (error) {
    console.log(error.message);
    toast.error(error.message);
  }
}
  useEffect(()=>{
getProduct(id);
  },[]
)
  return (
    <div  className='main'>
      <div className='left'>
        <img src={product?.image} alt={product?.title} /></div>

      <div className='right'> 
        <h1>{product?.title}</h1>
        <h3 style={{textAlign:'justify'}}>{product?.description}</h3>
        
        
        <h2>&#8377; {product?.price}</h2>
        <div ><h3>Category : </h3><p> {product?.category}</p></div>
        
        <div className='proqua'><h3>Quantity</h3><input type="number" min="1" value={quantity} onChange={(e)=>{setQuantity(e.target.value)}}/></div>

        <div style={{display:'flex',width:'300px',gap:'5px'}}>
       
        <p>
        {product?.rating?.rate}&#11088;</p>
        <p>({product?.rating?.count} Ratings)</p>
   </div>
        <button  onClick={()=>addtocart(product)}>
          Add to Cart
        </button>
      
      
      </div>
    </div>
  )
}

export default ProductPage
