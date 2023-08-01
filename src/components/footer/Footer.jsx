import React from 'react'
import './footer.css'
import {FaGithub} from 'react-icons/fa'
import {FaDev} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillBehanceCircle} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer>
      <h2>| Socials |</h2>
      <div className="social__container__footer" data-aos='slide-up'>
        <a href="https://github.com/mumer119131" target="_blank"><FaGithub /></a>
        <a href="https://dev.to/mumer119131" target="_blank"><FaDev /></a>
        <a href="mailto:mumer119131@gmail.com"><SiGmail /></a>
        <a href="https://www.linkedin.com/in/dev-umer/" target="_blank"><AiFillLinkedin /></a>
        <a href="https://www.behance.net/mumer4" target="_blank"><AiFillBehanceCircle /></a>
      </div> 
    </footer>
  )
}

export default Footer