import React from 'react';
import Navbar from '../Components/Navbar';
import { NavLink } from 'react-router-dom';
import chineseIcon from './../assets/Chineseicon.png'
import signupIcon from './../assets/Signup.svg'
import Footer from '../Components/Footer';

const Signup = () => {
    return (
        <div>
            <Navbar/>
           <div className='flex justify-center items-center'>
            <form className='flex flex-col gap-4'>
            <div>
            <h1 className='flex text-[50px]'>Welcome to tasty meal plans <img src={chineseIcon} className='w-12' alt=''/></h1>
            <h3 className='flex text-[30-px] gap-2'>Create a free account or <NavLink to="/login" className='text-blue-700'>Login</NavLink></h3>
            </div>
            
            <label>Email:</label>
            <input type="email" className='border-2 outline-none border-black w-52 px-4 py-2 rounded-lg'placeholder='enter your email address'/>

            <label>Username:</label>
            <input type="text" className='border-2 outline-none border-black w-52 px-4 py-2 rounded-lg'placeholder='Enter your username'/>

            <label>Password</label>
            <input type="password" className='border-2 outline-none border-black w-52 px-4 py-2 rounded-lg' placeholder='Enter your password'/>

            <label>Confirm Password</label>
            <input type="password" className='border-2 outline-none border-black w-52 px-4 py-2 rounded-lg' placeholder='Confirm your password'/>


           <label className='flex gap-2'>
           <input type='checkbox' className='text-sm inline-block items-start'/> 
           <span>I do not want to receive emails related to new meal plans, feature updates and promotions</span>
           </label>

       
            
           

            <button className='bg-blue-700 text-white w-52 py-2 outline-none rounded-lg'>Signup</button>
            
            </form>
            <img src={signupIcon} className='w-2/5' alt="" />

           </div>
           <Footer/>
          </div>
            
   
    );
}

export default Signup;
