import { useEffect } from 'react';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Certificates from './sections/Certificates';
import UiuxPortfolio from './sections/UiuxPortfolio';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Optional: unobserve after visible untuk performa
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Gunakan timeout kecil untuk memastikan DOM sudah siap
    const timeoutId = setTimeout(() => {
      document.querySelectorAll('.scroll-reveal').forEach(el => {
        observer.observe(el);
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-deadpool-black text-white overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        {/* <Skills /> */}
        <Certificates />
        <UiuxPortfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;