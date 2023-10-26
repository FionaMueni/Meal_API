import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate()
    return (
        <div className='flex px-4 py-8 justify-between bg-red-100'>
            
            <NavLink to="/" className="hover:text-blue-500 px-3">Home</NavLink>
            <div className='flex gap-5'>
                <NavLink to='/about' className='hover:text-blue-500'>About</NavLink>
                <NavLink to='/contact' className='hover:text-blue-500'>Contact</NavLink>
                <NavLink to='/mealPlan' className='hover:text-blue-500'>Meals</NavLink>
            </div>

            <div>
                <button onClick={()=>navigate("/login")} className= 'outline-none rounded-lg px-4 py-1 hover:text-blue-500'>Login</button>
                <button onClick={()=>navigate("/signup")} className= 'outline-none rounded-lg px-4 py-1 hover:text-blue-500'>Signup</button>
            </div>
        </div>
    );
}

export default Navbar;
