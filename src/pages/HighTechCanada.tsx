import Layout from '../components/Layout';
import Breadcrumb from '../components/Breadcrumb';

const highTechUseCases = [
  {
    id: 'genai-hightech-opportunity',
    title: 'Generative AI Adoption in the High Tech Industry',
    description: 'Explore how high tech companies can lead in generative AI development, adoption, and transformation to drive innovation.',
    url: 'https://www.accenture.com/ca-en/insights/high-tech/gen-ai-challenge',
  },
  {
    id: 'intel-ai-ecosystem',
    title: 'Democratizing Access to AI: Intel Case Study',
    description: 'Learn how Accenture and Intel collaborated to create a new development ecosystem centered on standardized AI frameworks and analytics.',
    url: 'https://www.accenture.com/us-en/case-studies/high-tech/intel-delivering-ai-everywhere',
  },
  {
    id: 'genai-hightech-blog',
    title: 'Utilizing the Power of Generative AI in High Tech',
    description: 'Discover how high tech companies can utilize generative AI to allow more strategic activities while optimizing resources.',
    url: 'https://www.accenture.com/ca-en/blogs/high-tech/generative-ai',
  },
  {
    id: 'responsible-ai-blueprint',
    title: 'Responsible Use of AI: Case Study',
    description: 'Understand Accenture’s approach to responsible AI practices and how businesses can embrace the responsible use of AI.',
    url: 'https://www.accenture.com/ca-en/case-studies/data-ai/blueprint-responsible-ai',
  },
  {
    id: 'genai-technology-business',
    title: 'Generative AI Technology in Business',
    description: 'Explore the potential of generative AI technology, its applications in business, and how it can reinvent work.',
    url: 'https://www.accenture.com/ca-en/insights/technology/generative-ai',
  },
  {
    id: 'fortune-ai-platform',
    title: 'Data and Generative AI Case Studies: Fortune',
    description: 'See how Accenture and Fortune transformed the iconic Fortune 500® list into an AI-driven platform for instant business insights.',
    url: 'https://www.accenture.com/us-en/case-studies/data-ai/data-generative-ai-client-stories',
  },
];

export default function HighTechCanada() {
  return (
    <Layout>
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb segments={[
            { label: 'Industries', href: '/industries' },
            { label: 'High Tech' },
            { label: 'Canada' }
          ]} />
          <h1 className="text-3xl font-bold text-brand-dark mb-6">High Tech & AI in Canada</h1>
          <p className="text-brand-gray mb-10 text-sm max-w-3xl">
            Discover how Canadian high tech companies are leveraging generative AI and advanced technologies to transform operations, enhance customer experiences, and drive innovation.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {highTechUseCases.map((item) => (
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
