import React from 'react';

const SectionHeader = ({ section, title, subtitle }) => (
  <div className="mb-12 pt-16 border-t border-stone-300">
    <p className="text-[14px] font-sans font-black tracking-[0.2em] uppercase mb-3" style={{ color: '#E06A7D' }}>Section {section}</p>
    <h2 className="italic text-stone-800 mb-6">{title}</h2>
    {subtitle && <p className="text-lg md:text-xl text-stone-600 max-w-4xl leading-relaxed">{subtitle}</p>}
  </div>
);

export default SectionHeader;
