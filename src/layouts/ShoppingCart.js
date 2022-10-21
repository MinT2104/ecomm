import { redirect } from "react-router";
import { useNavigate } from "react-router";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ClearIcon from '@mui/icons-material/Clear';
import { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";


const ShoppingCart = ({act,setAct}) => {
    const {user, logOut} = UserAuth()
	if(localStorage.getItem("acesstoken")){
		
	}

	// ........................................................
    const Navigate = useNavigate()
	const [allItems, setAllItems] = useState(JSON.parse(localStorage.getItem("cart-items")))
	const handleSetAct = ()=>{
		setAct(!act)
		// localStorage.setItem("cart-items", JSON.stringify(item))
	}
	const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
        minimumFractionDigits: 0
      })

	const cartItems = JSON.parse(localStorage.getItem("cart-items"))
	 const x = cartItems.map((dt)=>{
		return dt.price
	})
	let S=0
	 for( let i=1; i<= x.length; i++){
	S += +x[i-1].replace(/,/g, '')
	}
	console.log(formatter.format(S))

	const handleDeleteItem = (data)=>{
		const item = cartItems.filter((item)=>{
			if(data.id !== item.id) return true
		})
		setAllItems(item)
		localStorage.setItem("cart-items", JSON.stringify(item))
		console.log(cartItems)
	}
	const handleChangeQuantity = (e, data)=>{
		const valueInput = +e.target.value
		// const newPrice = +price.replace(/,/g, '')
		// console.log(price)

		// console.log(data.price*valueInput)
		 console.log(data.price = String(+data.price.replace(/,/g, '')*valueInput))

		// console.log(price*valueInput)
	}


      
    //   console.log(formatter.format(+y))
    return (  

<div className="z-50 absolute top-0 left-0 w-full h-screen sticky">
		<div 
			onClick={()=>{
				handleSetAct()
				
			}}
		className="h-screen w-full opacity-80 bg-black  ">
		</div>
		<div className="w-2/5 h-screen bg-white absolute right-0 top-0">
				<div className="p-2 flex flex-row items-center">
				<span
				onClick={()=>{
					handleSetAct()
					
				}}
				 className=" cursor-pointer hover:text-cyan-500 flex flex-row gap-2">
					<ArrowBackIcon/>Back</span>
					<h1 className="text-center text-black font-bold text-xl w-full uppercase">Giỏ hàng của bạn</h1>
				</div>
				<hr/>
				<div className="w-full h-[680px] bg-gray-200 flex flex-col gap-[1px] overflow-auto">
					{
					allItems && allItems.map((data)=>(
						<div className="flex flex-row justify-evenly items-center p-2 py-4 gap-2 bg-white">
						<div className="p-2">
						<input
						onChange={(e)=>{
						handleChangeQuantity(e, data)
						}}
						type="number" placeholder="1" className="w-10 border-[1px] border-black text-center rounded-xl" min="1"/>
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
						onClick={()=>handleDeleteItem(data)}
						className="mr-2 cursor-pointer"><ClearIcon/></span>
					</div>

					))
					}

					{/* <div className="flex flex-row justify-evenly items-center p-2 py-4 gap-2 bg-white">
						<div className="p-2">
							<input type="checkbox"/>
						</div>
						<div className="w-16">
							<img src="https://gs25.com.vn/media/4124/burger-ga-phomai-cheddar.png" alt=""/>
						</div>
						<div className="w-full px-4">
							<h1 className="font-semibold text-lg">
								hamburger siu ngon
							</h1>
						</div>
						<span className="mr-2 cursor-pointer"><ClearIcon/></span>
					</div>
					<div className="flex flex-row justify-evenly items-center p-2 py-4 gap-2 bg-white">
						<div className="p-2">
							<input type="checkbox"/>
						</div>
						<div className="w-16">
							<img src="https://gs25.com.vn/media/4124/burger-ga-phomai-cheddar.png" alt=""/>
						</div>
						<div className="w-full px-4">
							<h1 className="font-semibold text-lg">
								hamburger siu ngon
							</h1>
						</div>
						<span className="mr-2 cursor-pointer"><ClearIcon/></span>
					</div> */}
				</div>
				<div className="absolute bottom-4 bg-white z-50 left-0 flex flex-row w-full items-center">
					<div className="w-1/2 flex flex-row justify-center item-center text-center gap-2">
						<h1 className="font-bold">Thành Tiền: </h1>
						<h1>{formatter.format(S)}</h1>
					</div>
					<hr/>
					<div className="w-1/2 flex justify-center items-center">
						<button className="p-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-5 text-white">Thanh Toán</button>
					</div>
				</div>
		</div>
		
</div>
    );
}
 
export default ShoppingCart;