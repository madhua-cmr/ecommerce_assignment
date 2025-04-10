import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../App'
import toast from 'react-hot-toast';


const PriceDetail = () => {

  const {cart,setCart}=useContext(AppContext);
 
  const[totalprice,setTotalPrice]=useState(0);
  const[discount,setDiscount]=useState(0);
  useEffect(()=>{
 let tot=0;
 if(cart?.length!==0){
  cart?.map((item)=>tot+=(item?.quantity*item?.price));
 }
  setTotalPrice(tot);
  if(tot>=200&&tot<500){
    setDiscount(10);

  }else if(tot>=500&&tot<1000){
    setDiscount(50);

  }else if(tot>1000){
    setDiscount(100);
  }else{
    setDiscount(0);
  }
  
  },[cart])

  return (
    < >
    <div style={{boxShadow:"10px 10px 10px grey",display:'flex',flexDirection:"column",gap:'15px',padding:"20px",borderRadius:"10PX"}}>
      <h1 style={
        {
          padding:'0px',margin:'0px'
        }
      }>PRICE DETAILS  <span>({cart.length+" "+(cart?.length<2?"Item":"Items")} )</span></h1>
      <div style={{display:'flex',justifyContent:'space-between'}} >
      <h2>Total MRP</h2>
      <h3>&#8377;{totalprice}</h3>
      </div>
      <div style={{display:'flex',justifyContent:'space-between'}}>
      <h2>Discount</h2>
      <h3>&#8377;{discount}</h3>
      </div>
      <div style={{display:'flex',justifyContent:'space-between'}}>
      <h2>Shipping Fee</h2>
      <h3>FREE</h3>
      </div>
      <div style={{border:"1px solid grey",height:"1px",borderRadius:"100px"}}></div>
      <div style={{display:'flex',justifyContent:'space-between'}}>
      <h2>Total Amount</h2>
      <h3>&#8377;{totalprice-discount}</h3>
      </div>

  <button onClick={()=>{if(cart.length==0){
     setCart([]); toast('Cart is Empty, Buy Some Items to Checkout',{
      icon: '🛒',
      duration: 4000,
    });
   }else{
  setCart([]); toast('Ordered Placed Successfully',{
  icon: '🤩',
  duration: 4000,
});}
setTotalPrice(0);setDiscount(0);}}>Checkout</button>
</div>
    </>
  )
}

export default PriceDetail
