import { Input } from "@mui/material";
import province from "../db/tinhthanhpho.json"

const Checkout = () => {

    const list = province["1"]
    console.log(list)
    return ( 
        <div className="w-full h-screen z-40 pt-40 bg-gray-300">
		<div className="z-50 w-full lg:w-4/5 h-[550px] bg-white mt-10 drop-shadow-2xl mx-auto rounded-xl flex-row flex truncate">
            <div className="w-1/2 bg-gradient-to-r from-transparent to-gray-50">
                <div className="h-10 flex items-center justify-center ">
                    <h1 className="font-bold text-xl text-center uppercase text-pink-500">Thông tin giao hàng</h1>
                </div>
                <div className="w-full h-full flex flex-col justify-start pt-4 gap-10 pl-32">
                    <div className="w-full flex-col flex justify-start items-left font-medium mx-auto">   <input placeholder="Họ và tên" className="w-2/3 border-[1px] border-gray-300 p-2"/></div> 
                    <div className="w-full flex-col flex justify-start items-left font-medium mx-auto">  <input placeholder="Số điện thoại" className="w-2/3 border-[1px] border-gray-300 p-2"/></div>
                    <div className="w-full flex-col flex justify-start items-left font-medium mx-auto">  <input placeholder="Địa chỉ" className="w-2/3 border-[1px] border-gray-300 p-2"/></div> 
                    
                    <div className="w-full flex-col flex justify-start items-left font-medium mx-auto">
                        <select className="w-2/3 border-[1px] border-gray-300 py-2">
                            <option>Tỉnh/Thành phố</option>
                            <option>Thủ đức</option>
                            <option>Thành phố Hồ Chí Minh</option>
                        </select>
                    </div>
                    <div className="w-full flex-col flex justify-start items-left font-medium mx-auto">
                        <select className="w-2/3 border-[1px] border-gray-300 py-2">
                            <option>Quận/Huyện</option>
                            <option>Quận 9</option>
                        </select>
                    </div>
                    <div className="w-full flex-col flex justify-start items-left font-medium mx-auto">
                        <select className="w-2/3 border-[1px] border-gray-300 py-2">
                            <option>Phường/Xã</option>
                            <option>Dĩ An</option>
                        </select>
                    </div>
                    
                </div>
              
            </div>
            <div className=" w-1/2 h-full items-center justify-center flex bg-gradient-to-r from-gray-50 to-gray-100">
                <div className="w-4/5 h-4/5 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] bg-white rounded-lg">

                </div>
            </div>
		</div>
		
        </div>
     );
}
 
export default Checkout;