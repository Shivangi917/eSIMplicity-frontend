import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-gray-900 p-6 flex justify-between items-center'>
        {/* Logo */}
        <div>
            <h1 className='text-2xl font-bold text-white'>
                eSIMplicity
            </h1>
        </div>

        {/* Home, Plans, Guide */}
        <div>
            <ul className='flex space-x-10'>
                <li className='text-gray-300 font-medium hover:text-gray-100 transition duration-300 cursor-pointer'><Link to="/">Home</Link></li>
                <li className='text-gray-300 font-medium hover:text-gray-100 transition duration-300 cursor-pointer'><Link to="/plan">Plans</Link></li>
                <li className='text-gray-300 font-medium hover:text-gray-100 transition duration-300 cursor-pointer'><Link to="/guide">Guide</Link></li>
            </ul>
        </div>
        
        {/* Login/Signup Button */}
        <div className=''>
            <button className='bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 hover:bg-gray-600'>
                <Link to="/login">Login</Link>
            </button>
        </div>
    </nav>
  )
}

export default Navbar;
