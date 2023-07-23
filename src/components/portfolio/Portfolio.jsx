import React from 'react'
import './portfolio.css'
import MOCKUP_1 from '../../assets/ss.jpg'
import MOCKUP_2 from '../../assets/semanto.jpg'
import MOCKUP_3 from '../../assets/mockup_3.png'
import MOCKUP_4 from '../../assets/mockup_4.png'
import MOCKUP_5 from '../../assets/mockup_5.png'

const PORFOLIO_ITEMS_DATA = [
  {
    "id": "1",
    "img": MOCKUP_1,
    "web_name": "LawSuite",
    "details": "Get the legal consulatation with the power of the multilingual AI chatbot.",
    "github_link": "https://github.com/mumer119131/FinalRepoLawSuite",
    "live_preview": "https://lawsuite.vercel.app"
  },
  {
    "id": "2",
    "img": MOCKUP_2,
    "web_name": "SemantoTube",
    "details": "Semantically serach through the long youtube video with power of AI",
    "github_link": "https://github.com/mumer119131/SemantoFinal",
    "live_preview": "https://semantotube.vercel.app"
  },
  {
    "id": "3",
    "img": MOCKUP_3,
    "web_name": "Tailors App",
    "details": "Java based android mobile application for the tailors to store their clients information with backup and restore facility",
    "github_link": "https://github.com/mumer119131/TailorsApp",
    "live_preview": "https://github.com/mumer119131/TailorsApp"
  },
  {
    "id": "4",
    "img": MOCKUP_4,
    "web_name": "Edit Pro",
    "details": "A Image editing web application with frontend based on ReactJS and backend based on Flask Python",
    "github_link": "https://github.com/mumer119131/Image_Editor_Python_React",
    "live_preview": "https://image-editor-client.vercel.app"
  },
  {
    "id": "5",
    "img": MOCKUP_5,
    "web_name": "Plus Pictures",
    "details": "A ReactJS based web application with Pixabay, Pexels and Unsplash at a single platform",
    "github_link": "https://github.com/mumer119131/PlusPictures",
    "live_preview": "https://plus-pictures.vercel.app"
  },
]
const Portfolio = () => {
  return (
    <div className="container portfolio__container" id='portfolio'>
      <p>Check out my Recent Work</p>
      <h2>Portfolio</h2>
      <div className="portfolio__items">
        {
          PORFOLIO_ITEMS_DATA.map(({ id, img, web_name, details, github_link, live_preview }) => {
            return (
              <div className="portfolio__item" key={id} data-aos='zoom-in-up'>
                <img src={img} alt="" />
                <h3>{web_name}</h3>
                <p>{details}</p>
                <div className="btn__container">
                  <a href={github_link} target="_blank" className='btn'>Source Code</a>
                  <a href={live_preview} target="_blank" className='btn btn__primary'>Live Preview</a>
                </div>
              </div>

            )
          })
        }
      </div>
    </div>
  )
}

export default Portfolio