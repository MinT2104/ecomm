import SettingsIcon from '@mui/icons-material/Settings';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PersonIcon from '@mui/icons-material/Person';

import { Link } from 'react-router-dom';

const Dropin4 = (props) =>{
    return(
        <div
        className={`z-50 rounded w-72 h-96 bg-[#1e293b] absolute top-[60px] -left-20 text-white flex justify-start items-left flex-col p-5 gap-[24px]`}>
           <Link
           to="/user"
           >
                <div className='flex flex-start flex-row gap-[24px] items-center font-semibold hover:scale-105 ease-out duration-300 cursor-pointer'>
                        <span className='text-white'><PersonIcon/></span>
                        <h1 className='text-white'>Thông tin cá nhân</h1>
                
                </div> 
           </Link>
   
            <div className='flex flex-start flex-row gap-[24px] items-center font-semibold hover:scale-105 ease-out duration-300 cursor-pointer'>
              <span className='text-white'><ShoppingBagIcon/></span>
                <h1 className='text-white'>Quản lý đơn hàng</h1>
            </div>
            <div className='flex flex-start flex-row gap-[24px] items-center font-semibold hover:scale-105 ease-out duration-300 cursor-pointer'>
               <span className='text-white'><SettingsIcon/></span> 
               <h1 className='text-white'>Cài đặt</h1>
            </div>
        </div>
    )
}
export default Dropin4;