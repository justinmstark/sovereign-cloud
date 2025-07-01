import Layout from '../components/Layout';
import Breadcrumb from '../components/Breadcrumb';

const chemicalsUseCases = [
  {
    id: 'reinventing-innovation',
    title: 'Reinventing Innovation for Chemical R&D',
    description: 'Explore how digital technologies and generative AI are revolutionizing chemical research and development, driving new levels of innovation.',
    url: 'https://www.accenture.com/ca-en/blogs/chemicals/reinventing-innovation-chemical-research-development',
  },
  {
    id: 'ai-blockchain-chemicals',
    title: 'AI and Blockchain in the Chemical Industry',
    description: 'Understand how AI and blockchain are disrupting the chemical industry and providing critical insights for maximizing opportunities.',
    url: 'https://www.accenture.com/ca-en/insights/chemicals/ai-blockchain-chemical-industry',
  },
  {
    id: 'future-demand-chemicals',
    title: 'Future Demand: Chemical Growth Opportunities',
    description: 'Learn how a major chemical producer used generative AI to streamline patent analyses, leading to more effective intellectual property filings and reduced product lead times.',
    url: 'https://www.accenture.com/us-en/insights/chemicals/future-demand-opportunities-chemicals-capture-growth',
  },
  {
    id: 'generative-ai-technology',
    title: 'Generative AI Technology in Business',
    description: 'Explore the potential of generative AI technology and its applications in business, and how it can reinvent work.',
    url: 'https://www.accenture.com/ca-en/insights/technology/generative-ai',
  },
  {
    id: 'canada-genai-opportunity',
    title: 'Canada’s Generative AI Opportunity',
    description: 'Examine the potential economic impact of generative AI in Canada and strategies for responsible adoption.',
    url: 'https://www.microsoft.com/en-us/industry/microsoft-in-business/wp-content/uploads/sites/28/2024/06/Canadas-Generative-AI-Opportunity-White-Paper-FINAL-English.pdf',
  },
];

export default function ChemicalsCanada() {
  return (
    <Layout>
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb segments={[
            { label: 'Industries', href: '/industries' },
            { label: 'Chemicals' },
            { label: 'Canada' }
          ]} />
          <h1 className="text-3xl font-bold text-brand-dark mb-6">Chemicals & AI in Canada</h1>
          <p className="text-brand-gray mb-10 text-sm max-w-3xl">
            Discover how Canadian chemical companies are leveraging generative AI and advanced technologies to transform operations, enhance research and development, and drive innovation.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {chemicalsUseCases.map((item) => (
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
