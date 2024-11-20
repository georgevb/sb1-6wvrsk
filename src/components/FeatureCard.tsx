import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  metric: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  features,
  metric,
}: FeatureCardProps) {
  return (
    <div className="card group">
      <div className="bg-mint-green/10 text-mint-green p-3 rounded-lg w-fit mb-6 
                    group-hover:bg-mint-green group-hover:text-white transition-colors">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-bold text-off-white mb-4">
        {title}
      </h3>
      <p className="text-off-white/70 mb-6">
        {description}
      </p>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-off-white/80">
            <span className="w-1.5 h-1.5 bg-mint-green rounded-full mr-2"></span>
            {feature}
          </li>
        ))}
      </ul>
      <div className="text-sm font-semibold text-mint-green">
        {metric}
      </div>
    </div>
  );
}