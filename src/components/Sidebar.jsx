import React from 'react';
import { X, Menu } from 'lucide-react';

export const SidebarItem = ({ id, label, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`w-full text-left py-2 px-3 text-sm transition-all flex items-center gap-3 group ${
      active ? 'text-stone-900 font-semibold bg-stone-200/50 rounded-md shadow-sm' : 'text-stone-500 hover:text-stone-800'
    }`}
  >
    <span className={`font-mono text-[9px] transition-opacity ${active ? 'opacity-100' : 'opacity-30 group-hover:opacity-60'}`}>{id}</span>
    <span className="uppercase tracking-tighter">{label}</span>
  </button>
);

const Sidebar = ({ activeSection, scrollTo, isMenuOpen, setIsMenuOpen, theme, setTheme }) => {
  return (
    <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-stone-100/80 border-r border-stone-300 transform transition-transform duration-300 lg:translate-x-0 backdrop-blur-md ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="p-8 h-full flex flex-col">
        <div className="mb-12">
          <h1 className="text-3xl font-serif font-bold italic text-stone-800 flex items-center gap-3">
            <span className="w-9 h-9 rounded-full bg-stone-800 flex items-center justify-center text-white text-xs not-italic shadow-lg">♣</span>
            Kwaho
          </h1>
          <p className="text-[9px] uppercase tracking-[0.2em] text-stone-400 mt-2 font-black">Digital Manual</p>
        </div>

        <nav className="space-y-2 flex-1">
          <SidebarItem id="00" label="Introduction" active={activeSection === '00'} onClick={() => scrollTo('00')} />
          <SidebarItem id="01" label="The Deck" active={activeSection === '01'} onClick={() => scrollTo('01')} />
          <SidebarItem id="02" label="Objective" active={activeSection === '02'} onClick={() => scrollTo('02')} />
          <SidebarItem id="03" label="Gameplay" active={activeSection === '03'} onClick={() => scrollTo('03')} />
          <SidebarItem id="04" label="Payment & Scoring" active={activeSection === '04'} onClick={() => scrollTo('04')} />
        </nav>

        <div className="mt-auto pt-6 border-t border-stone-300">
          <p className="text-[10px] font-mono uppercase tracking-widest text-stone-400 mb-2">Theme</p>
          <div className="flex gap-2">
            {['Classic', 'Faded', 'Night'].map((t) => (
              <button 
                key={t}
                onClick={() => setTheme(t)}
                className={`text-xs px-2 py-1 rounded transition-colors ${theme === t ? 'bg-stone-800 text-white' : 'hover:bg-white/50'}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
