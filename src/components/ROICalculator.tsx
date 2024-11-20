import React, { useState, useEffect } from 'react';
import { Calculator, Clock, Users, DollarSign } from 'lucide-react';

export function ROICalculator() {
  const [accounts, setAccounts] = useState(5);
  const [hoursPerWeek, setHoursPerWeek] = useState(15);
  const [calculations, setCalculations] = useState({
    timeSaved: 0,
    extraCapacity: 0,
    costSavings: 0
  });

  useEffect(() => {
    // Calculate ROI metrics
    const timeSavedPerMonth = (hoursPerWeek * 4) * 0.7; // 70% time saving
    const extraCapacity = Math.floor(accounts * 2); // Double capacity
    const costSavings = timeSavedPerMonth * 75; // €75 per hour saved

    setCalculations({
      timeSaved: Math.round(timeSavedPerMonth),
      extraCapacity,
      costSavings: Math.round(costSavings)
    });
  }, [accounts, hoursPerWeek]);

  return (
    <div className="bg-dark-gray rounded-xl p-8 border border-white/10">
      <h3 className="text-2xl font-bold text-gold mb-6">ROI Calculator</h3>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block text-off-white mb-2">Aantal LinkedIn accounts</label>
            <input
              type="range"
              min="5"
              max="50"
              value={accounts}
              onChange={(e) => setAccounts(Number(e.target.value))}
              className="w-full h-2 bg-mint-green/20 rounded-lg appearance-none cursor-pointer"
            />
            <div className="text-mint-green font-semibold mt-2">{accounts} accounts</div>
          </div>
          <div>
            <label className="block text-off-white mb-2">Uren per week aan LinkedIn</label>
            <input
              type="range"
              min="5"
              max="40"
              value={hoursPerWeek}
              onChange={(e) => setHoursPerWeek(Number(e.target.value))}
              className="w-full h-2 bg-mint-green/20 rounded-lg appearance-none cursor-pointer"
            />
            <div className="text-mint-green font-semibold mt-2">{hoursPerWeek} uren</div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="p-4 bg-black/30 rounded-lg flex items-center gap-4">
            <Clock className="w-6 h-6 text-mint-green" />
            <div>
              <div className="text-off-white">Tijdsbesparing per maand</div>
              <div className="text-2xl font-bold text-mint-green">{calculations.timeSaved} uren</div>
            </div>
          </div>
          <div className="p-4 bg-black/30 rounded-lg flex items-center gap-4">
            <Users className="w-6 h-6 text-mint-green" />
            <div>
              <div className="text-off-white">Extra klantcapaciteit</div>
              <div className="text-2xl font-bold text-mint-green">+{calculations.extraCapacity} klanten</div>
            </div>
          </div>
          <div className="p-4 bg-black/30 rounded-lg flex items-center gap-4">
            <DollarSign className="w-6 h-6 text-mint-green" />
            <div>
              <div className="text-off-white">Kostenbesparing per maand</div>
              <div className="text-2xl font-bold text-mint-green">€{calculations.costSavings}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}