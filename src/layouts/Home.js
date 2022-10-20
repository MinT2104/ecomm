// import { Link } from "react-router-dom";
// import { Component, useState } from "react";
// import ShoppingCart from "./ShoppingCart";
import { Routes, Route } from "react-router-dom";
import Allitems from "../components/Allitems";
import Categories from "../components/Categories";



const Home = () => {
    // const data = Object.values(db).map((data)=>data)
    // console.log(data)
    // const [filterName, setFilterName] = useState("Tất cả")
    
   
    return ( 
        <div >
            
            {/* <section className="hero">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-3">
                          <div className="hero__categories">
                              <div className="hero__categories__all bg-gradient-to-r from-cyan-500 to-blue-500">
                                  <i className="fa fa-bars"></i>
                                  <span>All departments</span>
                              </div>
                              <ul>
                                  <li><a href="#">Thức ăn</a></li>
                                  <li><a href="#">Nước uống</a></li>
                                  <li><a href="#">vật dụng cá nhân</a></li>
                              </ul>
                          </div>
                      </div>

                      <div className="col-lg-12">
                          <div className="hero__search">
                              <div className="hero__search__form md:ml-[60px]">
                                  <form action="#">
                                      <input type="text" placeholder="Bạn cần gì?" />
                                      <button type="submit" className="site-btn bg-gradient-to-r from-cyan-500 to-blue-500">TÌM KIẾM</button>
                                  </form>
                              </div>
                              <div className="hero__search__phone">
                                  <div className="hero__search__phone__icon text-cyan-500">
                                      <i className="fa fa-phone"></i>
                                  </div>
                                  <div className="hero__search__phone__text ">
                                      <h5>0359953717</h5>
                                      <span>Hỗ trợ 24/7</span>
                                  </div>
                              </div>
                          </div>
                          <div className="hero__item set-bg">
                            
                              <div className="hero__text">
                                
                                  <span>TIỆN ÍCH</span>
                                  <h2>Commodité <br />Grocery Store</h2>
                                  <p>Nhanh chóng và dễ dàng</p>
                                  <a href="#" className="primary-btn">MUA NGAY</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section> */}
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