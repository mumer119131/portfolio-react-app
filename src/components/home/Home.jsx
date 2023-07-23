import React, { useRef } from 'react'
import './home.css'
import MY_IMAGE from '../../assets/my.png'
import CROWN_IMG from '../../assets/doodles/crown.png'
import CV from '../../assets/cv.pdf'


const Home = () => {
  const CROWN_REF = useRef()

  function scrollDown(){
    window.scrollTo(0,document.body.scrollHeight)
  }
  return (
    <div className="container home__container">
      <div className="home__content__container">
        <small>Hello I'm</small>
        <h2><img src={CROWN_IMG} alt="" ref={CROWN_REF}/> Muhammad Umer</h2>
        <p>- FullStack Developer -</p>
        <div className="btn__container">
          <a href={CV} download className='btn'>Download CV</a>
          <a href='#contact' className='btn btn__primary'>Let's Talk</a>
        </div>
        <div className="img__container">
          <img  src={MY_IMAGE} alt="" />
        </div>
        <div className="social__container__home side__bar">
          <a href="https://github.com/mumer119131" target="_blank" ><i className="fa-brands fa-github"></i></a>
          <a href="https://www.linkedin.com/in/m-umer-06602821b/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
          <a href="https://www.instagram.com/umer_sma119131/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
          <a href="https://www.facebook.com/profile.php?id=100083694507517" target="_blank"><i className="fa-brands fa-facebook"></i></a>
        </div>
        <div className="side__bar scroll__container">
          <p onClick={scrollDown}>Scroll Down</p>
        </div>
      </div>
    </div>
  )
}

export default Home