import Layout from '../components/Layout';
import Breadcrumb from '../components/Breadcrumb';

const publicSectorUseCases = [
  {
    id: 'citizen-services-ai',
    title: 'GenAI for Citizen Services',
    description: 'Transform access to public services using GenAI chatbots and digital agents, improving inclusivity and response times.',
    url: 'https://www.accenture.com/ca-en/insights/public-service/genai-public-sector',
  },
  {
    id: 'policy-intelligence',
    title: 'Policy Research & Intelligence',
    description: 'Apply LLMs to accelerate policy development, simulate impact, and support legislative drafting in Canadian agencies.',
    url: 'https://www.accenture.com/ca-en/insights/public-service/policy-intelligence-ai',
  },
  {
    id: 'healthcare-ai',
    title: 'AI in Public Healthcare',
    description: 'Use AI to optimize triage, manage capacity, and personalize patient pathways across Canada’s public health systems.',
    url: 'https://www.accenture.com/ca-en/insights/health/public-healthcare-genai',
  },
  {
    id: 'ai-service-modernization',
    title: 'Digital Public Service Modernization',
    description: 'Modernize service delivery with GenAI copilots, automation, and multilingual accessibility across federal and provincial portals.',
    url: 'https://www.accenture.com/ca-en/services/public-service/canada-digital-modernization',
  },
  {
    id: 'emergency-management',
    title: 'Crisis & Emergency Intelligence',
    description: 'Deploy AI models for predictive emergency response, risk mapping, and disaster communication.',
    url: 'https://www.accenture.com/ca-en/insights/public-service/emergency-response-ai',
  },
  {
    id: 'regulatory-genai',
    title: 'AI for Regulatory & Compliance',
    description: 'Use GenAI to analyze legislation, draft regulatory updates, and monitor public trust frameworks in Canada.',
    url: 'https://www.accenture.com/ca-en/insights/public-service/genai-regulatory-compliance',
  },
  {
    id: 'immigration-automation',
    title: 'AI-Driven Immigration Services',
    description: 'Accelerate document processing, risk profiling, and multilingual support in immigration and border workflows.',
    url: 'https://www.accenture.com/ca-en/insights/public-service/immigration-automation',
  },
  {
    id: 'procurement-intelligence',
    title: 'Smart Procurement & Grants',
    description: 'Streamline public sector procurement using GenAI to evaluate bids, assess impact, and reduce manual overhead.',
    url: 'https://www.accenture.com/ca-en/insights/public-service/smart-public-procurement',
  },
];

export default function PublicSectorCanada() {
  return (
    <Layout>
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb segments={[{ label: 'Industries' }, { label: 'Public Sector' }, { label: 'Canada' }]} />
          <h1 className="text-3xl font-bold text-brand-dark mb-6">Public Sector Innovation in Canada</h1>
          <p className="text-brand-gray mb-10 text-sm max-w-3xl">
            Explore how GenAI and digital intelligence are transforming Canada’s public services — from policy development to immigration and emergency response.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {publicSectorUseCases.map((item) => (
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
