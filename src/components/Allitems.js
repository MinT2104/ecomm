// import db from "../db/productdb.json"
import { collection, doc, getDocs, onSnapshot, query, deleteDoc } from "firebase/firestore"; 
import {db} from "../firebase";

import { useState, useEffect } from "react"

const Allitems = () => {
    const [allPosts, setAllPosts] = useState([])

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




    // database-firebase------------------------------
    const Cart = []

    // const data = Object.values(db).map((data)=>data)
    // console.log(data)
    const [filterName, setFilterName] = useState("Tất cả")
    const [saveCartItems, setSaveCartItems]= useState(JSON.parse(localStorage.getItem("cart-items")) || [])
    const [activeId, setActiveId] = useState(0)

    localStorage.setItem("cart-items", JSON.stringify(saveCartItems))

    const handleAddCartItems =(item)=>{
            setSaveCartItems(prev=>[...prev,  {
                id: item.id,
                name: item.name,
                links: item.links,
                price: item.price,
                role: item.role
                }])

    }
    localStorage.setItem("cart-items", JSON.stringify(saveCartItems))
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
        {
            name: "Vật phẩm",
            isActive: false
        }
    ]
    return ( 
        <section className="featured spad z-40 pt-40">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title">
                        <h2>Sản Phẩm chính</h2>
                    </div>
                    <div className="featured__controls">
                        <ul>
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
                             className={index === activeId ? "active":""}>{data.name}</li>
                              ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row featured__filter drop-shadow-sm">
              { filterName === "Tất cả" &&
                  allPosts.map((dt, index)=>(
                    <div key={index} className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat  bg-white">
                      <div className="featured__item">
                          <div className="featured__item__pic set-bg" data-setbg={dt.links}>
                              <img className="hover:scale-110 duration-300" src={dt.links} alt=""/>
                              <ul className="featured__item__pic__hover">
                                  <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                  <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                  <li className="cursor-pointer"
                                  onClick={()=>
                                    handleAddCartItems(dt)
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
                  ))
              }
              { filterName === "Thức ăn" &&
                  allPosts.map((dt, index)=>(
                      dt.role === "thucan" &&
                          
                           <div key={index} className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat bg-white">
                      <div className="featured__item">
                          <div className="featured__item__pic set-bg" data-setbg={dt.links}>
                              <img className="hover:scale-110 duration-300" src={dt.links} alt=""/>
                              <ul className="featured__item__pic__hover">
                                  <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                  <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                  <li className="cursor-pointer"
                                  onClick={()=>
                                    handleAddCartItems(dt)
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
                          
                           <div key={index} className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat bg-white">
                      <div className="featured__item">
                          <div className="hover:scale-110 duration-300 featured__item__pic set-bg" data-setbg={dt.links}>
                              <img src={dt.links} alt=""/>
                              <ul className="featured__item__pic__hover">
                                  <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                  <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                  <li className="cursor-pointer"
                                  onClick={()=>
                                    handleAddCartItems(dt)
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
                  { filterName === "Vật phẩm" &&
                  allPosts.map((dt, index)=>(
                      dt.role === "vatpham" &&
                          
                           <div key={index} className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat bg-white">
                      <div className="featured__item">
                          <div className="featured__item__pic set-bg" data-setbg={dt.links}>
                              <img className="hover:scale-110 duration-300" src={dt.links} alt=""/>
                              <ul className="featured__item__pic__hover">
                                  <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                  <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                  <li className="cursor-pointer"
                                  onClick={()=>
                                    handleAddCartItems(dt)
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
            </div>
        </div>
    </section>
     );
}
 
export default Allitems;