import React, { useContext, useState } from 'react'
import axios from 'axios'

import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AppContext } from '../App';
const LoginPage = () => {
  const{setUser}=useContext(AppContext);
  const[username,setUsername]=useState("");
  const[password,setPassword]=useState("");
  const navigate=useNavigate();
  const handleSubmit=async(e)=>{
    e.preventDefault();
    if(username==""||password==""){
    toast.error("All fields are required");
    return;
    }
 const credentials={username:username,password:password};

 
  axios.post("https://fakestoreapi.com/auth/login",credentials).then(res=>{localStorage.setItem("token",res.data.token);
    setUser(true);
    navigate('/home');
    
    toast.success("Logged In successfully");

  }).catch(error=>{toast.error(error.response.data);});


  }


  return (
    <div className='container' >
      <div className='login'>
      <label htmlFor="username">Username</label>
      <input type="text" name="username" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='Enter name' />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Password'/>
      <button type="submit" onClick={(e)=>handleSubmit(e)}>Login</button>
      </div>
    </div>
  )
}

export default LoginPage
