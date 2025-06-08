
import React from 'react';

const StarField = () => {
  const stars = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 3 + Math.random() * 2,
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute w-1 h-1 bg-violet-400 rounded-full opacity-60 animate-bounce"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
            boxShadow: '0 0 4px rgba(139, 92, 246, 0.6)',
          }}
        />
      ))}
    </div>
  );
};

export default StarField;
