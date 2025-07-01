import Layout from '../components/Layout';
import Breadcrumb from '../components/Breadcrumb';

const automotiveUseCases = [
  {
    id: 'genai-bmw',
    title: 'BMW Puts Generative AI in the Driver’s Seat',
    description: 'Discover how BMW North America collaborated with Accenture to leverage generative AI, enhancing productivity and decision-making across operations.',
    url: 'https://www.accenture.com/sg-en/case-studies/automotive/bmw-puts-generative-ai-in-the-drivers-seat',
  },
  {
    id: 'software-defined-vehicles',
    title: 'Software-Defined Vehicle Solutions',
    description: 'Explore how software-defined vehicles are transforming cars into intelligent, upgradeable platforms, delivering connectivity and personalization.',
    url: 'https://www.accenture.com/ca-en/industries/automotive/software-defined-vehicles',
  },
  {
    id: 'monetizing-digital-services',
    title: 'Monetizing Digital Services in Automotive',
    description: 'Learn how automakers can address key challenges to successfully monetize digital services in the automotive industry.',
    url: 'https://www.accenture.com/us-en/insights/automotive/maximizing-value-digital-services',
  },
  {
    id: 'omnichannel-experience',
    title: 'Automotive Omnichannel Experience',
    description: 'Understand how Accenture’s Automotive Experience Decision Engine reimagines the automotive experience across channels.',
    url: 'https://www.accenture.com/ca-en/industries/automotive/omnichannel-experience',
  },
  {
    id: 'eclipse-automation',
    title: 'Accenture to Acquire Eclipse Automation',
    description: 'Read about Accenture’s acquisition of Eclipse Automation to help clients build factories of the future with advanced automation solutions.',
    url: 'https://newsroom.accenture.com/news/2022/accenture-to-acquire-eclipse-automation-to-help-clients-build-factories-of-the-future',
  },
  {
    id: 'genai-technology',
    title: 'Generative AI Technology in Business',
    description: 'Explore the potential of generative AI technology and its applications in business, and how it can reinvent work.',
    url: 'https://www.accenture.com/us-en/insights/technology/generative-ai',
  },
  {
    id: 'reinvention-genai',
    title: 'Reinvention in the Age of Generative AI',
    description: 'Understand how generative AI represents a clear opportunity to accelerate reinvention and close the performance gap.',
    url: 'https://www.accenture.com/us-en/insights/consulting/total-enterprise-reinvention',
  },
  {
    id: 'genai-studios',
    title: 'Generative AI Studios',
    description: 'Learn how Accenture’s Generative AI Studios help clients move from experimentation to scalable gen AI transformation.',
    url: 'https://www.accenture.com/us-en/services/data-ai/generative-ai/gen-ai-studios',
  },
];

export default function AutomotiveCanada() {
  return (
    <Layout>
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb segments={[
            { label: 'Industries', href: '/industries' },
            { label: 'Automotive' },
            { label: 'Canada' }
          ]} />
          <h1 className="text-3xl font-bold text-brand-dark mb-6">Automotive & AI in Canada</h1>
          <p className="text-brand-gray mb-10 text-sm max-w-3xl">
            Explore how Canadian automotive companies are leveraging generative AI and advanced technologies to transform operations, enhance customer experiences, and drive innovation.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {automotiveUseCases.map((item) => (
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
