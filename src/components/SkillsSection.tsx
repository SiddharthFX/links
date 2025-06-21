import React from 'react';
import { 
  Code, 
  Database, 
  Brain, 
  Link, 
  Zap, 
  Shield, 
  Globe, 
  Cpu, 
  GitBranch, 
  Cloud,
  Layers,
  Settings,
  Terminal,
  Sparkles,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const SkillsSection = () => {
  const blockchainSkills = {
    title: "🔗 Blockchain Development",
    icon: <Link className="w-4 h-4" />,
    description: "Building decentralized applications and smart contracts",
    categories: [
      {
        name: "Languages & Frameworks",
        items: ["Solidity", "Ethers.js", "Hardhat", "Foundry"],
        icon: <Code className="w-3 h-3" />
      },
      {
        name: "Protocols & Tools",
        items: ["Chainlink", "IPFS", "OpenZeppelin", "Web3.js"],
        icon: <Shield className="w-3 h-3" />
      },
      {
        name: "Platforms",
        items: ["Ethereum", "Polygon", "Alchemy", "Metamask"],
        icon: <Globe className="w-3 h-3" />
      },
      {
        name: "Experience",
        items: ["Smart contract development", "dApp integration", "Chainlink Functions", "Testnet deployments", "Gas optimization"],
        icon: <Zap className="w-3 h-3" />
      }
    ]
  };

  const aiSkills = {
    title: "🤖 AI & Data Science",
    subtitle: "Complementary",
    description: "Leveraging AI and data for intelligent solutions",
    icon: <Brain className="w-4 h-4" />,
    categories: [
      {
        name: "Languages & Libraries",
        items: ["Python", "Pandas", "NumPy"],
        icon: <Terminal className="w-3 h-3" />
      },
      {
        name: "Core Skills",
        items: ["Data Analysis", "AI model integration (OpenAI, Gemini)", "ML fundamentals"],
        icon: <Cpu className="w-3 h-3" />
      },
      {
        name: "Use Cases",
        items: ["AI-powered applications building", "Prompt engineering"],
        icon: <Sparkles className="w-3 h-3" />
      }
    ]
  };

  const otherTech = [
    { name: "Git & GitHub", icon: <GitBranch className="w-3 h-3" />, description: "Version Control" },
    { name: "Vercel", icon: <Cloud className="w-3 h-3" />, description: "Deployment" },
    { name: "Netlify", icon: <Cloud className="w-3 h-3" />, description: "Hosting" },
    { name: "Google Cloud Platform", icon: <Cloud className="w-3 h-3" />, description: "Cloud Services" }
  ];

  return (
    <div className="mb-12 animate-fade-in" style={{ animationDelay: '600ms' }}>
      <div className="bg-white/60 backdrop-blur-xl border border-white/30 rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.01]">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-violet-50 to-indigo-50 px-4 py-2 rounded-full border border-violet-200/50 mb-4">
              <div className="w-6 h-6 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <Settings className="w-3 h-3 text-white" />
              </div>
              <span className="text-xs font-semibold text-gray-700">Technical Expertise</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">🛠 Skills & Technologies</h2>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">Comprehensive toolkit for building the future of decentralized technology</p>
            <div className="w-24 h-0.5 bg-gradient-to-r from-violet-500 via-indigo-500 to-blue-600 mx-auto rounded-full shadow-lg mt-4"></div>
          </div>

          <div className="space-y-12">
            {/* Blockchain Development */}
            <div className="space-y-6">
              <div className="text-center">
                <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-3 rounded-2xl border border-blue-200/50 shadow-md">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                    <div className="text-white">
                      {blockchainSkills.icon}
                    </div>
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-1">{blockchainSkills.title}</h3>
                    <p className="text-gray-600 font-medium text-sm">{blockchainSkills.description}</p>
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                {blockchainSkills.categories.map((category, index) => (
                  <div 
                    key={category.name}
                    className="group bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/50 hover:bg-white/90 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl relative overflow-hidden"
                    style={{ animationDelay: `${700 + index * 100}ms` }}
                  >
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 rounded-bl-full"></div>
                    <div className="relative z-10">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                          <div className="text-white">
                            {category.icon}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-gray-800 mb-1">{category.name}</h4>
                          <div className="w-12 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full"></div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {category.items.map((item, itemIndex) => (
                          <span 
                            key={item}
                            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 px-3 py-1.5 rounded-lg text-xs font-medium border border-blue-200/50 hover:from-blue-100 hover:to-indigo-100 hover:scale-105 transition-all duration-300 hover:shadow-md"
                          >
                            <CheckCircle className="w-3 h-3" />
                            <span>{item}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI & Data Science */}
            <div className="space-y-6">
              <div className="text-center">
                <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-indigo-50 to-blue-50 px-6 py-3 rounded-2xl border border-indigo-200/50 shadow-md">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                    <div className="text-white">
                      {aiSkills.icon}
                    </div>
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-1">{aiSkills.title}</h3>
                    <p className="text-gray-600 font-medium text-sm">{aiSkills.description}</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {aiSkills.categories.map((category, index) => (
                  <div 
                    key={category.name}
                    className="group bg-white/70 backdrop-blur-sm rounded-2xl p-5 border border-white/50 hover:bg-white/90 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl relative overflow-hidden"
                    style={{ animationDelay: `${900 + index * 100}ms` }}
                  >
                    <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-indigo-500/10 to-blue-600/10 rounded-bl-full"></div>
                    <div className="relative z-10">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-indigo-400 to-blue-500 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                          <div className="text-white">
                            {category.icon}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-gray-800 mb-1">{category.name}</h4>
                          <div className="w-8 h-0.5 bg-gradient-to-r from-indigo-400 to-blue-500 rounded-full"></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        {category.items.map((item, itemIndex) => (
                          <div 
                            key={item}
                            className="flex items-center space-x-2 bg-gradient-to-r from-indigo-50 to-blue-50 text-indigo-700 px-3 py-2 rounded-lg text-xs font-medium border border-indigo-200/50 hover:from-indigo-100 hover:to-blue-100 transition-all duration-300 hover:scale-105 hover:shadow-md"
                          >
                            <CheckCircle className="w-3 h-3 flex-shrink-0" />
                            <span className="leading-relaxed">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Other Technologies */}
            <div className="space-y-6">
              <div className="text-center">
                <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-emerald-50 to-green-50 px-6 py-3 rounded-2xl border border-emerald-200/50 shadow-md">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                    <div className="text-white">
                      <Layers className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-1">Other Technologies</h3>
                    <p className="text-gray-600 font-medium text-sm">Essential tools and platforms</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {otherTech.map((tech, index) => (
                  <div 
                    key={tech.name}
                    className="group bg-white/70 backdrop-blur-sm rounded-2xl p-4 border border-white/50 hover:bg-white/90 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl relative overflow-hidden text-center"
                    style={{ animationDelay: `${1100 + index * 100}ms` }}
                  >
                    <div className="absolute top-0 right-0 w-10 h-10 bg-gradient-to-br from-emerald-500/10 to-green-600/10 rounded-bl-full"></div>
                    <div className="relative z-10">
                      <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-green-500 rounded-lg flex items-center justify-center shadow-lg mx-auto mb-3 group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                        <div className="text-white">
                          {tech.icon}
                        </div>
                      </div>
                      <h4 className="text-sm font-bold text-gray-800 mb-1">{tech.name}</h4>
                      <p className="text-xs text-gray-600 font-medium">{tech.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection; 