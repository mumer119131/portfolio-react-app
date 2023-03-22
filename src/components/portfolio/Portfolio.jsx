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
    "web_name": "U Developers",
    "details": "React Web Application of a Real Estate website covering their servies and other details.",
    "github_link": "https://github.com/mumer119131/udeveloper_react_app",
    "live_preview": "https://udeveloper.vercel.app/"
  },
  {
    "id": "4",
    "img": MOCKUP_4,
    "web_name": "PNA News",
    "details": "Read all the news of top Pakistan news channels at one place.",
    "github_link": "https://github.com/mumer119131/pna_news_web",
    "live_preview": "https://pna_news.surge.sh/"
  },
  {
    "id": "5",
    "img": MOCKUP_5,
    "web_name": "Disney Concept Web",
    "details": "A conecpt website design for the disney land containing some characters.",
    "github_link": "https://github.com/mumer119131/Disney-Concept-Website",
    "live_preview": "https://disney_web.surge.sh/"
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