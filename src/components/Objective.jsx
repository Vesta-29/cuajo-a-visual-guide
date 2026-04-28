import React, { useState } from "react";
import CuajoCard from "./CuajoCard";
import SectionHeader from "./SectionHeader";

const RED = "#E06A7D";

// Flip card component that accepts flip state from parent
const FlipCard = ({ suit, value = "King", isFlipped }) => {
  return (
    <div
      style={{ perspective: "600px" }}
      className="!w-20 sm:!w-20 md:!w-24 lg:!w-28"
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "294/456",
          transformStyle: "preserve-3d",
          transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Back face */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <CuajoCard faceDown={true} className="!w-full !h-full shadow-md" />
        </div>
        {/* Front face (revealed King) */}
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
            suit={suit}
            value={value}
            className="!w-full !h-full ring-2 ring-[#E06A7D] !rounded-[18px] shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

const Objective = () => {
  const [secretsFlipped, setSecretsFlipped] = useState(false);

  // Common wrapper class for all combination rows
  const rowClass =
    "p-5 sm:p-7 lg:p-10 xl:p-12 border border-stone-300 rounded-xl flex flex-col md:flex-row gap-10 items-center shadow-sm backdrop-blur-sm";
  // Consistent width for the visual (card) container
  const visualContainerClass =
    "w-full md:w-[480px] shrink-0 flex justify-center md:justify-end gap-2";

  return (
    <section id="section-02" className="mb-16 scroll-mt-24">
      <SectionHeader
        section="02 — Objective"
        title="Form valid combinations (Bahay)"
        subtitle={
          <>
            The aim is to form all{" "}
            <span style={{ color: "#E06A7D" }}>16 cards</span> in your winning
            hand into{" "}
            <span style={{ color: "#E06A7D" }}>
              distinct valid combinations
            </span>{" "}
            (also called bahay). There are five types of combinations that can
            be used:
          </>
        }
      />

      <div className="space-y-8">
        {/* Trio Row */}
        <div className={`${rowClass} bg-white/60`}>
          <div className="flex-1">
            <h4 className="text-2xl font-serif mb-3 italic text-stone-800">
              Trio
            </h4>
            <p className="text-stone-500 text-sm leading-relaxed">
              A <strong>Trio</strong> consists of three cards of the same rank,
              but <strong>different suits</strong>.
              <span className="block mt-2 italic text-stone-400">
                Note: This is not the same as a pung in mahjong, which would
                require identical suits.
              </span>
            </p>
          </div>
          <div className={visualContainerClass}>
            <CuajoCard
              suit="Oros"
              value="3"
              className="!w-20 sm:!w-20 md:!w-24 lg:!w-28"
            />
            <CuajoCard
              suit="Copas"
              value="3"
              className="!w-20 sm:!w-20 md:!w-24 lg:!w-28"
            />
            <CuajoCard
              suit="Espadas"
              value="3"
              className="!w-20 sm:!w-20 md:!w-24 lg:!w-28"
            />
          </div>
        </div>

        {/* Quadro Row */}
        <div className={`${rowClass} bg-white/60`}>
          <div className="flex-1">
            <h4 className="text-2xl font-serif mb-3 italic text-stone-800">
              Quadro
            </h4>
            <p className="text-stone-500 text-sm leading-relaxed">
              A <strong>Quadro</strong> (or Cuarteta) consists of four cards of
              the same rank, each from a <strong>different suit</strong>. Like
              the Trio, these must be distinct suits to form a valid bahay.
            </p>
          </div>
          <div className={visualContainerClass}>
            <CuajoCard
              suit="Oros"
              value="5"
              className="!w-20 sm:!w-20 md:!w-24 lg:!w-28"
            />
            <CuajoCard
              suit="Copas"
              value="5"
              className="!w-20 sm:!w-20 md:!w-24 lg:!w-28"
            />
            <CuajoCard
              suit="Espadas"
              value="5"
              className="!w-20 sm:!w-20 md:!w-24 lg:!w-28"
            />
            <CuajoCard
              suit="Bastos"
              value="5"
              className="!w-20 sm:!w-20 md:!w-24 lg:!w-28"
            />
          </div>
        </div>

        {/* Escalera Row */}
        <div className={`${rowClass} bg-white/60`}>
          <div className="flex-1">
            <h4 className="text-2xl font-serif mb-3 italic text-stone-800">
              Straight (Escalera)
            </h4>
            <p className="text-stone-500 text-sm leading-relaxed">
              An <strong>Escalera</strong> is a sequence of three consecutive
              cards of the <strong>same suit</strong>. The only escaleras
              possible in cuajo are <strong>3-4-5</strong> and{" "}
              <strong>Sota-Kabayo-Hari</strong>.
            </p>
          </div>
          <div className={visualContainerClass}>
            <CuajoCard
              suit="Bastos"
              value="3"
              className="!w-20 sm:!w-20 md:!w-24 lg:!w-28"
            />
            <CuajoCard
              suit="Bastos"
              value="4"
              className="!w-20 sm:!w-20 md:!w-24 lg:!w-28"
            />
            <CuajoCard
              suit="Bastos"
              value="5"
              className="!w-20 sm:!w-20 md:!w-24 lg:!w-28"
            />
          </div>
        </div>

        {/* Secret Section */}
        <div className="p-5 sm:p-7 lg:p-10 xl:p-12 bg-stone-100 border border-stone-300 rounded-xl flex flex-col md:flex-row gap-10 items-center shadow-sm backdrop-blur-sm">
          <div className="flex-1">
            <h4 className="text-2xl font-serif mb-3 italic text-stone-800">
              The Secret(Secreto)
            </h4>
            <p className="text-stone-500 text-sm mb-4">
              A <strong>Secret</strong> is when you collect{" "}
              <strong>four identical cards </strong>
              and place them face down on your turn before discarding; other
              players won’t know what cards are in it, each opponent must pay a
              fee when you place it, and the cards stay locked so you can’t use
              or discard them later
            </p>
            <p className="text-[10px] font-black uppercase tracking-widest text-stone-400 mt-1 text-center w-full md:text-left">
              Tip: Hover or tap to reveal the secret
            </p>
          </div>
          <div
            className={`${visualContainerClass} cursor-pointer p-4 rounded-xl transition-colors hover:bg-stone-200/50`}
            onMouseEnter={() => setSecretsFlipped(true)}
            onMouseLeave={() => setSecretsFlipped(false)}
            onClick={() => setSecretsFlipped((f) => !f)}
          >
            {[1, 2, 3, 4].map((i) => (
              <FlipCard
                key={i}
                suit="Oros"
                value="4"
                isFlipped={secretsFlipped}
              />
            ))}
          </div>
        </div>

        {/* Lone Kings Section */}
        <div className="p-5 sm:p-7 lg:p-10 xl:p-12 bg-white/90 border border-stone-300 rounded-xl flex flex-col md:flex-row gap-10 items-center shadow-sm backdrop-blur-sm">
          <div className="flex-1">
            <h4 className="text-2xl font-serif mb-3 italic text-stone-800">
              Lone Kings(Hari)
            </h4>
            <p className="text-stone-500 text-sm leading-relaxed">
              A <strong>King</strong> by itself is a{" "}
              <strong>valid combination</strong>. You can hold any number of
              kings in your final hand.
            </p>
            <span className="text-sm block mt-2 italic text-stone-400">
              Note: Kings can alternatively be used as part of a set, sequence
              or secret.
            </span>
          </div>
          <div className={visualContainerClass}>
            <CuajoCard
              suit="Oros"
              value="King"
              className="!w-20 sm:!w-20 md:!w-24 lg:!w-28"
            />
            <CuajoCard
              suit="Copas"
              value="King"
              className="!w-20 sm:!w-20 md:!w-24 lg:!w-28"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Objective;
