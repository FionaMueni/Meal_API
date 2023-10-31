import React from 'react';
import Navbar from '../Components/Navbar';
import { NavLink } from 'react-router-dom';
import loginIcon from './../assets/Login.svg'
import chineseIcon from './../assets/chineseIcon.png'
import Footer from '../Components/Footer';


const Login = () => {
    return (
        <div>
            <Navbar/>
          <div className='flex justify-center items-center'>
            <form className='flex flex-col gap-4'>
                <div >
                <h1 className='flex text-[50px]'>Welcome to Tasty Meal Plans <img src={chineseIcon} className='w-12' alt="" /></h1>
                <h3 className='flex text- [30px] gap-2'>New here? <NavLink to="/signup" className='text-blue-700'>Signup</NavLink></h3>
                </div>


                <label>Email:</label>
                <input type="email" className='border-2 outline-none border-black w-52 px-4 py-2 rounded-lg' placeholder='enter your email address'/>
                
                <label>Password:</label>
                <input type="password" className='border-2 outline-none border-black w-52 px-4 py-2 rounded-lg' placeholder='enter your password'/>

                <button type="submit" className='bg-blue-700 text-white w-52 py-2 outline-none rounded-lg'>Login</button>
            </form>
            <img src={loginIcon} className='w-2/5' alt=""/>
          </div>
          <Footer/>
        </div>
    );
}

export default Login;
