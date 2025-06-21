import React from 'react';
import { Github, Linkedin, Twitter, ExternalLink } from 'lucide-react';
import ProfileHeader from '../components/ProfileHeader';
import SocialLink from '../components/SocialLink';
import EmailButton from '../components/EmailButton';
import GradientOrbs from '../components/GradientOrbs';
import StarField from '../components/StarField';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';

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

          {/* About Section */}
          <AboutSection />

          {/* Skills Section */}
          <SkillsSection />

          {/* Connections Heading */}
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">Connections</h2>

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

          {/* Projects Section */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">Projects</h2>
            <div className="social-links-container space-y-4 md:space-y-6">
              <a
                href="https://medask-frontend-225915814557.us-central1.run.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link group block w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:bg-white/20 animate-fade-in"
                style={{ animationDelay: '800ms' }}
              >
                <div className="flex flex-col space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300">
                        <div className="w-10 h-10 rounded-full shadow-lg bg-white flex items-center justify-center">
                          <img src="/medask-logo.png" alt="Medask AI Logo" className="w-8 h-8 object-contain" />
                        </div>
                      </div>
                      <span className="text-lg md:text-xl font-medium text-gray-800 group-hover:text-violet-700 transition-colors duration-300">Medask AI</span>
                    </div>
                    <div className="text-gray-400 group-hover:text-violet-500 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-12">
                      <ExternalLink className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 font-medium">An AI Powered Health Companion</p>
                  <p className="text-sm text-gray-500">MedaskAI is a modern AI-driven healthcare platform built using Google Cloud, Gemini AI, and MongoDB Atlas. It empowers users to understand prescriptions, explore natural remedies, ask health-related questions, and maintain a personal health journal.</p>
                </div>
              </a>

              {/* Auditlink AI Project Card */}
              <a
                href="https://auditlinkai.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link group block w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:bg-white/20 animate-fade-in"
                style={{ animationDelay: '900ms' }}
              >
                <div className="flex flex-col space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300">
                        <div className="w-10 h-10 rounded-full shadow-lg bg-white flex items-center justify-center">
                          <img src="/auditlink-logo.png" alt="Auditlink AI Logo" className="w-8 h-8 object-contain" />
                        </div>
                      </div>
                      <span className="text-lg md:text-xl font-medium text-gray-800 group-hover:text-violet-700 transition-colors duration-300">Auditlink AI</span>
                    </div>
                    <div className="text-gray-400 group-hover:text-violet-500 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-12">
                      <ExternalLink className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 font-medium">An AI-Powered Smart Contract Auditor</p>
                  <p className="text-sm text-gray-500">Auditlink AI is a next-gen smart contract auditing platform powered by Chainlink Functions and Gemini AI. It allows users to enter any contract address, fetch verified source code from Etherscan, and instantly receive an AI-audited security score with issue insights. Audit badges can be minted as NFTs, bringing transparency, trust, and verifiable security to the Web3 space.</p>
                </div>
              </a>
            </div>
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
