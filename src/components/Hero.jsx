import React from 'react';

const cardImages = import.meta.glob('../public/images/cuajoCards/**/*.png', { eager: true, import: 'default' });

const KINGS = [
  {
    id: 'clubs',
    src: cardImages['../public/images/cuajoCards/D/D12.png'],
    alt: 'King of Bastos',
    rotation: -30,
    zIndex: 1,
    offsetX: '-55px',
  },
  {
    id: 'swords',
    src: cardImages['../public/images/cuajoCards/B/B12.png'],
    alt: 'King of Espadas',
    rotation: -12,
    zIndex: 2,
    offsetX: '-18px',
  },
  {
    id: 'coins',
    src: cardImages['../public/images/cuajoCards/C/C12.png'],
    alt: 'King of Oros',
    rotation: 6,
    zIndex: 3,
    offsetX: '18px',
  },
  {
    id: 'cups',
    src: cardImages['../public/images/cuajoCards/A/A12.png'],
    alt: 'King of Copas',
    rotation: 20,
    zIndex: 4,
    offsetX: '55px',
  },
];

const KingCard = ({ src, alt, rotation, zIndex, offsetX }) => (
  <div
    style={{
      position: 'absolute',
      bottom: 0,
      left: '50%',
      transform: `translateX(calc(-50% + ${offsetX})) rotate(${rotation}deg)`,
      transformOrigin: 'bottom center',
      zIndex,
      width: '160px',
    }}
  >
    {/* Red outer border frame */}
    <div
      style={{
        padding: '5px',
        background: 'linear-gradient(145deg, #fdf8f2, #f5ede0)',
        border: '2.5px solid #c0392b',
        borderRadius: '12px',
        boxShadow:
          zIndex === 4
            ? '0 20px 50px rgba(0,0,0,0.35), 0 4px 12px rgba(192,57,43,0.2)'
            : `0 ${4 + zIndex * 2}px ${16 + zIndex * 4}px rgba(0,0,0,0.18)`,
      }}
    >
      {/* Inner dashed accent border */}
      <div
        style={{
          border: '1.5px dashed rgba(192,57,43,0.4)',
          borderRadius: '8px',
          overflow: 'hidden',
          lineHeight: 0,
        }}
      >
        <img
          src={src}
          alt={alt}
          style={{
            width: '100%',
            display: 'block',
            objectFit: 'cover',
          }}
        />
      </div>
    </div>
  </div>
);

const Hero = () => {
  return (
    <section className="mb-16">
      <div className="flex flex-col md:flex-row justify-between items-center gap-1 w-full">
        <div className="flex-[0.8] max-w-2xl">
          <p className="text-[10px] font-black tracking-[0.3em] text-stone-500 uppercase mb-5">Heritage of the Philippines</p>
          <h1 className="leading-tight text-stone-800 mb-8 tracking-tighter ">
            Learn <span className="italic" style={{ color: '#E06A7D' }}>Cuajo </span> <br />
            A Digital <span style={{ color: '#E06A7D' }}>Manual</span>
            
          </h1>
          <div className="flex flex-wrap gap-10 mt-16 pb-8">
            <div>
              <span className="block text-4xl font-serif font-bold italic text-stone-800">112</span>
              <span className="text-[9px] font-black uppercase tracking-widest text-stone-400">Cards</span>
            </div>
            <div>
              <span className="block text-4xl font-serif font-bold italic text-stone-800">16</span>
              <span className="text-[9px] font-black uppercase tracking-widest text-stone-400">Winning Hand</span>
            </div>
            <div>
              <span className="block text-4xl font-serif font-bold italic text-stone-800">4</span>
              <span className="text-[9px] font-black uppercase tracking-widest text-stone-400">Players</span>
            </div>
          </div>
        </div>

        {/* Fanned King Cards */}
        <div
          className="relative hidden md:block shrink-0"
          style={{ width: '350px', height: '200px', margin: '0 auto' }}
        >
          {KINGS.map((king) => (
            <KingCard key={king.id} {...king} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
