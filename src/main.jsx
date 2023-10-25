import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { MantineProvider } from '@mantine/core'
import Meal from './Pages/Meal.jsx'
// import './../dist/ouput.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider>
      <BrowserRouter>
      <Routes>
        <Route path='/' exact='true' element={<App/>}/>
        <Route path='/mealPlan' element={<Meal/>}/>
      </Routes>
      </BrowserRouter>
    </MantineProvider>
  </React.StrictMode>,
)
