import React, { useEffect } from 'react'
import './portfolio.css'
import LoadingState from './LoadingState/LoadingState'


const Portfolio = () => {
  const [projects, setProjects] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)
  const backup_projects = [
    {
        "id": "6",
        "img": "https://imgur.com/gMkvmz1.jpg",
        "web_name": "Facial Probe",
        "details": "FaceSketch AI is a cutting-edge website that uses advanced machine learning algorithms to generate sketches of suspected individuals based on inputted facial characteristics.",
        "github_link": "https://github.com/mumer119131/FacialProbeDemo",
        "live_preview": "https://facial-probe-demo.vercel.app/"
    },
    {
      "id": "2",
      "img": "https://imgur.com/jTc3VfQ.jpg",
      "web_name": "SemantoTube",
      "details": "Semantically serach through the long youtube video with power of AI",
      "github_link": "https://github.com/mumer119131/SemantoFinal",
      "live_preview": "https://semantotube.vercel.app"
    },
    {
      "id": "1",
      "img": "https://imgur.com/IxVXOzt.jpg",
      "web_name": "LawSuite",
      "details": "Get the legal consulatation with the power of the multilingual AI chatbot.",
      "github_link": "https://github.com/mumer119131/FinalRepoLawSuite",
      "live_preview": "https://lawsuite.vercel.app"
    },
    {
      "id": "3",
      "img": "https://imgur.com/KSE0Qln.jpg",
      "web_name": "Tailors App",
      "details": "Java based android mobile application for the tailors to store their clients information with backup and restore facility",
      "github_link": "https://github.com/mumer119131/TailorsApp",
      "live_preview": ""
    },
    {
      "id": "4",
      "img": "https://imgur.com/GbIGciF.jpg",
      "web_name": "Edit Pro",
      "details": "A Image editing web application with frontend based on ReactJS and backend based on Flask Python",
      "github_link": "https://github.com/mumer119131/Image_Editor_Python_React",
      "live_preview": "https://image-editor-client.vercel.app"
    },
    {
      "id": "5",
      "img": "https://imgur.com/D4YCda3.jpg",
      "web_name": "Plus Pictures",
      "details": "A ReactJS based web application with Pixabay, Pexels and Unsplash at a single platform",
      "github_link": "https://github.com/mumer119131/PlusPictures",
      "live_preview": "https://plus-pictures.vercel.app"
    }
  ]
  

  useEffect(() => {
     const getProjects = async () => {
      try{
        const url = "https://json-files-hoster.vercel.app/api/projects"
        // const url = "https://jsonhost.com/json/e15a4172d3a716cad67b06b2e9011cfc"
        const response = await fetch(url)
        const data = await response.json()
        setProjects(data.projects)
      }catch(error){
        setProjects(backup_projects)
      }
      setIsLoading(false)
     }
    getProjects()
  },[])
  return (
    <div className="container portfolio__container" id='portfolio'>
      <p>Check out my Recent Work</p>
      <h2>Projects</h2>
      <div className="portfolio__items">
        {
          (!isLoading && projects) ? projects.map(({ id, img, web_name, details, github_link, live_preview }) => {
            return (
              <div className="portfolio__item" key={id} data-aos='zoom-in-up'>
                <img src={img} alt="" />
                <h3>{web_name}</h3>
                <p className='flex-grow'>{details}</p>
                <div className="btn__container w-[80%] m-auto">
                  {github_link && <a href={github_link} target="_blank" className='btn flex-grow whitespace-nowrap' rel="noreferrer">Source Code</a>}
                  {live_preview && <a href={live_preview} target="_blank" className='btn btn__primary flex-grow whitespace-nowrap' rel="noreferrer">Live Preview</a>}
                </div>
              </div>

            )
          }) : <LoadingState />
        } 
      </div>
    </div>
  )
}

export default Portfolio