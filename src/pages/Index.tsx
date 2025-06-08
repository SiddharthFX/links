import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import ProfileHeader from '../components/ProfileHeader';
import SocialLink from '../components/SocialLink';
import EmailButton from '../components/EmailButton';
import GradientOrbs from '../components/GradientOrbs';
import StarField from '../components/StarField';

const Index = () => {
  const socialLinks = [
    {
      name: 'Twitter',
      url: 'https://x.com/Siddh_eth',
      icon: <Twitter className="w-6 h-6" />,
      delay: 200
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/siddharth-n-r-842529356/',
      icon: <Linkedin className="w-6 h-6" />,
      delay: 300
    },
    {
      name: 'GitHub',
      url: 'https://github.com/SiddharthFX',
      icon: <Github className="w-6 h-6" />,
      delay: 400
    },
    {
      name: 'Devpost',
      url: 'https://devpost.com/siddhufx7?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav',
      icon: <div className="w-6 h-6 bg-violet-600 rounded-lg flex items-center justify-center text-white text-sm font-bold shadow-lg">D</div>,
      delay: 500
    },
    {
      name: 'Devfolio',
      url: 'https://devfolio.co/@Siddhufx',
      icon: <div className="w-6 h-6 bg-blue-600 rounded-lg flex items-center justify-center text-white text-sm font-bold shadow-lg">DF</div>,
      delay: 600
    },
    {
      name: 'HackQuest',
      url: 'https://www.hackquest.io/user/215275',
      icon: <div className="w-6 h-6 bg-green-600 rounded-lg flex items-center justify-center text-white text-sm font-bold shadow-lg">HQ</div>,
      delay: 700
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-violet-50/30 relative">
      <StarField />
      <GradientOrbs />
      
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <div className="mb-24 md:mb-32">
            <ProfileHeader />
          </div>

          {/* Name and Title */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">Siddharth</h1>
            <div className="space-y-2 text-gray-600">
              <p className="text-lg md:text-xl font-medium">Blockchain & Smart Contract Dev</p>
              <p className="text-lg md:text-xl font-medium">NQ Analyst</p>
              <p className="text-lg md:text-xl font-medium">AI/ML</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="social-links-container space-y-4 md:space-y-6 mb-16">
            {socialLinks.map((link, index) => (
              <SocialLink
                key={link.name}
                name={link.name}
                url={link.url}
                icon={link.icon}
                delay={link.delay}
              />
            ))}
          </div>

          {/* Email Button */}
          <div className="flex justify-center mb-16">
            <EmailButton />
          </div>

          {/* Footer */}
          <footer className="text-center text-sm text-gray-500 animate-fade-in" style={{ animationDelay: '900ms' }}>
            <p>© Copyright reserved for siddhu.fun</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Index;
