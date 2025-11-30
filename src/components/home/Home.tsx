'use client';

import React, { useRef } from 'react';
import './home.css';
import Image from 'next/image';
import MY_IMAGE from '@/assets/my.png';
import CROWN_IMG from '@/assets/doodles/crown.png';
import Link from 'next/link';
import { IoTerminal } from 'react-icons/io5';
import Arrow from '../arrow/Arrow';

const Home: React.FC = () => {
  const CROWN_REF = useRef<HTMLImageElement>(null);

  function scrollDown() {
    window.scrollTo(0, document.body.scrollHeight);
  }

  return (
    <div className="container home__container">
      <div className="home__content__container">
        <small>Hello I&apos;m</small>
        <h2>
          <Image src={CROWN_IMG} alt="" ref={CROWN_REF as any} /> Muhammad Umer
        </h2>
        <p>- FullStack Developer -</p>
        <div>
          <div className="btn__container">
            <a href="/cv.pdf" download className="btn">
              Download CV
            </a>
            <a href="#contact" className="btn btn__primary">
              Let&apos;s Talk
            </a>
          </div>
          <div className="relative">
            <Arrow />
            <Link
              href="/console"
              className="btn w-full block no-underline btn__primary pop-animation"
            >
              <IoTerminal className="inline relative bottom-[1px]" />
              &nbsp;&nbsp;Access Console
            </Link>
          </div>
        </div>
        <div className="img__container">
          <Image src={MY_IMAGE} alt="Muhammad Umer" />
          <a
            href="https://www.upwork.com/freelancers/~018f0a3f855d9f92d9"
            target="_blank"
            rel="noreferrer"
            className="h-max rounded-full flex justify-center items-center absolute -bottom-5 md:top-0 flex-col md:flex-row -right-2 text-gray-300 md:translate-x-[50%] cursor-pointer hover:scale-110 transition-all duration-300"
          >
            <svg
              className="h-12 w-12"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              aria-hidden="true"
              viewBox="0 0 28 28"
              role="img"
            >
              <path
                fill="#1F57C3"
                d="M12 1.155a4 4 0 014 0l8.124 4.69a4 4 0 012 3.464v9.382a4 4 0 01-2 3.464L16 26.845a4 4 0 01-4 0l-8.124-4.69a4 4 0 01-2-3.464V9.309a4 4 0 012-3.464L12 1.155z"
              ></path>
              <path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M14.761 7.542l1.188 3.201 3.285.184a.78.78 0 01.448.173c.13.104.226.247.277.41a.9.9 0 01.01.504.858.858 0 01-.261.422L17.15 14.6l.854 3.328a.907.907 0 01-.025.507.857.857 0 01-.291.404.785.785 0 01-.919.02L14 16.984l-2.764 1.862a.784.784 0 01-.916-.012.855.855 0 01-.294-.4.906.906 0 01-.031-.505l.847-3.314-2.55-2.18a.858.858 0 01-.26-.421.9.9 0 01.01-.504.853.853 0 01.276-.41.782.782 0 01.448-.173l3.285-.184 1.188-3.201a.86.86 0 01.302-.394.79.79 0 01.918 0 .86.86 0 01.302.394z"
                clipRule="evenodd"
              ></path>
            </svg>
            <h3 className="text-sm">
              Top Rated On <u>Upwork</u>
            </h3>
          </a>
        </div>
        <div className="social__container__home side__bar">
          <a href="https://github.com/mumer119131" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/m-umer-06602821b/" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="mailto:mumer119131@gmail.com">
            <i className="fa-brands fa-google" rel="noreferrer"></i>
          </a>
          <a href="https://www.linkedin.com/in/dev-umer/" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-dev"></i>
          </a>
        </div>
        <div className="side__bar scroll__container">
          <p onClick={scrollDown}>Scroll Down</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
