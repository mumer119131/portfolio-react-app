import React from 'react'
import './home.css'
import MY_IMAGE from '../../assets/my.png'
import CROWN_IMG from '../../assets/doodles/crown.png'


const CROWN_REF = React.createRef()

const Home = () => {
  
  function rotateCrown(){
    console.log(CROWN_REF)
  }
  return (
    <div className="container home__container" onScroll={rotateCrown()}>
      <small>Hello I'm</small>
      <h2><img src={CROWN_IMG} alt="" ref={CROWN_REF}/> Muhammad Umer</h2>
      <p>- FullStack Developer -</p>
      <div className="btn__container">
        <button className='btn'>Download CV</button>
        <button className='btn btn__primary'>Let's Talk</button>
      </div>
      <div className="img__container">
        <img  src={MY_IMAGE} alt="" />
      </div>
      <div className="side__bar social__container">
        <a href="https://github.com/mumer119131" target="_blank"><i className="fa-brands fa-github"></i></a>
        <a href="https://www.linkedin.com/in/m-umer-06602821b/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
        <a href="https://www.instagram.com/umer_sma119131/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
        <a href="https://www.facebook.com/profile.php?id=100083694507517" target="_blank"><i className="fa-brands fa-facebook"></i></a>
      </div>
      <div className="side__bar scroll__container">
        <p>Scroll Down</p>
      </div>
    </div>
  )
}

export default Home