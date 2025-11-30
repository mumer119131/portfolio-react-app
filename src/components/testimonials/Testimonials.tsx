'use client';

import React from 'react';
import './testimonials.css';
import Image from 'next/image';
import PERSON_1_IMG from '@/assets/persons/chad.webp';
import PERSON_2_IMG from '@/assets/persons/person_2.jpg';
import PERSON_3_IMG from '@/assets/persons/person_3.jpg';
import PERSON_4_IMG from '@/assets/persons/person_4.jpg';
import { ImQuotesLeft } from 'react-icons/im';

interface Testimonial {
  id: string;
  img: any;
  clinet_name: string;
  username: string;
  review: string;
}

const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: '1',
    img: PERSON_1_IMG,
    clinet_name: 'Chad Cooper',
    username: '@bjSims1231',
    review:
      'Incredible work. We had a website that needed a really fast turnaround, he completed above expectations & did an incredible job & solved all bugs. Extremely responsive & efficient. Terrific developer, highly recommended!! Thanks so much again for your work, our team was thrilled.',
  },
  {
    id: '2',
    img: PERSON_2_IMG,
    clinet_name: 'Melissa Montiel',
    username: '@melissaM',
    review:
      'Since having our new website built by Thrive, we have seen a 200% increase in the number of online contact forms being filled out and returned to us. Matt and his team worked closely with us to provide a site that met all of the criteria that we were looking for. The end result was a website that is attractive, organized and effective. Thanks to Thrive for all of your hard work and support!',
  },
  {
    id: '3',
    img: PERSON_3_IMG,
    clinet_name: 'David McDurham',
    username: '@david_macdhrum',
    review:
      "With Thrive's help, we were able to increase the functionality of our website dramatically while cutting our costs. Our website is much more easy to use, has tons of more features than before and is incredibly easy to maintain. We could not be more happy with our new website! Thanks Thrive!",
  },
  {
    id: '4',
    img: PERSON_4_IMG,
    clinet_name: "Cathy O'Neal",
    username: '@cathy1215',
    review:
      'I went to Thrive with a basic "feel" I wanted in a website. They helped flush out the visual layout and content. Thrive\'s services are bargain when you weigh the cost versus the product you receive. I will be using them again in future endeavors. Thanks again!',
  },
];

const Testimonials: React.FC = () => {
  return (
    <div className="container testimonials__container" id="testimonials">
      <p>What clients says</p>
      <h2>Testimonials</h2>
      <div className="testimonial__items">
        {TESTIMONIALS_DATA.map(({ id, img, username, clinet_name, review }) => {
          return (
            <div className="testimonial__item" key={id} data-aos="flip-right">
              <Image src={img} alt={clinet_name} />
              <h2>{clinet_name}</h2>
              <small>{username}</small>
              <ImQuotesLeft />
              <p>{review}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
