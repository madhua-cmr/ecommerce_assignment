import React, { useContext, useEffect } from 'react'
import { AppContext } from '../App'
import PriceDetail from '../Component/PriceDetail';
import { BsFillPlusCircleFill } from "react-icons/bs";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaCircleMinus } from "react-icons/fa6";
const CartPage = () => {
  const {cart,setCart}=useContext(AppContext);

// useEffect(()=>{
// console.log(cart);
// },[])

const deleteItem=(id)=>{
  const updatedcart=cart.filter((item)=>item.id!=id)
  
  setCart(updatedcart);
}
const deleteCart=()=>{
setCart([]);
}
const handleIncrement=(id)=>{
  const foundedpro=cart.find((item)=>id==item.id);
  const updatedcart=cart.map((item)=>{
    if(item.id==foundedpro.id){
  
      return {...foundedpro,quantity:(item.quantity+1)}
    }else{
      
      return item;
    }
  })
  setCart(updatedcart);
}


const handleDecrement=(id)=>{
  const foundedpro=cart.find((item)=>id==item.id);
  if(foundedpro.quantity-1==0){
    const updatedcart=cart.filter((item)=>item.id!=id)
    
    setCart(updatedcart);
  }else{
  
  const updatedcart=cart.map((item)=>{
    if(item.id==foundedpro.id){
  
      return {...foundedpro,quantity:(item.quantity-1)}
    }else{

      return item;
    }
  })
  
  setCart(updatedcart);
}
  
}
useEffect(()=>{ 
  console.log(cart)
  console.log(cart.length)
},[cart])
  return (
    <div className='cart_page'>


      <div >
      {cart?.length==0&&<div>
        <h2>Your Cart is Empty 🙁</h2></div>}
        {cart?.length!=0&&<div>  
          <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}><h1>Your cart is awaiting for you 😀</h1><div style={{cursor:"pointer",fontSize:"40px"}}onClick={()=>deleteCart()}>🚮</div></div>
          
        
         { cart?.map((item,idx)=>(<div key={idx} style={{boxShadow:'5px 5px 10px grey ',borderRadius:'5px',display:'flex',padding:'15px',gap:'5px'}}>
     
            <div style={{}} ><img style={{ objectFit:'contain',objectPosition:'center',maxWidth:'150px',maxHeight:'150px'}} src={item?.image} alt={item?.title} /></div>

            <div style={{flex:'1',display:'flex',flexDirection:'column',gap:'10px'}} >
             <div  style={{display:'flex',justifyContent:'space-between'}}> <h2 >{item?.title}</h2> <div  onClick={()=>deleteItem(item?.id)}>
            <IoIosCloseCircleOutline  style={{fontSize:'22px'}}/>
            </div></div> 
              <p >{item?.description.slice(0,150)+",..."}</p>
              <div><h3>Category : </h3> <p>{item?.category}</p></div>

              <div style={{  display:'flex',gap:'5px',width:"56px",alignItems:'center',borderRadius:'100px',
              border:"1px solid grey"

}}>
                
                <div  onClick={()=>handleIncrement(item.id)}><BsFillPlusCircleFill role='button' tabIndex={0}/></div>

                <h3>{item?.quantity}</h3>

                <div onClick={()=>handleDecrement(item?.id)}><FaCircleMinus role='button' tabIndex={0}  /></div>
                
                </div>

              <div>&#8377;<h2>{(item?.quantity)*(item?.price)}</h2></div>
      
            </div>
           
          </div>))}</div>}
          </div>


          <div style={{marginTop:"25px"}}>
            <PriceDetail/>
          </div>

    </div>
  )
}

export default CartPage
