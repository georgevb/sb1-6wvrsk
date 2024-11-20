import React, { useState } from 'react';
import { MessageSquare, Tag, Brain, BarChart3, Search, Target, Zap } from 'lucide-react';

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
  demo: string;
}

export function InteractiveFeature() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features: Feature[] = [
    {
      icon: Search,
      title: "Search & Target",
      description: "Vind de perfecte leads met geavanceerde zoekfilters en real-time previews.",
      demo: "🎯 Zoekresultaten:\n• 2,341 potentiële leads gevonden\n• 89% match met ideale klantprofiel\n• Geschatte response rate: 42%"
    },
    {
      icon: MessageSquare,
      title: "Campaign Builder",
      description: "Creëer gepersonaliseerde campagnes met onze template bibliotheek en A/B testing.",
      demo: "📊 Campaign Performance:\n• Open rate: 82%\n• Response rate: 46%\n• Meeting conversion: 28%"
    },
    {
      icon: Brain,
      title: "Smart Follow-up",
      description: "AI-powered responses en perfect getimede follow-ups voor maximale engagement.",
      demo: "🤖 AI Suggestion:\n'Interessant om te horen over je uitdagingen met LinkedIn automation. Ik deel graag hoe andere agencies dit hebben opgelost. Wanneer past een kort gesprek?'"
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Real-time inzicht in alle campagne metrics en ROI data.",
      demo: "📈 Performance Overview:\n• Connection Rate: 76%\n• Response Rate: 42%\n• Meeting Conversion: 31%\n• ROI: 312%"
    }
  ];

  return (
    <div className="bg-dark-gray py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-gold mb-12">
          Ontdek de kracht van Linqed.io
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                    activeFeature === index
                      ? 'bg-mint-green/20 border-mint-green'
                      : 'bg-black/20 border-transparent'
                  } border hover:border-mint-green`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="flex items-center gap-4">
                    <Icon className={`w-6 h-6 ${
                      activeFeature === index ? 'text-mint-green' : 'text-white/60'
                    }`} />
                    <div>
                      <h3 className="font-semibold text-lg text-white mb-2">{feature.title}</h3>
                      <p className="text-white/60">{feature.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="bg-black p-6 rounded-xl border border-white/10">
            <div className="font-mono text-sm text-white/80 bg-black/50 p-4 rounded-lg">
              {features[activeFeature].demo.split('\n').map((line, i) => (
                <div key={i} className="mb-2">{line}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}