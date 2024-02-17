import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/Auth.js"
import {login, logout} from "./store/authSlice.js"
import { Footer, Header } from "./Components/index.js"
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])
  
  return !loading ? (
    <div className='h-screen
    ml-[-140px]
    flex flex-col
    bg-cover
    '>
      <div className='w-full block'>
    
        <Header />
        <main>
        <Outlet />
        </main>
        <Footer />
      </div>
      
    </div>
    
  ) : null
}

export default App