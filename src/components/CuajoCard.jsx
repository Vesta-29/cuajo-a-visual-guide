import React from 'react';

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
      <div className={`w-12 h-20 md:w-16 md:h-24 bg-stone-800 border-2 border-stone-700 rounded shadow-md flex items-center justify-center text-white/10 ${className}`}>
        ?
      </div>
    );
  }

  return (
    <div 
      className={`relative w-12 h-20 md:w-16 md:h-24 bg-white border-2 border-stone-300 rounded shadow-sm flex flex-col justify-between p-1 md:p-2 transition-transform hover:-translate-y-1 hover:shadow-md cursor-default overflow-hidden ${disabled ? 'opacity-40 grayscale' : ''} ${className}`}
    >
      {imageUrl ? (
        <img 
          src={imageUrl} 
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
