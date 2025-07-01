import Layout from '../components/Layout';
import Breadcrumb from '../components/Breadcrumb';

const travelUseCases = [
  {
    id: 'transformative-power-genai-travel',
    title: 'Transformative Power of Generative AI in Travel',
    description: 'Explore how generative AI is revolutionizing travel with personalized planning, seamless booking, and innovative experiences shaping the future of tourism.',
    url: 'https://www.accenture.com/ca-en/blogs/travel/transformative-power-generative-ai-travel',
  },
  {
    id: 'travel-industry-new-trip',
    title: 'The Travel Industry’s New Trip',
    description: 'Reinvent the travel experience with AI: from planning to booking, generative AI simplifies the process for both travelers and businesses.',
    url: 'https://www.accenture.com/us-en/insights/travel/travel-industry-new-trip',
  },
  {
    id: 'post-pandemic-travel-leisure',
    title: 'Post-Pandemic Travel is Leisure',
    description: 'In a post-pandemic market, travel companies need to create and capture demand for leisure travel. Discover six key ways to achieve this.',
    url: 'https://www.accenture.com/ca-en/insights/travel/leisure-travel-industry-recovery',
  },
  {
    id: 'empowered-traveler-genai',
    title: 'Generative AI in Travel',
    description: 'Accenture explores how generative AI can help the travel industry streamline booking information, empower travelers, and boost loyalty.',
    url: 'https://www.accenture.com/ca-en/blogs/travel/empowered-traveler',
  },
  {
    id: 'changing-travel-experience',
    title: 'Travel Experience: The New Normal in Travel',
    description: 'Accenture outlines the force of change reshaping new traveler demands and critical accelerators to help the travel industry improve the travel experience.',
    url: 'https://www.accenture.com/ca-en/insights/travel/changing-travel-experience',
  },
  {
    id: 'travel-ai-maturity',
    title: 'Artificial Intelligence in Tourism & Travel Industry',
    description: 'The race to embrace AI in travel is on. Learn how travel companies can achieve AI maturity to unlock its full potential.',
    url: 'https://www.accenture.com/ca-en/insights/travel/travel-ai-maturity',
  },
];

export default function TravelCanada() {
  return (
    <Layout>
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb segments={[
            { label: 'Industries', href: '/industries' },
            { label: 'Travel' },
            { label: 'Canada' }
          ]} />
          <h1 className="text-3xl font-bold text-brand-dark mb-6">Travel & AI in Canada</h1>
          <p className="text-brand-gray mb-10 text-sm max-w-3xl">
            Discover how Canadian travel companies are leveraging generative AI and advanced technologies to transform operations, enhance customer experiences, and drive innovation.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {travelUseCases.map((item) => (
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
