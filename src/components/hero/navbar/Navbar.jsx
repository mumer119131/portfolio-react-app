import React from 'react'
import logo from '../../../assets/mu_logo.png'
const Navbar = () => {
  return (
    <div className='flex justify-between w-full py-[2rem]'>
        <div>
            <img src={logo} alt="" width={20} />
        </div>
        <ul className='flex gap-6'>
            <li className='cursor-pointer'>Projects</li>
            <li className='cursor-pointer'>Skills</li>
            <li className='cursor-pointer'>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar