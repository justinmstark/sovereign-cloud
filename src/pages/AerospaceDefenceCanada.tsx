import Layout from '../components/Layout';
import Breadcrumb from '../components/Breadcrumb';

const aerospaceUseCases = [
  {
    id: 'sovereign-cloud',
    title: 'Sovereign Cloud & Data Control',
    description: 'Explore how sovereign cloud solutions help organizations regain control over their data, ensuring compliance with evolving digital sovereignty laws.',
    url: 'https://www.accenture.com/us-en/insights/cloud/sovereign-cloud',
  },
  {
    id: 'genai-transformation',
    title: 'Generative AI Transformation',
    description: 'Discover how generative AI is driving unprecedented productivity and growth across enterprises, demanding a strong and secure digital core.',
    url: 'https://www.accenture.com/us-en/services/data-ai/generative-ai',
  },
  {
    id: 'aerospace-consulting',
    title: 'Aerospace & Defense Consulting',
    description: 'Learn how Accenture’s aerospace & defense consulting services transform companies by harnessing digital to improve operations and generate revenue streams.',
    url: 'https://www.accenture.com/us-en/industries/aerospace-defense',
  },
  {
    id: 'cloud-barrier',
    title: 'Breaking the Cloud Barrier',
    description: 'Understand how aerospace and defense organizations favor a blend of cloud approaches to achieve their business goals and meet high security and compliance standards.',
    url: 'https://www.accenture.com/in-en/insights/aerospace-defense/cloud-continuum',
  },
  {
    id: 'genai-reinvention',
    title: 'Making Reinvention Real with Gen AI',
    description: 'Explore lessons learned from over 2,000 gen AI projects and how to move from experimentation to enterprise-level value.',
    url: 'https://www.accenture.com/us-en/insights/consulting/making-reinvention-real-with-gen-ai',
  },
  {
    id: 'defense-insight',
    title: 'Defense Disrupted: New Players, New Pressures',
    description: 'Accenture reports key strategies to help defense businesses achieve competitive advantage and chart the course for the industry’s future.',
    url: 'https://www.accenture.com/us-en/insights/aerospace-defense/defense-insight-report',
  },
  {
    id: 'farnborough-airshow',
    title: 'Accenture at Farnborough Airshow',
    description: 'Discover how GenAI is transforming the aerospace industry, unleashing human potential, productivity, and creativity.',
    url: 'https://www.accenture.com/us-en/about/events/farnborough-airshow',
  },
  {
    id: 'secure-genai',
    title: 'Secure Gen AI in Cybersecurity',
    description: 'Learn how gen AI presents an opportunity for cyber defense and the reinvention of cybersecurity.',
    url: 'https://www.accenture.com/us-en/insights/cybersecurity/secure-gen-ai',
  },
];

export default function AerospaceDefenceCanada() {
  return (
    <Layout>
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb segments={[
            { label: 'Industries', href: '/industries' },
            { label: 'Aerospace & Defence' },
            { label: 'Canada' }
          ]} />
          <h1 className="text-3xl font-bold text-brand-dark mb-6">Aerospace & Defence AI in Canada</h1>
          <p className="text-brand-gray mb-10 text-sm max-w-3xl">
            Explore how GenAI and digital engineering are advancing Canada's aerospace and defence capabilities — from sovereign cloud solutions to generative AI transformations.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {aerospaceUseCases.map((item) => (
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
