import { Link } from "react-router-dom";
import { Component, useState } from "react";
import ShoppingCart from "./ShoppingCart";
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
              <div class="container">
                  <div class="row">
                      <div class="col-lg-3">
                          <div class="hero__categories">
                              <div class="hero__categories__all bg-gradient-to-r from-cyan-500 to-blue-500">
                                  <i class="fa fa-bars"></i>
                                  <span>All departments</span>
                              </div>
                              <ul>
                                  <li><a href="#">Thức ăn</a></li>
                                  <li><a href="#">Nước uống</a></li>
                                  <li><a href="#">vật dụng cá nhân</a></li>
                              </ul>
                          </div>
                      </div>

                      <div class="col-lg-12">
                          <div class="hero__search">
                              <div class="hero__search__form md:ml-[60px]">
                                  <form action="#">
                                      <input type="text" placeholder="Bạn cần gì?" />
                                      <button type="submit" class="site-btn bg-gradient-to-r from-cyan-500 to-blue-500">TÌM KIẾM</button>
                                  </form>
                              </div>
                              <div class="hero__search__phone">
                                  <div class="hero__search__phone__icon text-cyan-500">
                                      <i class="fa fa-phone"></i>
                                  </div>
                                  <div class="hero__search__phone__text ">
                                      <h5>0359953717</h5>
                                      <span>Hỗ trợ 24/7</span>
                                  </div>
                              </div>
                          </div>
                          <div class="hero__item set-bg">
                            
                              <div class="hero__text">
                                
                                  <span>TIỆN ÍCH</span>
                                  <h2>Commodité <br />Grocery Store</h2>
                                  <p>Nhanh chóng và dễ dàng</p>
                                  <a href="#" class="primary-btn">MUA NGAY</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section> */}
         
        
       
       
          {/* <div class="banner">
              <div class="container">
                  <div class="row">
                      <div class="col-lg-6 col-md-6 col-sm-6">
                          <div class="banner__pic">
                              <img src="assets/img/banner/banner-1.jpg" alt="" />
                          </div>
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-6">
                          <div class="banner__pic">
                              <img src="assets/img/banner/banner-2.jpg" alt="" />
                          </div>
                      </div>
                  </div>
              </div>
          </div> */}
          <Allitems/>
       
          {/* <section class="latest-product spad">
              <div class="container">
                  <div class="row">
                      <div class="col-lg-4 col-md-6">
                          <div class="latest-product__text">
                              <h4>Latest Products</h4>
                              <div class="latest-product__slider owl-carousel">
                                  <div class="latest-prdouct__slider__item">
                                      <a href="#" class="latest-product__item">
                                          <div class="latest-product__item__pic">
                                              <img src="assets/img/latest-product/lp-1.jpg" alt="" />
                                          </div>
                                          <div class="latest-product__item__text">
                                              <h6>Crab Pool Security</h6>
                                              <span>$30.00</span>
                                          </div>
                                      </a>
                                      <a href="#" class="latest-product__item">
                                          <div class="latest-product__item__pic">
                                              <img src="assets/img/latest-product/lp-2.jpg" alt="" />
                                          </div>
                                          <div class="latest-product__item__text">
                                              <h6>Crab Pool Security</h6>
                                              <span>$30.00</span>
                                          </div>
                                      </a>
                                      <a href="#" class="latest-product__item">
                                          <div class="latest-product__item__pic">
                                              <img src="assets/img/latest-product/lp-3.jpg" alt="" />
                                          </div>
                                          <div class="latest-product__item__text">
                                              <h6>Crab Pool Security</h6>
                                              <span>$30.00</span>
                                          </div>
                                      </a>
                                  </div>
                                  <div class="latest-prdouct__slider__item">
                                      <a href="#" class="latest-product__item">
                                          <div class="latest-product__item__pic">
                                              <img src="assets/img/latest-product/lp-1.jpg" alt="" />
                                          </div>
                                          <div class="latest-product__item__text">
                                              <h6>Crab Pool Security</h6>
                                              <span>$30.00</span>
                                          </div>
                                      </a>
                                      <a href="#" class="latest-product__item">
                                          <div class="latest-product__item__pic">
                                              <img src="assets/img/latest-product/lp-2.jpg" alt="" />
                                          </div>
                                          <div class="latest-product__item__text">
                                              <h6>Crab Pool Security</h6>
                                              <span>$30.00</span>
                                          </div>
                                      </a>
                                      <a href="#" class="latest-product__item">
                                          <div class="latest-product__item__pic">
                                              <img src="assets/img/latest-product/lp-3.jpg" alt="" />
                                          </div>
                                          <div class="latest-product__item__text">
                                              <h6>Crab Pool Security</h6>
                                              <span>$30.00</span>
                                          </div>
                                      </a>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-4 col-md-6">
                          <div class="latest-product__text">
                              <h4>Top Rated Products</h4>
                              <div class="latest-product__slider owl-carousel">
                                  <div class="latest-prdouct__slider__item">
                                      <a href="#" class="latest-product__item">
                                          <div class="latest-product__item__pic">
                                              <img src="assets/img/latest-product/lp-1.jpg" alt="" />
                                          </div>
                                          <div class="latest-product__item__text">
                                              <h6>Crab Pool Security</h6>
                                              <span>$30.00</span>
                                          </div>
                                      </a>
                                      <a href="#" class="latest-product__item">
                                          <div class="latest-product__item__pic">
                                              <img src="assets/img/latest-product/lp-2.jpg" alt="" />
                                          </div>
                                          <div class="latest-product__item__text">
                                              <h6>Crab Pool Security</h6>
                                              <span>$30.00</span>
                                          </div>
                                      </a>
                                      <a href="#" class="latest-product__item">
                                          <div class="latest-product__item__pic">
                                              <img src="assets/img/latest-product/lp-3.jpg" alt="" />
                                          </div>
                                          <div class="latest-product__item__text">
                                              <h6>Crab Pool Security</h6>
                                              <span>$30.00</span>
                                          </div>
                                      </a>
                                  </div>
                                  <div class="latest-prdouct__slider__item">
                                      <a href="#" class="latest-product__item">
                                          <div class="latest-product__item__pic">
                                              <img src="assets/img/latest-product/lp-1.jpg" alt="" />
                                          </div>
                                          <div class="latest-product__item__text">
                                              <h6>Crab Pool Security</h6>
                                              <span>$30.00</span>
                                          </div>
                                      </a>
                                      <a href="#" class="latest-product__item">
                                          <div class="latest-product__item__pic">
                                              <img src="assets/img/latest-product/lp-2.jpg" alt="" />
                                          </div>
                                          <div class="latest-product__item__text">
                                              <h6>Crab Pool Security</h6>
                                              <span>$30.00</span>
                                          </div>
                                      </a>
                                      <a href="#" class="latest-product__item">
                                          <div class="latest-product__item__pic">
                                              <img src="assets/img/latest-product/lp-3.jpg" alt="" />
                                          </div>
                                          <div class="latest-product__item__text">
                                              <h6>Crab Pool Security</h6>
                                              <span>$30.00</span>
                                          </div>
                                      </a>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-4 col-md-6">
                          <div class="latest-product__text">
                              <h4>Review Products</h4>
                              <div class="latest-product__slider owl-carousel">
                                  <div class="latest-prdouct__slider__item">
                                      <a href="#" class="latest-product__item">
                                          <div class="latest-product__item__pic">
                                              <img src="assets/img/latest-product/lp-1.jpg" alt="" />
                                          </div>
                                          <div class="latest-product__item__text">
                                              <h6>Crab Pool Security</h6>
                                              <span>$30.00</span>
                                          </div>
                                      </a>
                                      <a href="#" class="latest-product__item">
                                          <div class="latest-product__item__pic">
                                              <img src="assets/img/latest-product/lp-2.jpg" alt="" />
                                          </div>
                                          <div class="latest-product__item__text">
                                              <h6>Crab Pool Security</h6>
                                              <span>$30.00</span>
                                          </div>
                                      </a>
                                      <a href="#" class="latest-product__item">
                                          <div class="latest-product__item__pic">
                                              <img src="assets/img/latest-product/lp-3.jpg" alt="" />
                                          </div>
                                          <div class="latest-product__item__text">
                                              <h6>Crab Pool Security</h6>
                                              <span>$30.00</span>
                                          </div>
                                      </a>
                                  </div>
                                  <div class="latest-prdouct__slider__item">
                                      <a href="#" class="latest-product__item">
                                          <div class="latest-product__item__pic">
                                              <img src="assets/img/latest-product/lp-1.jpg" alt="" />
                                          </div>
                                          <div class="latest-product__item__text">
                                              <h6>Crab Pool Security</h6>
                                              <span>$30.00</span>
                                          </div>
                                      </a>
                                      <a href="#" class="latest-product__item">
                                          <div class="latest-product__item__pic">
                                              <img src="assets/img/latest-product/lp-2.jpg" alt="" />
                                          </div>
                                          <div class="latest-product__item__text">
                                              <h6>Crab Pool Security</h6>
                                              <span>$30.00</span>
                                          </div>
                                      </a>
                                      <a href="#" class="latest-product__item">
                                          <div class="latest-product__item__pic">
                                              <img src="assets/img/latest-product/lp-3.jpg" alt="" />
                                          </div>
                                          <div class="latest-product__item__text">
                                              <h6>Crab Pool Security</h6>
                                              <span>$30.00</span>
                                          </div>
                                      </a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      
          <section class="from-blog spad">
              <div class="container">
                  <div class="row">
                      <div class="col-lg-12">
                          <div class="section-title from-blog__title">
                              <h2>From The Blog</h2>
                          </div>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-lg-4 col-md-4 col-sm-6">
                          <div class="blog__item">
                              <div class="blog__item__pic">
                                  <img src="assets/img/blog/blog-1.jpg" alt="" />
                              </div>
                              <div class="blog__item__text">
                                  <ul>
                                      <li><i class="fa fa-calendar-o"></i> May 4,2019</li>
                                      <li><i class="fa fa-comment-o"></i> 5</li>
                                  </ul>
                                  <h5><a href="#">Cooking tips make cooking simple</a></h5>
                                  <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-4 col-md-4 col-sm-6">
                          <div class="blog__item">
                              <div class="blog__item__pic">
                                  <img src="assets/img/blog/blog-2.jpg" alt="" />
                              </div>
                              <div class="blog__item__text">
                                  <ul>
                                      <li><i class="fa fa-calendar-o"></i> May 4,2019</li>
                                      <li><i class="fa fa-comment-o"></i> 5</li>
                                  </ul>
                                  <h5><a href="#">6 ways to prepare breakfast for 30</a></h5>
                                  <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-4 col-md-4 col-sm-6">
                          <div class="blog__item">
                              <div class="blog__item__pic">
                                  <img src="assets/img/blog/blog-3.jpg" alt="" />
                              </div>
                              <div class="blog__item__text">
                                  <ul>
                                      <li><i class="fa fa-calendar-o"></i> May 4,2019</li>
                                      <li><i class="fa fa-comment-o"></i> 5</li>
                                  </ul>
                                  <h5><a href="#">Visit the clean farm in the US</a></h5>
                                  <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section> */}
         
          <footer class="footer spad">
              <div class="container">
                  <div class="row">
                      <div class="col-lg-3 col-md-6 col-sm-6">
                          <div class="footer__about">
                              <div class="footer__about__logo">
                              <img className="w-40" src='assets/img/logoweb1.png' alt=''/>
                                  {/* <a href="#" class="logo">24H STORE</a> */}
                              </div>
                              <ul>
                                  <li><label className="font-bold">Adress: </label> DHSPKT TPHCM</li>
                                  <li><label className="font-bold">Phone: </label> 0359953717</li>
                                  <li><label className="font-bold">Email: </label> commoditegrocerystore@gmail.com</li>
                              </ul>
                          </div>
                      </div>
                      <div class="col-lg-4 col-md-6 col-sm-6 offset-lg-1 flex justify-center">
                          <div class="footer__widget w-3/5">
                              <h6>Trang web</h6>
                              <ul>
                                  <li><a href="#">Trang Chủ</a></li>
                                  <li><a href="#">Giới Thiệu</a></li>
                                  <li><a href="#">Liên Hệ</a></li>
                                 
                              </ul>
                          </div>
                      </div>
                      <div class="col-lg-4 col-md-12">
                          <div class="footer__widget">
                              <h6>Liên hệ chúng tôi ngay</h6>
                              <p>Cung cấp Email để nhận được các thông tin mới nhất từ chúng tôi</p>
                              <form action="#">
                                  <input type="text" placeholder="Enter your mail" />
                                  <button type="submit" class="site-btn">Subscribe</button>
                              </form>
                              <div class="footer__widget__social">
                                  <a href="#"><i class="fa fa-facebook"></i></a>
                                  <a href="#"><i class="fa fa-instagram"></i></a>
                                  <a href="#"><i class="fa fa-twitter"></i></a>
                                  <a href="#"><i class="fa fa-pinterest"></i></a>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-lg-12">
                          <div class="footer__copyright  justify-center flex">
                              <div class="footer__copyright__text"><p className="text-center">
        Copyright &copy;2021 All rights reserved | This Website is made with <i class="fa fa-heart" aria-hidden="true"></i> by <a href="#" target="_blank">Thuy Sang</a>
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