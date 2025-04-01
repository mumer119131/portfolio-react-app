import React from 'react'
import './about.css'
import BRAIN_IMG from '../../assets/doodles/brain_without_eyes.png'
import EYES_IMG from '../../assets/doodles/eye_ball.png'
import {SiAdobephotoshop} from 'react-icons/si'
import {SiAdobeillustrator} from 'react-icons/si'
import {CgFigma} from 'react-icons/cg'
import {SiAdobexd} from 'react-icons/si'
import {DiPython} from 'react-icons/di'
import {SiDjango} from 'react-icons/si'
import {IoLogoJavascript} from 'react-icons/io'
import {FaReact} from 'react-icons/fa'
import {SiFlask} from 'react-icons/si'
import { useEffect } from 'react'

const About = () => {
  
  useEffect(()=>{
    
    
    const anchor = document.getElementById('anchor')
    const rekt = anchor.getBoundingClientRect()
    const anchorX = rekt.left + rekt.width / 2;
    const anchorY = rekt.top + rekt.height / 2;

    document.addEventListener('mousemove',(e)=>{
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const angleDeg = angle(mouseX, mouseY, anchorX, anchorY)
      
      const eyes = document.querySelectorAll('.eye')
      eyes.forEach(eye => {
        eye.style.transform = `rotate(${angleDeg}deg)`
      });
    })

    function angle(cx, cy, ex, ey){
      const dy = ey - cy;
      const dx = ex - cx;
      const rad = Math.atan2(dy, dx);
      const deg = rad * 180 / Math.PI;
      return deg
    }
  },[])
  const logoSize = 30;
  return (
    <div className="container about__container" id='about'>
      <p>Get to know more</p>
      <h2>About Me</h2>
      <div className="about__desc">
        
        <div className="coder__desc" data-aos='slide-left'>
          <h2>Frontend</h2>
          <p>"I am fullstack Web Developer with over 4+ year of Experience. I had worked for some multinational companies and also a freelancer."</p>
          <div className="technology__items">
            <DiPython size={logoSize}/>
            <SiDjango size={logoSize}/>
            <IoLogoJavascript size={logoSize}/>
            <FaReact size={logoSize}/>
            <SiFlask size={logoSize}/>
          </div>
        </div>
        <div className="doodle__container" data-aos='fade-up'>
          <img src={BRAIN_IMG} alt="" id='anchor'/>
          <div className="eyes">
            <img src={EYES_IMG} alt="" className='eye'/>
            <img src={EYES_IMG} alt="" className='eye'/>
          </div>
        </div>
        <div className="designer__desc" data-aos ='slide-right'>
          <h2>Backend</h2>
          <p>"I am a graphic designer with over 3 years of Experience. I had worked as a freelancer and full time graphic designer with alot of companies."</p>
          <div className="technology__items">
            <SiAdobephotoshop size={logoSize}/>
            <SiAdobeillustrator size={logoSize}/>
            <CgFigma size={logoSize}/>
            <SiAdobexd size={logoSize}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About