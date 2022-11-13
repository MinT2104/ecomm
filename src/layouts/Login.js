import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
// import firebase, {app} from "../../Firebase/firebase";
// import { GoogleAuthProvider, getAuth,signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import GoogleButton from 'react-google-button'
import { FacebookLoginButton } from "react-social-login-buttons";
import { GoogleLoginButton } from "react-social-login-buttons";
import { UserAuth } from "../context/AuthContext";
// import { useContext } from "react";



const Login = () => {
    const {googleSignIn} = UserAuth()
    const handleGoogleSignIn =()=>{
        try {
             googleSignIn();
        } catch (error) {
            console.log(error)
        }
    }
    const navigate = useNavigate()

//   const activePath = localStorage.getItem("activepath")
//   const currentPath = localStorage.getItem("activepath")
    // const signInWithFirebase=()=>{
    //     var google_provider = new GoogleAuthProvider();
    //     const auth = getAuth()
    //     signInWithPopup(auth,google_provider)
    //     .then((result) => {
    //         // This gives you a Google Access Token. You can use it to access Google APIs.
    //         const credential = GoogleAuthProvider.credentialFromResult(result);
    //         const token = credential.accessToken;
    //         const user = result.user;
    //         localStorage.setItem("user",JSON.stringify(user))
    //         localStorage.setItem("token",JSON.stringify(token))
    //         if(token){
    //             navigate(activePath)
    //             window.location.reload()
    //         }
    //       }).catch((error) => {
    //         // Handle Errors here.
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //         // The email of the user's account used.
    //         const email = error.customData.email;
    //         // The AuthCredential type that was used.
    //         const credential = GoogleAuthProvider.credentialFromError(error);
    //         // ...
    //       });
        
        
    // }
    const submit = (data)=>{
        
        console.log(data)
    }
    const { register, handleSubmit, formState: { errors }  } = useForm();
    const btn = 'outline-none text-white my-4 p-2 w-4/5 text-lg bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full px-5 border-[1px] hover:scale-105 hover:text-black  duration-300'
    const inputStyle = "outline-none w-full bg-white border-[1px] border-black mx-auto h-12 my-2 rounded-full px-6"
    return ( 
        <>
        <section className=" h-screen bg-[#d1d5db] drop-shadow-2xl z-40 absolute w-full top-0 left-0">
            <div className="relative w-full h-screen flex flex-row items-center justify-center">
                <form
                onSubmit={handleSubmit(submit)}
                className="w-full md:w-96 h-full md:h-fit pb-4 bg-white rounded-xl flex flex-col justify-center items-center">
                    <h1 className="text-xl font-bold uppercase text-center p-2 text-black mt-2">LogIn</h1>
                    {/* <span className="w-4/5">
                        <label className=" font-light mt-2 text-black">
                            UserName: 
                        </label>
                        <input placeholder="username" name="username" className={inputStyle} {...register("username",{ required: true})}/>
                        {errors.username && 
                        <span className="text-red-500">Please enter your first name.</span>}
                    </span>
                    <span className="w-4/5">
                        <label className="font-light mt-2 text-black">
                            Password: 
                        </label>
                        <input placeholder="password" type="password" name="password" className={inputStyle} {...register("password",{ required: true })}/>
                        {errors.password &&
                         <span className="text-red-500">Please enter your password.</span>}

                    </span>
                    <button type="submit" className={btn}> Login</button>
                <hr className="w-2/5 my-2"/>
                <div className="text-black">Don't have an account? &nbsp;
                    <Link to="/signup" className="font-medium hover:text-black text-cyan-500 cursor-pointer">
                        Register
                    </Link>
                </div> */}
                <div className="flex flex-col gap-2 items-center p-2 bg-white rounded-3xl cursor-pointer text-black w-4/5 mt-4">
                    {/* <div className="w-8 h-8">
                        <img src="https://cdn.statically.io/img/barrazacarlos.com/f=auto%2Cq=50/wp-content/uploads/2021/06/google-logo-1.png" alt=""/>
                    </div>
                    <div
                    // onClick={signInWithFirebase}
                    >
                        <span className="font-bold text-xl">
                            Sign In with Google
                        </span>
                    </div> */}
                    <GoogleLoginButton onClick={handleGoogleSignIn}/>
                    <div>
                        <span className="uppercase font-bold">or</span>
                    </div>
                    <FacebookLoginButton/>
                </div>
                </form>
                <span className="absolute top-5 right-5 cursor-pointer">
                    <Link
                    onClick={navigate("/")}>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                    </Link>
                </span>
            </div>
          
          

        </section>
        </>
     );
}
 
export default Login;