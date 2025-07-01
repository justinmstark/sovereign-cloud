import Layout from '../components/Layout';
import Breadcrumb from '../components/Breadcrumb';

const softwarePlatformsUseCases = [
  {
    id: 'software-platforms-consulting',
    title: 'Software & Platforms Consulting Services',
    description: 'Discover how Accenture helps software and platform companies reshape the global economy with unique services and tools.',
    url: 'https://www.accenture.com/ca-en/industries/software-platforms',
  },
  {
    id: 'powering-platform-future',
    title: 'Powering the Platform Future',
    description: 'Explore research-led insights into the evolving world of software and platform companies.',
    url: 'https://www.accenture.com/ca-en/insights/software-platforms/powering-future-platforms',
  },
  {
    id: 'hyperscale-platform-services',
    title: 'Hyperscale Platform Services',
    description: 'Learn how to operate efficient hyperscale platform businesses with AI, adapting to tech advancements and consumer demands.',
    url: 'https://www.accenture.com/ca-en/services/software-platforms/hyperscale-platforms',
  },
  {
    id: 'software-horizons-profitable-growth',
    title: 'Software Horizons: Profitable Growth',
    description: 'Uncover the latest industry trends and success drivers for software and platform companies.',
    url: 'https://www.accenture.com/ca-en/insightsnew/software-platforms/software-profitable-growth',
  },
  {
    id: 'platform-strategy',
    title: 'Elevate Your Business With a Platform Strategy',
    description: 'Learn how a platform strategy can help businesses reinvent every aspect of their operations.',
    url: 'https://www.accenture.com/ca-en/insights/strategy/platform-strategy',
  },
  {
    id: 'platform-engineering-services',
    title: 'Platform Engineering Services',
    description: 'Discover how Accenture’s platform engineering services help clients navigate through the new wave of platforms.',
    url: 'https://www.accenture.com/ca-en/services/software-engineering/product-platform-engineering',
  },
];

export default function SoftwarePlatformsCanada() {
  return (
    <Layout>
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb segments={[
            { label: 'Industries', href: '/industries' },
            { label: 'Software and Platforms' },
            { label: 'Canada' }
          ]} />
          <h1 className="text-3xl font-bold text-brand-dark mb-6">Software & Platforms in Canada</h1>
          <p className="text-brand-gray mb-10 text-sm max-w-3xl">
            Explore how Canadian software and platform companies are leveraging advanced technologies to transform operations, enhance customer experiences, and drive innovation.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {softwarePlatformsUseCases.map((item) => (
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
