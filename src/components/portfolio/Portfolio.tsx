'use client';

import React, { useEffect, useState } from 'react';
import './portfolio.css';
import LoadingState from './LoadingState/LoadingState';
import { Tilt } from 'react-tilt';
import Image from 'next/image';

interface Project {
  id: string;
  img: string;
  web_name: string;
  details: string;
  github_link: string;
  live_preview: string;
  is_visible?: boolean;
}

const backup_projects: Project[] = [
  {
    id: '6',
    img: 'https://imgur.com/gMkvmz1.jpg',
    web_name: 'Facial Probe',
    details:
      'FaceSketch AI is a cutting-edge platform that uses advanced machine learning algorithms to generate sketches of individuals based on facial characteristics.',
    github_link: 'https://github.com/mumer119131/FacialProbeDemo',
    live_preview: 'https://facial-probe-demo.vercel.app/',
  },
  {
    id: '2',
    img: 'https://imgur.com/jTc3VfQ.jpg',
    web_name: 'SemantoTube',
    details: 'Semantically search through long YouTube videos with the power of AI.',
    github_link: 'https://github.com/mumer119131/SemantoFinal',
    live_preview: 'https://semantotube.vercel.app',
  },
  {
    id: '1',
    img: 'https://imgur.com/IxVXOzt.jpg',
    web_name: 'LawSuite',
    details:
      'Get legal consultation powered by a multilingual AI chatbot trained on Pakistani law.',
    github_link: 'https://github.com/mumer119131/FinalRepoLawSuite',
    live_preview: 'https://lawsuite.vercel.app',
  },
  {
    id: '3',
    img: 'https://imgur.com/KSE0Qln.jpg',
    web_name: 'Tailors App',
    details:
      'A Java-based Android application that helps tailors store and back up client data with ease.',
    github_link: 'https://github.com/mumer119131/TailorsApp',
    live_preview: '',
  },
  {
    id: '4',
    img: 'https://imgur.com/GbIGciF.jpg',
    web_name: 'Edit Pro',
    details:
      'An image editing web application with a ReactJS frontend and a Python Flask backend.',
    github_link: 'https://github.com/mumer119131/Image_Editor_Python_React',
    live_preview: 'https://image-editor-client.vercel.app',
  },
  {
    id: '5',
    img: 'https://imgur.com/D4YCda3.jpg',
    web_name: 'Plus Pictures',
    details:
      'A ReactJS web platform combining Pixabay, Pexels, and Unsplash into a single search interface.',
    github_link: 'https://github.com/mumer119131/PlusPictures',
    live_preview: 'https://plus-pictures.vercel.app',
  },
];

const Portfolio: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const res = await fetch('/api/projects');
        const data = await res.json();

        const transformed: Project[] = data.map((item: any) => ({
          id: item.sys.id,
          img: `https:${item.fields.image.fields.file.url}`,
          web_name: item.fields.title,
          details: item.fields.description,
          github_link: item.fields.githubUrl || '', // No GitHub link in new CMS structure
          live_preview: item.fields.previewUrl || '',
          is_visible: item.fields.isVisible ?? true,
        }));

        setProjects(transformed);
      } catch (error) {
        setProjects(backup_projects);
      } finally {
        setIsLoading(false);
      }
    };

    getProjects();
  }, []);

  return (
    <div className="container portfolio__container" id="portfolio">
      <p>Check out my recent work</p>
      <h2>Projects</h2>

      <div className="portfolio__items">
        {isLoading ? (
          <LoadingState />
        ) : (
          projects
            .filter((p) => p.is_visible !== false)
            .map(({ id, img, web_name, details, github_link, live_preview }) => (
              <Tilt key={id} className="portfolio__item group" data-aos="zoom-in-up">
                <div className="relative">
                  <Image
                    src={img}
                    alt={web_name}
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>

                <h3>{web_name}</h3>
                <p className="flex-grow">{details}</p>

                <div className="btn__container w-[80%] m-auto flex justify-center">
                  {github_link && (
                    <a href={github_link} target="_blank" rel="noreferrer" className="btn whitespace-nowrap flex-grow">
                      Source Code
                    </a>
                  )}

                  {live_preview && (
                    <a
                      href={live_preview}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn__primary whitespace-nowrap flex-grow"
                    >
                      Live Preview
                    </a>
                  )}
                </div>
              </Tilt>
            ))
        )}
      </div>
    </div>
  );
};

export default Portfolio;
