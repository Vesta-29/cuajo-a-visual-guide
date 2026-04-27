import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

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

  return (
    <div
      data-theme={theme}
      className={`min-h-screen flex ${theme === "Night" ? "bg-stone-950 text-stone-200" : "bg-[#FDFCF9] text-stone-900"} transition-colors duration-500`}
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
          className={`lg:hidden sticky top-0 z-40 backdrop-blur-md border-b p-3 flex justify-between items-center ${theme === "Night" ? "bg-stone-900/80 border-stone-800" : "bg-stone-100/80 border-stone-300"}`}
        >
          <div className="flex items-center gap-3">
            <div className="w-7 h-10 rounded-md bg-black border-[1.5px] border-[#c0392b] p-0.5 flex items-center justify-center overflow-hidden shrink-0">
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
            <div className="pt-6">
              <p className="text-[7px] uppercase tracking-[0.2em] text-stone-400 font-black mt-0.5">
                Digital Manual
              </p>
            </div>
          </div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </header>

        <div className="max-w-[100%] sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-5 sm:px-10 md:px-16 lg:px-20 py-10 md:py-20 lg:py-32">
          <Hero />

          <Introduction />

          <TheDeck />

          <Objective />

          <Gameplay />

          <Scoring />

          {/* Footer */}
          <footer className="pt-16 pb-24 border-t border-stone-400/40 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col gap-1">
              <h4 className="text-lg font-serif italic">
                Cuajo: Digital Manual
              </h4>
              <p className="text-[9px] font-black uppercase tracking-[0.3em] text-stone-400">
                A visual guide for beginners
              </p>
            </div>

            <div className="flex items-center gap-6">
              <a
                href="https://www.pagat.com/rummy/cuajo.html"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-8 py-3 text-[10px] uppercase font-bold tracking-widest rounded-md transition-all hover:shadow-lg shadow-md ${theme === "Night" ? "bg-stone-200 text-stone-900 hover:bg-white" : "bg-stone-800 text-stone-100 hover:bg-stone-700"}`}
              >
                Official PAGAT Rules
              </a>
            </div>
          </footer>
        </div>
      </main>

      {/* Global Overlay Decorations */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-[0.03]">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[100vh] font-serif font-black opacity-10 leading-none select-none">
          CUAJO
        </div>
      </div>
    </div>
  );
}
