import React from 'react';
import facebookIcon from './../assets/Facebook_icon.png';
import instagramIcon from './../assets/instagram_icon.png';
import twitterIcon from './../assets/twittericon.png';

const Footer = () => {
    return (
        <div>
            <div className='flex flex-col bg-slate-950 justify-center items-center text-white'>
               <h1>Tasty Food Meals</h1>
             
               <span>Contact Us</span>
               <img src={facebookIcon} className='w-12' alt=""/>
               <img src={instagramIcon} className='w-12' alt=""/>
               <img src={twitterIcon} className="w-12" alt=""/>

    
               <span>Copyright @2023</span>

         
                
            </div>

            <div>

            </div>
        </div>
    );
}

export default Footer;
