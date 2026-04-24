import React from 'react';

const Hero = () => {
  return (
    <section className="mb-32">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-[10px] font-black tracking-[0.3em] text-stone-500 uppercase mb-5">Heritage of the Philippines</p>
          <h1 className="text-6xl md:text-7xl font-serif font-bold italic leading-none text-stone-800 mb-8 lowercase tracking-tighter">
            Filipino <br />
            <span className="text-stone-600 not-italic">Cuajo</span>
          </h1>
          <div className="flex gap-10 mt-16 pb-8 border-b border-stone-300/60">
            <div>
              <span className="block text-4xl font-serif font-bold italic text-stone-800">112</span>
              <span className="text-[9px] font-black uppercase tracking-widest text-stone-400">Cards</span>
            </div>
            <div>
              <span className="block text-4xl font-serif font-bold italic text-stone-800">16</span>
              <span className="text-[9px] font-black uppercase tracking-widest text-stone-400">Winning Hand</span>
            </div>
            <div>
              <span className="block text-4xl font-serif font-bold italic text-stone-800">4</span>
              <span className="text-[9px] font-black uppercase tracking-widest text-stone-400">Players</span>
            </div>
          </div>
        </div>
        <div className="relative hidden md:block">
          <div className="absolute -top-12 -left-12 w-56 h-72 bg-white/30 border border-stone-400 rounded-lg transform -rotate-6 backdrop-blur-sm shadow-sm"></div>
          <div className="relative w-56 h-72 bg-white border border-stone-400 rounded-lg shadow-2xl flex items-center justify-center text-9xl text-stone-800 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-stone-100">
            🏮
          </div>
        </div>
      </div>
      <p className="mt-12 text-sm text-stone-500 leading-relaxed max-w-2xl">
        Cuajo is a game of the rummy family played in the Philippines. Although the cards used are of Spanish design, the game shows signs of being of Asian origin—specifically its relationship to Chinese cards and games. This manual follows the definitive rules for the 112-card "Cuajo Filipino" variant.
      </p>
    </section>
  );
};

export default Hero;
