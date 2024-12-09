import { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Homepage from './page/Homepage'
import Console from './page/Console'

function App() {
  useEffect(() => {
    Aos.init({duration : 1500})
  }, [])
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/console" element={<Console />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
