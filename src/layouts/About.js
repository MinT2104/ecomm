import db from "../db/productdb.json"

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import FavoriteIcon from '@mui/icons-material/Favorite';



const About = () => {
    // const db = db.map((data)=>data)
    const Navigate = useNavigate()
    console.log(Object.values(db))
    return ( 
        <div className="w-full h-screen z-40 pt-20 px-4 lg:pt-40 bg-gray-300 flex justify-center">
		<div className="py-4 flex lg:flex-row flex-col lg:z-50 w-full lg:w-4/5 h-fit lg:h-[550px] bg-white  drop-shadow-2xl mt-10 rounded-sm lg:rounded-xl overflow-hidden">
            <div className="lg:block hidden lg:w-1/2 w-full p-10">
                <img alt="" src="https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=600"/>
            </div>
            <div className="lg:w-1/2 w-full">
                <div className="h-16 w-full flex justify-center items-center mt-10">
                    <img className="h-16" src='assets/img/logoweb1.png' alt=''/>
                </div>
                <div className="p-10 flex-col gap-4 flex">
                    <p>Chào các cậu! <FavoriteIcon className="text-red-400"/> <br/>
                    Commodité cung cấp sản phẩm (đồ ăn, thức uống) đến tận tay  cậu  với chất lượng và giá cả hợp lý nhất có thể.
                       <br/> Hãy cùng mua sắm thôi! </p>
                    <h1>Fanpage Facebook: Commodité</h1>
                    <h1>Fanpage: Commodité</h1>
                    <h1>Number Phone: 0359953717</h1>
                </div>
                <div>
                    <button 
					onClick={()=>Navigate("/")}
					className="p-3 bg-blue-500 text-white w-2/3 rounded-lg mx-auto uppercase flex flex-row items-center gap-2 justify-center">
						<ShoppingCartCheckoutIcon/> <span className="text-white">Go Shopping</span>
					</button>
                </div>
            </div>
		</div>
		
</div>
     );
}
 
export default About;