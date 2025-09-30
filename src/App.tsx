import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero scrollY={scrollY} />
      <About />
      <Services scrollY={scrollY} />
      <Projects />
      <Clients />
      <Contact />
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;