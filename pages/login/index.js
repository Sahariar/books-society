import Head from "next/head";
import Footer from "../../components/Shared/Footer";
import Header from "../../components/Shared/Header";

import { FaFingerprint } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";
import {signIn, signOut } from "next-auth/react"
import { useFormik } from "formik";
import login_validate from "../../lib/validate";
import { useRouter } from "next/router";

const index = () => {
  const [show,setShow]=useState(false);
	const router =useRouter()
    const formik =useFormik({
        initialValues:{
            email : '',
            password: ''    
		},
        validate:login_validate,
        onSubmit
    })
    console.log (formik.errors)
    async function onSubmit(values){
      //  console.log(values)
	  const status=await signIn('credentials',{
		redirect : false,
		email: values.email,
		password:values.password,
		callbackUrl: "/"
	  })
	  if(status.ok)router.push(status.url)
	  
    }

    //Google Handler Function
 async function handleGoogleSignin(){
    signIn('google',{callbackUrl:'http://localhost:3000/'});
 }
 async function handleGithubSignin(){
    signIn('github',{callbackUrl:'http://localhost:3000/'});
 }
    return (
        <>
        <Head>
     <title>Login-</title>
     <meta name="description" content="Generated by create next app" />
     <link rel="icon" href="/favicon.ico" />
   </Head>
   <Header></Header>

   <main>
 <section className="min-h-screen flex items-center justify-center" >
  
  <div className="flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
 
    <div className="md:w-1/2 px-8 md:px-16">
      <h2 className="font-bold text-2xl text-[#002D74]">Login</h2>
      <p className="text-xs mt-4 text-[#002D74]">If you are already a member, easily log in</p>

      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
        <input {...formik.getFieldProps('email')} className="p-2 mt-8 rounded-xl border" type="email" name="email" placeholder="Email"/>
        <div className="relative">
          <input  {...formik.getFieldProps('password')}  className="p-2 rounded-xl border w-full" type={`${show ? "text" : "password"}`} name="password" placeholder="Password"/>
          <svg onClick={()=> setShow(!show)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2" viewBox="0 0 16 16">
            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
          </svg>
        </div>
        <button type="submit" className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">Login</button>
      </form>

      <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
        <hr className="border-gray-400"/>
        <p className="text-center text-sm">OR</p>
        <hr className="border-gray-400"/>
      </div>
      <button onClick={handleGoogleSignin} className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]">
        <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="25px">
          <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
          <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
          <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
          <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
        </svg>
        Login with Google
      </button>
      <button onClick={handleGithubSignin} className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
				<path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
			</svg>
        Login with Github
      </button>

      <div className="mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74]">
        <a href="#">Forgot your password?</a>
      </div>

      <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
        <p>Don't have an account?</p>
        <Link href="/register"><button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">Register</button></Link>
      </div>
    </div>

   
    <div className="md:block hidden w-1/2">
      <img className="rounded-2xl" src="https://images.unsplash.com/photo-1616606103915-dea7be788566?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"/>
    </div>
  </div>
</section> 



   </main>

  <Footer></Footer>
 </>
    );
};

export default index;