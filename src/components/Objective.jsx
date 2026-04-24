import React from 'react';
import CuajoCard from './CuajoCard';
import SectionHeader from './SectionHeader';
import { Zap } from 'lucide-react';

const Objective = () => {
  return (
    <section id="section-02" className="mb-32 scroll-mt-24">
      <SectionHeader 
        section="02 — Objective"
        title="Form valid combinations"
        subtitle="The aim is to form all 16 cards in your winning hand into distinct valid combinations. There are four types of combination that can be used:"
      />

      <div className="space-y-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 bg-white/60 border border-stone-300 rounded-xl shadow-sm backdrop-blur-sm flex flex-col h-full">
            <h4 className="text-2xl font-serif mb-3 italic text-stone-800">Sets (Trio/Cuarteta)</h4>
            <p className="text-stone-500 text-sm mb-6 flex-grow">Three or four cards of the same rank in different suits.</p>
            <div className="flex gap-2">
              <CuajoCard suit="Oros" value="3" />
              <CuajoCard suit="Copas" value="3" />
              <CuajoCard suit="Espadas" value="3" />
            </div>
          </div>

          <div className="p-8 bg-white/60 border border-stone-300 rounded-xl shadow-sm backdrop-blur-sm flex flex-col h-full">
            <h4 className="text-2xl font-serif mb-3 italic text-stone-800">Sequences (Cho)</h4>
            <p className="text-stone-500 text-sm mb-6 flex-grow">Strictly **3-4-5** or **Jack-Horse-King** in one suit. Note: These are the only allowed sequences. Aces cannot be used in runs.</p>
            <div className="flex gap-2">
              <CuajoCard suit="Bastos" value="3" />
              <CuajoCard suit="Bastos" value="4" />
              <CuajoCard suit="Bastos" value="5" />
            </div>
          </div>
        </div>

        <div className="p-8 bg-stone-100 border border-stone-300 rounded-xl flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <h4 className="text-2xl font-serif mb-3 italic text-stone-800">The Secret</h4>
            <p className="text-stone-500 text-sm mb-4">A set of four identical cards. These are played face-down for an immediate bonus payment of 50¢ from each opponent.</p>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-stone-800 text-stone-100 rounded text-[9px] uppercase font-black tracking-widest">
              <Zap size={10} /> Instant Bonus
            </div>
          </div>
          <div className="flex gap-1">
            {[1, 2, 3, 4].map(i => (
              <CuajoCard key={i} faceDown={true} />
            ))}
          </div>
        </div>

        <div className="p-8 bg-white/90 border border-stone-300 rounded-xl flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <h4 className="text-2xl font-serif mb-3 italic text-stone-800">Lone Kings</h4>
            <p className="text-stone-500 text-sm leading-relaxed">A **King** by itself is a valid combination. You can hold any number of monarchs in your final hand.</p>
          </div>
          <div className="flex gap-2">
            <CuajoCard suit="Oros" value="King" />
            <CuajoCard suit="Copas" value="King" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Objective;
