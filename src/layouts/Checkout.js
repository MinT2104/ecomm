// import { Input } from "@mui/material";
import {useEffect ,useState} from "react"
import { UserAuth } from "../context/AuthContext";
import { onSnapshot, query, collection,addDoc,deleteDoc,doc } from "firebase/firestore"; 
import {db} from "../firebase"
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router";


const Checkout = () => {
    const navigate = useNavigate()
    const {user, logOut} = UserAuth()
    const [myCart,setMyCart] = useState([])
    const [allPosts,setAllPosts] = useState([])
    const [shipping, setShipping] = useState(0)
    const [name, setName] = useState("")
    const [numberPhone, setNumberPhone] = useState("")
    const [address, setAddress] = useState("")
    const [province, setProvince] = useState("")
    // const [town, setTown] = useState("")
    // console.log(province)
// -------------------------------------formater--------------------------------
        const formatter = new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
            minimumFractionDigits: 0
        })
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
	// console.log(allPosts)
    // ---------------------getAllItem---------------------
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

    // -------------------Total--------------------
    const x = myCart.map((dt)=>{
		return {price: dt.price, count: dt.count}
	})
	let S=0
	 for( let i=1; i<= x.length; i++){
	S += +x[i-1].price.replace(/,/g, '')*x[i-1].count
	}
    // -------------------------allIn4-------------------------
    // const in4 = {
    //     name: name,
    //     numberPhone: numberPhone,
    //     address: address,
    //     province: province,
    //     // town: town,
    //     item: myCart,
    //     userName: user.name,
    //     total: S>100000? formatter.format(S) : formatter.format(S+15000)
    // }
    const handleAddOrder = ()=>{
        // alert("ok")
        let time = new Date();
        if( name && numberPhone && address && province !== "Tỉnh/Thành phố" && myCart && user.uid ){
            // if(user && S){
             addDoc(collection(db,"order"),
             {
             name: name,
             numberPhone: numberPhone,
             address: address,
             province: province,
            //  town: town,
             item: myCart,
             total: S>100000? formatter.format(S) : formatter.format(S+5000),
             day: time.toLocaleDateString('vi-VN'),
             isConfirm: false,
             userId: user.uid,
             }
             )
        // }
        myCart.forEach((data)=>{
             deleteDoc(doc(db,"UserCarts",data.id))
        })
        navigate("/")
        toast("Bạn đã đặt hàng thành công")
    }
    
    else{
        toast("bạn cần nhập đầy đủ thông tin")
    }
}

    return ( 
        <>
        <ToastContainer/>
           <div className="w-full h-screen z-40 pt-12 lg:pt-40 bg-gray-300">
		<div className="z-50 w-full lg:w-4/5 h-fit lg:h-[550px] bg-white mt-8 drop-shadow-2xl mx-auto lg:gap-0 gap-10 flex-col lg:flex-row flex lg:truncate">
            <div className="lg:w-1/2 w-full bg-gradient-to-r from-transparent to-gray-50">
                <div className="h-10 flex items-center justify-center mt-4">
                    <h1 className="font-bold text-xl text-center uppercase text-pink-500">Thông tin giao hàng</h1>
                </div>
                <div className="w-2/3 h-full flex flex-col justify-start pt-4 gap-10 mx-auto">
                    <div className="w-full flex-col flex justify-start items-left font-medium mx-auto"> 
                        <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Họ và tên" className="w-full border-[1px] border-gray-300 p-2"/>
                    </div> 
                    <div className="w-full flex-col flex justify-start items-left font-medium mx-auto"> 
                        <input value={numberPhone} onChange={(e)=>setNumberPhone(e.target.value)} placeholder="Số điện thoại" className="w-full border-[1px] border-gray-300 p-2"/>
                    </div>
                    <div className="w-full flex-col flex justify-start items-left font-medium mx-auto"> 
                        <input value={address} onChange={(e)=>setAddress(e.target.value)} placeholder="Địa chỉ" className="w-full border-[1px] border-gray-300 p-2"/>
                    </div> 
                    
                    <div className="w-full flex-col flex justify-start items-left font-medium mx-auto">
                        <select
                        value={province}
                        onChange={(e)=>setProvince(e.target.value)}
                        className="w-full border-[1px] border-gray-300 py-2">
                            <option>ĐH Sư Phạm Kỹ Thuật TPHCM</option>
                            {/* <option>Thủ đức</option>
                            <option>Thành phố Hồ Chí Minh</option> */}
                        </select>
                    </div>
                    {/* <div className="w-full flex-col flex justify-start items-left font-medium mx-auto">
                        <select
                        value={town}
                        onChange={(e)=>setTown(e.target.value)}
                        className="w-2/3 border-[1px] border-gray-300 py-2">
                            <option>Quận/Huyện</option>
                            <option>Quận 9</option>
                        </select>
                    </div> */}
                    {/* <div className="w-full flex-col flex justify-start items-left font-medium mx-auto">
                        <select className="w-2/3 border-[1px] border-gray-300 py-2">
                            <option>Phường/Xã</option>
                            <option>Dĩ An</option>
                        </select>
                    </div> */}
                    
                </div>
              
            </div>
            <div className=" lg:w-1/2 w-full  h-full items-center justify-center flex bg-gradient-to-r from-gray-50 to-gray-100">
                <div className=" p-2 lg:w-4/5 w-full pb-4 lg:pb-0 h-4/5 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] bg-white rounded-lg flex flex-col justify-between">
                    <div>
                         <div className="flex justify-center p-2 bg-gray-500">
                        <span className="font-medium uppercase text-white">Đơn hàng</span>
                        </div>
                    {/* <hr className="text-xl w-4/5 mx-auto"/> */}
                        <div className="py-2 bg-gray-400 max-h-40 overflow-auto flex gap-1 flex-col px-1">
                        {myCart &&
                        myCart.map((data)=>(
                            <div key={data.id} className="flex flex-row justify-between px-4 items-center bg-white rounded">
                                <h1 className="font-medium w-2/3 truncate">{data.name}</h1>
                                    <div className="flex flex-row justify-between gap-4 w-24">
                                        <div>{data.count}</div><div>{formatter.format(+data.price.replace(/,/g, '')*data.count)}</div>
                                    </div>
                                </div>
                        )

                        )
                    }
                        </div>
                    {/* <hr className="text-xl w-4/5 mx-auto"/> */}
                        <div className="flex flex-col p-2 px-4 gap-1">
                            <div className="flex flex-row justify-between "><h1 className="font-bold">Tạm tính:</h1><span className="text-pink-500">{formatter.format(S)}</span></div>
                            <div className="flex flex-row justify-between"><h1 className="font-bold">Giảm:</h1><span className="text-pink-500">{formatter.format(0)}</span></div>
                            <div className="flex flex-row justify-between"><h1 className="font-bold">Phí ship:</h1><span className="text-pink-500"> 
                            {
                                    S>100000? formatter.format(0) : formatter.format(5000)
                                }
                                </span></div>
                        </div>
                    </div>
                    <div>
                        <div className="w-full h-20 flex items-center justify-center">
                            <div className="w-3/5 h-2/3 bg-pink-300 rounded-xl flex items-center justify-center font-bold">
                                <span>Thanh toán khi nhận hàng</span>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-5 md:my-0 my-10 md:flex-row w-full h-16">
                            <div className="w-1/2 h-full flex items-center justify-center">
                                <div className="text-pink-500 text-xl">
                                    <span className="font-bold text-black">Tổng tiền: </span>
                                {
                                    S>100000? formatter.format(S) : formatter.format(S+5000)
                                }
                                </div>
                            </div>
                            <div className="w-1/2 h-full">
                            <button
                            onClick={handleAddOrder}
                            className="text-white p-3 bg-blue-500 cursor-auto w-2/3 rounded-lg mx-auto flex flex-row items-center gap-2 justify-center">		
                                <span className="text-white">Xác nhận</span>
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
		</div>
		
        </div>
        </>
     
     );
}
 
export default Checkout;