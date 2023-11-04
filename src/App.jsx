import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import chineseIcon from './assets/chineseIcon.png'
import background_svg from './assets/background.svg'
import background from './assets/cooking.jpg'
import Footer from './Components/Footer'



function App() {

  return (
   <div style={{ backgroundImage: `url(${background})` }}>
    <div className='flex justify-center text-2xl font-bold'>
      
      {/* <img src={chineseIcon} className='w-12' alt=""/>
    <h1>Tasty Meal Plans</h1> */}
    </div>
   
  <Navbar/>

  <div>
      {/* <img src={cookingImage} className='w-full mt-0' alt=""/> */}
    </div>
    <Footer/>
   </div>
  )
}

export default App
