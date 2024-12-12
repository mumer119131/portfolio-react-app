import React, { useRef } from 'react'
import Earth from './earth/Earth';
import Navbar from './navbar/Navbar';
import AnimatedText from '../animations/AnimatedText';
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Sign from '../Generic/Sign'
import leaf from '../../assets/v2/leaf.png'

const Hero = () => {
    gsap.registerPlugin(useGSAP, ScrollTrigger);
    const designerRef = useRef(null);
    const nameRef = useRef(null);
    const modelRef = useRef(null)
    useGSAP(()=>{
        gsap.fromTo(nameRef.current, 
            { x: 0 }, 
            {
            scrollTrigger: {
                trigger: nameRef.current,
                toggleActions: "restart pause reverse pause",
                start: "top 7%",
                end: "bottom 0%",
                scrub: true,
            },
                x: -1000,
                y: 0,
                scale: 1,
                duration: 3,
            }
        );
        gsap.to(modelRef.current,{
            scrollTrigger: {
                trigger: nameRef.current,
                toggleActions: "restart pause reverse pause",
                start: "top 7%",
                end: "bottom 0%",
                scrub: true,
            },
                x: 1000,
                y: -1000,
                z: -1000,
                scale: 1,
                duration: 3,
        })
        gsap.to('.leaf-1',{
            scrollTrigger: {
                trigger: nameRef.current,
                toggleActions: "restart pause reverse pause",
                start: "top 7%",
                end: "bottom 0%",
                scrub: true,
            },
                rotate: 90,
                y: -1000,
                duration: 3,
        })
        gsap.fromTo('.name-character-m', 
            { scaleX: 1 }, 
            { 
            scaleX: -1, 
            repeat: -1, 
            yoyo: true, 
            repeatDelay: 1, 
            duration: 0.5
            }
        )
        gsap.fromTo('.dot', 
            { scaleX: 1 }, 
            { 
            borderRadius: "50%", // Border-radius animation
            borderTop: "10px solid var(--color-secondry)",
            borderBottom: "10px solid var(--color-secondry)",
            rotate: 180, // Rotation animation
            repeat: -1, 
            yoyo: true, 
            repeatDelay: 1, 
            duration: 0.5
            }
        )
        gsap.timeline({
            scrollTrigger: {
                trigger: nameRef.current,
                toggleActions: "restart pause reverse pause",
                start: "top 7%",
                end: "bottom 20%",
                scrub: true,
            }
        }).to('.dot', {
            borderRadius: "50%", // Border-radius animation
            borderTop: "10px solid var(--color-secondry)",
            duration: 1,
            ease: "power1.inOut",
            repeat: false
        }).to('.dot', {
            rotate: 360, // Rotation animation
            duration: 5,
            ease: "linear",
        })
    }, []);
    React.useEffect(()=>{
        window.addEventListener("resize", ()=>{
            if (modelRef.current) {
                // Set the width and height of the element to match the window's dimensions
                modelRef.current.style.width = `${modelRef.current.innerWidth}px`;
                modelRef.current.style.height = `${modelRef.current.innerHeight}px`;
            }
        })
    },[])
    React.useEffect(() => {
        const handleScroll = (event) => {
            if (event.deltaY < 0) {
                window.scrollBy(0, -window.innerHeight);
            } else {
                window.scrollBy(0, window.innerHeight);
            }
        };

        window.addEventListener('wheel', handleScroll);

        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, []);
return (
    <div id='hero' className='container h-screen !p-[0rem] w-full flex items-center relative flex-col !overflow-visible'>
            <Navbar />
            <div className='relative w-full'>

                    <h1 ref={nameRef}
                        className='!text-[8rem] sm:!text-[10rem] md:!text-[15rem] lg:!text-[20rem] relative uppercase font-devil font-bold  text-[var(--color-secondry)] flex flex-col gap-[-1rem] items-center'>
                            <div className='relative font-devil mt-[2rem]'>
                                <span className='inline-block name-character-m font-devil'>M</span><span className='dot font-devil md:h-5 md:w-5 lg:h-10 lg:w-10 bg-white inline-block'></span>
                                <h2 ref={designerRef} className='absolute top-[0rem] left-[50%] translate-x-[-50%] !text-[1rem] md:!text-[2rem] lg:!text-[2rem] uppercase font-bimbo font-bold !text-white name-main'>Designer <Sign/> </h2>
                            </div> 
                            <div className='w-full h-full absolute' ref={modelRef}>
                                    <Earth />
                            </div>
                            <div className='relative lg:mt-[-14rem] font-devil w-max'>
                                <h2 ref={designerRef} className='absolute top-[0rem] left-[0] !text-[1rem] md:!text-[2rem] lg:!text-[2rem] uppercase font-bimbo font-bold !text-white name-main'>Cyber <Sign/></h2>
                                <span>
                                    <span className='name-character font-devil'>U</span>
                                    <span className='name-character font-devil'>M</span>
                                    <span className='name-character font-devil'>E</span>
                                    <span className='name-character font-devil'>R</span>
                                </span>
                                <h2 className='absolute bottom-[0rem] right-[0] !text-[1rem] md:!text-[2rem] lg:!text-[2rem] uppercase font-bimbo font-bold translate-y-[-100%] !text-white'>Full Stack Developer <Sign/></h2>
                            </div>
                           
                        </h1>
                    <div className='flex justify-between mt-[-2rem] md:mt-[-3rem] lg:mt-[-5rem]'>
                    </div>
            <AnimatedText className='text-[2rem] text-[var(--color-secondry)] uppercase font-bimbo font-bold mt-[4rem]'>Passion & Profession</AnimatedText>
            </div>
            <div>
                <img src={leaf} alt="" className='leaf-1 z-index absolute'/>
                <img src={leaf} alt="" className='leaf-1 z-index absolute scale-x-[-1] left-0 translate-x-[-50%]'/>
            </div>
    </div>
)
}

export default Hero