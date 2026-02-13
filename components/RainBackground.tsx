import React, { useMemo } from 'react';

export const RainBackground: React.FC = () => {
  const drops = useMemo(() => {
    // Generate drops with random properties
    // Since drops slant to the right (rotate -45deg, move translate(80vh, 120vh)), 
    // we need to start them further left to cover the screen.
    return Array.from({ length: 80 }).map((_, i) => ({
      id: i,
      left: Math.random() * 140 - 40, // Range from -40% to 100%
      delay: Math.random() * 20,
      duration: 8 + Math.random() * 12, // Slow motion: 8s to 20s
      length: 40 + Math.random() * 40, 
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden select-none h-screen w-screen">
      {drops.map((drop) => (
        <div
          key={drop.id}
          className="absolute w-[1px] bg-gradient-to-b from-transparent to-slate-800 rounded-full animate-rainfall"
          style={{
            left: `${drop.left}%`,
            top: `-${drop.length}px`, 
            height: `${drop.length}px`,
            animationDelay: `-${drop.delay}s`, 
            animationDuration: `${drop.duration}s`,
            transform: 'rotate(-45deg)',
          }}
        />
      ))}
    </div>
  );
};