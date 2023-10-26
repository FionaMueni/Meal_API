import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import chineseIcon from './assets/chineseIcon.png'
import background_svg from './assets/background.svg'
import cookingImage from './assets/cookingImage.png'



function App() {

  return (
   <div className='h-screen bg-'>
    <div className='flex justify-center text-2xl mt-1 font-bold'>
      {/* <img src={chineseIcon} className='w-12' alt=""/>
    <h1>Tasty Meal Plans</h1> */}
    </div>
   
  <Navbar/>

  <div>
      <img src={cookingImage} className='w-80' alt=""/>
    </div>
   </div>
  )
}

export default App
