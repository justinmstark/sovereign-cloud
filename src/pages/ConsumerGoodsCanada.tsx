import Layout from '../components/Layout';
import Breadcrumb from '../components/Breadcrumb';

const consumerGoodsUseCases = [
  {
    id: 'reinventing-supply-chain',
    title: 'Reinventing the Consumer Goods Supply Chain with Generative AI',
    description: 'Explore how generative AI enhances productivity and responsiveness across the supply chain, enabling real-time market adaptation.',
    url: 'https://www.accenture.com/ca-en/blogs/consumer-goods-services/reinventing-supply-chain-generative-ai',
  },
  {
    id: 'future-of-work',
    title: 'Future of Work in Consumer Goods',
    description: 'Discover how generative AI is reshaping the workforce, automating tasks, and preparing employees for new roles in the consumer goods industry.',
    url: 'https://www.accenture.com/ca-en/blogs/consumer-goods-services/future-work-consumer-goods',
  },
  {
    id: 'reinventing-consumer-experiences',
    title: 'Reinventing Consumer Experiences',
    description: 'Learn how AI and personalization are transforming consumer experiences, boosting engagement, satisfaction, and loyalty in the digital age.',
    url: 'https://www.accenture.com/us-en/blogs/consumer-goods-services/reinventing-consumer-experiences',
  },
  {
    id: 'digital-commerce-strategy',
    title: 'Elevate Your Commerce Strategy to Unlock AI-Powered Growth',
    description: 'Understand how consumer goods organizations can simplify decision-making and connect seamlessly across channels to drive growth.',
    url: 'https://www.accenture.com/ca-en/industries/consumer-goods-services/digital-commerce',
  },
  {
    id: 'value-chain-reinvention',
    title: 'Reinventing the Consumer Goods Value Chain',
    description: 'Discover how companies are reinventing their value chains with generative AI to drive growth and efficiency.',
    url: 'https://www.accenture.com/ca-en/insights/consumer-goods-services/reinventing-consumer-goods-value-chain',
  },
  {
    id: 'unilever-collaboration',
    title: 'Unilever and Accenture Collaborate on Next Generation AI',
    description: 'Read about the strategic initiative between Unilever and Accenture to leverage AI technologies for enhanced productivity and innovation.',
    url: 'https://newsroom.accenture.com/news/2023/unilever-and-accenture-collaborate-on-next-generation-ai',
  },
];

export default function ConsumerGoodsCanada() {
  return (
    <Layout>
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb segments={[
            { label: 'Industries', href: '/industries' },
            { label: 'Consumer Goods and Services' },
            { label: 'Canada' }
          ]} />
          <h1 className="text-3xl font-bold text-brand-dark mb-6">Consumer Goods & AI in Canada</h1>
          <p className="text-brand-gray mb-10 text-sm max-w-3xl">
            Discover how Canadian consumer goods companies are leveraging generative AI and advanced technologies to transform operations, enhance customer experiences, and drive innovation.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {consumerGoodsUseCases.map((item) => (
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
