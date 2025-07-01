import Layout from '../components/Layout';
import Breadcrumb from '../components/Breadcrumb';

const capitalMarketsUseCases = [
  {
    id: 'genai-revolution',
    title: 'The Generative AI Revolution in Capital Markets',
    description: 'Explore how generative AI is poised to transform the capital markets industry, enhancing efficiency and decision-making processes.',
    url: 'https://capitalmarketsblog.accenture.com/generative-ai-revolution-capital-markets',
  },
  {
    id: 'wealth-management-genai',
    title: 'Powering Wealth Management with Generative AI',
    description: 'Discover how generative AI is revolutionizing wealth management by delivering personalized services and building client trust.',
    url: 'https://www.accenture.com/ca-en/insights/capital-markets/gen-ai-power-growth-wealth-managers',
  },
  {
    id: 'future-of-work',
    title: 'How Generative AI Will Change the Nature of Work in Capital Markets',
    description: 'Understand the impact of generative AI on the workforce in capital markets, including the evolution of roles and skills.',
    url: 'https://capitalmarketsblog.accenture.com/how-generative-ai-will-change-the-nature-of-work-in-capital-markets',
  },
  {
    id: 'ai-wealth-management',
    title: 'AI in Wealth Management: All Systems Go',
    description: 'Learn about the adoption of AI in wealth management and its implications for financial advisors and firms.',
    url: 'https://www.accenture.com/ca-en/insights/capital-markets/wealth-management-artificial-intelligence-all-systems-go',
  },
  {
    id: 'genai-opportunity-canada',
    title: 'Canada’s Generative AI Opportunity',
    description: 'Examine the potential economic impact of generative AI in Canada and strategies for responsible adoption.',
    url: 'https://www.microsoft.com/en-us/industry/microsoft-in-business/wp-content/uploads/sites/28/2024/06/Canadas-Generative-AI-Opportunity-White-Paper-FINAL-English.pdf',
  },
];

export default function CapitalMarketsCanada() {
  return (
    <Layout>
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb segments={[
            { label: 'Industries', href: '/industries' },
            { label: 'Capital Markets' },
            { label: 'Canada' }
          ]} />
          <h1 className="text-3xl font-bold text-brand-dark mb-6">Capital Markets & AI in Canada</h1>
          <p className="text-brand-gray mb-10 text-sm max-w-3xl">
            Discover how Canadian capital markets are leveraging generative AI to transform operations, enhance client experiences, and drive innovation.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {capitalMarketsUseCases.map((item) => (
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
