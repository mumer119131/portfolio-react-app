import React from 'react'
import './experience.css'
import  {ImHtmlFive} from 'react-icons/im'
import {SiCss3} from 'react-icons/si'
import {IoLogoJavascript} from 'react-icons/io'
import {GrReactjs} from 'react-icons/gr'
import {FaBootstrap} from 'react-icons/fa'
import {SiTailwindcss} from 'react-icons/si'
import { RiNextjsLine } from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";

import {DiPython} from 'react-icons/di'
import {SiDjango} from 'react-icons/si'
import {SiFlask} from 'react-icons/si'
import {SiMongodb} from 'react-icons/si'

import BACKEND_IMG from '../../assets/doodles/web.png'
import FRONTEND_IMG from '../../assets/doodles/person_on_comp.png'
import {FaNode} from 'react-icons/fa'
import {SiExpress} from 'react-icons/si'
const experience_data_frontend = [
  {
    "key" : "1",
    "logo" : <ImHtmlFive />,
    "exp" : "HTML 5",
    "exp_desc" : "HTML5 is a markup language used for structuring and presenting content on the World Wide Web."
  },
  {
    "key" : "2",
    "logo" : <SiCss3 />,
    "exp" : "CSS 3",
    "exp_desc" : "CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed."
  },
  {
    "key" : "7",
    "logo" : <RiNextjsLine />,
    "exp" : "NextJs",
    "exp_desc" : "Next.js is a React framework that enables functionality such as server-side rendering and generating static websites for React based web applications."
  },
  {
    "key" : "3",
    "logo" : <IoLogoJavascript />,
    "exp" : "Javascript",
    "exp_desc" : "Javascript is used by programmers across the world to create dynamic and interactive web content like applications and browsers."
  },
  {
    "key" : "4",
    "logo" : <GrReactjs />,
    "exp" : "React",
    "exp_desc" : "React is a JavaScript library developed by Facebook which, among other things, was used to build Instagram.com."
  },
  {
    "key" : "5",
    "logo" : <FaBootstrap />,
    "exp" : "Bootstrap 5",
    "exp_desc" : "Bootstrap is a potent front-end framework used to create modern websites and web apps."
  },
  {
    "key" : "6",
    "logo" : <SiTailwindcss/>,
    "exp" : "Tailwind CSS",
    "exp_desc" : "It makes quicker to write and maintain the code of your application. By using this utility-first framework, you don't have to write custom CSS to style your application."
  },
  {
    "key" : "8",
    "logo" : <TbBrandReactNative />,
    "exp" : "React Native",
    "exp_desc" : "React Native is an open-source framework by Facebook for building Android, iOS, Web, and UWP apps using React and native platform features."
  },

]
const experience_data_backend = [
  {
    "key" : "1",
    "logo" : <DiPython />,
    "exp" : "Python",
    "exp_desc" : "Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation."
  },
  {
    "key" : "2",
    "logo" : <SiDjango />,
    "exp" : "Django",
    "exp_desc" : "Django is a free and open-source, Python-based web framework that follows the model–template–views architectural pattern."
  },
  {
    "key" : "3",
    "logo" : <SiFlask />,
    "exp" : "Flask",
    "exp_desc" : "Flask is a micro web framework written in Python. It is classified as a microframework because it does not require particular tools or libraries."
  },
  {
    "key" : "4",
    "logo" : <SiMongodb />,
    "exp" : "MongoDB",
    "exp_desc" : "MongoDB is an open source NoSQL database management program. NoSQL is used as an alternative to traditional relational databases."
  },
  {
    "key" : "5",
    "logo" : <FaNode />,
    "exp" : "NodeJs",
    "exp_desc" : "Node.js is an open-source, server-side JavaScript runtime built on Chrome's V8 JavaScript engine, empowering developers to run JavaScript code outside the browser"
  },
  {
    "key" : "6",
    "logo" : <SiExpress />,
    "exp" : "ExpressJs",
    "exp_desc" : "Express.js is a fast, minimalist, and flexible web application framework for Node.js."
  },
]
  

const Experience = () => {
  return (
    <div className="container experience__container" id='experience'>
      <p>Which skills i have</p>
      <h2>Skills</h2>
      <h3>| <img src={FRONTEND_IMG} alt="" /> Frontend |</h3>
      <div className="exp__items__container">
        {
          experience_data_frontend.map(({key, logo, exp, exp_desc}) =>{
            return (
              <div className="exp__item" key={key} data-aos="slide-up">
                  {logo}
                  <h3>{exp}</h3>
                  <p>{exp_desc}</p>
              </div>
            )
          })
        }
    </div>

      <h3>|<img src={BACKEND_IMG} alt="" /> Backend |</h3>
      <div className="exp__items__container">
        {
          experience_data_backend.map(({key, logo, exp, exp_desc}) =>{
            return (
              <div className="exp__item" key={key} data-aos="zoom-in-up">
                  {logo}
                  <h3>{exp}</h3>
                  <p>{exp_desc}</p>
              </div>
            )
          })
        }

      </div>
  </div>
  );
    
}
export default Experience