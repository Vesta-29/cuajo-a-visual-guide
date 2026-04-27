import React from "react";
import SectionHeader from "./SectionHeader";
import CuajoCard from "./CuajoCard";

const RED = "#E06A7D";

const ArrowOverlay = ({ RED, hoveredStep }) => {
  const [arrowPaths, setArrowPaths] = React.useState({
    bunot1: "",
    bunot2: "",
    sowee1: "",
    sowee2: "",
  });

  React.useEffect(() => {
    const calculatePaths = () => {
      requestAnimationFrame(() => {
        const container = document.getElementById("scenario-container");
        const bunot = document.getElementById("bunot-card-container");
        const sowee = document.getElementById("sowee-card-container");
        const handC3 = document.getElementById("hand-copas-3");
        const handC5 = document.getElementById("hand-copas-5");
        const handE3 = document.getElementById("hand-espadas-3");
        const handE4 = document.getElementById("hand-espadas-4");

        if (
          !container ||
          !bunot ||
          !sowee ||
          !handC3 ||
          !handC5 ||
          !handE3 ||
          !handE4
        )
          return;

        const cRect = container.getBoundingClientRect();
        const bRect = bunot.getBoundingClientRect();
        const sRect = sowee.getBoundingClientRect();
        const hC3Rect = handC3.getBoundingClientRect();
        const hC5Rect = handC5.getBoundingClientRect();
        const hE3Rect = handE3.getBoundingClientRect();
        const hE4Rect = handE4.getBoundingClientRect();

        const getPoint = (rect, xFactor = 0.5, yFactor = 0.5) => ({
          x: rect.left - cRect.left + rect.width * xFactor,
          y: rect.top - cRect.top + rect.height * yFactor,
        });

        const pB = getPoint(bRect, 0.5, 0.8);
        const pS = getPoint(sRect, 0.5, 0.8);

        const pHC3 = getPoint(hC3Rect, 0.5, 0);
        const pHC5 = getPoint(hC5Rect, 0.5, 0);
        const pHE3 = getPoint(hE3Rect, 0.5, 0);
        const pHE4 = getPoint(hE4Rect, 0.5, 0);

        const curve = (p1, p2) => {
          const midY = (p1.y + p2.y) / 2;
          return `M ${p1.x} ${p1.y} C ${p1.x} ${midY}, ${p2.x} ${midY}, ${p2.x} ${p2.y}`;
        };

        setArrowPaths({
          bunot1: curve(pHC3, pB),
          bunot2: curve(pHC5, pB),
          sowee1: curve(pHE3, pS),
          sowee2: curve(pHE4, pS),
        });
      });
    };

    calculatePaths();
    const timers = [
      setTimeout(calculatePaths, 100),
      setTimeout(calculatePaths, 500),
      setTimeout(calculatePaths, 1000),
    ];

    window.addEventListener("resize", calculatePaths);
    return () => {
      window.removeEventListener("resize", calculatePaths);
      timers.forEach((t) => clearTimeout(t));
    };
  }, []);

  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 200, overflow: "visible" }}
    >
      <svg
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          overflow: "visible",
        }}
      >
        <defs>
          <marker
            id="arrowhead-red"
            markerWidth="10"
            markerHeight="7"
            refX="9"
            refY="3.5"
            orient="auto"
          >
            <polygon points="0 0, 10 3.5, 0 7" fill={RED} />
          </marker>
          <marker
            id="arrowhead-white"
            markerWidth="10"
            markerHeight="7"
            refX="9"
            refY="3.5"
            orient="auto"
          >
            <polygon points="0 0, 10 3.5, 0 7" fill="#ffffff" />
          </marker>
        </defs>

        {/* Bunot Arrows */}
        <path
          d={arrowPaths.bunot1}
          stroke={RED}
          strokeWidth="3"
          fill="none"
          strokeDasharray="6,6"
          markerEnd="url(#arrowhead-red)"
          style={{
            opacity: hoveredStep === 1 ? 1 : 0,
            transition: "opacity 0.5s",
          }}
        />
        <path
          d={arrowPaths.bunot2}
          stroke={RED}
          strokeWidth="3"
          fill="none"
          strokeDasharray="6,6"
          markerEnd="url(#arrowhead-red)"
          style={{
            opacity: hoveredStep === 1 ? 1 : 0,
            transition: "opacity 0.5s",
          }}
        />

        {/* Sowee Arrows */}
        <path
          d={arrowPaths.sowee1}
          stroke="#ffffff"
          strokeWidth="3"
          fill="none"
          strokeDasharray="6,6"
          markerEnd="url(#arrowhead-white)"
          style={{
            opacity: hoveredStep === 2 ? 1 : 0,
            transition: "opacity 0.5s",
          }}
        />
        <path
          d={arrowPaths.sowee2}
          stroke="#ffffff"
          strokeWidth="3"
          fill="none"
          strokeDasharray="6,6"
          markerEnd="url(#arrowhead-white)"
          style={{
            opacity: hoveredStep === 2 ? 1 : 0,
            transition: "opacity 0.5s",
          }}
        />
      </svg>
    </div>
  );
};

