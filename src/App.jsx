import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Navigation from './components/Navigation';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import ProfessionalPortfolio from './components/sections/ProfessionalPortfolio';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';

/**
 * Main App component
 * Renders the complete bilingual portfolio website with all sections
 */
function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <div className="min-h-screen">
          <Navigation />
          <main>
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Experience />
            <ProfessionalPortfolio />
            <Contact />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
