import React from 'react';

const Hero = () => {
  return (
    <section className="mb-16">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12 w-full">
        <div className="flex-1 max-w-3xl">
          <p className="text-[10px] font-black tracking-[0.3em] text-stone-500 uppercase mb-5">Heritage of the Philippines</p>
          <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight text-stone-800 mb-8 tracking-tighter">
            A Visual <span style={{ color: '#E06A7D' }}>Guide</span> to <br />
            <span className="italic" style={{ color: '#E06A7D' }}>Filipino Cuajo</span>
          </h1>
          <div className="flex flex-wrap gap-10 mt-16 pb-8 ">
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
        <div className="relative hidden md:block shrink-0 md:mr-12 lg:mr-24">
          <div className="absolute -top-12 -left-12 w-56 h-72 bg-white/30 border border-stone-400 rounded-lg transform -rotate-6 backdrop-blur-sm shadow-sm"></div>
          <div className="relative w-56 h-72 bg-white border border-stone-400 rounded-lg shadow-2xl flex items-center justify-center text-9xl text-stone-800 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-stone-100">
            🏮
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
