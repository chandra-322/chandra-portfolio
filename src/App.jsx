
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import VideoEditing from "./sections/VideoEditing.jsx";
import Filmmaking from "./sections/Filmmaking.jsx";
import FilmDetails from "./sections/FilmDetails.jsx";
import ClientWork from "./sections/ClientWork.jsx";
import ScriptsWriting from "./sections/ScriptsWriting.jsx";
import About from "./sections/About.jsx";
import Contact from "./sections/Contact.jsx";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"



function HomePage() {
  return (
    <>
      <div id="home">
        <Hero />
      </div>

      <Filmmaking />
      <VideoEditing />
      <ClientWork />
      <ScriptsWriting />
      <About />
      <Contact />
    </>
  );
}


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/films/:slug" element={<FilmDetails />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Analytics />
      <SpeedInsights/>
    </BrowserRouter>
    
  );
}

export default App;
