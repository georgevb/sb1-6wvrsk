import React from 'react';

interface ROIStat {
  value: string;
  label: string;
}

interface ROIStatsProps {
  stats: ROIStat[];
}

export function ROIStats({ stats }: ROIStatsProps) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="card text-center group">
          <div className="text-3xl font-bold text-mint-green mb-3 group-hover:scale-110 transition-transform">
            {stat.value}
          </div>
          <div className="text-off-white/80">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}