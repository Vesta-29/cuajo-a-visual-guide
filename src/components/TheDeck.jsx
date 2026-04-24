import React, { useState } from 'react';
import CuajoCard from './CuajoCard';
import SectionHeader from './SectionHeader';

const TheDeck = () => {
  const [filter, setFilter] = useState('All');
  const [hoveredCard, setHoveredCard] = useState(null);

  const allRanks = [
    { value: 'Ace', active: true, desc: "Aces" },
    { value: '3', active: true, desc: "Threes" },
    { value: '4', active: true, desc: "Fours" },
    { value: '5', active: true, desc: "Fives" },
    { value: 'Jack', active: true, desc: "Jacks (Sota)" },
    { value: 'Horse', active: true, desc: "Horses (Caballo)" },
    { value: 'King', active: true, desc: "Kings (Rey)" }
  ];

  const suits = [
    { id: 'Copas', label: 'Copas', icon: '🏆', desc: 'Numbered 1-5, 10-12. Cups symbolize the clergy or the church.' },
    { id: 'Oros', label: 'Oros', icon: '🪙', desc: 'Numbered 1-5, 10-12. Coins represent commerce and wealth.' },
    { id: 'Espadas', label: 'Espadas', icon: '⚔️', desc: 'Numbered 1-5, 10-12. Swords signify the military.' },
    { id: 'Bastos', label: 'Bastos', icon: '🌿', desc: 'Numbered 1-5, 10-12. Batons stand for agriculture and the peasantry.' }
  ];

  return (
    <section id="section-01" className="mb-32 scroll-mt-24">
      <SectionHeader 
        section="01 — The Deck"
        title="Seven ranks, four copies"
        subtitle={<>The Cuajo Filipino pack contains <strong>112 cards</strong>—a stripped Spanish-suited deck consisting of <strong>four suits</strong> (Copas, Oros, Espadas, and Bastos). Each suit has <strong>seven active ranks</strong> (ace, 3, 4, 5, jack, horse, king), with each card type repeated four times (7 ranks × 4 copies × 4 suits = 112 cards).</>}
      />

      <div className="flex flex-col gap-8">
        {/* Filters */}
        <div className="flex flex-wrap gap-2">
          <button 
            onClick={() => setFilter('All')} 
            className={`px-4 py-1.5 rounded-full text-xs font-bold border transition-colors flex items-center gap-2 ${filter === 'All' ? 'bg-stone-800 text-white border-stone-800' : 'bg-white text-stone-600 border-stone-300 hover:bg-stone-100'}`}
          >
            All 112 <span className={`px-1.5 py-0.5 rounded-full text-[9px] ${filter === 'All' ? 'bg-stone-600' : 'bg-stone-200'}`}>112</span>
          </button>
          {suits.map(s => (
            <button 
              key={s.id}
              onClick={() => setFilter(s.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold border transition-colors flex items-center gap-2 ${filter === s.id ? 'bg-stone-800 text-white border-stone-800' : 'bg-white text-stone-600 border-stone-300 hover:bg-stone-100'}`}
            >
              {s.label} <span className={`px-1.5 py-0.5 rounded-full text-[9px] ${filter === s.id ? 'bg-stone-600' : 'bg-stone-200'}`}>28</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-8 items-start relative">
          {/* Suits List */}
          <div className="flex-1 flex flex-col gap-10 w-full bg-white/40 p-8 rounded-lg border border-stone-300 shadow-sm backdrop-blur-sm">
            {suits.filter(s => filter === 'All' || filter === s.id).map(suit => (
              <div key={suit.id} className="flex flex-col md:flex-row gap-4 md:gap-8 pb-10 border-b border-stone-200 last:border-0 last:pb-0">
                <div className="w-full md:w-48 shrink-0">
                  <h4 className="text-xl font-serif font-bold text-stone-800 flex items-center gap-2">
                    {suit.label}
                  </h4>
                  <p className="text-sm font-serif italic text-stone-600 mt-1">{suit.icon} Suit</p>
                  <p className="text-xs text-stone-500 mt-4 leading-relaxed">{suit.desc}</p>
                </div>
                
                <div className="grid grid-cols-7 gap-2 md:gap-4 flex-1">
                  {allRanks.map(rank => (
                    <div 
                      key={`${suit.id}-${rank.value}`}
                      onMouseEnter={() => setHoveredCard({ suit: suit.id, value: rank.value, desc: rank.desc, active: rank.active })}
                      onMouseLeave={() => setHoveredCard(null)}
                      className="cursor-pointer"
                    >
                      <CuajoCard 
                        suit={suit.id} 
                        value={rank.value} 
                        disabled={!rank.active} 
                        className="!w-full !h-auto transition-transform hover:-translate-y-2 hover:z-10 relative shadow-md" 
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Hover Preview Panel */}
          <div className="w-full lg:w-72 shrink-0 lg:sticky lg:top-24 bg-[#FCFBF8] border border-stone-200 rounded-lg p-6 shadow-sm min-h-[400px] flex flex-col items-center justify-center transition-all duration-300">
            {hoveredCard ? (
              <div className="flex flex-col items-center gap-6 animate-in fade-in zoom-in duration-200">
                <CuajoCard 
                  suit={hoveredCard.suit} 
                  value={hoveredCard.value} 
                  disabled={!hoveredCard.active}
                  className="!w-32 md:!w-48 !h-auto shadow-2xl" 
                />
                <div className="text-center">
                  <h4 className="text-xl font-serif font-bold text-stone-800">
                    {hoveredCard.value} of {hoveredCard.suit}
                  </h4>
                  <p className="text-sm text-stone-500 mt-2">{hoveredCard.desc}</p>
                  {!hoveredCard.active && (
                    <span className="inline-block mt-3 px-2 py-1 bg-stone-200 text-stone-600 text-[10px] font-bold uppercase tracking-widest rounded">
                      Excluded from Cuajo
                    </span>
                  )}
                </div>
              </div>
            ) : (
              <div className="text-center text-stone-400">
                <h4 className="text-xl font-serif mb-3 text-stone-800">Hover or tap a card</h4>
                <p className="text-sm text-stone-500 leading-relaxed">Each card appears four times in the deck to form the 112-card set.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheDeck;
