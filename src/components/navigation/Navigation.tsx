import React from 'react'
import { useState } from 'react'
import './navigation.css'
import {BiHomeAlt} from 'react-icons/bi'
import {AiOutlineUser} from 'react-icons/ai'
import {IoIosGitNetwork} from 'react-icons/io'
import {TbActivityHeartbeat} from 'react-icons/tb'
import {VscComment} from 'react-icons/vsc'
import {RiContactsLine} from 'react-icons/ri'
import LOGO from '../../assets/mu_logo.png'
import Image from 'next/image'

const Navigation = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a href="#" title='Home' onClick={ ()=> setActiveNav("#")} className={activeNav === "#" ? 'active' : ''}><BiHomeAlt /></a>
      <a href="#about" title='About' onClick={ ()=> setActiveNav("about")} className={activeNav === "about" ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" title='Experience' onClick={ ()=> setActiveNav("experience")} className={activeNav === "experience" ? 'active' : ''}><IoIosGitNetwork /></a>
      <a href='#'><Image src={LOGO} alt="" className='w-[1rem] h-[1rem] object-contain'/></a>
      <a href="#portfolio" title='Portfolio' onClick={ ()=> setActiveNav("portfolio")} className={activeNav === "portfolio" ? 'active' : ''}><TbActivityHeartbeat /></a>
      <a href="#testimonials" title='Testimonials' onClick={ ()=> setActiveNav("testimonials")} className={activeNav === "testimonials" ? 'active' : ''}><VscComment /></a>
      <a href="#contact" title='Contact' onClick={ ()=> setActiveNav("contact")} className={activeNav === "contact" ? 'active' : ''}><RiContactsLine /></a>
    </nav>
  )
}

export default Navigation