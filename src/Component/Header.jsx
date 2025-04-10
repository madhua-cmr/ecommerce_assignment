import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import { TbLogout } from "react-icons/tb";
import toast from 'react-hot-toast';
import { AppContext } from '../App';
const Header = () => {
  const {setUser}=useContext(AppContext);
  const{cart} =useContext(AppContext)
  const navigate=useNavigate();
  const logout=()=>{
  localStorage.removeItem("token");
  setUser(false);
  navigate('/login');
  toast.success("Logged out successfully");
  }
  return (
   <nav >
   <NavLink to="/home" className={({isActive})=>isActive?"activehead":"logo"}>EMart</NavLink>
   <div style={{display:'flex',gap:'100px'}}>
   <div className='cart'>
   <NavLink to="/cart" className={({isActive})=>isActive?"activecart":"carthead"}>Cart</NavLink>
   <div className='cartcounter'>{cart.length}</div>
   </div>
   <div onClick={logout} className='logout' ><TbLogout tabIndex={0} role='button'/></div>
   </div>
   </nav>
  )
}

export default Header
