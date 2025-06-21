import React from 'react';
import { Brain, Code, Database, Zap, Sparkles, Target, Rocket } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    { icon: <Brain className="w-5 h-5" />, label: 'AI/ML' },
    { icon: <Code className="w-5 h-5" />, label: 'Smart Contracts' },
    { icon: <Database className="w-5 h-5" />, label: 'Blockchain' },
    { icon: <Zap className="w-5 h-5" />, label: 'DeFi' },
  ];

  const highlights = [
    { icon: <Target className="w-4 h-4" />, text: 'Web3 Solutions' },
    { icon: <Rocket className="w-4 h-4" />, text: 'Innovation Focus' },
    { icon: <Sparkles className="w-4 h-4" />, text: 'Continuous Learning' },
  ];

  return (
    <div className="mb-16 animate-fade-in" style={{ animationDelay: '400ms' }}>
      <div className="bg-white/60 backdrop-blur-xl border border-white/30 rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.01]">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-600 mx-auto rounded-full shadow-lg"></div>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            {/* About Text */}
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg md:text-xl text-center max-w-4xl mx-auto">
                I'm <span className="font-bold text-violet-700 bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">Siddharth N.R</span>, an undergraduate student pursuing a degree in <span className="font-semibold text-violet-700">Artificial Intelligence and Data Science</span>. I have a strong interest in blockchain development, with a focus on smart contracts, DeFi, and decentralized applications.
              </p>
              
              <p className="text-gray-700 leading-relaxed text-lg md:text-xl text-center max-w-4xl mx-auto">
                My goal is to contribute to innovative <span className="font-semibold text-violet-700">Web3 solutions</span> by combining my academic background with hands-on experience in Solidity, Chainlink, and emerging blockchain technologies.
              </p>
              
              <p className="text-gray-700 leading-relaxed text-lg md:text-xl text-center max-w-4xl mx-auto">
                I'm passionate about <span className="font-semibold text-violet-700">continuous learning</span>, building applications, and staying at the forefront of the decentralized future.
              </p>
            </div>

            {/* Highlights Row */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 pt-4">
              {highlights.map((highlight, index) => (
                <div 
                  key={highlight.text}
                  className="flex items-center space-x-2 bg-gradient-to-r from-violet-50 to-purple-50 backdrop-blur-sm rounded-2xl px-4 py-3 border border-violet-200/50 hover:from-violet-100 hover:to-purple-100 transition-all duration-300 hover:scale-105 shadow-sm"
                  style={{ animationDelay: `${600 + index * 100}ms` }}
                >
                  <div className="text-violet-600">
                    {highlight.icon}
                  </div>
                  <span className="text-sm md:text-base font-semibold text-gray-700">{highlight.text}</span>
                </div>
              ))}
            </div>

            {/* Skills Grid */}
            <div className="pt-6">
              <h3 className="text-lg md:text-xl font-bold text-center text-gray-800 mb-4">Core Focus Areas</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-2xl mx-auto">
                {skills.map((skill, index) => (
                  <div 
                    key={skill.label}
                    className="group flex flex-col items-center space-y-2 bg-white/70 backdrop-blur-sm rounded-xl p-3 md:p-4 border border-white/40 hover:bg-white/90 hover:border-violet-200 transition-all duration-300 hover:scale-105 hover:shadow-md"
                    style={{ animationDelay: `${800 + index * 150}ms` }}
                  >
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:scale-110">
                      <div className="text-white">
                        {skill.icon}
                      </div>
                    </div>
                    <span className="text-xs md:text-sm font-medium text-gray-700 text-center">{skill.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Accent */}
          <div className="mt-10 pt-8 border-t border-white/30">
            <div className="flex items-center justify-center space-x-3 text-sm md:text-base text-gray-600">
              <div className="w-2 h-2 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full animate-pulse"></div>
              <span className="font-semibold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">Building the future of decentralized technology</span>
              <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection; 