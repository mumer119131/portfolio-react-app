'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ImQuotesLeft } from 'react-icons/im';

// Assets
import PERSON_1_IMG from '@/assets/persons/chad.webp';
import PERSON_2_IMG from '@/assets/persons/person_2.jpg';
import PERSON_3_IMG from '@/assets/persons/person_3.jpg';
import PERSON_4_IMG from '@/assets/persons/person_4.jpg';

gsap.registerPlugin(ScrollTrigger);

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
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.testimonial-card');
      
      // Initial State: All cards except the first one are off-screen to the right
      gsap.set(cards, { x: '120%', opacity: 0, rotate: 5 });
      gsap.set(cards[0] as any, { x: 0, opacity: 1, rotate: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
        }
      });

      // Animate cards in sequence
      cards.forEach((card: any, index) => {
        if (index === 0) return; // First card is already there

        tl.to(card, {
          x: 0,
          opacity: 1,
          rotate: index % 2 === 0 ? 2 : -2, // Alternating slight rotation for "messy stack" look
          duration: 1,
          ease: 'power2.out',
        }, "-=0.2"); // Slight overlap in timing
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="testimonials" className="relative h-screen w-full bg-slate-950 overflow-hidden flex flex-col items-center justify-center z-30">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-950 via-transparent to-slate-950 pointer-events-none z-0" />
      
      {/* Header - Fixed at top of the pinned section */}
      <div className="absolute top-10 md:top-20 left-0 w-full text-center z-20 px-4">
        <p className="text-blue-500 font-medium tracking-widest text-sm uppercase mb-3">
          Feedback
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-slate-100">
          Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Testimonials</span>
        </h2>
      </div>

      {/* Cards Container */}
      <div className="relative w-full max-w-4xl h-[50vh] md:h-[400px] flex items-center justify-center mt-20">
        {TESTIMONIALS_DATA.map(({ id, img, username, clinet_name, review }, index) => (
          <div 
            key={id} 
            className="testimonial-card absolute top-0 left-0 w-full h-full px-4 md:px-0 flex items-center justify-center"
            style={{ zIndex: index + 1 }}
          >
            <div className="w-full max-w-3xl bg-slate-900 border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl flex flex-col md:flex-row gap-8 items-center relative overflow-hidden">
              {/* Glass effect overlay */}
              <div className="absolute inset-0 bg-blue-500/5 backdrop-blur-sm pointer-events-none"></div>
              
              {/* Profile Image */}
              <div className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0 z-10">
                <div className="absolute inset-0 rounded-full border-2 border-blue-500/50 animate-pulse"></div>
                <Image 
                  src={img} 
                  alt={clinet_name} 
                  fill 
                  className="object-cover rounded-full border-4 border-slate-800 shadow-lg" 
                />
                <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-2 rounded-full text-sm shadow-lg">
                  <ImQuotesLeft />
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow text-center md:text-left z-10">
                <div className="mb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-100">{clinet_name}</h3>
                  <p className="text-blue-400 font-mono text-sm">{username}</p>
                </div>

                <p className="text-slate-300 leading-relaxed text-base md:text-lg italic">
                  &quot;{review}&quot;
                </p>
                
                {/* Rating Stars */}
                <div className="flex gap-1 mt-4 justify-center md:justify-start">
                  {[1,2,3,4,5].map(i => (
                    <div key={i} className="w-2 h-2 rounded-full bg-yellow-400 shadow-[0_0_5px_rgba(250,204,21,0.5)]"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;


