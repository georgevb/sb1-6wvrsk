import React from 'react';
import { LucideIcon } from 'lucide-react';

interface PainPointCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function PainPointCard({
  icon: Icon,
  title,
  description,
}: PainPointCardProps) {
  return (
    <div className="card group cursor-pointer">
      <div className="bg-mint-green/10 text-mint-green p-4 rounded-lg w-fit mb-6 
                    group-hover:bg-mint-green group-hover:text-white transition-colors">
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-2xl font-bold text-gold mb-4">
        {title}
      </h3>
      <p className="text-off-white/70 text-lg leading-relaxed">
        {description}
      </p>
    </div>
  );
}