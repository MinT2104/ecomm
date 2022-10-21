
import { Routes, Route } from "react-router-dom";
import Allitems from "../components/Allitems";
import Categories from "../components/Categories";

import { collection, doc, addDoc, onSnapshot, query, deleteDoc, updateDoc } from "firebase/firestore"; 
import {db} from "../firebase"
import { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";



const Home = () => {
    const [tests, setTests] = useState([])
    const {user, logOut} = UserAuth()
    const [cart, setCart] = useState(false)
    const [dataCart, setDataCart] = useState("")

    // const data = Object.values(db).map((data)=>data)
    // console.log(data)
    const [filterName, setFilterName] = useState("Tất cả")
    useEffect(()=>{
        const z = query(collection(db,'shoppingcart'));
        const unsubcrible = onSnapshot(z,(querySnapshot)=>{
            let test = [];
            querySnapshot.forEach((doc) => {
                test.push({...doc.data(), id:doc.id})
                });
            setTests(test)

            const data = test.filter((data)=>{
                return data.userId == user.uid
                 })
                setDataCart(data)
                console.log(data)
            
        })
        // console.log("tests:" ,tests)
  
            
 
        return ()=> unsubcrible()

    },[])
    useEffect(()=>{
        

        if(dataCart.userId == undefined){setCart(true)}
        else{setCart(false)}
        console.log(dataCart)
  
       // console.log("data :",data)
       console.log(cart)
       console.log("data test :", tests)

        //     if( dataCart.length < 1 ){
        //         if( dataCart[0] == undefined  && user.uid){
        //          console.log("vaoduocroi")
                
        //          addDoc(collection(db,"shoppingcart"),{
        //          userId: user.uid,
        //          carts:[
        //              {
        //                  id:1,
        //                  text:"alo",
        //                  items:"aaaaaaaaaa"
     
        //              }
        //          ]
        //           })
        //           setCart(false)
        //        }  
        //  }
    
    },[tests])

    
      
         
          

    
    
   
    return ( 
        <div className="bg-gray-100">
            
          <Allitems/>    
         <footer className="footer spad">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-3 col-md-6 col-sm-6">
                          <div className="footer__about">
                              <div className="footer__about__logo">
                              <img className="w-40" src='assets/img/logoweb1.png' alt=''/>
                                  {/* <a href="#" className="logo">24H STORE</a> */}
                              </div>
                              <ul>
                                  <li><label className="font-bold">Adress: </label> DHSPKT TPHCM</li>
                                  <li><label className="font-bold">Phone: </label> 0359953717</li>
                                  <li><label className="font-bold">Email: </label> commoditegrocerystore@gmail.com</li>
                              </ul>
                          </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-1 flex justify-center">
                          <div className="footer__widget w-3/5">
                              <h6>Trang web</h6>
                              <ul>
                                  <li><a href="#">Trang Chủ</a></li>
                                  <li><a href="#">Giới Thiệu</a></li>
                                  <li><a href="#">Liên Hệ</a></li>
                                 
                              </ul>
                          </div>
                      </div>
                      <div className="col-lg-4 col-md-12">
                          <div className="footer__widget">
                              <h6>Liên hệ chúng tôi ngay</h6>
                              <p>Cung cấp Email để nhận được các thông tin mới nhất từ chúng tôi</p>
                              <form action="#">
                                  <input type="text" placeholder="Enter your mail" />
                                  <button type="submit" className="site-btn">Subscribe</button>
                              </form>
                              <div className="footer__widget__social">
                                  <a href="#"><i className="fa fa-facebook"></i></a>
                                  <a href="#"><i className="fa fa-instagram"></i></a>
                                  <a href="#"><i className="fa fa-twitter"></i></a>
                                  <a href="#"><i className="fa fa-pinterest"></i></a>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-lg-12">
                          <div className="footer__copyright  justify-center flex">
                              <div className="footer__copyright__text"><p className="text-center">
        Copyright &copy;2021 All rights reserved | This Website is made with <i className="fa fa-heart" aria-hidden="true"></i> by <a href="#" target="_blank">Thuy Sang</a>
      </p></div>
                             
                          </div>
                      </div>
                  </div>
              </div>
          </footer>
      </div>
     );
}
 
export default Home;