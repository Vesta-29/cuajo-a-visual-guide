import React from 'react';
import SectionHeader from './SectionHeader';

const Introduction = () => {
  return (
    <section id="section-00" className="mb-32 scroll-mt-24">
      <SectionHeader 
        section="00 — Introduction"
        title="Asian Roots, Spanish Design"
        subtitle="The historical background of Cuajo."
      />

      <div className="bg-white/40 p-8 md:p-12 rounded-lg border border-stone-300 shadow-sm backdrop-blur-sm">
        <p className="text-lg md:text-xl text-stone-700 leading-relaxed font-serif">
          Cuajo is a game of the rummy family played in the Philippines. Although the cards used are of Spanish design, the game shows signs of being of Asian origin—specifically its relationship to Chinese cards and games. This manual follows the definitive rules for the 112-card "Cuajo Filipino" variant.
        </p>
      </div>
    </section>
  );
};

export default Introduction;
