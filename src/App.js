import { Route, Routes } from "react-router-dom";
import Cursor from "./Components/Cursor";

import { Footer } from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Preloader } from "./Components/Preloader";
import Home from "./Pages/Home";

import Works from './Pages/Works';
import Blog from './Pages/Blog';
import About from './Pages/About';
import Resume from './Pages/Resume';
import Pricing from './Pages/Pricing';
import Contact from './Pages/Contact';
import BackToTop from "./Components/BackToTop";


function App() {
  return (
    <div className="container-page">
    <Preloader/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/works" element={<Works />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
     
        
      </Routes>
   
      <Footer />
      <Cursor/>
      <BackToTop/>

    </div>
  );
}

export default App;
