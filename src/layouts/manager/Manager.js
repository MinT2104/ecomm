import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { alertClasses } from "@mui/material";

const Manager = () => {
    const { register, handleSubmit, formState: { errors }  } = useForm();
    const btn = 'outline-none text-white my-4 p-2 w-4/5 text-lg bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full px-5 border-[1px] hover:scale-105 hover:text-black  duration-300'
    const inputStyle = "outline-none w-full bg-white border-[1px] border-black mx-auto h-12 my-2 rounded-full px-6"

    const [adminName, setAdminName] = useState("")
    const [adminPass, setAdminPass] = useState("")
    const [adminAct, setAdminAct] = useState("")

    const submit =()=>{
        // e.preventDefault()
        // console.log(adminName, adminPass,process.env.REACT_APP_FIREBASE_API_KEY, process.env.REACT_APP_ADMIN_NAME, process.env.REACT_APP_ADMIN_PASS)
        if(adminName === process.env.REACT_APP_ADMIN_NAME &&
            adminPass === process.env.REACT_APP_ADMIN_PASS
            ){
                localStorage.setItem("actadmin", process.env.REACT_APP_ADMIN_ACTIVATE_KEY)
        }
        else{
            localStorage.setItem("actadmin", "")
        }

    //  if(localStorage.getItem("actadmin") === 'true'){
    //     setAdminAct(process.env.REACT_APP_ADMIN_ACTIVATE_KEY)
    // }
    }
    // console.log(localStorage.getItem("actadmin"))
   
    return ( 
        <section className=" h-screen bg-[#d1d5db] drop-shadow-2xl z-40 absolute w-full top-0 left-0">
            {localStorage.getItem("actadmin") !== process.env.REACT_APP_ADMIN_ACTIVATE_KEY ? 
             <div className="relative w-full h-screen flex flex-row items-center justify-center">
                <form
                onSubmit={handleSubmit(submit)}
                className="w-96 h-fit pb-4 bg-white rounded-xl flex flex-col items-center">
                    <h1 className="text-xl font-bold uppercase text-center p-2 text-black mt-2">LogIn</h1>
                    <span className="w-4/5">
                        <label className=" font-light mt-2 text-black">
                            UserName: 
                        </label>
                        <input
                        onChange={(e)=>{
                            console.log(adminName)
                            setAdminName(e.target.value)}}
                        value={adminName}
                        placeholder="username"
                        name="username" 
                        className={inputStyle}/>
                        {errors.username && 
                        <span className="text-red-500">Please enter your first name.</span>}
                    </span>
                    <span className="w-4/5">
                        <label className="font-light mt-2 text-black">
                            Password: 
                        </label>
                        <input
                        onChange={(e)=>setAdminPass(e.target.value)}
                        value={adminPass}
                        placeholder="password"
                        type="password" 
                        name="password"
                        className={inputStyle}/>
                        {errors.password &&
                         <span className="text-red-500">Please enter your password.</span>}

                    </span>
                    <button type="submit" className={btn}> Login</button>
                <hr className="w-2/5 my-2"/>
                </form>
            </div>
            :
            <div>
                none
            </div>
        }
            
        </section>
     );
}
 
export default Manager;