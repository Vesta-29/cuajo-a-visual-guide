import React, { useState, useEffect } from "react";
import { Menu, X, Palette } from "lucide-react";

import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import TheDeck from "./components/TheDeck";
import Objective from "./components/Objective";
import Gameplay from "./components/Gameplay";
import Scoring from "./components/Scoring";

import creamPaperImg from "./public/images/cream-paper.png";
import cardIcon from "./public/images/cuajoCards/cardIcon.png";

export default function App() {
  const [activeSection, setActiveSection] = useState("00");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState("Classic");

  const sectionLabels = {
    "00": "Introduction",
    "01": "The Deck",
    "02": "Objective",
    "03": "Gameplay",
    "04": "End Game",
  };

  const cycleTheme = () => {
    const themes = ["Classic", "Faded", "Night"];
    const currentIndex = themes.indexOf(theme);
    setTheme(themes[(currentIndex + 1) % themes.length]);
  };

  // Sync theme to document for global CSS rules
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Smooth scroll to sections
  const scrollTo = (id) => {
    setActiveSection(id);
    const el = document.getElementById(`section-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  // Scroll spy to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["00", "01", "02", "03", "04"];
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

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard navigation for 'turning pages'
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't intercept if user is interacting with an input, though unlikely in this app
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;

      const sections = ["00", "01", "02", "03", "04"];
      const currentIndex = sections.indexOf(activeSection);

      if (e.key === "ArrowRight") {
        if (currentIndex < sections.length - 1) {
          e.preventDefault();
          scrollTo(sections[currentIndex + 1]);
        }
      } else if (e.key === "ArrowLeft") {
        if (currentIndex > 0) {
          e.preventDefault();
          scrollTo(sections[currentIndex - 1]);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeSection]);

  return (
    <div
      data-theme={theme}
      className={`min-h-screen w-full flex overflow-x-clip ${theme === "Night" ? "bg-slate-950 text-slate-200" : "bg-[#FDFCF9] text-stone-900"} transition-colors duration-500`}
      style={{
        backgroundImage: `url(${creamPaperImg})`,
        backgroundRepeat: "repeat",
        backgroundBlendMode: theme === "Night" ? "color-burn" : "multiply",
      }}
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
        <header
          className={`lg:hidden sticky top-0 z-50 backdrop-blur-md border-b p-3 flex justify-between items-center ${theme === "Night" ? "bg-slate-900/80 border-slate-800" : "bg-stone-100/80 border-stone-300"}`}
        >
          <div className="flex items-center gap-3">
            <div className="w-7 h-10 rounded-md bg-stone-900 border-[1.5px] border-[#c0392b] p-0.5 flex items-center justify-center overflow-hidden shrink-0">
              <img
                src={cardIcon}
                alt="Cuajo Icon"
                className="w-full h-full object-contain invert brightness-200"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-lg font-serif font-bold italic leading-none">
                Cuajo
              </h1>
            </div>
            <div className="pt-6 hidden sm:block">
              <p className="text-[7px] uppercase tracking-[0.2em] text-stone-400 font-black mt-0.5">
                Digital Manual
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button 
              onClick={cycleTheme} 
              className={`p-2 rounded-full border transition-colors ${theme === "Night" ? "border-slate-700 hover:bg-slate-800" : "border-stone-300 hover:bg-stone-200"}`}
              aria-label="Cycle Theme"
            >
              <Palette size={16} />
            </button>
            <div className="relative">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className={`flex items-center gap-3 px-4 py-1.5 rounded-full border transition-colors ${theme === "Night" ? "border-slate-700 bg-slate-800/50 text-slate-200" : "border-stone-300 bg-stone-50/50 text-stone-800"}`}
              >
                <div className="flex items-center gap-2">
                  <span className={`font-mono text-[10px] ${theme === "Night" ? "text-slate-400" : "text-stone-500"}`}>{activeSection}</span>
                  <span className="text-sm font-medium hidden sm:inline-block">{sectionLabels[activeSection]}</span>
                </div>
                {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
              
              {/* Dropdown Menu */}
              {isMenuOpen && (
                <div className={`absolute top-full right-0 mt-2 w-48 rounded-xl border shadow-xl overflow-hidden flex flex-col z-50 ${theme === "Night" ? "bg-slate-900 border-slate-700" : "bg-white border-stone-200"}`}>
                  {Object.entries(sectionLabels).map(([id, label]) => (
                    <button
                      key={id}
                      onClick={() => scrollTo(id)}
                      className={`flex items-center gap-3 px-4 py-3 text-sm text-left transition-colors ${
                        activeSection === id 
                          ? (theme === "Night" ? "bg-slate-800 text-slate-100 font-semibold" : "bg-stone-100 text-stone-900 font-semibold") 
                          : (theme === "Night" ? "text-slate-400 hover:bg-slate-800/50 hover:text-slate-200" : "text-stone-500 hover:bg-stone-50 hover:text-stone-800")
                      }`}
                    >
                      <span className={`font-mono text-[10px] ${activeSection === id ? "opacity-100" : "opacity-50"}`}>{id}</span>
                      <span>{label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </header>

        <div className="max-w-[100%] sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-3 sm:px-6 md:px-10 lg:px-20 pt-10 pb-8 md:pt-20 md:pb-12 lg:pt-32 lg:pb-16">
          <Hero />

          <Introduction />

          <TheDeck />

          <Objective />

          <Gameplay />

          <Scoring />

          {/* Footer */}
          <footer className="pt-16 pb-4 border-t border-stone-400/40 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div className="flex flex-col gap-1">
              <h4 className="text-lg font-serif italic">
                Cuajo: Digital Manual
              </h4>
              <p className="text-[9px] font-black uppercase tracking-[0.3em] text-stone-400">
                A visual guide for beginners
              </p>
            </div>

            <div className="flex flex-col gap-1.5 mt-4 md:mt-0 md:text-right">
              <p className="text-[9px] uppercase tracking-widest text-stone-500 font-bold">
                Sources & References
              </p>
              <div className="flex flex-wrap items-center gap-3 text-[10px] text-stone-400 md:justify-end">
                <a
                  href="https://www.pagat.com/rummy/cuajo.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E06A7D] transition-colors underline decoration-stone-300/50 underline-offset-2"
                >
                  pagat.com
                </a>
                <span className="text-stone-300/50">•</span>
                <a
                  href="https://mahjongero.com/2022/09/17/cuajo-an-echo-of-spain-in-la-perla-del-mar-de-oriente/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E06A7D] transition-colors underline decoration-stone-300/50 underline-offset-2"
                >
                  mahjongero.com
                </a>
              </div>
            </div>
          </footer>
        </div>
      </main>

      {/* Global Overlay Decorations */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-[0.03]">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[40vh] sm:text-[60vh] md:text-[80vh] lg:text-[100vh] font-serif font-black opacity-10 leading-none select-none text-center">
          CUAJO
        </div>
      </div>
    </div>
  );
}
