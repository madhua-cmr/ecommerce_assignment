import { createContext, useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import ProductPage from "./pages/ProductPage";
import Header from "./Component/Header";
export const AppContext = createContext();
function App() {
  const [cart, setCart] = useState([]);
  const[isuser,setUser]=useState(false);
  useEffect(()=>{
if(localStorage.getItem("token")){
  setUser(true);
}
  },[])
  return (
    <>
      <AppContext.Provider value={{ cart, setCart,setUser }}>
        <Routes>
          <Route path="/" element={<LoginPage/>} />
          <Route path="/home" element={isuser?<><Header/><HomePage/></>:<LoginPage/>} />
          <Route path="/cart" element={isuser?<><Header/><CartPage/></>:<LoginPage/>} />
          <Route path="/product/:id" element={isuser?<><Header/><ProductPage/></>:<LoginPage/>} />
        </Routes>
      </AppContext.Provider>
    </>
  );
}

export default App;
