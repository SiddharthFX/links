import React from 'react';
import { Twitter, Linkedin, Github, ExternalLink } from 'lucide-react';

interface SocialLinkProps {
  name: string;
  url: string;
  icon: React.ReactNode;
  delay: number;
}

const SocialLink: React.FC<SocialLinkProps> = ({ name, url, icon, delay }) => {
  const getIconWithColor = () => {
    if (name === 'Twitter') {
      return <Twitter className="w-6 h-6 text-blue-400" />;
    }
    if (name === 'LinkedIn') {
      return <Linkedin className="w-6 h-6 text-violet-600" />;
    }
    if (name === 'GitHub') {
      return <Github className="w-6 h-6 text-gray-900" />;
    }
    return icon;
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="social-link group block w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:bg-white/20 animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300">
            {getIconWithColor()}
          </div>
          <span className="text-lg md:text-xl font-medium text-gray-800 group-hover:text-violet-700 transition-colors duration-300">{name}</span>
        </div>
        <div className="text-gray-400 group-hover:text-violet-500 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-12">
          <ExternalLink className="w-5 h-5 md:w-6 md:h-6" />
        </div>
      </div>
    </a>
  );
};

export default SocialLink;
