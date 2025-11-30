'use client';

import React, { useState, useEffect } from 'react';
import Home from '@/components/v2/home/Home';
import About from '@/components/v2/about/About';
import Experience from '@/components/v2/experience/Experience';
import Portfolio, { Project } from '@/components/v2/portfolio/Portfolio';
import Testimonials, { Testimonial } from '@/components/v2/testimonials/Testimonials';
import Contact from '@/components/v2/contact/Contact';
import Footer from '@/components/v2/footer/Footer';
import Navigation from '@/components/v2/navigation/Navigation';
import LoadingScreen from '@/components/v2/LoadingScreen';

const backup_projects: Project[] = [
  {
    id: '6',
    img: 'https://imgur.com/gMkvmz1.jpg',
    web_name: 'Facial Probe',
    details: 'FaceSketch AI is a cutting-edge platform that uses advanced machine learning algorithms to generate sketches of individuals based on facial characteristics.',
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
    details: 'Get legal consultation powered by a multilingual AI chatbot trained on Pakistani law.',
    github_link: 'https://github.com/mumer119131/FinalRepoLawSuite',
    live_preview: 'https://lawsuite.vercel.app',
  },
  {
    id: '3',
    img: 'https://imgur.com/KSE0Qln.jpg',
    web_name: 'Tailors App',
    details: 'A Java-based Android application that helps tailors store and back up client data with ease.',
    github_link: 'https://github.com/mumer119131/TailorsApp',
    live_preview: '',
  },
  {
    id: '4',
    img: 'https://imgur.com/GbIGciF.jpg',
    web_name: 'Edit Pro',
    details: 'An image editing web application with a ReactJS frontend and a Python Flask backend.',
    github_link: 'https://github.com/mumer119131/Image_Editor_Python_React',
    live_preview: 'https://image-editor-client.vercel.app',
  },
  {
    id: '5',
    img: 'https://imgur.com/D4YCda3.jpg',
    web_name: 'Plus Pictures',
    details: 'A ReactJS web platform combining Pixabay, Pexels, and Unsplash into a single search interface.',
    github_link: 'https://github.com/mumer119131/PlusPictures',
    live_preview: 'https://plus-pictures.vercel.app',
  },
];

const backup_testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    text: "An exceptional developer who brings both technical expertise and creative problem-solving to the table. The attention to detail in the UI/UX is outstanding.",
    company: "TechFlow Inc."
  },
  {
    name: "Michael Chen",
    role: "Senior Engineer",
    text: "Clean code, great communication, and always delivers on time. It was a pleasure working together on our core platform migration.",
    company: "DataStream"
  },
  {
    name: "Emily Davis",
    role: "Startup Founder",
    text: "Transformed our rough ideas into a polished, high-performance application. The ability to understand business needs and translate them into code is rare.",
    company: "InnovateLab"
  },
  {
    name: "David Wilson",
    role: "CTO",
    text: "The animations and interactivity implemented exceeded our expectations. A true frontend wizard.",
    company: "CreativePulse"
  },
  {
    name: "Jessica Lee",
    role: "Design Lead",
    text: "Rarely do I find developers who respect the design fidelity this much. The implementation was pixel-perfect.",
    company: "Artistry"
  }
];

export default function Page() {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState<Project[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch Projects
        const projectsRes = await fetch('/api/projects');
        let projectsData = [];
        if (projectsRes.ok) {
            const rawProjects = await projectsRes.json();
            projectsData = rawProjects.map((item: any) => ({
                id: item.sys.id,
                img: `https:${item.fields.image.fields.file.url}`,
                web_name: item.fields.title,
                details: item.fields.description,
                github_link: item.fields.githubUrl || '',
                live_preview: item.fields.previewUrl || '',
                is_visible: item.fields.isVisible ?? true,
            }));
        } else {
            projectsData = backup_projects;
        }
        setProjects(projectsData);
        
        // Fetch Testimonials
        const testimonialsRes = await fetch('/api/testimonials');
        let testimonialsData = [];
        if (testimonialsRes.ok) {
          const rawTestimonials = await testimonialsRes.json();
          testimonialsData = rawTestimonials.map((item: any) => ({
            name: item.fields.customerName || 'Anonymous',
            role: item.fields.customerUsername || 'Client',
            text: item.fields.review || 'No feedback provided.',
            company: 'Verified Client',
          }));
        } else {
          testimonialsData = backup_testimonials;
        }
        setTestimonials(testimonialsData);

      } catch (error) {
        console.error("Error fetching data:", error);
        setProjects(backup_projects);
        setTestimonials(backup_testimonials);
      } finally {
        // Add a small delay to ensure smooth transition
        setTimeout(() => setLoading(false), 1000);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <main className="min-h-screen text-slate-200 selection:bg-blue-500/30 selection:text-blue-200">
      <Navigation />
      <Home />
      <Portfolio projects={projects} />
      <Testimonials testimonials={testimonials} />
      <Experience />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
