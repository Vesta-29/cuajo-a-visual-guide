import React from 'react';
import SectionHeader from './SectionHeader';
import CuajoCard from './CuajoCard';

const RED = '#E06A7D';

const Scoring = () => {
  const payoutTiers = [
    { type: 'Ideal Bunot', condition: 'Self-drawn from stock (Coincides with Mahjong concept)', amount: '$1.10' },
    { type: 'Sowee Bonus', condition: 'Possess Sowee card + 2 cards that "go with" it', amount: '70¢' },
    { type: 'Bunot Bonus', condition: 'Possess 2 cards that "go with" the bunot (winning card)', amount: '60¢' },
    { type: 'Basic Win', condition: 'Standard win with no special conditions met', amount: '20¢' },
  ];

  return (
    <section id="section-04" className="mb-16 scroll-mt-24">
      <SectionHeader 
        section="04 — Payment & Scoring"
        title="Winning and Payout"
        subtitle={<>Upon winning, the game transitions to the payout phase. Winnings are collected only from the <strong>two opposing players</strong>, never the partner.</>}
      />

      {/* Administrative Rules Row */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-stone-800 text-stone-100 rounded-xl p-8 shadow-2xl">
          <p className="text-[10px] font-black tracking-[0.2em] uppercase mb-3 text-stone-400">Reveal Phase</p>
          <h4 className="text-xl font-serif italic mb-4">Transparency</h4>
          <p className="text-stone-300 text-sm leading-relaxed">
            The winner must show their <strong>complete hand</strong> including any secrets. Any other players who were paid for secrets during the round must also reveal their secret cards to verify the sets.
          </p>
        </div>
        <div className="bg-white/60 border border-stone-300 rounded-xl p-8 shadow-sm backdrop-blur-sm">
          <p className="text-[10px] font-black tracking-[0.2em] uppercase mb-3" style={{ color: RED }}>The Bunot</p>
          <h4 className="text-xl font-serif italic mb-4 text-stone-800">The Winning Card</h4>
          <p className="text-stone-600 text-sm leading-relaxed">
            The <strong>Bunot</strong> is defined as the last card drawn for the win. While the term is shared with Filipino Mahjong, the mechanical application in Cuajo is distinct.
          </p>
        </div>
      </div>

      {/* Example Winning Deck Row (Mahjong Style) */}
      <div className="bg-[#FDFCF9] border border-stone-200 rounded-2xl p-8 sm:p-12 mb-14 shadow-sm overflow-hidden relative">
        <div className="mb-10">
          <h4 className="text-3xl font-serif text-stone-800 flex items-baseline gap-2">
            Example Winning Hand <span className="text-stone-400">·</span> <span style={{ color: RED }} className="italic">Bahay</span>
          </h4>
          <p className="text-stone-500 text-sm mt-2 max-w-2xl leading-relaxed">
            A complete 16-card hand organized into distinct combinations. All cards must be accounted for in a valid set or sequence.
          </p>
        </div>

        <div className="flex flex-col items-center gap-12">
          {/* Top Row Combinations */}
          <div className="flex flex-wrap justify-center gap-12">
            {/* Group 1: Quadro of 3s */}
            <div className="flex flex-col items-center gap-4">
              <div className="flex gap-1">
                <CuajoCard suit="Oros" value="3" className="!w-16 sm:!w-20 shadow-sm" />
                <CuajoCard suit="Copas" value="3" className="!w-16 sm:!w-20 shadow-sm" />
                <CuajoCard suit="Espadas" value="3" className="!w-16 sm:!w-20 shadow-sm" />
                <CuajoCard suit="Bastos" value="3" className="!w-16 sm:!w-20 shadow-sm" />
              </div>
              <p className="text-[9px] font-black tracking-widest text-stone-400 uppercase">Quadro · 3s</p>
            </div>

            {/* Group 2: Trio of Aces */}
            <div className="flex flex-col items-center gap-4">
              <div className="flex gap-1">
                <CuajoCard suit="Oros" value="Ace" className="!w-16 sm:!w-20 shadow-sm" />
                <CuajoCard suit="Copas" value="Ace" className="!w-16 sm:!w-20 shadow-sm" />
                <CuajoCard suit="Espadas" value="Ace" className="!w-16 sm:!w-20 shadow-sm" />
              </div>
              <p className="text-[9px] font-black tracking-widest text-stone-400 uppercase">Trio · Aces</p>
            </div>

            {/* Group 3: Escalera Espadas */}
            <div className="flex flex-col items-center gap-4">
              <div className="flex gap-1">
                <CuajoCard suit="Espadas" value="3" className="!w-16 sm:!w-20 shadow-sm" />
                <CuajoCard suit="Espadas" value="4" className="!w-16 sm:!w-20 shadow-sm" />
                <CuajoCard suit="Espadas" value="5" className="!w-16 sm:!w-20 shadow-sm" />
              </div>
              <p className="text-[9px] font-black tracking-widest text-stone-400 uppercase">Escalera · Espadas</p>
            </div>
          </div>

          {/* Bottom Row Combinations */}
          <div className="flex flex-wrap justify-center gap-12">
            {/* Group 4: Trio of Haris */}
            <div className="flex flex-col items-center gap-4">
              <div className="flex gap-1">
                <CuajoCard suit="Oros" value="King" className="!w-16 sm:!w-20 shadow-sm" />
                <CuajoCard suit="Copas" value="King" className="!w-16 sm:!w-20 shadow-sm" />
                <CuajoCard suit="Bastos" value="King" className="!w-16 sm:!w-20 shadow-sm" />
              </div>
              <p className="text-[9px] font-black tracking-widest text-stone-400 uppercase">Trio · Haris</p>
            </div>

            {/* Group 5: Escalera Bastos (Winning Group) */}
            <div className="flex flex-col items-center gap-4">
              <div className="flex gap-1">
                <CuajoCard suit="Bastos" value="Jack" className="!w-16 sm:!w-20 shadow-sm" />
                <CuajoCard suit="Bastos" value="Horse" className="!w-16 sm:!w-20 shadow-sm" />
                <CuajoCard suit="Bastos" value="King" className="!w-16 sm:!w-20 border-2 border-[#E06A7D] shadow-xl z-10" />
              </div>
              <p className="text-[9px] font-black tracking-widest text-stone-400 uppercase">Escalera · Bastos (Bunot)</p>
            </div>
          </div>

          {/* Footer stats */}
          <div className="w-full pt-10 mt-6 border-t border-dashed border-stone-200 flex flex-col items-center gap-2">
            <div className="flex items-center gap-8 text-stone-800">
               <div className="text-center">
                  <div className="text-3xl font-serif font-black" style={{ color: RED }}>16</div>
                  <div className="text-[9px] font-black uppercase tracking-tighter text-stone-400">Cards Total</div>
               </div>
               <div className="text-xl text-stone-300">→</div>
               <div className="text-center">
                  <div className="text-3xl font-serif font-bold text-stone-800">5 <span className="text-sm italic font-normal text-stone-500">sets</span></div>
                  <div className="text-[9px] font-black uppercase tracking-tighter text-stone-400">Combinations</div>
               </div>
               <div className="text-xl text-stone-300">=</div>
               <div className="text-center">
                  <div className="text-3xl font-serif italic font-bold" style={{ color: RED }}>Valid Win</div>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Extra Ways to Earn Row */}
      <div className="grid md:grid-cols-2 gap-10 mb-14">
        <div className="space-y-6">
          <div className="flex items-baseline gap-5">
            <span className="text-6xl font-serif italic leading-none shrink-0" style={{ color: RED }}>1</span>
            <h3 className="text-2xl font-serif font-bold text-stone-800">Extra Ways to Earn</h3>
          </div>
          <p className="text-sm text-stone-600 leading-relaxed">
            Even if you didn’t draw the last card yourself, you can still earn more by meeting specific "matching" conditions with your final hand.
          </p>
          <div className="space-y-3">
             <div className="p-4 bg-white/60 border border-stone-300 rounded-xl flex justify-between items-center">
                <span className="text-xs text-stone-600 font-bold uppercase tracking-tight">2 cards match last card</span>
                <span className="text-xl font-serif italic" style={{ color: RED }}>60¢</span>
             </div>
             <div className="p-4 bg-white/60 border border-stone-300 rounded-xl flex justify-between items-center">
                <span className="text-xs text-stone-600 font-bold uppercase tracking-tight">Sowee + 2 matching cards</span>
                <span className="text-xl font-serif italic" style={{ color: RED }}>70¢</span>
             </div>
             <div className="p-4 bg-stone-100/50 border border-stone-200 rounded-xl flex justify-between items-center">
                <span className="text-xs text-stone-400 font-bold uppercase tracking-tight">Basic Win (None met)</span>
                <span className="text-lg font-serif italic text-stone-400">20¢</span>
             </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-baseline gap-5">
            <span className="text-6xl font-serif italic leading-none shrink-0" style={{ color: RED }}>2</span>
            <h3 className="text-2xl font-serif font-bold text-stone-800">What "Goes With"?</h3>
          </div>
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            This is where the <strong>bunot</strong> and the <strong>sowee</strong> come into play. The concept of <em>to go with</em> is key to understanding this. Cards are said to go with another card when they form a straight. Since Aces cannot form a straight, the cards that go with an Ace are those that form a trio.
          </p>
          <div className="grid grid-cols-2 gap-4">
             <div className="p-6 bg-white/60 border border-stone-300 rounded-xl flex flex-col items-center gap-3">
                <div className="text-center">
                   <p className="text-[10px] font-black tracking-widest uppercase text-stone-400 mb-1">Straights</p>
                   <p className="text-xs text-stone-600 leading-tight">Cards that make a 3-4-5 or S-K-H sequence.</p>
                </div>
                <div className="flex -space-x-4 opacity-50">
                   <CuajoCard suit="Copas" value="3" className="!w-12" />
                   <CuajoCard suit="Copas" value="4" className="!w-12" />
                </div>
             </div>
             <div className="p-6 bg-white/60 border border-stone-300 rounded-xl flex flex-col items-center gap-3">
                <div className="text-center">
                   <p className="text-[10px] font-black tracking-widest uppercase text-stone-400 mb-1">Aces</p>
                   <p className="text-xs text-stone-600 leading-tight">For Aces, cards that make a Trio (same rank).</p>
                </div>
                <div className="flex -space-x-4 opacity-50">
                   <CuajoCard suit="Oros" value="Ace" className="!w-12" />
                   <CuajoCard suit="Copas" value="Ace" className="!w-12" />
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* Understandable Scenario Example */}
      <div className="bg-stone-800 text-stone-100 rounded-2xl p-8 sm:p-12 mb-14 shadow-2xl relative overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-12 items-center relative z-10">
          <div className="flex-1">
            <p className="text-[10px] font-black tracking-[0.2em] uppercase mb-3 text-stone-400">Step-by-Step Scenario</p>
            <h4 className="text-3xl font-serif italic mb-6">Winning with Bonuses</h4>
            <div className="space-y-6">
               <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#E06A7D] flex items-center justify-center shrink-0 font-bold text-white">1</div>
                  <p className="text-stone-300 text-sm leading-relaxed">
                    A <strong>4 of Copas</strong> is discarded to your left. You pick it up as your <strong>last card (Bunot)</strong> to complete your bahay.
                  </p>
               </div>
               <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-stone-700 flex items-center justify-center shrink-0 font-bold text-white">2</div>
                  <p className="text-stone-300 text-sm leading-relaxed">
                    Check for the <strong>Bunot Bonus</strong>: You hold the 3 and 5 of Copas. Since they form a straight with your last card, you earn <strong>60¢</strong>.
                  </p>
               </div>
               <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-stone-700 flex items-center justify-center shrink-0 font-bold text-white">3</div>
                  <p className="text-stone-300 text-sm leading-relaxed">
                    Check for the <strong>Sowee Bonus</strong>: The sowee card is a 5 of Espadas. You hold the 3 and 4 of Espadas. This matches the sowee, earning you <strong>70¢</strong>.
                  </p>
               </div>
            </div>
          </div>
          <div className="w-full lg:w-80 flex flex-col items-center gap-6 p-8 bg-stone-700/30 rounded-xl border border-stone-600">
             <p className="text-[10px] font-black tracking-widest uppercase text-stone-500">The Winning Card</p>
             <CuajoCard suit="Copas" value="4" className="!w-32 shadow-2xl ring-4 ring-[#E06A7D] ring-offset-4 ring-offset-stone-800" />
             <div className="text-center">
                <p className="text-sm font-bold text-white">4 of Copas</p>
                <p className="text-[10px] text-stone-400 uppercase tracking-widest">Target for Bonuses</p>
             </div>
          </div>
        </div>
      </div>

      {/* Special Cards Row */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-8 bg-white/60 border border-stone-300 rounded-xl shadow-sm">
          <p className="text-[10px] font-black tracking-[0.2em] uppercase mb-3 text-stone-400">Special Cards</p>
          <h4 className="text-2xl font-serif italic mb-6 text-stone-800">Haris (Kings)</h4>
          <div className="grid grid-cols-2 gap-4">
             <div className="p-5 bg-white border border-stone-200 rounded-xl shadow-sm text-center">
                <p className="text-[10px] font-black tracking-widest uppercase text-stone-400 mb-2">Haring Oros</p>
                <div className="text-3xl font-serif italic" style={{ color: RED }}>50¢</div>
                <p className="text-[9px] text-stone-400 uppercase mt-2">Bonus Payout</p>
             </div>
             <div className="p-5 bg-white border border-stone-200 rounded-xl shadow-sm text-center">
                <p className="text-[10px] font-black tracking-widest uppercase text-stone-400 mb-2">Other Haris</p>
                <div className="text-3xl font-serif italic" style={{ color: RED }}>20¢</div>
                <p className="text-[9px] text-stone-400 uppercase mt-2">Each Card</p>
             </div>
          </div>
        </div>

        <div className="p-8 bg-[#1a1a1a] text-white rounded-xl shadow-2xl relative overflow-hidden flex flex-col justify-center">
           <div className="absolute top-0 right-0 p-4 opacity-10">
              <CuajoCard suit="Oros" value="King" className="!w-40 rotate-12" />
           </div>
           <p className="text-[10px] font-black tracking-[0.2em] uppercase mb-2 text-stone-500">Super Rare Win</p>
           <h4 className="text-3xl font-serif italic mb-4 text-[#E06A7D]">Porbis</h4>
           <p className="text-stone-400 text-sm leading-relaxed mb-6">
             Awarded if you win with <strong>no Haris</strong> at all, or exactly one Hari used strictly in a special straight. This is rare because Kings cannot be discarded!
           </p>
           <div className="flex items-baseline gap-4">
              <span className="text-5xl font-serif italic font-bold text-white">$3.00</span>
              <span className="text-[10px] uppercase tracking-widest opacity-40">From Each Opponent</span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Scoring;
