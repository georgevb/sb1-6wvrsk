import React from 'react';
import { Calendar, PlayCircle, ArrowRight, CheckCircle } from 'lucide-react';
import { ROICalculator } from './ROICalculator';

interface HeroProps {
  onOpenDemo: () => void;
}

export function Hero({ onOpenDemo }: HeroProps) {
  return (
    <header className="relative min-h-screen flex items-center overflow-hidden bg-black">
      <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-headline-lg font-bold text-[#FF8A3D] mb-6 leading-tight">
            Van LinkedIn chaos naar geautomatiseerd succes
          </h1>
          <p className="text-headline-sm text-off-white/90 mb-8 font-medium">
            De eerste LinkedIn automation tool speciaal voor agencies die klaar zijn voor de volgende stap
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={onOpenDemo}
              className="btn-primary flex items-center group"
            >
              <Calendar className="w-5 h-5 mr-2" />
              <span>Start 15-min Demo</span>
              <ArrowRight className="w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            <button className="btn-secondary flex items-center">
              <PlayCircle className="w-5 h-5 mr-2" />
              <span>Bekijk Live Demo</span>
            </button>
          </div>
          <div className="flex items-center justify-center gap-2 text-off-white/60">
            <span className="flex h-2 w-2 bg-mint-green rounded-full"></span>
            <span className="text-sm">Al in gebruik door 50+ agencies</span>
          </div>
        </div>
        
        <ROICalculator />
      </div>
    </header>
  );
}