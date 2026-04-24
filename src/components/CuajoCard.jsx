import React from 'react';

// Pre-load all card images
const cardImages = import.meta.glob('../public/images/cuajoCards/**/*.png', { eager: true, import: 'default' });

const SUIT_TO_FOLDER = {
  Copas: 'A',
  Espadas: 'B',
  Oros: 'C',
  Bastos: 'D'
};

const VALUE_TO_NUMBER = {
  Ace: '1',
  '2': '2',
  '3': '3',
  '4': '4',
  '5': '5',
  '6': '6',
  '7': '7',
  Jack: '10',
  Horse: '11',
  King: '12'
};

const CuajoCard = ({ 
  suit, 
  value, 
  className = "", 
  disabled = false, 
  imageUrl = null,
  faceDown = false 
}) => {
  const getSuitColor = () => {
    if (disabled) return 'text-stone-300';
    switch (suit) {
      case 'Oros': return 'text-amber-600';
      case 'Copas': return 'text-red-700';
      case 'Espadas': return 'text-blue-800';
      case 'Bastos': return 'text-stone-800';
      default: return 'text-stone-400';
    }
  };

  const getSuitIcon = () => {
    switch (suit) {
      case 'Oros': return '🪙';
      case 'Copas': return '🏆';
      case 'Espadas': return '⚔️';
      case 'Bastos': return '🌿';
      default: return '?';
    }
  };

  const getDisplayValue = (val) => {
    if (val === 'Ace') return 'A';
    if (val === 'Jack') return 'S'; // Sota
    if (val === 'Horse') return 'C'; // Caballo
    if (val === 'King') return 'R'; // Rey
    return val;
  };

  if (faceDown) {
    return (
      <div className={`w-20 md:w-32 aspect-[294/456] bg-stone-800 border-2 border-stone-700 rounded shadow-md flex items-center justify-center text-white/10 ${className}`}>
        ?
      </div>
    );
  }

  const folder = SUIT_TO_FOLDER[suit];
  const number = VALUE_TO_NUMBER[value];
  const imagePath = `../public/images/cuajoCards/${folder}/${folder}${number}.png`;
  const resolvedImageUrl = imageUrl || (folder && number ? cardImages[imagePath] : null);

  return (
    <div 
      className={`relative w-20 md:w-32 aspect-[294/456] rounded shadow-sm flex flex-col justify-between transition-transform hover:-translate-y-1 hover:shadow-md cursor-default overflow-hidden ${!resolvedImageUrl ? 'bg-white border-2 border-stone-300 p-1 md:p-2' : ''} ${disabled ? 'opacity-40 grayscale' : ''} ${className}`}
    >
      {resolvedImageUrl ? (
        <img 
          src={resolvedImageUrl} 
          alt={`${value} of ${suit}`} 
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      ) : (
        <>
          <div className={`text-[10px] md:text-xs font-bold leading-none ${getSuitColor()}`}>
            {getDisplayValue(value)}
          </div>
          <div className="text-xl md:text-3xl self-center">
            {getSuitIcon()}
          </div>
          <div className={`text-[10px] md:text-xs font-bold leading-none rotate-180 self-end ${getSuitColor()}`}>
            {getDisplayValue(value)}
          </div>
        </>
      )}
    </div>
  );
};

export default CuajoCard;
