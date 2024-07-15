// import Navbar from './Components/Navbar/Navbar'
// import Home from './Components/home/index';
// import Footer from './Components/footer';
// import SEOService from './Components/services/seo';
// function App() {
  
//   return (
//     <>
//      <Navbar/>
//      <Home/>
//      <SEOService />
//      <Footer/>
//     </>
//   )
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './app.css'
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/home/index';
import Footer from './Components/footer';
import SEOService from './Components/services/seo';
import WebDev from './Components/services/web-dev';
import DigitalMarketing from './Components/services/digital-marketing';

const NotFound = () => <h1 style={{textAlign:"center", padding:"4rem", color:"red"}}>404 - Not Found</h1>;
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home className="for-top-margin" />} />
        <Route path="/seo-service" element={<SEOService />} />
        <Route path="/web-dev" element={<WebDev />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        {/* Add more routes as needed */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

