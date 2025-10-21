import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'


const Home = () => {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"))
    setUser(savedUser)
  },[])


  const logout = () => {
    localStorage.removeItem("user")
    navigate("/login")
  }
  return (
    <>
      <Header/>
      <div>
        <div className='h-screen flex justify-center items-center text-3xl' >Welcome  {user} 👋 </div>
        {
          user && (
            <button className='bg-red-600 text-white py-2 px-4 rounded-md absolute top-6 right-10 cursor-pointer hover:bg-red-700 transition' onClick={logout}>Logout</button>
          )
        }
      </div>
    </>
  )
}

export default Home