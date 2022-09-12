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
      <div className="social__container__footer" data-aos='slide-up'>
        <a href="https://github.com/mumer119131" target="_blank"><FaGithub /></a>
        <a href="https://www.facebook.com/profile.php?id=100083694507517" target="_blank"><BsFacebook /></a>
        <a href="https://www.instagram.com/umer_sma119131/" target="_blank"><AiFillInstagram /></a>
        <a href="https://www.linkedin.com/in/m-umer-06602821b/" target="_blank"><AiFillLinkedin /></a>
        <a href="https://www.behance.net/mumer4" target="_blank"><AiFillBehanceCircle /></a>
      </div> 
    </footer>
  )
}

export default Footer