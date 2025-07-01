import Layout from '../components/Layout';
import Breadcrumb from '../components/Breadcrumb';

const naturalResourcesUseCases = [
  {
    id: 'genai-natural-gas',
    title: 'Gen AI: Unlocking Natural Gas’s Full Potential',
    description: 'Explore how generative AI can optimize natural gas operations, enhancing efficiency and sustainability in the energy sector.',
    url: 'https://www.accenture.com/ca-en/blogs/energy/gen-ai-key-unlocking-natural-gas-full-potential',
  },
  {
    id: 'mining-digital-transformation',
    title: 'Mining Industry Digital Transformation',
    description: 'Discover how digital technologies are revolutionizing the mining sector, driving sustainability and operational excellence.',
    url: 'https://www.accenture.com/us-en/industries/natural-resources/mining',
  },
  {
    id: 'natural-resources-consulting',
    title: 'Natural Resources Consulting Services',
    description: 'Learn how Accenture’s consulting services help natural resources companies innovate and transform in a changing landscape.',
    url: 'https://www.accenture.com/ca-en/industries/natural-resources',
  },
  {
    id: 'sustainability-innovation-insights',
    title: 'Natural Resources Sustainability & Innovation Insights',
    description: 'Access a collection of insights for sustainable tech innovation across the mining, metals, forest products, and building materials industries.',
    url: 'https://www.accenture.com/ca-en/insights/natural-resources/best-of-natural-resources',
  },
  {
    id: 'building-resilience-natural-resources',
    title: 'Building Resilience in Natural Resources',
    description: 'Understand how natural resources companies can build resilience through scenario planning, supply chain optimization, and technology adoption.',
    url: 'https://www.accenture.com/content/dam/accenture/final/accenture-com/document-3/Building-Resilience-In-Natural-Resources.pdf',
  },
];

export default function NaturalResourcesCanada() {
  return (
    <Layout>
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb segments={[
            { label: 'Industries', href: '/industries' },
            { label: 'Natural Resources' },
            { label: 'Canada' }
          ]} />
          <h1 className="text-3xl font-bold text-brand-dark mb-6">Natural Resources & AI in Canada</h1>
          <p className="text-brand-gray mb-10 text-sm max-w-3xl">
            Discover how Canadian natural resources companies are leveraging generative AI and advanced technologies to transform operations, enhance sustainability, and drive innovation.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {naturalResourcesUseCases.map((item) => (
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
