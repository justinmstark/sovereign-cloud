import Layout from '../components/Layout';
import Breadcrumb from '../components/Breadcrumb';

const bankingUseCases = [
  {
    id: 'genai-banking',
    title: 'Banking in the Age of Generative AI',
    description: 'Explore how generative AI is transforming banking operations, enhancing productivity, and driving revenue growth.',
    url: 'https://www.accenture.com/us-en/insights/banking/generative-ai-banking',
  },
  {
    id: 'reinvent-operations',
    title: 'Reinvent Banking Operations with Data and AI',
    description: 'Learn how AI and data analytics are revolutionizing banking operations, improving efficiency, and enhancing customer experiences.',
    url: 'https://www.accenture.com/ca-en/industries/banking/banking-operations',
  },
  {
    id: 'digital-core',
    title: 'Reinventing with the Digital Core in Banking',
    description: 'Understand the importance of a digital core in banking and how it enables agility, innovation, and growth.',
    url: 'https://www.accenture.com/ca-en/insights/banking/reinventing-digital-core-banking',
  },
  {
    id: 'core-modernization',
    title: 'Core Banking Modernization with Generative AI',
    description: 'Discover how generative AI is unlocking legacy code, facilitating core banking modernization, and enhancing agility.',
    url: 'https://bankingblog.accenture.com/core-banking-modernization-unlocking-legacy-code-with-generative-ai',
  },
  {
    id: 'genai-impact',
    title: 'The Impact of Generative AI in Banking',
    description: 'Delve into the transformative role of generative AI in banking, focusing on strategic integration and innovation.',
    url: 'https://bankingblog.accenture.com/the-impact-of-generative-ai-in-banking',
  },
  {
    id: 'genai-opportunities',
    title: '3 Ways Generative AI Will Transform Banking',
    description: 'Identify three key areas where generative AI is set to revolutionize banking operations and customer engagement.',
    url: 'https://bankingblog.accenture.com/3-ways-generative-ai-will-transform-banking',
  },
  {
    id: 'commercial-banking',
    title: 'Commercial & Corporate Banking Solutions',
    description: 'Explore how digital and AI technologies are elevating business lending, transaction banking, and commercial payments.',
    url: 'https://www.accenture.com/ca-en/industries/banking/commercial-corporate-banking',
  },
  {
    id: 'banking-trends',
    title: 'Top 10 Trends in the Banking Industry for 2024',
    description: 'Stay ahead with insights into the top trends shaping the banking industry, including the rapid adoption of generative AI.',
    url: 'https://www.accenture.com/ca-en/insights/banking/top-10-trends-banking-2024',
  },
];

export default function BankingCanada() {
  return (
    <Layout>
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb segments={[
            { label: 'Industries', href: '/industries' },
            { label: 'Banking' },
            { label: 'Canada' }
          ]} />
          <h1 className="text-3xl font-bold text-brand-dark mb-6">Banking & AI in Canada</h1>
          <p className="text-brand-gray mb-10 text-sm max-w-3xl">
            Discover how Canadian banks are leveraging generative AI and data analytics to transform operations, enhance customer experiences, and drive growth.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {bankingUseCases.map((item) => (
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
