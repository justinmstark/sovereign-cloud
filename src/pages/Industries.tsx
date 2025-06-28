// src/pages/Industries.tsx
import { useState } from 'react';
import { LucideIcon, Plane, Banknote, Building2 } from 'lucide-react';

const industries: { name: string; icon?: LucideIcon; link?: string }[] = [
  { name: 'Aerospace and Defense', icon: Plane },
  { name: 'Automotive', icon: Building2 },
  { name: 'Banking', icon: Banknote, link: 'https://ainavigator.accenture.com/reinvent/Banking' },
  { name: 'Capital Markets' },
  { name: 'Chemicals' },
  { name: 'Communications and Media' },
  { name: 'Consumer Goods and Services' },
  { name: 'Energy' },
  { name: 'Health' },
  { name: 'High Tech' },
  { name: 'Industrial' },
  { name: 'Insurance' },
  { name: 'Life Sciences' },
  { name: 'Natural Resources' },
  { name: 'Public Service' },
  { name: 'Retail' },
  { name: 'Software and Platforms' },
  { name: 'Travel' },
  { name: 'Utilities' }
];

export default function Industries() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="py-16 px-6 min-h-screen bg-gradient-to-b from-purple-900 to-purple-600 text-white">
      <h1 className="text-3xl font-bold text-center mb-10">Select Industry</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
        {industries.map((industry, idx) => {
          const isActive = selected === industry.name;
          const Icon = industry.icon || Plane;

          const content = (
            <div
              className={`rounded-xl px-4 py-6 text-center transition border cursor-pointer
                ${isActive ? 'bg-purple-400 text-white border-white' : 'bg-purple-700 text-white border-purple-600 hover:bg-purple-500'}`}
            >
              <div className="flex flex-col items-center space-y-2">
                <Icon className="w-6 h-6" />
                <span className="text-sm font-medium leading-tight">
                  {industry.name}
                </span>
              </div>
            </div>
          );

          return industry.link ? (
            <a
              key={idx}
              href={industry.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {content}
            </a>
          ) : (
            <div key={idx} onClick={() => setSelected(industry.name)}>
              {content}
            </div>
          );
        })}
      </div>
    </section>
  );
}
