import React from 'react';
import Navbar from '../Components/Navbar';
import { NavLink } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <Navbar/>
          <div>
            <form>
                <div>
                <h1>Welcome to Tasty Meal Plans</h1>
                <h3>New here? <NavLink to="/signup"></NavLink>Signup</h3>
                </div>
                <label>Email:</label>
                <input type="email" placeholder='enter your email address'/>
                
                <label>Password:</label>
                <input type="password" placeholder='enter your password'/>
                <button type="submit">Login</button>
            </form>
          </div>
        </div>
    );
}

export default Login;
