import React from 'react'
import Login from '../pages/Login'
import Register from '../pages/Register'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='mt-10 flex gap-4  ml-10'>
        <Link to='/login' className='border-zinc-300 border px-2 rounded-md'>
            Login
        </Link>
        <Link to='/register' className='border-zinc-300 border px-2 rounded-md'>
            Register
        </Link>
     
    </div>
  )
}

export default Header