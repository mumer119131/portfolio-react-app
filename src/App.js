import { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Homepage from './page/Homepage'
import Console from './page/Console'
import { Analytics } from "@vercel/analytics/react"
import Game from './page/Game'
function App() {
  useEffect(() => {
    Aos.init({duration : 1500})
  }, [])
  
  return (
    <>
      <Analytics />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/console" element={<Console />} />
          <Route path="/game" element={<div className='h-screen w-screen'><Game /></div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