const Scoring = () => {
  const [hoveredStep, setHoveredStep] = React.useState(null);

  const getCardStyle = (cardIds, step) => {
    const isActive = hoveredStep !== null;

    const shouldHighlight =
      (hoveredStep === 1 && cardIds.includes("bunot-bonus")) ||
      (hoveredStep === 2 && cardIds.includes("sowee-bonus"));

    return {
      transform: shouldHighlight
        ? "translateY(-15px) scale(1.05)"
        : "translateY(0) scale(1)",
      opacity: isActive && !shouldHighlight ? 0.3 : 1,
      filter: shouldHighlight ? "brightness(1.1) contrast(1.1)" : "none",
      transition: "all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)",
      zIndex: shouldHighlight ? 50 : 10,
    };
  };

  return (
    <section id="section-04" className="mb-16 scroll-mt-24">
      <SectionHeader
        section="04 — End Game"
        title="Winning and Payout"
        subtitle={
          <>
            In order to <span style={{ color: RED }}>win</span>, the player must
            achieve <strong>16 cards</strong> in valid combinations. Upon
            winning, the game transitions to the payout phase. Winnings are
            collected only from the <strong>two opposing players</strong>, never
            the partner.
          </>
        }
      />

      {/* Two-column info card — The Bunot and Reveal Phase */}
      <div className="bg-white/60 border border-stone-300 rounded-xl p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 2xl:p-16 mb-14 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-10 items-center backdrop-blur-sm shadow-sm">
        <div>
          <p
            className="text-[13px] font-black tracking-[0.2em] uppercase mb-3"
            style={{ color: RED }}
          >
            The Bunot
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            The <strong>Bunot</strong> is defined as the last card drawn for the
            win. While the term is shared with Filipino Mahjong, the mechanical
            application in Cuajo is distinct.
          </p>
        </div>

        <div className="h-px w-full md:w-px md:h-24 bg-stone-300/50" />

        <div>
          <p
            className="text-[13px] font-black tracking-[0.2em] uppercase mb-3"
            style={{ color: RED }}
          >
            Reveal Phase
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            The winner must show their <strong>complete hand</strong> including
            any secrets. Any other players who were paid for secrets during the
            round must also reveal their secret cards to verify the sets.
          </p>
        </div>
      </div>

      {/* Example Winning Deck Row */}
      <div className="bg-stone-800 text-stone-100 border border-stone-700 rounded-2xl p-5 sm:p-8 md:p-12 mb-14 shadow-2xl overflow-hidden relative">
        <div className="mb-10">
          <h4 className="text-3xl font-serif text-white flex items-baseline gap-2">
            Example Winning Hand <span className="text-stone-500">·</span>{" "}
            <span style={{ color: RED }} className="italic">
              Bahay
            </span>
          </h4>
          <p className="text-stone-400 text-sm mt-2 max-w-2xl leading-relaxed">
            A complete 16-card hand with 4 of copas as the <em>Bunot</em>,
            organized into distinct combinations. All cards must be accounted
            for in a valid set or sequence.
          </p>
        </div>

        <div className="flex flex-col items-center gap-12">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-12">
            {/* Set 1: Quarteta of 4s */}
            <div className="flex flex-col items-center gap-3">
              <div className="flex -space-x-14">
                <CuajoCard suit="Oros" value="4" className="!w-22 shadow-md" />
                <CuajoCard
                  suit="Bastos"
                  value="4"
                  className="!w-22 shadow-md"
                />
                <CuajoCard
                  suit="Espadas"
                  value="4"
                  className="!w-22 shadow-md"
                />
                <CuajoCard
                  suit="Copas"
                  value="4"
                  className="!w-22 ring-2 ring-[#E06A7D] shadow-xl z-10"
                />
              </div>
              <p className="text-[9px] font-black tracking-widest text-white uppercase">
                Quarteta · 4s
              </p>
            </div>

            {/* Set 2: Trio 3s */}
            <div className="flex flex-col items-center gap-3">
              <div className="flex -space-x-14">
                <CuajoCard suit="Oros" value="3" className="!w-22 shadow-md" />
                <CuajoCard
                  suit="Bastos"
                  value="3"
                  className="!w-22 shadow-md"
                />
                <CuajoCard suit="Copas" value="3" className="!w-22 shadow-md" />
              </div>
              <p className="text-[9px] font-black tracking-widest text-white uppercase">
                Trio · 3s
              </p>
            </div>

            {/* Set 3: Trio 5s */}
            <div className="flex flex-col items-center gap-3">
              <div className="flex -space-x-14">
                <CuajoCard suit="Oros" value="5" className="!w-22 shadow-md" />
                <CuajoCard
                  suit="Bastos"
                  value="5"
                  className="!w-22 shadow-md"
                />
                <CuajoCard suit="Copas" value="5" className="!w-22 shadow-md" />
              </div>
              <p className="text-[9px] font-black tracking-widest text-white uppercase">
                Trio · 5s
              </p>
            </div>

            {/* Set 4: Escalera Espadas */}
            <div className="flex flex-col items-center gap-3">
              <div className="flex -space-x-14">
                <CuajoCard
                  suit="Espadas"
                  value="3"
                  className="!w-22 shadow-md"
                />
                <CuajoCard
                  suit="Espadas"
                  value="4"
                  className="!w-22 shadow-md"
                />
                <CuajoCard
                  suit="Espadas"
                  value="5"
                  className="!w-22 shadow-md"
                />
              </div>
              <p className="text-[9px] font-black tracking-widest text-white uppercase">
                Escalera · Espadas
              </p>
            </div>

            {/* Set 5: Trio Kings */}
            <div className="flex flex-col items-center gap-3">
              <div className="flex -space-x-14">
                <CuajoCard
                  suit="Oros"
                  value="King"
                  className="!w-22 shadow-md"
                />
                <CuajoCard
                  suit="Copas"
                  value="King"
                  className="!w-22 shadow-md"
                />
                <CuajoCard
                  suit="Bastos"
                  value="King"
                  className="!w-22 shadow-md"
                />
              </div>
              <p className="text-[9px] font-black tracking-widest text-white uppercase">
                Trio · Kings
              </p>
            </div>
          </div>

          <div className="w-full pt-10 mt-6 border-t border-dashed border-white/10 flex flex-col items-center gap-4">
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-stone-100">
              <div className="text-center">
                <div
                  className="text-2xl sm:text-3xl font-serif font-black"
                  style={{ color: RED }}
                >
                  16
                </div>
                <div className="text-[9px] font-black uppercase tracking-tighter text-stone-500">
                  Cards Total
                </div>
              </div>
              <div className="text-xl text-stone-600 hidden sm:block">→</div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-serif font-bold text-white">
                  5{" "}
                  <span className="text-xs sm:text-sm italic font-normal text-stone-400">
                    sets
                  </span>
                </div>
                <div className="text-[9px] font-black uppercase tracking-tighter text-stone-500">
                  Combinations
                </div>
              </div>
              <div className="text-xl text-stone-600 hidden sm:block">=</div>
              <div className="text-center">
                <div
                  className="text-2xl sm:text-3xl font-serif italic font-bold"
                  style={{ color: RED }}
                >
                  Valid Win
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Combined Section: Extra Ways to Earn & Payout Table */}
      <div className="bg-white/60 border border-stone-300 rounded-xl overflow-hidden mb-14 shadow-sm flex flex-col lg:flex-row">
        {/* Left Side: Info Texts */}
        <div className="flex-1 p-6 sm:p-8 lg:p-10 xl:p-12 flex flex-col sm:flex-row lg:flex-col gap-8 sm:gap-10 lg:gap-12 bg-white/30 justify-center">
          <div className="flex-1">
            <p
              className="text-[13px] font-black tracking-[0.2em] uppercase mb-3"
              style={{ color: RED }}
            >
              Extra Ways to Earn
            </p>
            <p className="text-sm text-stone-600 leading-relaxed">
              Even if you didn't draw the last card yourself, you can still earn
              more by meeting specific "matching" conditions with your final
              hand. This is where the concept of <strong>go with</strong> comes
              into play.
            </p>
          </div>

          <div className="hidden sm:block lg:hidden w-px bg-stone-300/50" />
          <div className="block sm:hidden lg:block h-px w-full bg-stone-300/50" />

          <div className="flex-1">
            <p
              className="text-[13px] font-black tracking-[0.2em] uppercase mb-3"
              style={{ color: RED }}
            >
              What "Goes With"?
            </p>
            <p className="text-sm text-stone-600 leading-relaxed">
              This is where the <strong>bunot</strong> and the{" "}
              <strong>sowee</strong> come into play. The concept of{" "}
              <em>to go with</em> is key to understanding this. Cards are said
              to go with another card when they form a straight. Since Aces
              cannot form a straight, the cards that go with an Ace are those
              that form a trio.
            </p>
          </div>
        </div>

        {/* Right Side: Payout Table */}
        <div className="flex-1 border-t lg:border-t-0 lg:border-l border-stone-300 flex flex-col bg-white/60">
          <div className="grid grid-cols-[1fr_auto] bg-stone-100/50 border-b border-stone-200 px-6 sm:px-8 py-4">
            <span className="text-[10px] font-black tracking-widest uppercase text-stone-400">
              Winning Scenario
            </span>
            <span className="text-[10px] font-black tracking-widest uppercase text-stone-400">
              Payout
            </span>
          </div>
          <div className="divide-y divide-stone-200/60 flex-1 flex flex-col justify-center">
            {[
              {
                label: "Ideal Bunot",
                desc: "Self-drawn from the stock to complete your hand.",
                amount: "$1.10",
              },
              {
                label: "Sowee Bonus",
                desc: "The Sowee card matches two cards in your winning hand.",
                amount: "70¢",
              },
              {
                label: "Bunot Bonus",
                desc: "The winning card matches two cards in your winning hand.",
                amount: "60¢",
              },
              {
                label: "Basic Win",
                desc: "Standard win with no special conditions met.",
                amount: "20¢",
                faded: true,
              },
            ].map((item) => (
              <div
                key={item.label}
                className={`grid grid-cols-[1fr_auto] px-6 sm:px-8 py-5 items-center gap-4 ${
                  item.faded ? "bg-stone-50/40" : ""
                }`}
              >
                <div>
                  <p
                    className={`text-sm font-bold ${item.faded ? "text-stone-400" : "text-stone-800"}`}
                  >
                    {item.label}
                  </p>
                  <p
                    className={`text-xs ${item.faded ? "text-stone-400" : "text-stone-500"} leading-relaxed`}
                  >
                    {item.desc}
                  </p>
                </div>
                <div className="text-right">
                  <span
                    className={`text-2xl font-serif italic ${item.faded ? "text-stone-400" : ""}`}
                    style={{ color: item.faded ? undefined : RED }}
                  >
                    {item.amount}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Understandable Scenario Example */}

      <div
        id="scenario-container"
        className="bg-stone-800 text-stone-100 rounded-2xl p-8 sm:p-12 mb-14 shadow-2xl relative border border-stone-700"
      >
        {/* All content — no z-10 on this wrapper */}
        <div className="relative">
          <div className="flex flex-col lg:flex-row gap-12 items-start mb-16">
            <div className="flex-1">
              <p
                className="text-[10px] font-black tracking-[0.2em] uppercase mb-3"
                style={{ color: RED }}
              >
                Step-by-Step Scenario
              </p>
              <h4 className="text-3xl font-serif italic mb-6">
                Winning with Bonuses
              </h4>
              <p className="text-stone-400 text-sm mb-6 max-w-xl leading-relaxed">
                In this example, a <strong>4 of Copas</strong> is discarded by
                the player to your left. You pick it up as your winning card to
                complete a <strong>Quarteta of 4s</strong>.
              </p>

              <div className="bg-white/5 border border-white/10 rounded-lg p-3 mb-8 inline-flex items-center gap-3">
                <p className="text-xs text-stone-300">
                  <strong className="text-white">Interactive Tip:</strong> Hover
                  over the numbered steps below to see how the bonus cards
                  connect!
                </p>
              </div>

              <div className="space-y-6">
                <div
                  className={`flex gap-4 p-4 rounded-xl transition-all duration-300 ${hoveredStep === 1 ? "bg-white/10 ring-1 ring-white/20" : "bg-transparent"}`}
                  onMouseEnter={() => setHoveredStep(1)}
                  onMouseLeave={() => setHoveredStep(null)}
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-bold text-white text-xs transition-transform duration-300"
                    style={{
                      backgroundColor: RED,
                      transform: hoveredStep === 1 ? "scale(1.2)" : "scale(1)",
                    }}
                  >
                    1
                  </div>
                  <p className="text-stone-300 text-sm leading-relaxed">
                    Check for <strong>Bunot Bonus</strong>: Your hand contains
                    the 3 and 5 of Copas. They form a straight with the 4 Copas
                    Bunot (+60¢).
                  </p>
                </div>

                <div
                  className={`flex gap-4 p-4 rounded-xl transition-all duration-300 ${hoveredStep === 2 ? "bg-white/10 ring-1 ring-white/20" : "bg-transparent"}`}
                  onMouseEnter={() => setHoveredStep(2)}
                  onMouseLeave={() => setHoveredStep(null)}
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-bold text-white text-xs transition-transform duration-300"
                    style={{
                      transform: hoveredStep === 2 ? "scale(1.2)" : "scale(1)",
                      backgroundColor: hoveredStep === 2 ? RED : "#44403c",
                    }}
                  >
                    2
                  </div>
                  <p className="text-stone-300 text-sm leading-relaxed">
                    Check for <strong>Sowee Bonus</strong>: The sowee is the 5
                    of Espadas. You hold the 3 and 4 of Espadas, forming a
                    straight with it (+70¢).
                  </p>
                </div>

                <div className="flex gap-4 p-4">
                  <div className="w-8 h-8 rounded-full bg-stone-700 flex items-center justify-center shrink-0 font-bold text-white text-xs">
                    3
                  </div>
                  <p className="text-stone-300 text-sm leading-relaxed">
                    <strong>Total Reward</strong>: $1.10 (Ideal) or $0.20
                    (Basic) + Bonuses = <strong>$1.50 per opponent</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* Game State Targets */}
            <div className="flex gap-12 shrink-0">
              {/* Bunot */}
              <div className="flex flex-col items-center gap-6 p-6 bg-white/5 rounded-xl border border-white/10">
                <p className="text-[9px] font-black tracking-widest uppercase text-stone-500">
                  The Bunot
                </p>
                <div className="relative" id="bunot-card-container">
                  <CuajoCard
                    suit="Copas"
                    value="4"
                    className="!w-22 shadow-2xl ring-4 ring-[#E06A7D] ring-offset-4 ring-offset-stone-800"
                    style={getCardStyle(["bunot-bonus"], 1)}
                  />
                  <div className="absolute -bottom-2 -right-2 w-full h-full bg-stone-700 rounded-[18px] -z-10 rotate-3" />
                </div>
              </div>

              {/* Sowee */}
              <div className="flex flex-col items-center gap-6 p-6 bg-white/5 rounded-xl border border-white/10">
                <p className="text-[9px] font-black tracking-widest uppercase text-stone-500">
                  The Sowee
                </p>
                <div
                  className="relative w-28 h-36 flex items-center justify-center"
                  id="sowee-card-container"
                >
                  <div className="absolute rotate-90 translate-y-4">
                    <CuajoCard
                      suit="Espadas"
                      value="5"
                      className="!w-22 shadow-sm opacity-90 ring-1 ring-white/20"
                      style={getCardStyle(["sowee-bonus"], 2)}
                    />
                  </div>
                  <div
                    className="relative -translate-y-2"
                    style={{ zIndex: 10 }}
                  >
                    <CuajoCard
                      faceDown={true}
                      className="!w-22 shadow-2xl ring-1 ring-white/10 transition-opacity duration-300"
                      style={{ opacity: hoveredStep === 2 ? 0.1 : 1 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* The Hand Visualization */}
          <div className="pt-12 border-t border-white/10">
            <p className="text-[10px] font-black tracking-widest uppercase text-stone-500 mb-10 text-center">
              Your Complete Hand (16 Cards)
            </p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-12">
              {/* Set 1: Quarteta of 4s */}
              <div className="flex flex-col items-center gap-3">
                <div className="flex -space-x-14">
                  <CuajoCard
                    suit="Oros"
                    value="4"
                    className="!w-22 shadow-md"
                    style={getCardStyle([], null)}
                  />
                  <CuajoCard
                    suit="Bastos"
                    value="4"
                    className="!w-22 shadow-md"
                    style={getCardStyle([], null)}
                  />
                  <CuajoCard
                    suit="Espadas"
                    value="4"
                    className="!w-22 shadow-md"
                    style={getCardStyle([], null)}
                  />
                  <CuajoCard
                    suit="Copas"
                    value="4"
                    className="!w-22 ring-2 ring-[#E06A7D] shadow-xl"
                    style={getCardStyle([], null)}
                  />
                </div>
                <p className="text-[9px] font-black tracking-widest text-white uppercase">
                  Quarteta · 4s
                </p>
              </div>

              {/* Set 2: Trio 3s */}
              <div className="flex flex-col items-center gap-3">
                <div className="flex -space-x-14">
                  <CuajoCard
                    suit="Oros"
                    value="3"
                    className="!w-22 shadow-md"
                    style={getCardStyle([], null)}
                  />
                  <CuajoCard
                    suit="Bastos"
                    value="3"
                    className="!w-22 shadow-md"
                    style={getCardStyle([], null)}
                  />
                  <CuajoCard
                    suit="Copas"
                    value="3"
                    className="!w-22 ring-1 ring-[#E06A7D]/40 shadow-lg"
                    id="hand-copas-3"
                    style={getCardStyle(["bunot-bonus"], 1)}
                  />
                </div>
                <p className="text-[9px] font-black tracking-widest text-white uppercase">
                  Trio · 3s
                </p>
              </div>

              {/* Set 3: Trio 5s */}
              <div className="flex flex-col items-center gap-3">
                <div className="flex -space-x-14">
                  <CuajoCard
                    suit="Oros"
                    value="5"
                    className="!w-22 shadow-md"
                    style={getCardStyle([], null)}
                  />
                  <CuajoCard
                    suit="Bastos"
                    value="5"
                    className="!w-22 shadow-md"
                    style={getCardStyle([], null)}
                  />
                  <CuajoCard
                    suit="Copas"
                    value="5"
                    className="!w-22 ring-1 ring-[#E06A7D]/40 shadow-lg"
                    id="hand-copas-5"
                    style={getCardStyle(["bunot-bonus"], 1)}
                  />
                </div>
                <p className="text-[9px] font-black tracking-widest text-white uppercase">
                  Trio · 5s
                </p>
              </div>

              {/* Set 4: Escalera Espadas */}
              <div className="flex flex-col items-center gap-3">
                <div className="flex -space-x-14">
                  <CuajoCard
                    suit="Espadas"
                    value="3"
                    className="!w-22 shadow-md"
                    id="hand-espadas-3"
                    style={getCardStyle(["sowee-bonus"], 2)}
                  />
                  <CuajoCard
                    suit="Espadas"
                    value="4"
                    className="!w-22 shadow-md"
                    id="hand-espadas-4"
                    style={getCardStyle(["sowee-bonus"], 2)}
                  />
                  <CuajoCard
                    suit="Espadas"
                    value="5"
                    className="!w-22 ring-1 ring-white/40 shadow-lg"
                    id="hand-espadas-5"
                    style={getCardStyle([], null)}
                  />
                </div>
                <p className="text-[9px] font-black tracking-widest text-white uppercase">
                  Escalera · Espadas
                </p>
              </div>

              {/* Set 5: Trio Kings */}
              <div className="flex flex-col items-center gap-3">
                <div className="flex -space-x-14">
                  <CuajoCard
                    suit="Oros"
                    value="King"
                    className="!w-22 shadow-md"
                    style={getCardStyle([], null)}
                  />
                  <CuajoCard
                    suit="Copas"
                    value="King"
                    className="!w-22 shadow-md"
                    style={getCardStyle([], null)}
                  />
                  <CuajoCard
                    suit="Bastos"
                    value="King"
                    className="!w-22 shadow-md"
                    style={getCardStyle([], null)}
                  />
                </div>
                <p className="text-[9px] font-black tracking-widest text-white uppercase">
                  Trio · Kings
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ArrowOverlay is LAST child — renders on top of everything */}
        <ArrowOverlay RED={RED} hoveredStep={hoveredStep} />
      </div>

      {/* Special Cards Row */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-8 sm:p-10 bg-white/60 border border-stone-300 rounded-xl shadow-sm relative overflow-hidden flex flex-col justify-center">
          <div className="absolute -top-12 -right-8 opacity-10 pointer-events-none">
            <CuajoCard
              suit="Oros"
              value="King"
              className="!w-56 rotate-[15deg]"
            />
          </div>
          <div className="relative z-10">
            <p className="text-[10px] font-black tracking-[0.2em] uppercase mb-3 text-stone-500">
              Special Cards
            </p>
            <h4 className="text-3xl font-serif italic mb-4 text-stone-800">
              Kings (Haris)
            </h4>
            <p className="text-sm text-stone-600 leading-relaxed mb-8">
              Kings have special importance in cuajo. They carry automatic
              payouts at the end of the game and cannot be discarded.
            </p>
            <div className="grid grid-cols-2 gap-5">
              <div className="p-5 bg-white/80 border border-stone-200 rounded-lg shadow-sm text-center flex flex-col justify-center backdrop-blur-sm">
                <p className="text-[10px] font-black tracking-widest uppercase text-stone-400 mb-2">
                  Other Haris
                </p>
                <div
                  className="text-3xl font-serif italic font-bold"
                  style={{ color: RED }}
                >
                  20¢
                </div>
                <p className="text-[9px] text-stone-400 uppercase mt-2 font-bold tracking-widest">
                  Per Card
                </p>
              </div>
              <div className="p-5 bg-white/80 border border-stone-200 rounded-lg shadow-sm text-center flex flex-col justify-center backdrop-blur-sm">
                <p className="text-[10px] font-black tracking-widest uppercase text-stone-400 mb-2">
                  Haring Oros
                </p>
                <div
                  className="text-3xl font-serif italic font-bold"
                  style={{ color: RED }}
                >
                  50¢
                </div>
                <p className="text-[9px] text-stone-400 uppercase mt-2 font-bold tracking-widest">
                  Bonus Payout
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 sm:p-10 bg-gradient-to-br from-white via-white to-amber-50 border border-amber-200 rounded-xl shadow-xl relative overflow-hidden flex flex-col justify-center group transition-all duration-500 hover:shadow-2xl hover:border-amber-300">
          {/* Decorative background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-300/20 rounded-full blur-3xl group-hover:bg-amber-300/30 transition-all duration-700 pointer-events-none -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#E06A7D]/10 rounded-full blur-3xl pointer-events-none translate-y-1/3 -translate-x-1/3" />

          <div className="relative z-10">
            <p className="text-[10px] font-black tracking-[0.2em] uppercase mb-3 text-[#E06A7D]">
              Super Rare Win
            </p>
            <h4 className="text-4xl font-serif italic mb-4 text-[#E06A7D]">
              Porbis
            </h4>
            <p className="text-stone-600 text-sm leading-relaxed mb-8">
              Awarded if you win with{" "}
              <strong className="text-stone-800">no Kings</strong> at all, or
              exactly one Hari used strictly in a special straight. This is
              incredibly rare because Kings cannot be discarded!
            </p>
            <div className="flex items-baseline gap-4 pt-6 border-t border-amber-200/50">
              <span className="text-4xl sm:text-5xl font-serif italic font-bold text-[#E06A7D]">
                $3.00
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#E06A7D]/60 font-bold max-w-[100px] leading-tight">
                From Each Opponent
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center max-w-2xl mx-auto px-4">
        <p className="text-xs text-stone-500 italic leading-relaxed">
          * Note: The payment amounts and values shown in this guide are used for
          illustrative purposes. Actual betting stakes, house rules, and payouts
          may vary depending on the region or the specific group you are playing
          with. Always agree on the rules before starting a game.
        </p>
      </div>
    </section>
  );
};

export default Scoring;
