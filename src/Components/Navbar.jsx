import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate()
    return (
        <div className='flex px-13 py-10 justify-between mt-6'>
            
            <h1>Tasty Meal Plans</h1>
            <NavLink to="/">Home</NavLink>
            <div className='flex gap-5'>
                <NavLink to='/about' className='hover:text-blue-500'>About</NavLink>
                <NavLink to='/contact' className='hover:text-blue-500'>Contact</NavLink>
                <NavLink to='/mealPlan' className='hover:text-blue-500'>Meals</NavLink>
            </div>

            <div>
                <button className='outline-none'>Login</button>
                <button>Signup</button>
            </div>
        </div>
    );
}

export default Navbar;
