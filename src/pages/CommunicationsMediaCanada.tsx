import Layout from '../components/Layout';
import Breadcrumb from '../components/Breadcrumb';

const communicationsMediaUseCases = [
  {
    id: 'data-ai-telco',
    title: 'Reinvent Your Telco Business with Data and AI',
    description: 'Explore how generative AI and data are transforming telco operations, enhancing customer experiences, and driving new growth models.',
    url: 'https://www.accenture.com/ca-en/industries/communications-media/data-ai',
  },
  {
    id: 'ai-b2c-growth',
    title: 'Empowering Loyalty: How AI Can Transform CSPs’ B2C Growth',
    description: 'Discover how AI enables seamless customer experiences and unlocks new opportunities for engagement and growth in the B2C telecom sector.',
    url: 'https://www.accenture.com/ca-en/insights/communications-media/empowering-loyalty-how-ai-transform-csps-b2c-growth',
  },
  {
    id: 'customer-engagement',
    title: 'A New Era of Customer Engagement',
    description: 'Learn how AI, data, and automation deliver personalized customer interactions, turning engagement into a platform for growth.',
    url: 'https://www.accenture.com/us-en/industries/communications-media/customer-experience',
  },
  {
    id: 'genai-studios',
    title: 'Generative AI Studios',
    description: 'Discover how Accenture’s Generative AI Studios help clients move from experimentation to scalable gen AI transformation.',
    url: 'https://www.accenture.com/ca-en/services/data-ai/generative-ai/gen-ai-studios',
  },
  {
    id: 'ai-trends-2025',
    title: 'AI-Powered Trends Reshaping Telecom in 2025',
    description: 'Understand the opportunities, challenges, and trends in the telecom industry driven by generative and agentic AI.',
    url: 'https://www.accenture.com/ca-en/blogs/communications-media/ai-driven-technology-trends-telcos-need-know-2025',
  },
];

export default function CommunicationsMediaCanada() {
  return (
    <Layout>
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb segments={[
            { label: 'Industries', href: '/industries' },
            { label: 'Communications and Media' },
            { label: 'Canada' }
          ]} />
          <h1 className="text-3xl font-bold text-brand-dark mb-6">Communications & Media AI in Canada</h1>
          <p className="text-brand-gray mb-10 text-sm max-w-3xl">
            Discover how Canadian communications and media companies are leveraging generative AI and advanced technologies to transform operations, enhance customer experiences, and drive innovation.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {communicationsMediaUseCases.map((item) => (
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
