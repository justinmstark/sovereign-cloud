import Layout from '../components/Layout';

const services = [
  {
    id: 'gpu',
    title: 'GPU as a Service',
    description:
      'Access dedicated high-performance GPUs on demand for your training and inference workloads.',
  },
  {
    id: 'inferencing',
    title: 'Inferencing as a Service',
    description:
      'Deploy tuned AI models for real-time inference on scalable, low-latency infrastructure.',
  },
  {
    id: 'model',
    title: 'Model as a Service',
    description:
      'Host, monitor, and scale custom or pre-trained LLMs with lifecycle management.',
  },
  {
    id: 'hpc',
    title: 'HPC as a Service',
    description:
      'Accelerate scientific and engineering workloads using high performance compute.',
  },
  {
    id: 'industry',
    title: 'Industry Solutions',
    description:
      'Tailored AI solutions for your sector — healthcare, finance, manufacturing, and more.',
  },
  {
    id: 'compliance',
    title: 'Compliance Services',
    description:
      'Expert guidance and support to meet regional data protection, residency, and sovereignty regulations.',
  },
  {
    id: 'products',
    title: 'Cloud Products',
    description:
      'AI-ready cloud-native products for analytics, compute, storage, security, and orchestration.',
  },
  {
    id: 'platforms',
    title: 'Platform Integrations',
    description:
      'Prebuilt connectors and DevX tools to seamlessly integrate with your SaaS and infra stack.',
  },
];

export default function ServiceDetail() {
  return (
    <Layout>
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-brand-dark mb-6">Select a Service</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {services.map((svc) => (
              <div
                key={svc.id}
                className="bg-brand-light border rounded-xl shadow-card hover:shadow-cardHover p-6 flex flex-col justify-between"
              >
                <div>
                  <h2 className="text-lg font-semibold text-brand-purple mb-2">{svc.title}</h2>
                  <p className="text-sm text-brand-gray mb-4">{svc.description}</p>
                </div>
                <a
                  href={`/services/${svc.id}`}
                  className="bg-brand-accent hover:bg-brand-accentDark text-white text-sm font-semibold py-2 px-4 rounded text-center"
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
