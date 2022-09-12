import React from 'react'
import './footer.css'
import {FaGithub} from 'react-icons/fa'
import {BsFacebook} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillBehanceCircle} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer>
      <h2>| Socials |</h2>
      <div className="social__container">
        <FaGithub />
        <BsFacebook />
        <AiFillInstagram />
        <AiFillLinkedin />
        <AiFillBehanceCircle />
      </div> 
    </footer>
  )
}

export default Footer