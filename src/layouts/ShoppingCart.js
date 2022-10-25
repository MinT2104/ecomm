import {Link} from "react-router-dom"
import { useNavigate } from "react-router";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';



import {  doc, updateDoc, deleteDoc, onSnapshot, query, collection } from "firebase/firestore"; 
import {db} from "../firebase"


const ShoppingCart = () => {
    const {user, logOut} = UserAuth()
	// ........................................................
    const Navigate = useNavigate()
	const [allPosts,setAllPosts] = useState()
	const [myCart, setMyCart]=useState([])
	// const [allItems, setAllItems] = useState(JSON.parse(localStorage.getItem("myCart")).carts || [])

	// .......................format.........................
	const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
        minimumFractionDigits: 0
      })
	//   .format..................Sum..........................
	
	const x = myCart.map((dt)=>{
		return {price: dt.price, count: dt.count}
	})
	let S=0
	 for( let i=1; i<= x.length; i++){
	S += +x[i-1].price.replace(/,/g, '')*x[i-1].count
	}
	// console.log(formatter.format(S))
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
	
	// ........................delete..............................
	const handleDelete = async (data)=>{
        await deleteDoc(doc(db,"UserCarts",data.id))
    }
	// ------------------------------increase----------------------
	const increaseCount = async ( data)=>{
		const cartRef = doc(db,"UserCarts", data.id)
		await updateDoc(cartRef,{
			count: data.count +1
				 })

	}
	const decreaseCount = async ( data)=>{
		if(data.count<2) return;
		if(data.count>1){
			const cartRef = doc(db,"UserCarts", data.id)
			await updateDoc(cartRef,{
				count: data.count -1
					})
		}
		

	}



      
    //   console.log(formatter.format(+y))
    return (  

<div className="w-full h-screen z-40 pt-40 bg-gray-300">
		<div className="z-50 w-full lg:w-3/5 h-[550px] bg-white absolute top-52 drop-shadow-2xl left-0  lg:left-20 rounded-xl overflow-hidden">
				<div className="px-4 lg:px-0 w-full h-full bg-gray-100 py-2 flex flex-col gap-[2px] overflow-auto">
			{S===0 && <div className="h-full w-full flex items-center justify-center font-bold "><span className="text-pink-500 text-center">Bạn chưa có sản phẩm nào trong giỏ hàng của mình</span></div> }
					{
					myCart && myCart.map((data,index)=>(
					<div
					key={index}
					className="flex flex-row justify-evenly rounded-lg items-center p-2 py-4 gap-2 bg-white">
						<div className="p-2">
							<div className="flex flex-row">
								<button 
								onClick={()=>decreaseCount(data)}
								className="px-2 border-[0.5px] font-bold">-</button>
								<input
								value={data.count}
								type="text"
								className="w-12 border-[0.5px] text-center" 
								/>
								<button
								onClick={()=>increaseCount(data)}
								className="px-2 border-[0.5px] font-bold">+</button>
							</div>
						
						</div>
						<div className="w-16">
							<img src={data.links} alt=""/>
						</div>
						<div className="w-full px-4">
							<h1 className="font-semibold text-lg">
								{data.name}
							</h1>
						</div>
						<span 
						onClick={()=>handleDelete(data)}
						className="mr-2 cursor-pointer text-pink-500"><DeleteOutlineOutlinedIcon/></span>
					</div>

					))
					}

				</div>
		</div>
		<div className="z-40 w-full lg:w-2/5 h-[550px] bg-white absolute top-52 drop-shadow-xl right-0 flex flex-row justify-end  lg:right-20 rounded-xl overflow-hidden">
			<div className="w-2/3 flex-col flex justify-between py-4">
				<div className="w-full text-center font-bold h-10 flex flex-col h-full gap-20 items-center justify-start text-xl">
				<h1 className="text-3xl">Your Cart</h1>
				<div>
					<span>Total: <span className="text-pink-500">{formatter.format(S)}</span></span>
				</div>
				</div>
				<div className="w-full flex items-center flex-col gap-2">
					{
					S===0?
					<button
					className="p-3 bg-gray-400 text-white cursor-auto w-2/3 rounded-lg mx-auto uppercase flex flex-row items-center gap-2 justify-center">		
						 <span>Check out</span> <ArrowForwardIcon/>
					</button>
					:
					<button
					className="p-3 bg-blue-500 text-white w-2/3 rounded-lg mx-auto uppercase flex flex-row items-center gap-2 justify-center">		
						<Link to="/checkout"> <span>Check out</span> <ArrowForwardIcon/> </Link>
					</button>
					// null
					}
					
					<button 
					onClick={()=>Navigate("/")}
					className="p-3 bg-red-500 text-white w-2/3 rounded-lg mx-auto uppercase flex flex-row items-center gap-2 justify-center">
						<ArrowBackIcon/> <span>shopping again</span>
					</button>
				</div>
			</div>
		</div>
		
</div>
    );
}
 
export default ShoppingCart;