import React from 'react'
import './about.css'
import ROCKET_DOODLE from '../../assets/doodles/spaceship.png'
import {SiAdobephotoshop} from 'react-icons/si'
import {SiAdobeillustrator} from 'react-icons/si'
import {CgFigma} from 'react-icons/cg'
import {SiAdobexd} from 'react-icons/si'
import {DiPython} from 'react-icons/di'
import {SiDjango} from 'react-icons/si'
import {IoLogoJavascript} from 'react-icons/io'
import {FaReact} from 'react-icons/fa'
import {SiFlask} from 'react-icons/si'

const About = () => {
  const logoSize = 30;
  return (
    <div className="container about__container" id='about'>
      <p>Get to know more</p>
      <h2>About Me</h2>
      <div className="about__desc">
        <div className="designer__desc">
          <h2>Designer</h2>
          <p>"I am a graphic designer with over 3 years of Experience. I had worked as a freelancer and full time graphic designer with alot of companies."</p>
          <div className="technology__items">
            <SiAdobephotoshop size={logoSize}/>
            <SiAdobeillustrator size={logoSize}/>
            <CgFigma size={logoSize}/>
            <SiAdobexd size={logoSize}/>
          </div>
        </div>
        <div className="doodle__container">
          <img src={ROCKET_DOODLE} alt="" />
        </div>
        <div className="coder__desc">
          <h2>Programmer</h2>
          <p>"I am fullstack Web Developer with over 4+ year of Experience. I had worked for some multinational companies and also a freelancer."</p>
          <div className="technology__items">
            <DiPython size={logoSize}/>
            <SiDjango size={logoSize}/>
            <IoLogoJavascript size={logoSize}/>
            <FaReact size={logoSize}/>
            <SiFlask size={logoSize}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About