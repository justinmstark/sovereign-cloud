import Layout from '../components/Layout';
import Breadcrumb from '../components/Breadcrumb';

const healthUseCases = [
  {
    id: 'genai-healthcare-productivity',
    title: 'Scaling Gen AI for Healthcare Productivity',
    description: 'Explore how generative AI enhances productivity and responsiveness across the healthcare sector, enabling real-time adaptation to market demands.',
    url: 'https://www.accenture.com/us-en/insights/health/gen-ai-amplified-scaling-productivity-healthcare-providers',
  },
  {
    id: 'predictive-ai-diabetes-care',
    title: 'Predictive AI for Diabetes Care',
    description: 'Discover how predictive AI models are revolutionizing diabetes care by providing holistic patient views and facilitating informed decision-making.',
    url: 'https://www.accenture.com/ca-en/case-studies/data-ai/ccs-turning-wealth-information-action-for-patients',
  },
  {
    id: 'transforming-healthcare-ai',
    title: 'Transforming Healthcare with AI',
    description: 'Understand how AI and emerging technologies are reshaping healthcare, from data integration to personalized patient interactions and continuous learning.',
    url: 'https://www.accenture.com/ca-en/blogs/health/accenture-technology-trends-2025-healthcare',
  },
  {
    id: 'digital-health-technology',
    title: 'Digital Health Technology',
    description: 'Learn how digital health tools and generative AI are enhancing patient experiences, boosting efficiency, and improving patient engagement.',
    url: 'https://www.accenture.com/ca-en/industries/health/digital-health',
  },
  {
    id: 'reinventing-life-sciences',
    title: 'Reinventing Life Sciences in the Age of Generative AI',
    description: 'Explore how generative AI is transforming the life sciences industry, enhancing areas such as drug discovery and improving patient care.',
    url: 'https://www.accenture.com/ca-en/insights/life-sciences/reinventing-life-sciences-age-generative-ai',
  },
  {
    id: 'healthcare-consulting-services',
    title: 'Healthcare Consulting Services & Solutions',
    description: 'Discover how Accenture provides healthcare consulting services to offer healthcare transformation that reinvents access and experiences for better outcomes.',
    url: 'https://www.accenture.com/ca-en/industries/health',
  },
];

export default function HealthCanada() {
  return (
    <Layout>
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb segments={[
            { label: 'Industries', href: '/industries' },
            { label: 'Health' },
            { label: 'Canada' }
          ]} />
          <h1 className="text-3xl font-bold text-brand-dark mb-6">Health & AI in Canada</h1>
          <p className="text-brand-gray mb-10 text-sm max-w-3xl">
            Discover how Canadian healthcare organizations are leveraging generative AI and advanced technologies to transform operations, enhance patient experiences, and drive innovation.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {healthUseCases.map((item) => (
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
