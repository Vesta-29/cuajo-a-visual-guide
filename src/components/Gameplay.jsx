import React, { useState, useEffect } from "react";
import SectionHeader from "./SectionHeader";
import CuajoCard from "./CuajoCard";

const RED = "#E06A7D";

const StockCard = () => {
  const [flipped, setFlipped] = useState(false);
  const [randomCard, setRandomCard] = useState({ suit: "Oros", value: "Ace" });

  const suits = ["Oros", "Copas", "Espadas", "Bastos"];
  const ranks = ["Ace", "3", "4", "5", "Jack", "Horse", "King"];

  const pickRandom = () => {
    const s = suits[Math.floor(Math.random() * suits.length)];
    const r = ranks[Math.floor(Math.random() * ranks.length)];
    setRandomCard({ suit: s, value: r });
  };

  return (
    <div
      className="cursor-pointer"
      style={{ perspective: "600px", width: "100%", maxWidth: "112px" }}
      onMouseEnter={() => {
        pickRandom();
        setFlipped(true);
      }}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "294/456",
          transformStyle: "preserve-3d",
          transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Back face (Stock) */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <CuajoCard faceDown={true} className="!w-full !h-full shadow-xl" />
        </div>
        {/* Front face (Revealed) */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <CuajoCard
            suit={randomCard.suit}
            value={randomCard.value}
            className="!w-full !h-full ring-2 ring-[#E06A7D] !rounded-[18px] shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

const SoweeVisual = () => (
  <div className="relative w-full h-48 flex items-center justify-center">
    {/* Horizontal Sowee Card (Face Up) */}
    <div className="absolute rotate-90 translate-y-4">
      <CuajoCard
        suit="Copas"
        value="5"
        className="!w-20 sm:!w-24 shadow-sm opacity-90"
      />
    </div>
    {/* Stock Card (Face Down) on top */}
    <div className="relative z-10 -translate-y-2">
      <CuajoCard
        faceDown={true}
        className="!w-20 sm:!w-24 shadow-2xl ring-1 ring-black/5"
      />
    </div>
  </div>
);

const Gameplay = () => {
  return (
    <section id="section-03" className="mb-16 scroll-mt-24">
      <SectionHeader
        section="03 — Gameplay"
        title="A counterclockwise dance"
        subtitle={
          <>
            Cuajo is played in <span style={{ color: RED }}>teams of two</span>,
            partners sitting opposite. For the first match, the{" "}
            <span style={{ color: RED }}>Mano</span> (dealer) can be chosen at
            random. For subsequent matches, the winner of the previous match is
            mano.
          </>
        }
      />

      {/* Two-column info card — Setup and Deal */}
      <div className="bg-white/60 border border-stone-300 rounded-xl p-6 sm:p-8 lg:p-12 xl:p-14 2xl:p-16 mb-14 grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-10 items-center backdrop-blur-sm shadow-sm">
        <div>
          <p
            className="text-[13px] font-black tracking-[0.2em] uppercase mb-3"
            style={{ color: RED }}
          >
            The Deal
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            The dealer (Mano) distributes in a <strong>5-5-5-1 sequence</strong>
            . The Mano takes <strong>16 cards</strong>; all other players
            receive <strong>15</strong>. The remaining cards form the stock.
          </p>
        </div>

        {/* Divider */}
        <div className="h-px w-full md:w-px md:h-24 bg-stone-300/50" />

        <div>
          <p
            className="text-[13px] font-black tracking-[0.2em] uppercase mb-3"
            style={{ color: RED }}
          >
            Setup
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            The mano shuffles the deck and offers a cut to the player to their{" "}
            <strong>left</strong>. Like mahjong, deal and gameplay is{" "}
            <strong>counterclockwise</strong>.
          </p>
        </div>
      </div>

      <div className="">
        {/* Step 1 — The Sowee */}
        <div className="flex flex-col md:flex-row gap-10 items-start md:items-center pb-14">
          <div className="flex-1 space-y-5">
            <div className="flex items-baseline gap-5">
              <span
              className="text-5xl sm:text-7xl font-serif italic leading-none shrink-0"
                style={{ color: RED }}
              >
                1
              </span>
              <h3 className="text-2xl font-serif font-bold text-stone-800">
                The Sowee
              </h3>
            </div>
            <p className="text-sm text-stone-600 leading-relaxed">
              After dealing, the next card is placed{" "}
              <strong>face-up at a right angle</strong> under the stock. This
              card — the <em>Sowee</em> — dictates financial multipliers at
              payout. You can also declare a secret using the sowee as follows.
            </p>
            <div className="space-y-3">
              <p className="text-[10px] font-black tracking-[0.2em] uppercase text-stone-400">
                Secret (Sowee)
              </p>
              {[
                {
                  label: "Declaration",
                  desc: "Lay three matching sowee cards face down with one extra card to claim a secret.",
                },
                {
                  label: "Rule",
                  desc: "The extra card stays hidden and must be used in a valid combination later.",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col sm:flex-row gap-2 sm:gap-4 p-4 sm:p-6 lg:p-8 xl:p-10 bg-white/60 border border-stone-200 rounded-lg"
                >
                  <p
                    className="text-[10px] font-black tracking-[0.15em] uppercase shrink-0 pt-0.5 w-full sm:w-28"
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
          <div className="w-full md:w-44 lg:w-56 shrink-0 flex flex-col items-center gap-4 p-6 bg-stone-800 rounded-xl shadow-2xl">
            <p className="text-[10px] font-black tracking-[0.2em] uppercase text-stone-400">
              Sowee Visual
            </p>
            <SoweeVisual />
            <p className="text-xs text-stone-400 text-center leading-relaxed">
              Card rotated 90° under stock
            </p>
          </div>
        </div>

        {/* Step 2 — Turn Mechanics */}
        <div className="flex flex-col md:flex-row gap-10 items-start md:items-center pb-14">
          <div className="flex-1 space-y-5">
            <div className="flex items-baseline gap-5">
              <span
              className="text-5xl sm:text-7xl font-serif italic leading-none shrink-0"
                style={{ color: RED }}
              >
                2
              </span>
              <h3 className="text-2xl font-serif font-bold text-stone-800">
                Turn Mechanics
              </h3>
            </div>
            <p className="text-sm text-stone-600 leading-relaxed">
              On your turn, draw from the <strong>stock</strong> or pick up the{" "}
              <strong>immediate previous discard</strong>. Discard one card to
              end your turn.
            </p>
            <div className="space-y-3">
              <p className="text-[10px] font-black tracking-[0.2em] uppercase text-stone-400">
                Draw Options
              </p>
              {[
                {
                  label: "Option A",
                  desc: "Draw the top card of the stock (face-down).",
                },
                {
                  label: "Option B",
                  desc: "Pick up the most recent discard (face-up).",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex gap-4 p-4 sm:p-6 lg:p-8 xl:p-10 bg-white/60 border border-stone-200 rounded-lg"
                >
                  <p
                    className="text-[10px] font-black tracking-[0.15em] uppercase shrink-0 pt-0.5 w-28"
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
          <div className="w-full md:w-44 lg:w-56 shrink-0 flex flex-col items-center gap-4 p-6 bg-stone-800 rounded-xl shadow-2xl">
            <p className="text-[10px] font-black tracking-[0.2em] uppercase text-stone-400">
              The Stock
            </p>
            <StockCard />
            <p className="text-xs text-stone-400 text-center leading-relaxed">
              Hover to draw a card
            </p>
          </div>
        </div>

        {/* Step 3 — Purro Protocol */}
        <div className="flex flex-col md:flex-row gap-10 items-start md:items-center pb-14">
          <div className="flex-1 space-y-5">
            <div className="flex items-baseline gap-5">
              <span
              className="text-5xl sm:text-7xl font-serif italic leading-none shrink-0"
                style={{ color: RED }}
              >
                3
              </span>
              <h3 className="text-2xl font-serif font-bold text-stone-800">
                The Purro Protocol
              </h3>
            </div>
            <p className="text-sm text-stone-600 leading-relaxed">
              When you reach a waiting position where you only need{" "}
              <strong>one card to win</strong>, declare <em>Purro</em>.
            </p>
            <div className="space-y-3">
              {[
                {
                  label: "Declaration",
                  desc: "Place a Hari (King) or chip face-up to signal Purro. Note: Winning without a Hari in hand earns a greater payout.",
                },
                {
                  label: "Transparency",
                  desc: "All players must now draw from the stock and reveal the card to allow for potential interception.",
                },
                {
                  label: "Winning Ways",
                  desc: 'Win by drawing yourself, taking the left discard, or intercepting (calling "Time") a face-up stock draw.',
                },
                {
                  label: "Priority",
                  desc: "If multiple players win on one card, the drawer takes precedence. Otherwise, counterclockwise order wins.",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col sm:flex-row gap-2 sm:gap-4 p-4 sm:p-6 lg:p-8 xl:p-10 bg-white/60 border border-stone-200 rounded-lg"
                >
                  <p
                    className="text-[10px] font-black tracking-[0.15em] uppercase shrink-0 pt-0.5 w-full sm:w-28"
                    style={{ color: RED }}
                  >
                    {item.label}
                  </p>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
              <div className="p-4 bg-stone-100/50 border border-stone-200 rounded-lg italic text-[11px] text-stone-500">
                <strong>Note:</strong> Unlike Mahjong, you cannot pick up
                discarded cards out of turn; you only win from the player to
                your immediate left or via face-up stock draws.
              </div>
            </div>
          </div>
          <div className="w-full md:w-44 lg:w-56 shrink-0 flex flex-col items-center gap-4 p-6 bg-stone-800 rounded-xl shadow-2xl">
            <p className="text-[10px] font-black tracking-[0.2em] uppercase text-stone-400">
              Hari signal
            </p>
            <CuajoCard
              suit="Oros"
              value="King"
              className="!w-28 !h-auto shadow-xl"
            />
            <p className="text-xs text-stone-400 text-center leading-relaxed">
              Signal your final card wait
            </p>
          </div>
        </div>

        {/* Step 4 — Losing Purro */}
        <div className="flex flex-col md:flex-row gap-10 items-start md:items-center pb-14">
          <div className="flex-1 space-y-5">
            <div className="flex items-baseline gap-5">
              <span
              className="text-5xl sm:text-7xl font-serif italic leading-none shrink-0"
                style={{ color: RED }}
              >
                4
              </span>
              <h3 className="text-2xl font-serif font-bold text-stone-800">
                Losing Purro
              </h3>
            </div>
            <p className="text-sm text-stone-600 leading-relaxed">
              If you draw a Hari (which cannot be discarded) and must break your
              waiting hand, you have <strong>Lost Purro</strong>.
            </p>
            <div className="space-y-3">
              {[
                {
                  label: "Penalty",
                  desc: "Draw face-up for two rounds. Others cannot intercept these draws.",
                },
                {
                  label: "Restriction",
                  desc: "You cannot win or re-declare Purro during these rounds. Resume normal play in the third round.",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col sm:flex-row gap-2 sm:gap-4 p-4 sm:p-6 lg:p-8 xl:p-10 bg-white/60 border border-stone-200 rounded-lg"
                >
                  <p
                    className="text-[10px] font-black tracking-[0.15em] uppercase shrink-0 pt-0.5 w-full sm:w-28"
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
          <div className="w-full md:w-44 lg:w-56 shrink-0 flex flex-col items-center gap-4 p-6 bg-stone-800 rounded-xl shadow-2xl">
            <p className="text-[10px] font-black tracking-[0.2em] uppercase text-stone-400">
              Losing Purro
            </p>
            <div className="relative">
              <CuajoCard
                suit="Bastos"
                value="King"
                className="!w-28 !h-auto opacity-50 grayscale"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-5xl font-black rotate-12 drop-shadow-lg">
                  X
                </span>
              </div>
            </div>
            <p className="text-xs text-stone-400 text-center leading-relaxed">
              Mandatory Hari draw
            </p>
          </div>
        </div>

        {/* Step 5 — Stock Exhaustion */}
        <div className="flex flex-col md:flex-row gap-10 items-start md:items-center pb-14">
          <div className="flex-1 space-y-5">
            <div className="flex items-baseline gap-5">
              <span
              className="text-5xl sm:text-7xl font-serif italic leading-none shrink-0"
                style={{ color: RED }}
              >
                5
              </span>
              <h3 className="text-2xl font-serif font-bold text-stone-800">
                Stock Exhaustion
              </h3>
            </div>
            <p className="text-sm text-stone-600 leading-relaxed">
              If the stock is depleted before anyone wins, the hand is a{" "}
              <strong>draw</strong>. No payments are made except for any{" "}
              <strong>Secretos</strong> already settled.
            </p>
            <div className="p-4 bg-white/40 border border-stone-200 rounded-lg italic text-[11px] text-stone-500">
              <strong>Note:</strong> In a draw, the same Mano (dealer) usually
              shuffles and deals for the next round.
            </div>
          </div>
          <div className="w-full md:w-44 lg:w-56 shrink-0 flex flex-col items-center gap-4 p-6 bg-stone-800 rounded-xl shadow-2xl">
            <p className="text-[10px] font-black tracking-[0.2em] uppercase text-stone-400">
              Empty Stock
            </p>
            <div className="w-28 h-40 border-2 border-dashed border-stone-600 rounded-[18px] flex items-center justify-center">
              <span className="text-stone-600 text-xs font-black uppercase tracking-widest">
                Depleted
              </span>
            </div>
            <p className="text-xs text-stone-400 text-center leading-relaxed">
              No cards remaining
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gameplay;
