import Layout from '../components/Layout';
import Breadcrumb from '../components/Breadcrumb';

const insuranceUseCases = [
  {
    id: 'genai-insurance-distribution',
    title: '5 Key Generative AI Use Cases in Insurance Distribution',
    description: 'Explore how generative AI is transforming insurance distribution and the key actions brokers and agents should take.',
    url: 'https://insuranceblog.accenture.com/5-key-generative-ai-use-cases-in-insurance-distribution',
  },
  {
    id: 'ai-claims-underwriting',
    title: 'Transforming Claims and Underwriting with AI',
    description: 'Learn how AI can improve customer satisfaction and increase employee productivity in insurance claims and underwriting.',
    url: 'https://www.accenture.com/ca-en/insights/insurance/ai-transforming-claims-underwriting',
  },
  {
    id: 'cognitive-insurance-platform',
    title: 'Accenture Cognitive Insurance Platform',
    description: 'Discover how Accenture’s platform uses AI and generative AI to transform the insurance value chain, boosting efficiency and revenue.',
    url: 'https://www.accenture.com/ca-en/industries/insurance/group-voluntary-benefits/cognitive-insurance-platform',
  },
  {
    id: 'guide-generative-ai-insurance',
    title: 'The Guide to Generative AI for Insurance',
    description: 'Understand how generative AI is being used throughout the insurance value chain to improve customer interactions and streamline operations.',
    url: 'https://insuranceblog.accenture.com/guide-generative-ai-insurance',
  },
  {
    id: 'ai-insurance-claims',
    title: 'AI and Generative AI Help Meet Customer Needs When It Matters',
    description: 'Learn how AI and generative AI can help insurers achieve fast, accurate claims decisions that drive customer satisfaction.',
    url: 'https://www.accenture.com/ca-en/industries/insurance/insurance-claims',
  },
  {
    id: 'insurance-consulting-services',
    title: 'Insurance Consulting Services & Solutions',
    description: 'Explore how Accenture’s insurance consulting services help P&C and life insurers redefine their business and operating models.',
    url: 'https://www.accenture.com/ca-en/industries/insurance',
  },
];

export default function InsuranceCanada() {
  return (
    <Layout>
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb segments={[
            { label: 'Industries', href: '/industries' },
            { label: 'Insurance' },
            { label: 'Canada' }
          ]} />
          <h1 className="text-3xl font-bold text-brand-dark mb-6">Insurance & AI in Canada</h1>
          <p className="text-brand-gray mb-10 text-sm max-w-3xl">
            Discover how Canadian insurance companies are leveraging generative AI and advanced technologies to transform operations, enhance customer experiences, and drive innovation.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {insuranceUseCases.map((item) => (
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
