
import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { UserAuth } from "../context/AuthContext";
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Nav = ({act,setAct}) => {
    
    const Navigate = useNavigate()
    const {user, logOut} = UserAuth()
    const accessToken = localStorage.getItem("accessToken")
    const [cartActive, setCartActive] = useState(false)
    const [curPath, setCurPath] = useState(localStorage.getItem("currentPath") || "/")


    const handleSetPath =(data)=>{
    setCurPath(localStorage.getItem("currentPath"))

    }
    const handleSignOut =()=>{
        try {
           logOut();
           localStorage.removeItem("accessToken")
        } catch(error) {
            console.log(error)
        }
    }
if(cartActive){
    document.body.style.overflow = "hidden";
}else{
        document.body.style.overflow = "auto";
    
}
const navItems = [
    {
        icon:"<HomeIcon/>",
        path: "/",
        name: "Trang chủ"
    },
    {
        icon: "<FavoriteIcon/>",
        path: "/about",
        name: "Giới thiệu"
    },
    {
        icon: "<ContactsIcon/>",
        path: "/contact",
        name: "Liên hệ"
    }
]

    return ( 
        <>
        <ToastContainer />
         <div class="humberger__menu__wrapper">
              <div class="humberger__menu__logo">
                  <a href="#" className=" h-auto logo w-60 h-60 rounded-full truncate">
                    <img src='assets/img/logoweb2.png' alt=''/>
                  </a>
              </div>
              <div class="humberger__menu__cart flex flex-row">
                  <span
                  onClick={()=>setCartActive(!cartActive)}
                  >
                      <a><ShoppingCartIcon/></a>
                  </span>
                  <div class="header__cart__price">Vật phẩm <span>0đ</span></div>
              </div>
              <div class="humberger__menu__widget">
                  <div class="header__top__right__language">
                      <div>Tiếng việt</div>
                      <span class="arrow_carrot-down"></span>
                      <ul>
                          <li><a>Tiếng Việt</a></li>
                      </ul>
                  </div>
                  <div class="header__top__right__auth">
                      <Link to="/login"><i class="fa fa-user"></i> Đăng nhập</Link>
                      {/* <a href="#"><i class="fa fa-user"></i> Đăng nhập</a> */}
                  </div>
              </div>
              <nav class="humberger__menu__nav mobile-menu">
                  <ul>
        {
            navItems.map((data, index)=>(
                <li
                onClick={()=>{
                    console.log(data.path)
                    setCurPath(data.path)
                    handleSetPath(data)
                }}
                 key={index}
                  >
                <Link to={data.path}>
                    <span className={`${ curPath === data.path && "text-pink-500"} flex flex-row items-center gap-[2px] hover:text-pink-300`}>
                         {data.name}
                    </span>
                </Link>
                </li>
            ))}

                      {/* <li class="active"><Link to="/">Trang chủ</Link></li>
                      <li><Link to="/about">Giới thiệu</Link></li>
                      <li><Link to="/contact">Liên hệ</Link></li> */}
                  </ul>
              </nav>
              <div id="mobile-menu-wrap"></div>
              <div class="header__top__right__social">
                  <a href="https://www.facebook.com/profile.php?id=100086444417322"><i class="fa fa-facebook"></i></a>
                  <a href="#"><i class="fa fa-twitter"></i></a>
                  <a href="#"><i class="fa fa-linkedin"></i></a>
                  <a href="#"><i class="fa fa-pinterest-p"></i></a>
              </div>
              <div class="humberger__menu__contact">
                  <ul>
                      <li><i class="fa fa-envelope"></i> commoditegrocerystore@gmail.com</li>
                      <li>Free Ship cho đơn hàng lớn hơn 100k</li>
                  </ul>
              </div>
          </div>
         
          <header class="header fixed bg-white z-40 w-full">
              <div class="header__top">
                  <div class="container">
                      <div class="row">
                          <div class="col-lg-6 col-md-6">
                              <div class="header__top__left">
                                  <ul>
                                      <li><i class="fa fa-envelope"></i> commoditegrocerystore@gmail.com</li>
                                      <li>Free Ship cho đơn hàng lớn hơn 100k</li>
                                  </ul>
                              </div>
                          </div>
                          <div class="col-lg-6 col-md-6">
                              <div class="header__top__right flex flex-row justify-end items-center">
                                  <div class="header__top__right__social">
                                      <a href="https://www.facebook.com/profile.php?id=100086444417322"><i class="fa fa-facebook"></i></a>
                                      <a href="#"><i class="fa fa-twitter"></i></a>
                                      <a href="https://www.instagram.com/commodite.gs/?fbclid=IwAR1oY7KQ8muwybtTeeHWCWPAid4WWE-mHOAW6PIsqmAFVpSBwLxDIhHNlkY"><i class="fa fa-instagram"></i></a>
                                      <a href="#"><i class="fa fa-pinterest-p"></i></a>
                                  </div>
                                  <div class="header__top__right__language">
                                      <div>Tiếng việt</div>
                                      <span class="arrow_carrot-down"></span>
                                      <ul>
                                          <li><a>Tiếng việt</a></li>
                                      </ul>
                                  </div>
                                  {
                                    accessToken? 
                                    <div className="header__top__right__auth  flex items-center gap-5">
                                        <div className="flex flex-row gap-2 items-center">
                                            <div className="w-10 h-10 rounded-full truncate">
                                                <img className="w-10 h-10" src={user.photoURL} alt=""/>
                                            </div>
                                        <span className="font-light">{user.displayName}</span>
                                        </div>

                                        <div
                                        onClick={()=>{
                                            handleSignOut()
                                            toast("Bạn vừa đăng xuất tài khoản")
                                        }
                                        } className="cursor-pointer text-pink-500">
                                            <LogoutIcon />
                                        </div>
                                    </div>
                                    : 
                                    <div class="header__top__right__auth">
                                    <Link to="/login"><i class="fa fa-user"></i> Đăng nhập</Link>
                                      {/* <a href="#"><i class="fa fa-user"></i> Đăng nhập</a> */}
                                    </div>
                                  }
                                 
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="container">
                  <div class="row">
                      <div class="col-lg-3">
                          <div class="header__logo flex justify-center flex-col items-center">
                              {/* <a onClick={()=>Navigate("/")} class="cursor-pointer logo w-20 h-20 rounded-full truncate">
                              <img className='w-20 h-20' src='assets/img/logoweb2.png' alt=''/>
                              </a> */}
                              {/* <h1>
                              Commodité <br/>
                              Grocery Store
                              </h1> */}
                              <img className='w-32' src='assets/img/logoweb1.png' alt=''/>
                          </div>
                      </div>
                      <div class="col-lg-6 flex items-center">
                          <nav class="header__menu">
                              <ul>
                              {
                                navItems.map((data, index)=>(
                                    <li
                                    onClick={()=>{
                                    localStorage.setItem("currentPath",data.path)
                                    handleSetPath(data)
                                     }}
                                    key={index}
                                    >
                                        <Link to={data.path}>
                                            <span className={`${ curPath === data.path && "text-pink-500"} flex flex-row items-center gap-[2px] hover:text-pink-300`}>
                                            {data.name}
                                            </span>
                                        </Link></li>
                                ))}
                                  {/* <li class="active"><Link to="/">Trang chủ</Link></li>
                                  <li><Link to="/about">Giới thiệu</Link></li>
                                  <li><Link to="/contact">Liên hệ</Link></li> */}
                              </ul>
                          </nav>
                      </div>
                      <div class="col-lg-3 flex flex-col justify-center">
                          <div class="header__cart flex justify-end gap-4 items-center">
                          <span
                            onClick={()=>setAct(!act)}
                            >
                                <a className='cursor-pointer'><ShoppingCartIcon/></a>
                            </span>
                              <div class="header__cart__price">Vật phẩm: <span>0đ</span></div>
                          </div>
                      </div>
                  </div>
                  <div class="humberger__open">
                      <i class="fa fa-bars"></i>
                  </div>
              </div>
          </header>
        </>
     );
}
 
export default Nav;