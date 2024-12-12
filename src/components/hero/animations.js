
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger, useGSAP);
const animations = {
    'out-off-screen-left': (ref) => {
        console.log(ref)
        gsap.from(ref, 
            { x: 0 }, 
            {
            scrollTrigger: {
                trigger: ref,
                toggleActions: "restart pause reverse pause",
                start: "top 7%",
                end: "bottom 0%",
                scrub: true,
                markers: true,
            },
                x: -1000,
                y: 0,
                scale: 1,
                duration: 3,
            }
        );
    },
    'right-top-out': (ref) => {
        gsap.to(ref,{
            scrollTrigger: {
                trigger: ref,
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
    },
    'square-to-circle': (ref) => {
        gsap.timeline({
            scrollTrigger: {
                trigger: ref,
                toggleActions: "restart pause reverse pause",
                start: "top 7%",
                end: "bottom 20%",
                scrub: true,
                markers: true,
            }
        }).to(ref, {
            borderRadius: "50%", // Border-radius animation
            borderTop: "10px solid var(--color-secondry)",
            duration: 1,
            ease: "power1.inOut",
            repeat: false
        }).to(ref, {
            rotate: 360, 
            x: -100,// Rotation animation
            duration: 5,
            ease: "linear",
        })
    }
}

export const Animate = (ref, animation = 'out-off-screen-left') => {
    animations[animation](ref)
}

export const AnimateOutOffScreen = (ref) => {
    gsap.from(ref, 
        { x: 0 }, 
        {
        scrollTrigger: {
            trigger: ref,
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
}

export const AnimateRightTopOut = (ref) => {
    gsap.to(ref,{
        scrollTrigger: {
            trigger: ref,
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
}
