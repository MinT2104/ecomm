import { UserAuth } from "../context/AuthContext";
import { useState } from "react";
import { Link } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";
import ClearIcon from '@mui/icons-material/Clear';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NavMod = (props) => {
    const Navigate = useNavigate()
    const {user, logOut} = UserAuth()
    const accessToken = localStorage.getItem("accessToken")

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
          {
           props.navMobieAct === true ?
            <> 
           
         <div className={`bg-gray-200 w-72 z-[99] h-screen fixed ease-in-out duration-300
         ${props.navMobieAct ? "translate-x-0" : "translate-x-full"}`
        }
         >
         <div
            onClick={()=>props.setNavMobieAct(false)}
            className="flex justify-end p-2">
                <ClearIcon/>
            </div>
              <div 
              className="humberger__menu__logo flex items-center justify-center items-center">
                  <a href="/" className=" h-auto logo w-32 h-32 rounded-full truncate">
                    <img src='assets/img/logoweb1.png' alt=''/>
                  </a>
              </div>

              {/* <div className="flex justify-center items-center"> */}
                <nav className="block w-full text-white z-50">
                  <ul className="w-fit mx-auto">
                    {
                        navItems.map((data, index)=>(
                            <li
                            onClick={()=>{
                            props.setNavMobieAct(false)
                            }}
                            className={`p-2`}
                            key={index}
                            >
                            <Link to={data.path}>
                                <span className={`font-bold flex flex-row items-center gap-[2px]  hover:scale-95 duration-300`}>
                                    {data.name}
                                </span>
                            </Link>
                            </li>
                        ))}


                  </ul>
              </nav>
              <div className="py-10">
                 
                  {
                                    accessToken? 
                                    <div className="header__top__right__auth  flex items-center gap-5 w-fit mx-auto p-2 rounded-full justify-center bg-gray-300">
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
                                            props.setNavMobieAct(false)
                                            localStorage.removeItem("myCart")
                                            Navigate('/')
                                        }
                                        } className="cursor-pointer text-pink-500">
                                            <LogoutIcon />
                                        </div>
                                    </div>
                                    : 
                                    <div className="p-2 bg-blue-500 w-1/2 mx-auto rounded-full">
                                    <div
                                    onClick={()=>props.setNavMobieAct(false)}
                                    className="header__top__right__auth flex flex-row justify-center gap-2">
                                    <Link to="/login"><i className="fa fa-user text-white"></i><span className="text-white"> Đăng nhập</span></Link>
                                      {/* <a href="#"><i className="fa fa-user"></i> Đăng nhập</a> */}
                                    </div>
                                    </div>
                                  }
              </div>
              <div className="humberger__menu__contact">
                  <ul>
                      <li className="text-center"><i className="fa fa-envelope"></i> commoditegrocerystore@gmail.com</li>
                      <li className="text-center">Free Ship cho đơn hàng lớn hơn 100k</li>
                  </ul>
              </div>
              <div className="flex flex-row items-center justify-center gap-10 py-8">
                  <a href="https://www.facebook.com/profile.php?id=100086444417322"><i className="fa fa-facebook"></i></a>
                  <a href="https://www.instagram.com/commodite.gs/?fbclid=IwAR1oY7KQ8muwybtTeeHWCWPAid4WWE-mHOAW6PIsqmAFVpSBwLxDIhHNlkY"><i className="fa fa-instagram"></i></a>
              </div>
          </div>
            </>
 
          : null
        }
        </>
     );
}
 
export default NavMod;