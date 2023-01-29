
import Userin4 from "./layouts/Userin4";
import About from './layouts/About';
import Contact from './layouts/Contact';
import Login from './layouts/Login';
import Home from './layouts/Home';
import ShoppingCart from './layouts/ShoppingCart';
import Nav from './layouts/Nav';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router";
import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from './context/AuthContext';
// import Manager from './layouts/manager/Manager';
import Checkout from './layouts/Checkout';
import NavMod from './layouts/NavMob';



const App =()=> {
    const [navMobieAct, setNavMobieAct] =useState(false)


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
        <div className="humberger__menu__overlay"></div>
        <Nav act={cartActive} setNavMobieAct={setNavMobieAct} setAct={setCartActive}/>
        <NavMod setNavMobieAct={setNavMobieAct} navMobieAct={navMobieAct}/>
          <div>
              <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/contact" element={<Contact/>} />
                    <Route path="/shoppingcart" element={<ShoppingCart/>} />
                    <Route path="/checkout" element={<Checkout/>} />
                </Routes>
          </div>
          <div>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                {/* <Route path="/signup" element={<Signup/>}/> */}
                {/* <Route path="/manager" element={<Manager/>}/> */}
                <Route path="/user" element={<Userin4/>} />
            </Routes>
        </div>
      
      </div>
      
    </AuthContextProvider>

)
}
export default App;