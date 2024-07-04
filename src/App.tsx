import 'normalize.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { useEffect, useState } from "react";
import { Header } from "./components/Header/Header";
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import About from './pages/About/About';
import ExtraSales from './pages/ExtraSales/ExtraSales';
import FreeGuide from './pages/FreeGuide/FreeGuide';
import { Footer } from "./components/Footer/Footer";

import ScrollToTop from "./utils/scrollToTop";

function App() {
  
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <Router>
        <ScrollToTop/>
        <Header isTopOfPage={isTopOfPage}/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/extra-sales' element={<ExtraSales/>}/>
          <Route path='/free-guide' element={<FreeGuide/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
