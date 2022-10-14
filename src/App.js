

import About from './layouts/About';
import Contact from './layouts/Contact';
import Login from './layouts/Login';
import Home from './layouts/Home';
import ShoppingCart from './layouts/ShoppingCart';
import Nav from './layouts/Nav';

import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router";
import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from './context/AuthContext';



const App =()=> {
    const handleScroll = (e)=>{
        console.log(e.target)
    }

  
const [cartActive, setCartActive] = useState(false)
   
    return (
    <AuthContextProvider>
        <div
     className="MainDiv">
         {
            cartActive ? <ShoppingCart
             act={cartActive} setAct={setCartActive}
            />
            :null
        }         
        <div class="humberger__menu__overlay"></div>
        <Nav act={cartActive} setAct={setCartActive}/>
         
          <div>
              <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/contact" element={<Contact/>} />
                </Routes>
          </div>
          <div>
            <Routes>
              <Route path="/login" element={<Login/>}/>
              {/* <Route path="/signup" element={<Signup/>}/> */}

            </Routes>
        </div>
      
      </div>
      
    </AuthContextProvider>

)
}
export default App;