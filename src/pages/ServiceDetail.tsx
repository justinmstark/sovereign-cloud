import { useParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Breadcrumb from '../components/Breadcrumb';

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
  const { id } = useParams();
  const selected = services.find((s) => s.id === id);

  const tabItems = ['Overview', 'Services', 'Solutions', 'Pricing', 'Documentation', 'Why Sovereign', 'About'];

  return (
    <Layout>
        {/* Tab Banner */}
        <div className="flex flex-wrap gap-3 justify-center mb-8 mt-10">
          {tabItems.map(label =>
            label === 'Services' ? (
              <Link
                key={label}
                to="/services"
                className="px-4 py-2 rounded font-medium text-sm shadow-sm border transition bg-purple-700 text-white border-purple-700"
              >
                {label}
              </Link>
            ) : (
              <Link
                key={label}
                to="/"
                state={{ activeTab: label }}
                className="px-4 py-2 rounded font-medium text-sm shadow-sm border transition bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              >
                {label}
              </Link>
            )
          )}
        </div>
      

      {/* View: No ID – list all services */}
      {!id && (
  <section className="py-1 px-6 bg-white">
    <div className="max-w-7xl mx-auto">
      <Breadcrumb segments={[{ label: 'Services' }]} />
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
            <Link
              to={`/services/${svc.id}`}
              className="bg-brand-accent hover:bg-brand-accentDark text-white text-sm font-semibold py-2 px-4 rounded text-center"
            >
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </div>
  </section>
)}

      {/* View: Invalid ID */}
      {id && !selected && (
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-brand-dark mb-4">Service not found</h1>
            <p className="text-brand-gray">The service you requested does not exist.</p>
            <Link to="/services" className="text-brand-accent font-medium underline mt-4 inline-block">
              ← Back to Services
            </Link>
          </div>
        </section>
      )}

      {/* View: Single service detail */}
      {id && selected && (
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto mb-6">
            <Link to="/services" className="text-sm text-brand-accent hover:underline">
              ← Back to Services
            </Link>
          </div>
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h1 className="text-3xl font-bold text-brand-dark mb-4">{selected.title}</h1>
              <p className="text-brand-gray mb-6">{selected.description}</p>
              <Link
                to={`/services/${selected.id}/order`}
                className="bg-brand-accent hover:bg-brand-accentDark text-white font-semibold px-6 py-3 rounded"
              >
                Order This Service
              </Link>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow">
              <h2 className="text-xl font-bold text-brand-purple mb-2">What it is</h2>
              <p className="text-sm text-brand-gray mb-4">
                Detailed explanation of {selected.title}. Ideal for AI workloads requiring secure, scalable compute.
              </p>
              <h2 className="text-xl font-bold text-brand-purple mb-2">Cost Model</h2>
              <p className="text-sm text-brand-gray mb-6">
                Pay-as-you-go or reserved instances. Tiered pricing by usage and support level.
              </p>
              <Link
                to={`/services/${selected.id}/order`}
                className="bg-brand-accent hover:bg-brand-accentDark text-white text-sm font-semibold py-2 px-4 rounded"
              >
                Start Order
              </Link>
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}
