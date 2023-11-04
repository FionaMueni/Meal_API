import React from 'react';
import facebookIcon from './../assets/Facebook_icon.png';
import instagramIcon from './../assets/instagram_icon.png';
import twitterIcon from './../assets/Twittericon.png';

const Footer = () => {
    return (
        <div>
            <div className='flex flex-col bg-slate-950 justify-center items-center text-white mt-6'>
               <h1>Tasty Food Meals</h1>
             
               <span>Contact Us</span>
               <div className='list-none border-white inline-flex py-8'>
               <img src={facebookIcon} className='w-12' alt=""/>
               <img src={instagramIcon} className='w-12' alt=""/>
               <img src={twitterIcon} className="w-12" alt=""/>

               </div>
              

    
               <span>Copyright @2023</span>

         
                
            </div>

            <div>

            </div>
        </div>
    );
}

export default Footer;
