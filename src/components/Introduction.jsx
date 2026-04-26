import React from 'react';
import SectionHeader from './SectionHeader';

const Introduction = () => {
  return (
    <section id="section-00" className="mb-16 scroll-mt-24">
      <SectionHeader 
        section="00 — Introduction"
        title="Asian Roots, Spanish Design"
        subtitle="The historical background of Cuajo."
      />

      <div className="bg-white/40 p-6 sm:p-8 md:p-12 lg:p-14 xl:p-16 rounded-lg border border-stone-300 shadow-sm backdrop-blur-sm">
        <div className="space-y-6 text-stone-600 leading-relaxed text-sm sm:text-base md:text-lg">
          <p>
            Cuajo (also spelled <strong>kwaho</strong>) is a rummy-style card game from the Philippines, closely related to mahjong but with its own distinct mechanics and deck. It is especially popular in Pampanga and nearby areas, where it remains a part of local card-playing culture.
          </p>
          <p>
            Despite its Spanish name, cuajo has roots in older Chinese card games such as <strong>kanhu</strong>. During the 1500s, Spanish colonial rule placed strict control over playing cards in the Philippines, banning foreign decks like Chinese cards. 
          </p>
          <p>
            This led to two key adaptations: mahjong and dominoes shifted to tile-based play, while other games—including early forms of cuajo—were reworked to use <strong>Spanish-suited cards</strong> instead of their original Chinese four-color decks.
          </p>
          <p className="text-stone-500 italic text-base md:text-lg">
            Today, cuajo is most commonly played with Spanish-suited cards, though it can also be adapted to standard French-suited decks.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
