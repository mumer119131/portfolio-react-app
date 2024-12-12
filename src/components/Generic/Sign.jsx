import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const Sign = () => {
  const path1Ref = useRef(null); // Reference for the first path
  const path2Ref = useRef(null); // Reference for the second path

  useEffect(() => {
    const paths = [path1Ref.current, path2Ref.current];
    
    // Set up initial stroke-dasharray and stroke-dashoffset
    paths.forEach((path) => {
      const length = path.getTotalLength(); // Get the length of the path
      path.style.strokeDasharray = length; // Set dash array to the path length
      path.style.strokeDashoffset = length; // Initially hide the stroke
    });

    // Animate the stroke
    gsap.to(paths[0], {
      strokeDashoffset: 0, // Reveal the stroke
      duration: 2, // Duration for the animation
      ease: "power1.inOut", // Smooth easing
      repeat: -1,
      repeatDelay: 2, // Delay between repeats
      stagger: 0.5, // Stagger animation for multiple paths
    });
    gsap.to(paths[1], {
      delay: 2,
      strokeDashoffset: 0, // Reveal the stroke
      duration: 1, // Duration for the animation
      ease: "power1.inOut", // Smooth easing
      repeat: -1,
      repeatDelay: 2, // Delay between repeats
      stagger: 0.5, // Stagger animation for multiple paths
    });
  }, []);

  return (
    <svg className="absolute bottom-0 right-0 translate-x-[50%] translate-y-[50%]" width="30" height="10" viewBox="0 0 60 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        ref={path1Ref} // Assign the ref
        d="M2 4.43849C6.29833 4.43849 35 -1.19338 35 4.66071C35 7.93431 33.9611 8.77926 31.3889 10.494C28.7077 12.2815 20.7303 15.1861 23.7222 16.3829C28.0009 18.0944 36.3495 16.4385 41 16.4385"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        ref={path2Ref} // Assign the ref
        d="M53 10.4385C51.4187 10.8338 51.9493 13.9494 52 15.2163C52.0731 17.044 54.4264 16.4925 55.7777 16.4385C57.9454 16.3518 57.9735 9.43848 55 9.43848"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Sign;
