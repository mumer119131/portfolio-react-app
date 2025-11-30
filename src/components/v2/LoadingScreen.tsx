import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const LoadingScreen: React.FC = () => {
  const [count, setCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Counter Animation
      const tl = gsap.timeline();
      
      tl.to({ val: 0 }, {
        val: 100,
        duration: 1.8,
        ease: "power4.out",
        onUpdate: function() {
          setCount(Math.floor(this.targets()[0].val));
        }
      });

      // Text Reveal
      gsap.from(".loading-text", {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        stagger: 0.1
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Mouse Parallax Effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!numberRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xPos = (clientX / innerWidth - 0.5) * 40; // Move 40px
      const yPos = (clientY / innerHeight - 0.5) * 40;

      gsap.to(numberRef.current, {
        x: xPos,
        y: yPos,
        duration: 1,
        ease: "power2.out"
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 z-50 bg-[#050505] text-[#e1e1e1] flex flex-col justify-between p-8 md:p-12 cursor-wait">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=Inter:wght@300;400&display=swap');
        .font-syne { font-family: 'Syne', sans-serif; }
        .font-inter { font-family: 'Inter', sans-serif; }
      `}</style>

      {/* Top Bar */}
      <div className="flex justify-between items-start font-inter text-xs uppercase tracking-widest opacity-50 loading-text">
        <span>Portfolio V2</span>
        <span>© 2025</span>
      </div>

      {/* Center Content */}
      <div className="flex flex-col items-center justify-center flex-grow relative">
        <div className="relative mix-blend-difference">
          <h1 
            ref={numberRef}
            className="font-syne font-extrabold text-[20vw] leading-none tracking-tighter loading-text select-none"
          >
            {count}
          </h1>
          <span className="absolute top-[10%] right-[-5%] md:right-[-10%] text-2xl md:text-4xl font-syne font-bold opacity-50 loading-text">
            %
          </span>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex justify-between items-end font-inter text-xs uppercase tracking-widest opacity-50 loading-text">
        <div className="flex flex-col gap-1">
          <span>Loading Experience</span>
          <span>Please Wait</span>
        </div>
        <div className="w-32 h-[1px] bg-white/20 overflow-hidden relative">
            <div className="absolute inset-0 bg-white w-full -translate-x-full animate-[shimmer_1.5s_infinite]"></div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
