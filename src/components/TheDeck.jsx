import React from 'react';
import CuajoCard from './CuajoCard';
import SectionHeader from './SectionHeader';

const TheDeck = () => {
  const allRanks = [
    { value: 'Ace', active: true },
    { value: '2', active: false },
    { value: '3', active: true },
    { value: '4', active: true },
    { value: '5', active: true },
    { value: '6', active: false },
    { value: '7', active: false },
    { value: 'Jack', active: true },
    { value: 'Horse', active: true },
    { value: 'King', active: true }
  ];

  return (
    <section id="section-01" className="mb-32 scroll-mt-24">
      <SectionHeader 
        section="01 — The Deck"
        title="Seven ranks, four copies"
        subtitle="The Cuajo Filipino pack contains 112 cards. It is a stripped Spanish-suited deck where each card type is repeated four times."
      />

      <div className="grid gap-10">
        <div className="bg-white/40 p-8 rounded-lg border border-stone-300 shadow-sm backdrop-blur-sm">
          <h3 className="text-lg font-serif font-bold italic mb-6 flex items-center justify-between">
            <span className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-stone-800"></div>
              The Suits <span className="text-stone-400 font-normal opacity-60">— Cups, Coins, Swords, Batons</span>
            </span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 border border-stone-200 bg-white/50 rounded flex flex-col items-center">
              <span className="text-2xl mb-1 text-red-700">🏆</span>
              <span className="text-[10px] font-black uppercase tracking-widest text-stone-400">Copas</span>
            </div>
            <div className="p-4 border border-stone-200 bg-white/50 rounded flex flex-col items-center">
              <span className="text-2xl mb-1 text-amber-600">🪙</span>
              <span className="text-[10px] font-black uppercase tracking-widest text-stone-400">Oros</span>
            </div>
            <div className="p-4 border border-stone-200 bg-white/50 rounded flex flex-col items-center">
              <span className="text-2xl mb-1 text-blue-800">⚔️</span>
              <span className="text-[10px] font-black uppercase tracking-widest text-stone-400">Espadas</span>
            </div>
            <div className="p-4 border border-stone-200 bg-white/50 rounded flex flex-col items-center">
              <span className="text-2xl mb-1 text-stone-800">🌿</span>
              <span className="text-[10px] font-black uppercase tracking-widest text-stone-400">Bastos</span>
            </div>
          </div>
        </div>

        <div className="bg-white/40 p-8 rounded-lg border border-stone-300 shadow-sm backdrop-blur-sm">
          <h3 className="text-lg font-serif font-bold italic mb-6 flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-stone-800"></div>
            The Full Spectrum <span className="text-stone-400 font-normal opacity-60">— Active and Excluded Ranks</span>
          </h3>
          <div className="flex flex-wrap gap-4">
            {allRanks.map(r => (
              <CuajoCard 
                key={r.value} 
                suit="Oros" 
                value={r.value} 
                disabled={!r.active} 
              />
            ))}
          </div>
          <p className="text-[10px] font-medium text-stone-400 mt-6 uppercase tracking-wider">
            Note: 2, 6, and 7 are darkened as they are excluded from the traditional 112-deck variant
          </p>
        </div>
      </div>
    </section>
  );
};

export default TheDeck;
