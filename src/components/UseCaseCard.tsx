import React from 'react';

interface UseCase {
  title: string;
  challenge: string;
  solution: string;
  result: string;
}

export function UseCaseCard({ title, challenge, solution, result }: UseCase) {
  return (
    <div className="card">
      <h3 className="text-xl font-bold text-gold mb-6">{title}</h3>
      <div className="space-y-4">
        <div>
          <div className="text-mint-green font-semibold mb-1">Challenge</div>
          <div className="text-off-white/80">{challenge}</div>
        </div>
        <div>
          <div className="text-mint-green font-semibold mb-1">Oplossing</div>
          <div className="text-off-white/80">{solution}</div>
        </div>
        <div>
          <div className="text-mint-green font-semibold mb-1">Resultaat</div>
          <div className="text-off-white/80">{result}</div>
        </div>
      </div>
    </div>
  );
}