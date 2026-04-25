import React, { useState, useEffect } from 'react';
import SectionHeader from './SectionHeader';
import CuajoCard from './CuajoCard';

const RED = '#E06A7D';

const StockCard = () => {
  const [flipped, setFlipped] = useState(false);
  const [randomCard, setRandomCard] = useState({ suit: 'Oros', value: 'Ace' });

  const suits = ['Oros', 'Copas', 'Espadas', 'Bastos'];
  const ranks = ['Ace', '3', '4', '5', 'Jack', 'Horse', 'King'];

  const pickRandom = () => {
    const s = suits[Math.floor(Math.random() * suits.length)];
    const r = ranks[Math.floor(Math.random() * ranks.length)];
    setRandomCard({ suit: s, value: r });
  };

  return (
    <div
      className="cursor-pointer"
      style={{ perspective: '600px', width: '112px' }}
      onMouseEnter={() => {
        pickRandom();
        setFlipped(true);
      }}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '294/456',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Back face (Stock) */}
        <div style={{ position: 'absolute', inset: 0, backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}>
          <CuajoCard faceDown={true} className="!w-full !h-full shadow-xl" />
        </div>
        {/* Front face (Revealed) */}
        <div style={{ position: 'absolute', inset: 0, backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
          <CuajoCard suit={randomCard.suit} value={randomCard.value} className="!w-full !h-full ring-2 ring-[#E06A7D] !rounded-[18px] shadow-2xl" />
        </div>
      </div>
    </div>
  );
};

const Gameplay = () => {
  return (
    <section id="section-03" className="mb-32 scroll-mt-24">
      <SectionHeader
        section="03 — Gameplay"
        title="A counterclockwise dance"
        subtitle={
          <>
            Cuajo is played in{' '}
            <span style={{ color: RED }}>teams of two</span>, partners sitting
            opposite. Dealing and play rotate{' '}
            <span style={{ color: RED }}>counterclockwise</span> — the Mano
            receives 16 cards; all other players receive 15.
          </>
        }
      />

      {/* Two-column info card — mirrors the reference image's paired rule boxes */}
      <div className="bg-white/60 border border-stone-300 rounded-xl p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 2xl:p-16 mb-14 grid md:grid-cols-2 gap-10 backdrop-blur-sm shadow-sm">
        <div>
          <p
            className="text-[10px] font-black tracking-[0.2em] uppercase mb-3"
            style={{ color: RED }}
          >
            The Deal
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            The dealer (Mano) distributes in a{' '}
            <strong>5-5-5-1 sequence</strong>. The Mano takes{' '}
            <strong>16 cards</strong>; all other players receive{' '}
            <strong>15</strong>. The remaining cards form the stock.
          </p>
        </div>
        <div>
          <p
            className="text-[10px] font-black tracking-[0.2em] uppercase mb-3"
            style={{ color: RED }}
          >
            The Sowee
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            After dealing, the next card is placed{' '}
            <strong>face-up at a right angle</strong> under the stock. This
            card — the <em>Sowee</em> — is not used in active play but{' '}
            <strong>dictates financial multipliers</strong> at payout.
          </p>
        </div>
      </div>

      {/* Step 1 — Turn Mechanics */}
      <div className="flex flex-col md:flex-row gap-10 items-start mb-14">
        <div className="flex-1 space-y-5">
          <div className="flex items-baseline gap-5">
            <span
              className="text-7xl font-serif italic leading-none shrink-0"
              style={{ color: RED }}
            >
              1
            </span>
            <h3 className="text-2xl font-serif font-bold text-stone-800">
              Turn Mechanics
            </h3>
          </div>
          <p className="text-sm text-stone-600 leading-relaxed">
            On your turn, draw from the <strong>stock</strong> or pick up the{' '}
            <strong>immediate previous discard</strong> — even if it does not
            complete a Bahay. After drawing, discard one card to end your turn.
          </p>
          <div className="p-5 bg-stone-50 border border-stone-200 rounded-xl">
            <p className="text-[10px] font-black tracking-[0.2em] uppercase text-stone-400 mb-3">
              Draw options
            </p>
            <ul className="space-y-2 text-sm text-stone-600">
              <li className="flex items-start gap-2">
                <span
                  className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ background: RED }}
                />
                Top of the stock (face-down)
              </li>
              <li className="flex items-start gap-2">
                <span
                  className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ background: RED }}
                />
                The most recent discard (face-up)
              </li>
            </ul>
          </div>
        </div>
        {/* Visual — face-down stock card */}
        <div className="w-full md:w-56 shrink-0 flex flex-col items-center gap-4 p-6 bg-stone-800 rounded-xl shadow-2xl">
          <p className="text-[10px] font-black tracking-[0.2em] uppercase text-stone-400">
            The Stock
          </p>
          <StockCard />
          <p className="text-xs text-stone-400 text-center leading-relaxed">
            Hover to draw a random card
          </p>
        </div>
      </div>

      {/* Step 2 — Purro Protocol */}
      <div className="flex flex-col md:flex-row gap-10 items-start mb-14">
        <div className="flex-1 space-y-5">
          <div className="flex items-baseline gap-5">
            <span
              className="text-7xl font-serif italic leading-none shrink-0"
              style={{ color: RED }}
            >
              2
            </span>
            <h3 className="text-2xl font-serif font-bold text-stone-800">
              The Purro Protocol
            </h3>
          </div>
          <p className="text-sm text-stone-600 leading-relaxed">
            When a player needs <strong>only one card to win</strong>, they
            declare <em>Purro</em>. This triggers a set of obligations for all
            players.
          </p>
          <div className="space-y-3">
            {[
              {
                label: 'Declaration',
                desc: 'Place a Hari (or a token) face-up on the table to signal Purro.',
              },
              {
                label: 'Transparency',
                desc: 'All players must reveal their stock draws to the whole table from that point on.',
              },
              {
                label: 'Priority of Win',
                desc: "If a drawn card completes multiple players' hands, the drawer takes precedence. Otherwise, the next player in counterclockwise order wins.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex gap-4 p-4 sm:p-6 lg:p-8 xl:p-10 bg-white/60 border border-stone-200 rounded-lg"
              >
                <p
                  className="text-[10px] font-black tracking-[0.15em] uppercase shrink-0 pt-0.5"
                  style={{ color: RED }}
                >
                  {item.label}
                </p>
                <p className="text-sm text-stone-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Visual — Hari as Purro signal */}
        <div className="w-full md:w-56 shrink-0 flex flex-col items-center gap-4 p-6 bg-white/60 border border-stone-300 rounded-xl shadow-sm">
          <p className="text-[10px] font-black tracking-[0.2em] uppercase text-stone-400">
            Hari as signal
          </p>
          <CuajoCard suit="Oros" value="King" className="!w-28 !h-auto shadow-xl" />
          <p className="text-xs text-stone-500 text-center leading-relaxed">
            Place a King face-up to declare Purro
          </p>
        </div>
      </div>

      {/* Steps 3 & 4 — Penalties and Exhaustion */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 sm:p-8 lg:p-12 xl:p-16 border border-stone-300 rounded-xl bg-white/40">
          <div className="flex items-baseline gap-4 mb-4">
            <span
              className="text-5xl font-serif italic leading-none shrink-0"
              style={{ color: RED }}
            >
              3
            </span>
            <h3 className="text-xl font-serif font-bold text-stone-800">
              Losing Purro
            </h3>
          </div>
          <p className="text-sm text-stone-600 leading-relaxed">
            If a player in Purro draws a <strong>non-discardable Hari</strong>{' '}
            that breaks their waiting status, they have "Lost Purro." They must{' '}
            <strong>draw face-up for two rounds</strong> and cannot win or
            re-declare Purro until the <strong>third turn</strong>.
          </p>
        </div>
        <div className="p-6 sm:p-8 lg:p-12 xl:p-16 border border-stone-300 rounded-xl bg-white/40">
          <div className="flex items-baseline gap-4 mb-4">
            <span
              className="text-5xl font-serif italic leading-none shrink-0"
              style={{ color: RED }}
            >
              4
            </span>
            <h3 className="text-xl font-serif font-bold text-stone-800">
              Stock Exhaustion
            </h3>
          </div>
          <p className="text-sm text-stone-600 leading-relaxed">
            If the stock is depleted before anyone wins, the hand is a{' '}
            <strong>draw</strong>. No payments are made except for any{' '}
            <strong>Secretos already settled</strong> during the round.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gameplay;
