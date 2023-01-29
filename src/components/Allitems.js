// import db from "../db/productdb.json"
import { collection, doc, getDocs, onSnapshot, query, addDoc, updateDoc } from "firebase/firestore"; 
import {db} from "../firebase";
import SearchIcon from '@mui/icons-material/Search';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserAuth } from "../context/AuthContext";
import { v4 as uuidv4 } from 'uuid';

import { useState, useEffect } from "react"
import { Search } from "@mui/icons-material";

const Allitems = () => {
    const {user, logOut} = UserAuth()
    const [allPosts, setAllPosts] = useState([])
    const [searchInput, setSearchIput] = useState("")  
    const [filterName, setFilterName] = useState("Tất cả")
    const [saveCartItems, setSaveCartItems]= useState(JSON.parse(localStorage.getItem("cart-items")) || [])
    const [activeId, setActiveId] = useState(0)
    const [myCart, setMyCart]=useState(JSON.parse(localStorage.getItem("myCart")) || [])


//-----------------------------filter----------------------------

   const listFiltered = allPosts.filter((data)=>{
        return data.name.toLowerCase().includes(searchInput.toLowerCase())
    })
  // database-firebase------------------------------
    useEffect(()=>{
        const q = query(collection(db,'posts'));
        const unsubcrible = onSnapshot(q,(querySnapshot)=>{
            let posts = [];
            querySnapshot.forEach((doc) => {
                posts.push({...doc.data(), id:doc.id})
                });
                setAllPosts(posts)

        })
        return ()=> unsubcrible()
    },[])

  
//---------------------------update-----------------------------------
    const update = async(newItem)=>{
        // alert("ok")
        const ownCart = JSON.parse(localStorage.getItem("myCart"))
           await updateDoc(doc(db,"shoppingcart", ownCart.id),{
                carts: newItem,
                    })
                    
    }
    const handleAdd = async (dt)=>{
        if(user){
           await addDoc(collection(db,"UserCarts"),{
                userId: user.uid,
                // id:doc.id,   
                name: dt.name,
                price: dt.price,
                links:dt.links,
                role:dt.role,
                count:1
            
            })
            //  const newItem = [...JSON.parse(localStorage.getItem("myCart")).carts, {
            //     id:uuidv4(),
            //     name: dt.name,
            //     price: dt.price,
            //     links:dt.links,
            //     role:dt.role,
            //     count:1
            // }]   
            
              
            // update(newItem)
        }
        else{
            toast("bạn cần đăng nhập để thêm sản phẩm")
        }
       

    //    setTests(tests[0].carts.push({text:"ok"}))
    }
    
    const fil = [
        {
            name: "Tất cả",
            isActive: true
        },
        {
            name: "Thức ăn",
            isActive: false
        },
        {
            name: "Thức uống",
            isActive: false
        },
        // {
        //     name: "Vật phẩm",
        //     isActive: false
        // }
    ]
    return ( 
        <>
        <ToastContainer/>
           <section className="featured spad z-40 pt-20 px-2 lg:pt-40">
        <div className="container">
            <div className="row px-4">
                <div className="mb-2 mt-5 flex flex-row items-center justify-left gap-2 md:gap-8 flex-wrap-reverse">
                    <div className=" font-bold">
                        <ul className="flex flex-row gap-2">
                            {/* <li className="active" >Tất cả</li>
                            <li>Thức ăn</li>
                            <li>Thức uống</li>
                            <li>Vật phẩm</li> */}
                            {
                              fil.map((data,index)=>(
                            <li 
                            onClick={()=>{
                              setActiveId(index)
                              setFilterName(data.name)
                            //   console.log(data.name)
                            }}
                            key={index}
                             className={`font-bold p-2 cursor-pointer ${index === activeId ? "active bg-blue-500 text-white":"bg-white"}`}>{data.name}</li>
                              ))
                            }
                        </ul>
                    </div>
                    <div className="flex justify-center">
                        <div className="xl:w-96">
                            <div className="input-group relative flex flex-wrap gap-2 items-stretch w-full">
                                <input
                                value={searchInput}
                                onChange={(e)=>{
                                    setSearchIput(e.target.value)
                                }}
                                 type="search" 
                                 className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2"/>
                                <button className=" inline-block px-4 py-1.5 bg-blue-500 text-white font-medium hover:bg-pink-500 rounded-lg hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
                                <SearchIcon/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                searchInput &&
            <div className="row drop-shadow-sm ">
                {
                    listFiltered.map((dt, index)=>(
                  <div key={index} className=" hover:scale-95 duration-300 col-lg-3 col-md-4 col-sm-6 border-gray-100 bg-white border-[2px] pt-2">
                    <div className="featured__item hover:text-pink-500">
                        <div className="featured__item__pic set-bg" data-setbg={dt.links}>
                            <img className="hover:scale-95 duration-300" src={dt.links} alt=""/>
                            <ul className="featured__item__pic__hover">
                                {/* <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                <li><a href="#"><i className="fa fa-retweet"></i></a></li> */}
                                <li className="cursor-pointer"
                                onClick={()=>
                                  handleAdd(dt)
                                  
                              }
                                >
                                  <a><i className="fa fa-shopping-cart"></i></a></li>
                            </ul>
                        </div>
                        <div className="featured__item__text">
                            <h6><a href="#">{dt.name}</a></h6>
                            <h5>{dt.price}đ</h5>
                        </div>
                    </div>
                </div>
                ))
                }
             
            </div>
                
            
            }
            {
                !searchInput &&
                <div className="row drop-shadow-sm">
              { filterName === "Tất cả" &&
                  allPosts.map((dt, index)=>(
                    <div key={index} className=" hover:scale-95 duration-300 col-lg-3 col-md-4 col-sm-6 border-gray-100 bg-white border-[2px] pt-2">
                      <div className="featured__item hover:text-pink-500">
                          <div className="featured__item__pic set-bg" data-setbg={dt.links}>
                            {/* <div className="bg-gradient-to-t from-transparent to-black opacity-50 absolute top-0 left-0 w-full h-full"></div> */}
                              <img className="hover:scale-95 duration-300" src={dt.links} alt=""/>
                              <ul className="featured__item__pic__hover">
                                  {/* <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                  <li><a href="#"><i className="fa fa-retweet"></i></a></li> */}
                                  <li className="cursor-pointer"
                                  onClick={()=>
                                    handleAdd(dt)
                                }
                                  >
                                    <a>
                                        <i className="fa fa-shopping-cart"></i></a></li>
                              </ul>
                          </div>
                          <div className="featured__item__text">
                              <h6><a href="#">{dt.name}</a></h6>
                              <h5>{dt.price}đ</h5>
                          </div>
                      </div>
                  </div>
                  ))
              }
              { filterName === "Thức ăn" &&
                  allPosts.map((dt, index)=>(
                      dt.role === "thucan" &&
                          
                           <div key={index} className=" hover:scale-95 duration-300 col-lg-3 col-md-4 col-sm-6 border-gray-100 bg-white border-[2px] pt-2">
                      <div className="featured__item">
                          <div className="featured__item__pic set-bg" data-setbg={dt.links}>
                              <img className="hover:scale-95 duration-300" src={dt.links} alt=""/>
                               <ul className="featured__item__pic__hover">
                                  {/* <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                  <li><a href="#"><i className="fa fa-retweet"></i></a></li>  */}
                                  <li className="cursor-pointer"
                                  onClick={()=>
                                    handleAdd(dt)
                                }
                                  ><a><i className="fa fa-shopping-cart"></i></a></li>
                              </ul>
                          </div>
                          <div className="featured__item__text">
                              <h6><a href="#">{dt.name}</a></h6>
                              <h5>{dt.price}đ</h5>
                          </div>
                      </div>
                  </div>   
                  ))}
                  { filterName === "Thức uống" &&
                  allPosts.map((dt, index)=>(
                      dt.role === "thucuong" &&
                          
                           <div key={index} className=" hover:scale-95 duration-300 col-lg-3 col-md-4 col-sm-6 border-gray-100 bg-white border-[4px] pt-2">
                      <div className="featured__item">
                          <div className="hover:scale-95 duration-300 featured__item__pic set-bg" data-setbg={dt.links}>
                              <img src={dt.links} alt=""/>
                              <ul className="featured__item__pic__hover">
                                  {/* <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                  <li><a href="#"><i className="fa fa-retweet"></i></a></li> */}
                                  <li className="cursor-pointer"
                                  onClick={()=>
                                    handleAdd(dt)
                                }
                                  ><a><i className="fa fa-shopping-cart"></i></a></li>
                              </ul>
                          </div>
                          <div className="featured__item__text">
                              <h6><a href="#">{dt.name}</a></h6>
                              <h5>{dt.price}đ</h5>
                          </div>
                      </div>
                  </div>   
                  ))}
                  {/* { filterName === "Vật phẩm" &&
                  allPosts.map((dt, index)=>(
                      dt.role === "vatpham" &&
                          
                           <div key={index} className=" hover:scale-95 duration-300 col-lg-3 col-md-4 col-sm-6 border-gray-100 bg-white border-[4px] pt-2">
                      <div className="featured__item">
                          <div className="featured__item__pic set-bg" data-setbg={dt.links}>
                              <img className="hover:scale-110 duration-300" src={dt.links} alt=""/>
                              <ul className="featured__item__pic__hover">
                                  <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                  <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                  <li className="cursor-pointer"
                                  onClick={()=>
                                    handleAdd(dt)
                                }
                                  ><a><i className="fa fa-shopping-cart"></i></a></li>
                              </ul>
                          </div>
                          <div className="featured__item__text">
                              <h6><a href="#">{dt.name}</a></h6>
                              <h5>{dt.price}đ</h5>
                          </div>
                      </div>
                  </div>   
                  ))} */}
            </div>
            }
            
        </div>
    </section>
        </>
     
     );
}
 
export default Allitems;