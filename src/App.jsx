import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X
} from 'lucide-react';

import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import TheDeck from './components/TheDeck';
import Objective from './components/Objective';
import Gameplay from './components/Gameplay';
import Scoring from './components/Scoring';

import creamPaperImg from './public/images/cream-paper.png';

export default function App() {
  const [activeSection, setActiveSection] = useState('00');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState('Classic');

  // Smooth scroll to sections
  const scrollTo = (id) => {
    setActiveSection(id);
    const el = document.getElementById(`section-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Scroll spy to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['00', '01', '02', '03', '04'];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(`section-${sections[i]}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the top of the section is above the middle of the viewport
          if (rect.top <= window.innerHeight / 2) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`min-h-screen flex ${theme === 'Night' ? 'bg-stone-950 text-stone-200' : 'bg-[#FDFCF9] text-stone-900'}`}
      style={{ backgroundImage: `url(${creamPaperImg})`, backgroundRepeat: 'repeat', backgroundBlendMode: theme === 'Night' ? 'color-burn' : 'multiply' }}
    >
      <Sidebar 
        activeSection={activeSection} 
        scrollTo={scrollTo} 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
        theme={theme}
        setTheme={setTheme}
      />

      {/* Main Content */}
      <main className="flex-1 lg:pl-64 transition-colors duration-500">
        {/* Mobile Nav Header */}
        <header className={`lg:hidden sticky top-0 z-40 backdrop-blur-md border-b p-4 flex justify-between items-center ${theme === 'Night' ? 'bg-stone-900/80 border-stone-800' : 'bg-stone-100/80 border-stone-300'}`}>
          <h1 className="font-serif font-bold italic">Kwaho Guide</h1>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </header>

        <div className="max-w-7xl mx-auto px-6 py-12 md:py-24">
          <Hero />
          
          <Introduction />

          <TheDeck />
          
          <Objective />
          
          <Gameplay />
          
          <Scoring />

          {/* Footer */}
          <footer className="pt-16 pb-24 border-t border-stone-400/40 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col gap-1">
              <h4 className="text-lg font-serif italic">Cuajo: Digital Manual</h4>
              <p className="text-[9px] font-black uppercase tracking-[0.3em] text-stone-400">Authentic Philippine Edition</p>
            </div>
            
            <div className="flex items-center gap-6">
              <a 
                href="https://www.pagat.com/rummy/cuajo.html" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`px-8 py-3 text-[10px] uppercase font-bold tracking-widest rounded-md transition-all hover:shadow-lg shadow-md ${theme === 'Night' ? 'bg-stone-200 text-stone-900 hover:bg-white' : 'bg-stone-800 text-stone-100 hover:bg-stone-700'}`}
              >
                Official PAGAT Rules
              </a>
              <div className="text-right">
                <p className="text-[10px] font-bold text-stone-500 uppercase">Design Philosophy</p>
                <p className="text-xs italic font-serif text-stone-400">Sleek Interface v2.0</p>
              </div>
            </div>
          </footer>
        </div>
      </main>

      {/* Global Overlay Decorations */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-[0.03]">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[100vh] font-serif font-black opacity-10 leading-none select-none">CUAJO</div>
      </div>
    </div>
  );
}
