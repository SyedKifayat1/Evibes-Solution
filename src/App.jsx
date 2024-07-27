import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './app.css'
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/home/index';
import Footer from './Components/footer';
import SEOService from './Components/services/seo';
import WebDev from './Components/services/web-dev';
import DigitalMarketing from './Components/services/digital-marketing';
import UiUxService from './Components/services/ui-ux';
import AboutUs from './Components/about-us';
import ContactUs from './Components/contact-us';
// import Blogs from './Components/blogs';
import WhatsAppIcon from './Components/whatsAppIcon';

import Aos from 'aos';
import "aos/dist/aos.css"




const NotFound = () => <h1 style={{textAlign:"center", padding:"4rem", color:"red"}}>404 - Not Found</h1>;

function App() {

  useEffect(()=>{
    Aos.init({
      duration:500,
      easing:'ease-in-sine',
    })
  },[])
 
  return (
    <Router>
      <Navbar />
      <WhatsAppIcon/>
      <Routes>
        <Route path="/" element={<Home className="for-top-margin" />} />
        <Route path="/seo-service" element={<SEOService />} />
        <Route path="/web-dev" element={<WebDev />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/ui-ux" element={<UiUxService />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        {/* <Route path="/blogs" element={<Blogs />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

