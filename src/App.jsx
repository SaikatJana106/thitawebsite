
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/home/Home'
import Navbar from './components/Navbar'
import ContactUs from './pages/contactus/ContactUs';
import Footer from './components/Footer';
import Career from './pages/career/Career';
import NewsAtTheta from './pages/news/NewsAtTheta';
import Services from './pages/services/Services';
import { useEffect } from 'react';
import Awards from './pages/awards/Awards';
import WhyTheta from './pages/whytheta/WhyTheta';
import About from './pages/about/About';
import TopGoButton from './pages/topgobutton/TopGoButton';
import BlogDetails from './pages/BlogDetails';
function App() {

    useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.9.96/build/spline-viewer.js';
    document.body.appendChild(script);
  }, []);


  return (

    <div className='bg-black'>
      {<spline-viewer
        url="https://prod.spline.design/gH5W0xTo9YFfiN1x/scene.splinecode"
        className="fixed top-0 left-0 w-full h-full"
      />
      }
      <Router>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/career' element={<Career />} />
          <Route path='/news' element={<NewsAtTheta />} />
          <Route path='/services' element={<Services />} />
          <Route path='/award' element={<Awards />} />
          <Route path='/whytheta' element={<WhyTheta />} />
          <Route path='/about' element={<About />} />
          <Route path="/blog/:blogId" element={<BlogDetails/>} />
        </Routes>

        <Footer />
        <TopGoButton/>
      </Router>
    </div>
  );
}

export default App;
