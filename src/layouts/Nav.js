
import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { UserAuth } from "../context/AuthContext";
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { onSnapshot, query, collection } from "firebase/firestore"; 
import {db} from "../firebase"
import { async } from "@firebase/util";



const Nav = ({act,setAct}) => {
  
    const Navigate = useNavigate()
    const {user, logOut} = UserAuth()
    const accessToken = localStorage.getItem("accessToken")
    const [cartActive, setCartActive] = useState(false)
    const [curPath, setCurPath] = useState(localStorage.getItem("currentPath") || "/")
    const [state, setState] = useState(false)
    const [allPosts,setAllPosts] = useState()
	const [myCart, setMyCart]=useState([])

    
    setTimeout(() => {
        setState(!state)
    }, [1500]);
    
        // ----------------getDataFirebase----------------------
	useEffect(()=>{
        const q = query(collection(db,'UserCarts'));
        const unsubcrible = onSnapshot(q,(querySnapshot)=>{
            let carts = [];
            querySnapshot.forEach((doc) => {
                carts.push({...doc.data(), id:doc.id})
                });
                setAllPosts(carts)

        })
        return ()=> unsubcrible()
    },[])
	// -------------------------getMyCart-------------------------
			useEffect(()=>{
				setTimeout(()=>{
					// console.log(allItems)
					const myCart = allPosts.filter((data)=>{
					return data.userId === user.uid
					})
					console.log("mycart: ", myCart)
					setMyCart(myCart)
				},[100])
			},[allPosts])

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
    const handleCartPopup =()=>{
        if(!user){
            toast("Bạn cần phải đăng nhập để sử dụng")
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
        <ToastContainer/>
         <div className="humberger__menu__wrapper">
              <div className="humberger__menu__logo">
                  <a href="#" className=" h-auto logo w-60 h-60 rounded-full truncate">
                    <img src='assets/img/logoweb1.png' alt=''/>
                  </a>
              </div>
              {/* <div className="humberger__menu__cart flex flex-row">
                  <span
                  onClick={()=>setCartActive(!cartActive)}
                  >
                      <a><ShoppingCartIcon/></a>
                  </span>
                  <div className="header__cart__price">Vật phẩm <span>0đ</span></div>
              </div> */}
              <div className="humberger__menu__widget">
                  {/* <div className="header__top__right__language">
                      <div>Tiếng việt</div>
                      <span className="arrow_carrot-down"></span>
                      <ul>
                          <li><a>Tiếng Việt</a></li>
                      </ul>
                  </div> */}
                  <div className="header__top__right__auth">
                      <Link to="/login"><i className="fa fa-user"></i> Đăng nhập</Link>
                      {/* <a href="#"><i className="fa fa-user"></i> Đăng nhập</a> */}
                  </div>
              </div>
              
              <nav className="block w-full text-white z-50">
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
                                <span className={`${ curPath === data.path && "text-pink-500"} text-black flex flex-row items-center gap-[2px] hover:scale-95 duration-300`}>
                                    {data.name}
                                </span>
                            </Link>
                            </li>
                        ))}

                      {/* <li className="active"><Link to="/">Trang chủ</Link></li>
                      <li><Link to="/about">Giới thiệu</Link></li>
                      <li><Link to="/contact">Liên hệ</Link></li> */}
                  </ul>
              </nav>
              <div id="mobile-menu-wrap"></div>
              <div className="header__top__right__social">
                  <a href="https://www.facebook.com/profile.php?id=100086444417322"><i className="fa fa-facebook"></i></a>
                  <a href="#"><i className="fa fa-twitter"></i></a>
                  <a href="#"><i className="fa fa-linkedin"></i></a>
                  <a href="#"><i className="fa fa-pinterest-p"></i></a>
              </div>
              <div className="humberger__menu__contact">
                  <ul>
                      <li><i className="fa fa-envelope"></i> commoditegrocerystore@gmail.com</li>
                      <li>Free Ship cho đơn hàng lớn hơn 100k</li>
                  </ul>
              </div>
          </div>
         
          <header className="header fixed bg-blue-500 z-40 w-full">
              <div className="header__top">
                  <div className="container">
                      <div className="row">
                        {
                            window.location.pathname != "shoppingcart" &&
                            <div className="col-lg-6 col-md-6 flex items-center">
                              <div className="header__top__left ">
                                  <ul>
                                      <li><i className="fa fa-envelope"></i> commoditegrocerystore@gmail.com</li>
                                      <li>Free Ship cho đơn hàng lớn hơn 100k</li>
                                  </ul>
                              </div>
                          </div>
                        }
                          
                          <div className="col-lg-6 col-md-6">
                              <div className="header__top__right flex flex-row justify-end items-center">
                                  <div className="header__top__right__social">
                                      <a href="https://www.facebook.com/profile.php?id=100086444417322"><i className="fa fa-facebook"></i></a>
                                      <a href="#"><i className="fa fa-twitter"></i></a>
                                      <a href="https://www.instagram.com/commodite.gs/?fbclid=IwAR1oY7KQ8muwybtTeeHWCWPAid4WWE-mHOAW6PIsqmAFVpSBwLxDIhHNlkY"><i className="fa fa-instagram"></i></a>
                                      <a href="#"><i className="fa fa-pinterest-p"></i></a>
                                  </div>
                                  <div className="header__top__right__language">
                                      <div>Tiếng việt</div>
                                      <span className="arrow_carrot-down"></span>
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
                                            Navigate("/")
                                            localStorage.removeItem("myCart")
                                        }
                                        } className="cursor-pointer text-pink-500">
                                            <LogoutIcon />
                                        </div>
                                    </div>
                                    : 
                                    <div className="header__top__right__auth">
                                    <Link to="/login"><i className="fa fa-user"></i> Đăng nhập</Link>
                                      {/* <a href="#"><i className="fa fa-user"></i> Đăng nhập</a> */}
                                    </div>
                                  }
                                 
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="container">
                  <div className="row">
                      <div className="col-lg-3">
                          <div className="header__logo flex justify-center flex-col items-center">
                              {/* <a onClick={()=>Navigate("/")} className="cursor-pointer logo w-20 h-20 rounded-full truncate">
                              <img className='w-20 h-20' src='assets/img/logoweb2.png' alt=''/>
                              </a> */}
                              {/* <h1>
                              Commodité <br/>
                              Grocery Store
                              </h1> */}
                              <img className='w-32' src='assets/img/logoweb1.png' alt=''/>
                          </div>
                      </div>
                      <div className="col-lg-6 flex items-center">
                          <nav className="header__menu">
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
                                            <span className={`${ curPath === data.path ? "text-black":"text-white"} flex flex-row items-center gap-[2px] hover:scale-95 duration-300`}>
                                            {data.name}
                                            </span>
                                        </Link></li>
                                ))}
                                  {/* <li className="active"><Link to="/">Trang chủ</Link></li>
                                  <li><Link to="/about">Giới thiệu</Link></li>
                                  <li><Link to="/contact">Liên hệ</Link></li> */}
                              </ul>
                          </nav>
                      </div>
                      <div className="col-lg-3 flex flex-col justify-center ">
                          <div className="header__cart flex justify-start md:justify-end ">
                            <div 
                            onClick={handleCartPopup}
                            className="cursor-pointer border-white border-4 text-black p-2 rounded-xl px-3 flex gap-2 items-center">
                                {
                                    user ?
                                    <Link to="/shoppingcart">
                                        {
                                            user &&
                                            <div 
                                            className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center absolute right-2 top-4">
                                                <span className="text-white font-bold">
                                                {myCart.length}
                                                </span>
                                            </div>
                                        }
                                        <span>
                                            <a className='cursor-pointer text-white'><ShoppingCartCheckoutIcon/></a>
                                        </span>
                                        <div className="header__cart__price text-white uppercase font-bold">Giỏ hàng</div>
                                    </Link>
                                    :
                                    <>
                                      <span>
                                    <a className='cursor-pointer text-white'><ShoppingCartCheckoutIcon/></a>
                                    </span>
                                    <div className="header__cart__price text-white uppercase font-bold">Giỏ hàng</div>
                                    </>
                                  
                                }
                                    
                            </div>
                          </div>
                      </div>
                  </div>
                  <div className="humberger__open">
                      <i className="fa fa-bars"></i>
                  </div>
              </div>
          </header>
        </>
     );
}
 
export default Nav;