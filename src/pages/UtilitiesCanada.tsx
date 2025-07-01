import Layout from '../components/Layout';
import Breadcrumb from '../components/Breadcrumb';

const utilitiesUseCases = [
  {
    id: 'tech-vision-2025-utilities',
    title: 'Tech Vision 2025: Utilities Industry Perspective',
    description: 'Explore how AI is reshaping the utilities industry—from automation to autonomy—enhancing grid management, customer engagement, and workforce operations.',
    url: 'https://www.accenture.com/ca-en/blogs/utilities/tech-vision-2025-utilities-industry-perspective',
  },
  {
    id: 'utilities-consulting-services',
    title: 'Utilities Consulting Services',
    description: 'Learn how Accenture helps utility companies transform for value and growth in a future of digital utilities.',
    url: 'https://www.accenture.com/us-en/industries/utilities',
  },
  {
    id: 'intelligent-utility-operations',
    title: 'Intelligent Utility Operations Services',
    description: 'Discover how Accenture’s intelligent utility operations services help utility clients boost customer satisfaction, grow revenue, and reduce costs.',
    url: 'https://www.accenture.com/ca-en/services/business-process-services/utilities-bpo',
  },
  {
    id: 'digital-transformation-sustainable-utilities',
    title: 'Digital Transformation for Sustainable Energy Utilities',
    description: 'Understand how Accenture’s deep industry experience and Oracle Cloud technology can lead the energy transition to net zero by enabling utilities digital transformation.',
    url: 'https://www.accenture.com/ca-en/services/technology/oracle-energy-transition',
  },
  {
    id: 'transmission-distribution-services',
    title: 'Utility Transmission & Distribution Services',
    description: 'Accenture’s transmission and distribution services help utilities evolve their networks to meet the needs of a rapidly changing landscape.',
    url: 'https://www.accenture.com/ca-fr/services/utilities/transmission-distribution',
  },
  {
    id: 'tech-vision-2024-utilities',
    title: 'Tech Vision 2024: Utilities Industry Perspective',
    description: 'Most utility executives agree that generative AI will compel their organization to modernize its technology architecture.',
    url: 'https://www.accenture.com/ca-en/blogs/utilities/tech-vision-2024-utilities-industry-perspective',
  },
];

export default function UtilitiesCanada() {
  return (
    <Layout>
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb segments={[
            { label: 'Industries', href: '/industries' },
            { label: 'Utilities' },
            { label: 'Canada' }
          ]} />
          <h1 className="text-3xl font-bold text-brand-dark mb-6">Utilities & AI in Canada</h1>
          <p className="text-brand-gray mb-10 text-sm max-w-3xl">
            Discover how Canadian utilities are leveraging generative AI and advanced technologies to transform operations, enhance customer experiences, and drive innovation.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {utilitiesUseCases.map((item) => (
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
