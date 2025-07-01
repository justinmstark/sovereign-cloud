import Layout from '../components/Layout';
import Breadcrumb from '../components/Breadcrumb';

const energyUseCases = [
  {
    id: 'genai-natural-gas',
    title: 'Gen AI: Unlocking Natural Gas’s Full Potential',
    description: 'Explore how generative AI enhances productivity and responsiveness across the natural gas supply chain, enabling real-time market adaptation.',
    url: 'https://www.accenture.com/ca-en/blogs/energy/gen-ai-key-unlocking-natural-gas-full-potential',
  },
  {
    id: 'powering-sustainable-ai',
    title: 'Powering Sustainable AI',
    description: 'Discover strategies to balance AI growth with environmental responsibility, focusing on energy efficiency and sustainability.',
    url: 'https://www.accenture.com/ca-en/insights/sustainability/powering-sustainable-ai',
  },
  {
    id: 'duke-energy-ai',
    title: 'Duke Energy’s AI Methane Detection Platform',
    description: 'Learn how Duke Energy leverages AI for real-time methane leak detection, reducing emissions and enhancing operational resilience.',
    url: 'https://www.accenture.com/ca-en/case-studies/utilities/duke-energy-powers-ai-platform',
  },
  {
    id: 'technology-vision-2025',
    title: 'Accenture’s 2025 Technology Vision',
    description: 'Understand how AI agents are transforming the energy sector, driving innovations in real-time management and predictive maintenance.',
    url: 'https://www.accenture.com/us-en/blogs/energy/technology-vision-2025-harnessing-ai-transformative-power-energy-sector',
  },
  {
    id: 'making-genai-green',
    title: 'How Do We Make Generative AI Green?',
    description: 'Examine approaches to reduce the carbon footprint of generative AI, ensuring sustainable development in the energy industry.',
    url: 'https://www.accenture.com/ca-en/blogs/consulting/making-generative-ai-green',
  },
  {
    id: 'upstream-energy',
    title: 'Upstream Energy: Digital Transformation',
    description: 'Discover how upstream energy companies are leveraging digital transformation, AI, and sustainability initiatives to optimize operations.',
    url: 'https://www.accenture.com/ca-en/industries/energy/upstream',
  },
];

export default function EnergyCanada() {
  return (
    <Layout>
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb segments={[
            { label: 'Industries', href: '/industries' },
            { label: 'Energy' },
            { label: 'Canada' }
          ]} />
          <h1 className="text-3xl font-bold text-brand-dark mb-6">Energy & AI in Canada</h1>
          <p className="text-brand-gray mb-10 text-sm max-w-3xl">
            Discover how Canadian energy companies are leveraging generative AI and advanced technologies to transform operations, enhance sustainability, and drive innovation.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {energyUseCases.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-light border rounded-xl shadow-card hover:shadow-cardHover p-6 flex flex-col justify-between transition text-center"
              >
                <div>
                  <h2 className="text-lg font-semibold text-brand-purple mb-2">{item.title}</h2>
                  <p className="text-sm text-brand-gray mb-4">{item.description}</p>
                </div>
                <div className="mt-auto text-brand-accent font-semibold text-sm underline">
                  Learn More
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
