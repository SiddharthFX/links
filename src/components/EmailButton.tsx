
import React from 'react';
import { Mail } from 'lucide-react';

const EmailButton = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:siddhufx7@gmail.com';
  };

  return (
    <button
      onClick={handleEmailClick}
      className="group bg-gradient-to-r from-white to-violet-100 text-violet-700 px-5 py-2.5 rounded-xl font-medium hover:from-violet-50 hover:to-violet-200 hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center space-x-2 animate-fade-in shadow-lg border border-violet-300 hover:border-violet-400"
      style={{ animationDelay: '800ms' }}
    >
      <Mail className="w-4 h-4 group-hover:scale-110 transition-transform duration-300 text-violet-600" />
      <span className="text-sm font-semibold">Email Me</span>
    </button>
  );
};

export default EmailButton;
