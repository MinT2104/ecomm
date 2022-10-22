

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
import Manager from './layouts/manager/Manager';



const App =()=> {
    const handleScroll = (e)=>{
        console.log(e.target)
    }

  
const [cartActive, setCartActive] = useState(false)
   
    return (
    <AuthContextProvider>
        <div
     className="MainDiv">
      
        {/* <span
      className=''
       onClick={()=>setCartActive(!cartActive)}
        >
           <a className=' z-50 rounded-full cursor-pointer'><ShoppingCartIcon/></a>
         </span> */}

      
         {
            cartActive ? <ShoppingCart
             act={cartActive} setAct={setCartActive}
            />
            :null
        }         
        <div className="humberger__menu__overlay"></div>
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
              <Route path="/manager" element={<Manager/>}/>

            </Routes>
        </div>
      
      </div>
      
    </AuthContextProvider>

)
}
export default App;