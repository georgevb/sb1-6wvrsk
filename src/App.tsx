import React from 'react';
import { AlertCircle, Clock, TrendingUp } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PainPointCard } from './components/PainPointCard';
import { ROIStats } from './components/ROIStats';
import { UseCaseCard } from './components/UseCaseCard';
import { InteractiveFeature } from './components/InteractiveFeature';

function App() {
  const painPoints = [
    {
      icon: AlertCircle,
      title: "Verlies je het overzicht?",
      description: "Met 10+ klanten en duizenden berichten is het onmogelijk om alles handmatig te blijven beheren. AI-powered tagging zorgt dat je direct ziet welke leads aandacht nodig hebben."
    },
    {
      icon: Clock,
      title: "Te veel tijd kwijt aan checks?",
      description: "Stop met urenlang scrollen door LinkedIn inboxen. Onze automation tools beheren alle gesprekken en sturen je alleen alerts bij belangrijke updates."
    },
    {
      icon: TrendingUp,
      title: "Klaar om te groeien?",
      description: "Meer klanten betekent niet automatisch meer personeel nodig. Beheer onbeperkt aantal LinkedIn accounts vanaf één dashboard."
    }
  ];

  const roiStats = [
    {
      value: "3x",
      label: "meer klanten met hetzelfde team"
    },
    {
      value: "15 uur",
      label: "per week bespaard per account"
    },
    {
      value: "90%",
      label: "minder tijd aan rapportages"
    }
  ];

  const useCases = [
    {
      title: "Van 10 naar 30 klanten in 3 maanden zonder extra personeel",
      challenge: "Te veel handmatig werk",
      solution: "Automation + AI monitoring",
      result: "200% meer klanten, zelfde team"
    },
    {
      title: "Van chaos naar controle met 50+ klantaccounts",
      challenge: "Verlies van overzicht",
      solution: "Centraal dashboard",
      result: "40% tijdsbesparing op management"
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-16">
      <Navbar />
      <Hero onOpenDemo={() => {}} />
      
      <InteractiveFeature />

      {/* Pain Points Section */}
      <section className="py-20 bg-dark-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">Herkenbare uitdagingen?</h2>
          <p className="section-subtitle text-center">
            Veel agencies lopen tegen dezelfde problemen aan bij het schalen van hun LinkedIn services
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {painPoints.map((point, index) => (
              <PainPointCard key={index} {...point} />
            ))}
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">Wat levert het je agency op?</h2>
          <p className="section-subtitle text-center">
            Concrete resultaten van agencies die al met onze tool werken
          </p>
          <ROIStats stats={roiStats} />
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-dark-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">Agency Success Stories</h2>
          <p className="section-subtitle text-center">
            Zie hoe andere agencies hun uitdagingen hebben overwonnen
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <UseCaseCard key={index} {...useCase} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;