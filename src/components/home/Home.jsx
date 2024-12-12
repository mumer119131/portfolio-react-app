import React, { useRef } from 'react'
import './home.css'
import MY_IMAGE from '../../assets/my.png'
import CROWN_IMG from '../../assets/doodles/crown.png'
import CV from '../../assets/cv.pdf'
import { Link } from 'react-router'
import { IoTerminal } from "react-icons/io5";

const Home = () => {
  const CROWN_REF = useRef()
  function scrollDown(){
    window.scrollTo(0,document.body.scrollHeight)
  }
  
  return (
    <div className="container home__container w-screen h-screen flex items-center justify-center transition-all">
      <div className="home__content__container">
        <small>Hello I'm</small>
        <h2><img src={CROWN_IMG} alt="" ref={CROWN_REF}/> Muhammad Umer</h2>
        <p>- FullStack Developer -</p>
        <div>
          <div className="btn__container">
            <a href={CV} download className='btn'>Download CV</a>
            <a href='#contact' className='btn btn__primary'>Let's Talk</a>
          </div>
          <div>
            <Link to="/console" className='btn w-full block no-underline'><IoTerminal className='inline relative bottom-[1px]'/>&nbsp;&nbsp;Access Console</Link>
          </div>
        </div>
        <div className="img__container">
          <img  src={MY_IMAGE} alt="" />
        </div>
        <div className="social__container__home side__bar">
          <a href="https://github.com/mumer119131" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
          <a href="https://www.linkedin.com/in/m-umer-06602821b/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a>
          <a href="mailto:mumer119131@gmail.com"><i class="fa-brands fa-google" rel="noreferrer"></i></a>
          <a href="https://www.linkedin.com/in/dev-umer/" target="_blank" rel="noreferrer"><i class="fa-brands fa-dev"></i></a>
        </div>
        <div className="side__bar scroll__container">
          <p onClick={scrollDown}>Scroll Down</p>
        </div>
      </div>
    </div>
  )
}

export default Home