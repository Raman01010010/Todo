import logo from './logo.svg';
import './App.css';
import { Home } from './component/Home';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import 'aos/dist/aos.js'; // Import AOS JavaScript (if needed)
import { motion } from 'framer-motion';
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing function for the animation
      once: true, // Whether animation should only happen once
    });
  }, []);
  return (
    <motion.div  className="App animate__animated animate__fadeInRight">
<Home/>
    </motion.div>
  );
}

export default App;
