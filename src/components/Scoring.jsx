import React from 'react';
import SectionHeader from './SectionHeader';

const Scoring = () => {
  return (
    <section id="section-04" className="mb-32 scroll-mt-24">
      <SectionHeader 
        section="04 — Payments & Scoring"
        title="Winning the Pot"
        subtitle="Payment levels are determined by hand rarity and meeting specific bounit/sowee conditions."
      />

      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-white/40 border border-stone-300 rounded-xl overflow-hidden backdrop-blur-sm">
          <div className="p-6 bg-stone-800 text-stone-100 flex justify-between items-center">
            <h4 className="text-lg font-serif italic">The Monarchs (Kings)</h4>
          </div>
          <div className="p-8 space-y-6">
            <div className="flex justify-between items-center border-b border-stone-300 pb-4">
              <span className="text-sm font-bold text-stone-800 uppercase tracking-widest">King of Coins</span>
              <span className="text-xl font-serif italic">50¢</span>
            </div>
            <div className="flex justify-between items-center text-stone-500">
              <span className="text-sm font-bold uppercase tracking-widest">Other Kings</span>
              <span className="text-xl font-serif italic">20¢</span>
            </div>
          </div>
        </div>

        <div className="bg-stone-800 text-stone-100 p-8 rounded-xl shadow-2xl">
          <h4 className="text-3xl font-serif italic mb-6">Porbis Hand</h4>
          <p className="text-stone-300 text-sm leading-relaxed mb-6">
            Win without ANY kings (or with exactly one in a J-H-K run). This extremely rare victory pays out a massive bonus.
          </p>
          <div className="text-5xl font-serif font-bold italic tracking-tighter text-stone-100">
            $3.00
          </div>
          <p className="text-[10px] uppercase font-black tracking-widest text-white/30 mt-4">Per Opponent</p>
        </div>
      </div>

      <div className="mt-12 space-y-4">
        <div className="p-8 bg-white/40 border border-stone-300 rounded shadow-sm">
          <h4 className="text-xl font-serif italic mb-4">Payoff Tiers</h4>
          <div className="grid gap-4">
            <div className="flex justify-between items-center p-4 border border-stone-200 bg-white/50 rounded">
              <span className="text-sm font-bold uppercase">Condition Met (Full Bounit & Sowee)</span>
              <span className="font-serif italic text-lg">$1.10 + Kings</span>
            </div>
            <div className="flex justify-between items-center p-4 border border-stone-200 bg-white/50 rounded">
              <span className="text-sm font-bold uppercase">Sowee Condition ONLY</span>
              <span className="font-serif italic text-lg">70¢ + Kings</span>
            </div>
            <div className="flex justify-between items-center p-4 border border-stone-200 bg-white/50 rounded">
              <span className="text-sm font-bold uppercase">Bounit Condition ONLY</span>
              <span className="font-serif italic text-lg">60¢ + Kings</span>
            </div>
          </div>
          <div className="mt-8 p-6 bg-stone-800 text-stone-100 rounded-lg">
             <h5 className="text-xs font-black uppercase tracking-widest mb-4 opacity-50">Satisfying Conditions</h5>
             <p className="text-sm leading-relaxed mb-4">
               To "go with" a card, you need the two cards of the same suit that would form a run with it. If your winning 16-card hand doesn't have them, you are allowed to **draw up to 15 extra cards** from the stock to find them.
             </p>
             <p className="text-[10px] text-stone-400 italic">Extra kings drawn this way do not add to your payment.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scoring;
