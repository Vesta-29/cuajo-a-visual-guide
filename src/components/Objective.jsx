import React, { useState } from 'react';
import CuajoCard from './CuajoCard';
import SectionHeader from './SectionHeader';

const RED = '#E06A7D';

// Renders text with **xxx** as red bold spans
const renderText = (text) => {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <span key={i} style={{ color: RED }} className="font-bold">
          {part.slice(2, -2)}
        </span>
      );
    }
    return part;
  });
};

// Highlights a specific word within plain text as red
const highlightWord = (text, word) => {
  const regex = new RegExp(`(${word})`, 'gi');
  const parts = text.split(regex);
  return parts.map((part, i) =>
    part.toLowerCase() === word.toLowerCase() ? (
      <span key={i} style={{ color: RED }} className="font-semibold">
        {part}
      </span>
    ) : (
      part
    )
  );
};

// Flip card for the Secret section
const FlipCard = ({ suit, value = 'King' }) => {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      className="cursor-pointer"
      style={{ perspective: '600px', width: '80px' }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '294/456',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.45s cubic-bezier(0.4,0,0.2,1)',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Back face */}
        <div style={{ position: 'absolute', inset: 0, backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}>
          <CuajoCard faceDown={true} className="!w-full !h-full" />
        </div>
        {/* Front face (revealed King) */}
        <div style={{ position: 'absolute', inset: 0, backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
          <CuajoCard suit={suit} value={value} className="!w-full !h-full ring-2 ring-[#E06A7D] !rounded-[18px]" />
        </div>
      </div>
    </div>
  );
};

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
            <p className="text-stone-500 text-sm mb-6 flex-grow">
              {renderText('Strictly **3-4-5** or **Jack-Horse-King** in one suit. Note: These are the only allowed sequences. Aces cannot be used in runs.')}
            </p>
            <div className="flex gap-2">
              <CuajoCard suit="Bastos" value="3" />
              <CuajoCard suit="Bastos" value="4" />
              <CuajoCard suit="Bastos" value="5" />
            </div>
          </div>
        </div>

        <div className="p-8 bg-stone-100 border border-stone-300 rounded-xl flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <h4 className="text-2xl font-serif mb-3 italic text-stone-800">The Secret(Secreto)</h4>
            <p className="text-stone-500 text-sm mb-4">
              {highlightWord(
                'If you collect all four matching cards, you can place them face down on your turn before discarding. This set is called a "secret" because the other players don\'t know what card it is. When you put down a secret, each opponent pays some amount. Once placed, these cards cannot be discarded or used in any other set.',
                'secret'
              )}
            </p>
          </div>
          <div className="flex gap-1">
            {[1, 2, 3, 4].map((i) => (
              <FlipCard key={i} suit="Oros" value="4" />
            ))}
          </div>
        </div>

        <div className="p-8 bg-white/90 border border-stone-300 rounded-xl flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <h4 className="text-2xl font-serif mb-3 italic text-stone-800">Lone Kings(Hari)</h4>
            <p className="text-stone-500 text-sm leading-relaxed">
              {renderText('A **King** by itself is a valid combination. You can hold any number of kings in your final hand.')}
            </p>
            <p className="text-stone-500 text-sm leading-relaxed">
              {renderText('Note: Kings can alternatively be used as part of a set, sequence or secret')}
            </p>
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
