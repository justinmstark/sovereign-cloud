import { useParams, useLocation, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Breadcrumb from '../components/Breadcrumb';

const researchItems = [
  {
    id: 'pulse-of-change',
    title: 'Pulse of Change 2024',
    description: 'Explore the latest macroeconomic forces, tech disruptions, and leadership insights shaping transformation.',
    url: 'https://www.accenture.com/us-en/insights/pulse-of-change',
  },
  {
    id: 'tariff-landscape',
    title: 'Navigating the New Tariff Landscape',
    description: 'Unpack the economic impacts of tariffs and how to build resilience through strategy.',
    url: 'https://www.accenture.com/us-en/insights/strategy/navigating-new-tariff-landscape-economic-impact',
  },
  {
    id: 'total-reinvention',
    title: 'Total Enterprise Reinvention',
    description: 'A playbook for bold, continuous reinvention to drive growth, performance, and value.',
    url: 'https://www.accenture.com/us-en/insights/consulting/total-enterprise-reinvention',
  },
  {
    id: 'genai-reinvention',
    title: 'Making Reinvention Real with Gen AI',
    description: 'Harness generative AI to fuel real-world transformation across industries.',
    url: 'https://www.accenture.com/us-en/insights/consulting/making-reinvention-real-with-gen-ai',
  },
  {
    id: 'genai-enterprise',
    title: 'Gen AI: Reinventing Enterprise Models',
    description: 'Transform business models and strategies through enterprise-grade Gen AI.',
    url: 'https://www.accenture.com/us-en/insights/consulting/gen-ai-reinventing-enterprise-models',
  },
  {
    id: 'change-reinvented-1',
    title: 'Change Reinvented (Part 1)',
    description: 'Discover how change management is evolving in the era of reinvention.',
    url: 'https://www.accenture.com/us-en/insights/consulting/change-reinvented',
  },
  {
    id: 'change-reinvented-2',
    title: 'Change Reinvented (Part 2)',
    description: 'Further insights into how organizations can sustain transformation with agility.',
    url: 'https://www.accenture.com/us-en/insights/consulting/change-reinvented',
  },
];

export default function Research({ embedded = false }: { embedded?: boolean }) {
  const { id } = useParams();
  const selected = researchItems.find((r) => r.id === id);

  // Only wrap in Layout if standalone
  const Wrapper = embedded ? 'div' : Layout;

  return (
    <Wrapper>
      <section className="py-0 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {!embedded && <Breadcrumb segments={[{ label: 'Research' }]} />}
          {!embedded && <h1 className="text-3xl font-bold text-brand-dark mb-6">Latest Research</h1>}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {researchItems.map((item) => (
              <div
                key={item.id}
                className="bg-brand-light border rounded-xl shadow-card hover:shadow-cardHover p-6 flex flex-col justify-between"
              >
                <div>
                  <h2 className="text-lg font-semibold text-brand-purple mb-2">{item.title}</h2>
                  <p className="text-sm text-brand-gray mb-4">{item.description}</p>
                </div>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-accent hover:bg-brand-accentDark text-white text-sm font-semibold py-2 px-4 rounded text-center"
                >
                  Read More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
