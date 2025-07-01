import Layout from '../components/Layout';
import Breadcrumb from '../components/Breadcrumb';

const industrialUseCases = [
  {
    id: 'future-of-manufacturing',
    title: 'Rethinking the Course to Manufacturing’s Future',
    description: 'Explore how AI is becoming the intelligence layer that governs industrial operations, driving flexibility, agility, and adaptability in factory operations.',
    url: 'https://www.accenture.com/ca-en/insights/industrial/future-of-manufacturing',
  },
  {
    id: 'kion-ai-robots',
    title: 'KION Uses AI Robots to Transform Warehouses',
    description: 'Discover how KION Group leverages AI-powered robots to enhance warehouse operations, reducing costs and improving safety.',
    url: 'https://www.accenture.com/us-en/case-studies/technology/ai-robots-transforming-warehouses',
  },
  {
    id: 'dow-factories-future',
    title: 'Dow’s Factories of the Future',
    description: 'Learn how Dow and Accenture collaborated to implement digital manufacturing capabilities, enhancing efficiency across multiple plants.',
    url: 'https://www.accenture.com/ca-en/case-studies/industry-x/dow-factories-future',
  },
  {
    id: 'genai-technology-business',
    title: 'Generative AI Technology in Business',
    description: 'Understand the potential of generative AI technology and its applications in business, and how it can reinvent work.',
    url: 'https://www.accenture.com/ca-en/insights/technology/generative-ai',
  },
  {
    id: 'responsible-ai-blueprint',
    title: 'Responsible Use of AI: Case Study',
    description: 'Explore Accenture’s approach to responsible AI practices and how businesses can embrace the responsible use of AI.',
    url: 'https://www.accenture.com/ca-en/case-studies/data-ai/blueprint-responsible-ai',
  },
  {
    id: 'genai-studios',
    title: 'Generative AI Studios',
    description: 'Learn how Accenture’s Generative AI Studios help clients move from experimentation to scalable gen AI transformation.',
    url: 'https://www.accenture.com/ca-en/services/data-ai/generative-ai/gen-ai-studios',
  },
];

export default function IndustrialCanada() {
  return (
    <Layout>
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb segments={[
            { label: 'Industries', href: '/industries' },
            { label: 'Industrial' },
            { label: 'Canada' }
          ]} />
          <h1 className="text-3xl font-bold text-brand-dark mb-6">Industrial & AI in Canada</h1>
          <p className="text-brand-gray mb-10 text-sm max-w-3xl">
            Discover how Canadian industrial companies are leveraging generative AI and advanced technologies to transform operations, enhance efficiency, and drive innovation.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {industrialUseCases.map((item) => (
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
