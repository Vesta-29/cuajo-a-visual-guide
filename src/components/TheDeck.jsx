import React, { useState } from 'react';
import CuajoCard from './CuajoCard';
import SectionHeader from './SectionHeader';

const TheDeck = () => {
  const [filter, setFilter] = useState('All');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredKey, setHoveredKey] = useState(null);

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
        subtitle={<>The Filipino Spanish deck has four suits <span style={{ color: '#E06A7D' }}>Oros (Coins), Kopas (Cups), Espadas (Swords), and Bastos (Clubs)</span> and 12 ranks. The face cards are Sota <span style={{ color: '#E06A7D' }}>(Jack), Kabayo (Knight or Horse), and Hari (King)</span>, which count as 10, 11, and 12.

In the Cuajo version, this deck is expanded to 112 cards by using only seven ranks <span style={{ color: '#E06A7D' }}>(Ace, 3, 4, 5, Jack, Horse, King)</span> in each suit, with four copies of every card.</>}
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
          <div className="flex-1 flex flex-col gap-10 w-full bg-white/40 p-5 sm:p-8 md:p-10 lg:p-12 xl:p-16 rounded-lg border border-stone-300 shadow-sm backdrop-blur-sm">
            {suits.filter(s => filter === 'All' || filter === s.id).map(suit => (
              <div key={suit.id} className="flex flex-col md:flex-row items-center gap-6 md:gap-12 pb-12 border-b border-stone-200 last:border-0 last:pb-0">
                <div className="w-full md:w-48 shrink-0 flex flex-col text-left">
                  <h4 className="text-4xl font-serif font-bold text-stone-800">
                    {suit.label}
                  </h4>
                  <p className="text-xs text-stone-500 mt-3 leading-relaxed">{suit.desc}</p>
                </div>
                
                <div className="flex-1">
                  <div
                    className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 flex-1"
                    onMouseLeave={() => { setHoveredKey(null); setHoveredCard(null); }}
                  >
                  {allRanks.map(rank => {
                    const key = `${suit.id}-${rank.value}`;
                    const isHovered = hoveredKey === key;
                    const anyHovered = hoveredKey !== null;
                    return (
                      <div 
                        key={key}
                        onMouseEnter={() => {
                          setHoveredKey(key);
                          setHoveredCard({ suit: suit.id, value: rank.value, desc: rank.desc, active: rank.active });
                        }}
                        className="cursor-pointer transition-all duration-200"
                        style={{
                          opacity: anyHovered && !isHovered ? 0.25 : 1,
                        }}
                      >
                        <CuajoCard 
                          suit={suit.id} 
                          value={rank.value} 
                          disabled={!rank.active} 
                          className={`!w-full !h-auto transition-all duration-200 relative shadow-md !rounded-[18px] ${
                            isHovered
                              ? 'ring-2 ring-[#E06A7D] -translate-y-2 shadow-xl z-10'
                              : ''
                          }`}
                        />
                      </div>
                    );
                  })}
                  </div>
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
                  className="!w-32 sm:!w-40 md:!w-48 lg:!w-56 xl:!w-64 !h-auto shadow-2xl !rounded-[18px]" 
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
