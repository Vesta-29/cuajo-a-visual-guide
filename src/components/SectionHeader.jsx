import React from 'react';

const SectionHeader = ({ section, title, subtitle }) => (
  <div className="mb-12 pt-16 border-t border-stone-300 first:border-0 first:pt-0">
    <p className="text-[10px] font-sans font-black tracking-[0.2em] text-stone-400 uppercase mb-3">Section {section}</p>
    <h2 className="text-4xl md:text-5xl font-serif font-bold italic text-stone-800 mb-6 tracking-tight">{title}</h2>
    {subtitle && <p className="text-base text-stone-600 max-w-2xl leading-relaxed">{subtitle}</p>}
  </div>
);

export default SectionHeader;
