import Layout from '../components/Layout';
import Breadcrumb from '../components/Breadcrumb';

const retailUseCases = [
  {
    id: 'reinventing-future-retail',
    title: 'Reinventing the Future of Retail',
    description: 'Explore how generative AI is transforming retail, enhancing customer and employee experiences, and offering growth and efficiency opportunities.',
    url: 'https://www.accenture.com/ca-en/insights/retail/reinventing-future-retail',
  },
  {
    id: 'retail-consulting-services',
    title: 'Retail Consulting Services & Solutions',
    description: 'Learn how Accenture helps retailers reset and reinvent their businesses responsibly by focusing on six imperatives for growth.',
    url: 'https://www.accenture.com/ca-en/industries/retail',
  },
  {
    id: 'unleashing-power-generative-ai',
    title: 'Unleashing the Power of Generative AI in Retail',
    description: 'Discover how generative AI is reshaping the customer and employee experience while creating opportunities for growth and efficiency.',
    url: 'https://www.accenture.com/ca-en/insights/retail/unleashing-power-generative-ai',
  },
  {
    id: 'data-ai-retail',
    title: 'Data & AI in Retail',
    description: 'Understand how data readiness is essential for using AI effectively and how Accenture’s capabilities can help retailers get more out of their data.',
    url: 'https://www.accenture.com/ca-en/industries/retail/data-ai',
  },
  {
    id: 'retail-managed-services',
    title: 'Retail Managed Services',
    description: 'Enhance retail operations with managed services to boost efficiency, cut costs, empower talent, and deliver seamless customer experiences.',
    url: 'https://www.accenture.com/ca-en/industries/retail/managed-services',
  },
  {
    id: 'best-buy-case-study',
    title: 'Best Buy Humanizes the Customer Support Experience',
    description: 'Learn how Best Buy leverages generative AI to enhance customer and employee experiences, focusing on efficiency and personalization.',
    url: 'https://www.accenture.com/ca-en/case-studies/data-ai/best-buy-humanizes-customer-experience-genai',
  },
];

export default function RetailCanada() {
  return (
    <Layout>
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb segments={[
            { label: 'Industries', href: '/industries' },
            { label: 'Retail' },
            { label: 'Canada' }
          ]} />
          <h1 className="text-3xl font-bold text-brand-dark mb-6">Retail & AI in Canada</h1>
          <p className="text-brand-gray mb-10 text-sm max-w-3xl">
            Discover how Canadian retailers are leveraging generative AI and advanced technologies to transform operations, enhance customer experiences, and drive innovation.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {retailUseCases.map((item) => (
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
