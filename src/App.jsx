import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import GradualBlur from './components/GradualBlur';

function App() {
  return (
    <div className="bg-bg-primary min-h-screen selection:bg-blue-500/30">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <GradualBlur preset="page-footer" strength={2} opacity={0.5} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
