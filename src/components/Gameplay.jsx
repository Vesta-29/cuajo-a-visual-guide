import React from 'react';
import SectionHeader from './SectionHeader';

const Gameplay = () => {
  return (
    <section id="section-03" className="mb-32 scroll-mt-24">
      <SectionHeader 
        section="03 — Gameplay"
        title="The Ritual of Play"
        subtitle="Deal and play move anticlockwise. The dealer begins with 16 cards, others with 15."
      />

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="p-8 border border-stone-300 rounded-lg bg-white/40">
          <div className="text-[10px] font-black uppercase text-stone-400 mb-2">The Deal</div>
          <h4 className="text-xl font-serif italic mb-4">Distribution</h4>
          <p className="text-sm text-stone-600 leading-relaxed">
            Three rounds of 5 cards are dealt to each player. The dealer takes one extra card on the first round (total **16**; others **15**).
          </p>
        </div>

        <div className="p-8 border border-stone-300 rounded-lg bg-white/40">
          <div className="text-[10px] font-black uppercase text-stone-400 mb-2">The Stock</div>
          <h4 className="text-xl font-serif italic mb-4">The Sowee Card</h4>
          <p className="text-sm text-stone-600 leading-relaxed mb-6">
            One card is placed face-up under the stock. This is the **Sowee**. It affects scoring but remains part of the deck's foundation.
          </p>
        </div>
      </div>

      <div className="space-y-12">
        <h3 className="text-xs font-black uppercase tracking-[0.3em] text-stone-400 text-center mb-8">Play Mechanics</h3>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-stone-800 text-stone-100 flex items-center justify-center font-serif italic text-sm">P</div>
              <h4 className="font-serif text-2xl italic">Purro</h4>
            </div>
            <p className="text-sm text-stone-600 leading-relaxed">
              Announce when you need ONLY one card to finish. Place a king or token down. Now, all players must show drawn cards to you.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-stone-800 text-stone-100 flex items-center justify-center font-serif italic text-sm">T</div>
              <h4 className="font-serif text-2xl italic">Time</h4>
            </div>
            <p className="text-sm text-stone-600 leading-relaxed">
              Shout to claim your winning card (**Bounit**). Expose your 16 cards. If valid, you win the round.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gameplay;
