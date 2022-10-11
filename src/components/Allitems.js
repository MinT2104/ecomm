import db from "../db/productdb.json"

import { useState } from "react"

const Allitems = () => {
    const Cart = []

    const data = Object.values(db).map((data)=>data)
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
        <section class="featured spad z-40">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title">
                        <h2>Sản Phẩm chính</h2>
                    </div>
                    <div class="featured__controls">
                        <ul>
                            {/* <li class="active" >Tất cả</li>
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
            <div class="row featured__filter">
              { filterName === "Tất cả" &&
                  data.map((dt, index)=>(
                      <div key={index} class="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
                      <div class="featured__item">
                          <div class="featured__item__pic set-bg" data-setbg={dt.links}>
                              <img src={dt.links} alt=""/>
                              <ul class="featured__item__pic__hover">
                                  <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                  <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                                  <li
                                  onClick={()=>
                                    handleAddCartItems(dt)
                                }
                                  ><a><i class="fa fa-shopping-cart"></i></a></li>
                              </ul>
                          </div>
                          <div class="featured__item__text">
                              <h6><a href="#">{dt.name}</a></h6>
                              <h5>{dt.price}đ</h5>
                          </div>
                      </div>
                  </div>
                  ))
              }
              { filterName === "Thức ăn" &&
                  data.map((dt, index)=>(
                      dt.role === "thucan" &&
                          
                           <div key={index} class="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
                      <div class="featured__item">
                          <div class="featured__item__pic set-bg" data-setbg={dt.links}>
                              <img src={dt.links} alt=""/>
                              <ul class="featured__item__pic__hover">
                                  <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                  <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                                  <li
                                  onClick={()=>
                                    handleAddCartItems(dt)
                                }
                                  ><a><i class="fa fa-shopping-cart"></i></a></li>
                              </ul>
                          </div>
                          <div class="featured__item__text">
                              <h6><a href="#">{dt.name}</a></h6>
                              <h5>{dt.price}đ</h5>
                          </div>
                      </div>
                  </div>   
                  ))}
                  { filterName === "Thức uống" &&
                  data.map((dt, index)=>(
                      dt.role === "thucuong" &&
                          
                           <div key={index} class="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
                      <div class="featured__item">
                          <div class="featured__item__pic set-bg" data-setbg={dt.links}>
                              <img src={dt.links} alt=""/>
                              <ul class="featured__item__pic__hover">
                                  <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                  <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                                  <li
                                  onClick={()=>
                                    handleAddCartItems(dt)
                                }
                                  ><a><i class="fa fa-shopping-cart"></i></a></li>
                              </ul>
                          </div>
                          <div class="featured__item__text">
                              <h6><a href="#">{dt.name}</a></h6>
                              <h5>{dt.price}đ</h5>
                          </div>
                      </div>
                  </div>   
                  ))}
                  { filterName === "Vật phẩm" &&
                  data.map((dt, index)=>(
                      dt.role === "vatpham" &&
                          
                           <div key={index} class="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
                      <div class="featured__item">
                          <div class="featured__item__pic set-bg" data-setbg={dt.links}>
                              <img src={dt.links} alt=""/>
                              <ul class="featured__item__pic__hover">
                                  <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                  <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                                  <li
                                  onClick={()=>
                                    handleAddCartItems(dt)
                                }
                                  ><a><i class="fa fa-shopping-cart"></i></a></li>
                              </ul>
                          </div>
                          <div class="featured__item__text">
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