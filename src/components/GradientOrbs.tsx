import React from 'react';

const GradientOrbs = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Large orb - top right with floating animation */}
      <div className="absolute -top-20 -right-20 w-[200px] h-[200px] md:w-[500px] md:h-[500px] bg-gradient-to-br from-violet-300/30 to-purple-400/30 rounded-full blur-2xl animate-float"></div>
      
      {/* Medium orb - bottom left with floating animation */}
      <div className="absolute -bottom-32 -left-32 w-[160px] h-[160px] md:w-[400px] md:h-[400px] bg-gradient-to-tr from-violet-200/25 to-purple-300/25 rounded-full blur-2xl animate-float-delayed"></div>
      
      {/* Small orb - center right with floating animation */}
      <div className="absolute top-1/2 -right-16 w-[120px] h-[120px] md:w-[300px] md:h-[300px] bg-gradient-to-bl from-violet-400/20 to-purple-500/20 rounded-full blur-2xl animate-float-slow"></div>

      {/* Additional orb - center left */}
      <div className="absolute top-1/3 -left-16 w-[140px] h-[140px] md:w-[350px] md:h-[350px] bg-gradient-to-br from-blue-300/20 to-indigo-400/20 rounded-full blur-2xl animate-float-delayed"></div>
    </div>
  );
};

export default GradientOrbs;
