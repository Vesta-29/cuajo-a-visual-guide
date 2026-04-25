import React from 'react';
import SectionHeader from './SectionHeader';
import CuajoCard from './CuajoCard';

const RED = '#E06A7D';

const Scoring = () => {
  const payoutTiers = [
    { type: 'Full Bunot', condition: 'Self-drawn OR both conditions met', amount: '$1.10' },
    { type: 'Sowee Win', condition: 'Only Condition 2 met', amount: '70¢' },
    { type: 'Bunot Win', condition: 'Only Condition 1 met', amount: '60¢' },
    { type: 'Basic Win', condition: 'No conditions met', amount: '20¢' },
  ];

  return (
    <section id="section-04" className="mb-32 scroll-mt-24">
      <SectionHeader 
        section="04 — Payment & Scoring"
        title="Payout Logic and Conditionals"
        subtitle={<>Cuajo utilizes the <strong>Bunot (or Bounit) system</strong>—a tiered payout structure. Partners share winnings; therefore, payouts are collected only from the two opposing players.</>}
      />

      {/* Administrative Rule Box */}
      <div className="bg-stone-800 text-stone-100 rounded-xl p-8 mb-14 shadow-2xl flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1">
          <p className="text-[10px] font-black tracking-[0.2em] uppercase mb-3 text-stone-400">Administrative Rule</p>
          <h4 className="text-2xl font-serif italic mb-4">The Partnership Split</h4>
          <p className="text-stone-300 text-sm leading-relaxed">
            Partners never pay each other. In a standard four-player game, you only collect from the two opponents. All calculated winnings below are <strong>per opponent</strong>.
          </p>
        </div>
        <div className="flex -space-x-4">
          <div className="w-12 h-12 rounded-full bg-stone-700 border-2 border-stone-800 flex items-center justify-center font-bold">1</div>
          <div className="w-12 h-12 rounded-full bg-[#E06A7D] border-2 border-stone-800 flex items-center justify-center font-bold">2</div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-10 mb-14">
        {/* The "Go With" Rule */}
        <div className="space-y-6">
          <div className="flex items-baseline gap-5">
            <span className="text-6xl font-serif italic leading-none shrink-0" style={{ color: RED }}>1</span>
            <h3 className="text-2xl font-serif font-bold text-stone-800">The "Go With" Rule</h3>
          </div>
          <p className="text-sm text-stone-600 leading-relaxed">
            Payouts depend on your ability to "go with" specific cards. This means having two cards that form a valid sequence with the target card.
          </p>
          <div className="p-6 bg-white/60 border border-stone-300 rounded-xl space-y-4">
             <div>
                <p className="text-[10px] font-black tracking-[0.15em] uppercase mb-1" style={{ color: RED }}>Standard</p>
                <p className="text-xs text-stone-500 italic">Example: A 3 and 4 to "go with" a 5.</p>
             </div>
             <div>
                <p className="text-[10px] font-black tracking-[0.15em] uppercase mb-1" style={{ color: RED }}>The Ace Exception</p>
                <p className="text-xs text-stone-500">To "go with" an Alas (Ace), a player must possess two other Aces of different suits.</p>
             </div>
          </div>
        </div>

        {/* The Two Conditions */}
        <div className="space-y-6">
          <div className="flex items-baseline gap-5">
            <span className="text-6xl font-serif italic leading-none shrink-0" style={{ color: RED }}>2</span>
            <h3 className="text-2xl font-serif font-bold text-stone-800">Winning Conditions</h3>
          </div>
          <div className="space-y-4">
            <div className="p-5 bg-white/60 border border-stone-300 rounded-xl shadow-sm">
              <h5 className="font-bold text-stone-800 text-sm mb-1">Condition 1 (The Bunot)</h5>
              <p className="text-xs text-stone-500 leading-relaxed">Possession of two cards that "go with" the winning card.</p>
            </div>
            <div className="p-5 bg-white/60 border border-stone-300 rounded-xl shadow-sm">
              <h5 className="font-bold text-stone-800 text-sm mb-1">Condition 2 (The Sowee)</h5>
              <p className="text-xs text-stone-500 leading-relaxed">Possession of the Sowee card plus two cards that "go with" it.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Payout Hierarchy Table */}
      <div className="mb-14 overflow-hidden border border-stone-300 rounded-xl bg-white/40 shadow-sm backdrop-blur-sm">
        <div className="p-6 border-b border-stone-300 bg-stone-50">
          <h3 className="text-xl font-serif font-bold text-stone-800">Payout Hierarchy</h3>
          <p className="text-xs text-stone-500 mt-1 italic">Base amounts plus cumulative King valuations</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-stone-100/50 text-[10px] font-black uppercase tracking-widest text-stone-400">
                <th className="px-6 py-4">Win Type</th>
                <th className="px-6 py-4">Condition</th>
                <th className="px-6 py-4 text-right">Base Payout</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200">
              {payoutTiers.map((tier) => (
                <tr key={tier.type} className="hover:bg-stone-50/50 transition-colors">
                  <td className="px-6 py-5 font-serif font-bold text-stone-800">{tier.type}</td>
                  <td className="px-6 py-5 text-stone-500 italic">{tier.condition}</td>
                  <td className="px-6 py-5 text-right font-serif italic text-lg" style={{ color: RED }}>{tier.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Final Row: Valuations and Exceptions */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-white/60 border border-stone-300 rounded-xl shadow-sm">
          <h4 className="text-lg font-serif italic mb-4" style={{ color: RED }}>Hari Valuation</h4>
          <ul className="space-y-3 text-xs text-stone-600">
            <li className="flex justify-between border-b border-stone-200 pb-2">
              <span>Haring Oros</span>
              <span className="font-bold">50¢</span>
            </li>
            <li className="flex justify-between border-b border-stone-200 pb-2">
              <span>Other Kings</span>
              <span className="font-bold">20¢</span>
            </li>
          </ul>
        </div>

        <div className="p-6 bg-stone-800 text-stone-100 rounded-xl shadow-xl md:scale-105 relative z-10">
          <h4 className="text-lg font-serif italic mb-4">Porbis Exception</h4>
          <p className="text-[10px] text-stone-400 leading-relaxed mb-4">
            A win with zero Kings (or one King used in an Escalera) pays a flat amount.
          </p>
          <div className="text-4xl font-serif italic font-bold tracking-tight mb-2">$3.00</div>
          <p className="text-[9px] uppercase tracking-widest opacity-40">Per Opponent</p>
        </div>

        <div className="p-6 bg-white/60 border border-stone-300 rounded-xl shadow-sm">
          <h4 className="text-lg font-serif italic mb-4" style={{ color: RED }}>Safety Draw</h4>
          <p className="text-xs text-stone-500 leading-relaxed">
            Upon winning, you may draw <strong>15 extra cards</strong> from the stock to attempt to fulfill "Go With" conditions and maximize your payout.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Scoring;
