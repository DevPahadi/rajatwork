
import React, { useMemo } from 'react';

const StarField = () => {
  const stars = useMemo(() => 
    Array.from({ length: 150 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 2,
    })), []
  );

  const shootingStars = useMemo(() =>
    Array.from({ length: 3 }, (_, i) => ({
      id: i,
      top: Math.random() * 50,
      left: Math.random() * 50 + 50,
      delay: i * 4 + Math.random() * 2,
    })), []
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-foreground/80 animate-twinkle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}
      
      {/* Shooting stars */}
      {shootingStars.map((meteor) => (
        <div
          key={`meteor-${meteor.id}`}
          className="absolute animate-meteor"
          style={{
            top: `${meteor.top}%`,
            left: `${meteor.left}%`,
            animationDelay: `${meteor.delay}s`,
            animationDuration: '3s',
            animationIterationCount: 'infinite',
          }}
        >
          <div className="w-[1px] h-20 bg-gradient-to-b from-primary via-secondary to-transparent rotate-[215deg]" />
        </div>
      ))}

      {/* Nebula blurs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-[100px]" />
      <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-accent/3 rounded-full blur-[80px]" />
    </div>
  );
};

export default StarField;
