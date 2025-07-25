// src/pages/ServiceDetail.tsx
import { useParams, Link } from 'react-router-dom';

const serviceDetails: Record<string, { title: string; summary: string; description: string; costModel: string }> = {
  gpu: {
    title: 'GPU as a Service',
    summary: 'Access dedicated high-performance GPUs on demand for your training and inference workloads.',
    description: 'Ideal for deep learning, generative AI, and data-heavy workloads requiring parallel processing. You can scale compute resources instantly with secure infrastructure.',
    costModel: 'Pay-as-you-go or reserved instances starting from $0.40/hr per GPU node.'
  },
  inferencing: {
    title: 'Inferencing as a Service',
    summary: 'Deploy tuned AI models for real-time inference on scalable, low-latency infrastructure.',
    description: 'Best suited for customer-facing or streaming AI models. Features secure endpoints, model versioning, and autoscaling.',
    costModel: 'Starts from $0.15/hr for burst mode or $50/month flat-rate with SLA guarantees.'
  },
  model: {
    title: 'Model as a Service',
    summary: 'Host, monitor, and scale custom or pre-trained LLMs with lifecycle management.',
    description: 'Ideal for enterprises building proprietary models. Supports gated access, usage metering, and drift detection.',
    costModel: 'Tiered plans from $99/month (starter) to $999/month (enterprise).'
  },
  hpc: {
    title: 'HPC as a Service',
    summary: 'Accelerate scientific and engineering workloads using high performance compute.',
    description: 'Optimized for simulations, genome sequencing, and large-scale ML workflows. Includes multi-node orchestration and InfiniBand support.',
    costModel: 'Cluster pricing from $1.25/hr per 128-core job node. Includes job queueing and SLURM integration.'
  },
  industry: {
    title: 'Industry Solutions',
    summary: 'Tailored AI solutions for your sector — healthcare, finance, manufacturing, and more.',
    description: 'Includes prebuilt pipelines, compliance templates, and business process integrations for regulated environments.',
    costModel: 'Solution-based bundles starting from $4,000/project, or custom per engagement.'
  }
};

export default function ServiceDetail() {
  const { id } = useParams();

  if (!id) {
    return (
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-brand-dark mb-6">Select a Service</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(serviceDetails).map(([key, svc]) => (
              <div key={key} className="bg-brand-light border rounded-xl shadow-card p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-brand-purple mb-2 font-sans">{svc.title}</h3>
                  <p className="text-sm text-brand-gray mb-4 font-sans">{svc.summary}</p>
                </div>
                <div className="mt-auto">
                  <Link
                    to={`/services/${key}`}
                    className="inline-block bg-brand-accent hover:bg-brand-accentDark text-white font-semibold py-2 px-4 rounded"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const service = serviceDetails[id || ''];
  if (!service) {
    return <div className="text-center py-20 text-gray-500">Service not found.</div>;
  }

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h1 className="text-4xl font-bold text-brand-dark mb-4 font-sans">{service.title}</h1>
          <p className="text-brand-gray text-lg mb-4 font-sans">{service.summary}</p>
          <p className="text-sm text-brand-gray mb-6 font-sans">{service.description}</p>
          <a
            href="#order"
            className="bg-brand-accent hover:bg-brand-accentDark text-white font-semibold py-2 px-4 rounded"
          >
            Order This Service
          </a>
        </div>
        <div className="bg-brand-light p-6 rounded-xl shadow-card">
          <h2 className="text-xl font-semibold text-brand-purple mb-2">What it is</h2>
          <p className="text-sm text-brand-gray mb-4 font-sans">{service.description}</p>

          <h2 className="text-xl font-semibold text-brand-purple mb-2">Cost Model</h2>
          <p className="text-sm text-brand-gray mb-4 font-sans">{service.costModel}</p>

          <a
            href="#order"
            className="inline-block mt-4 bg-brand-accent hover:bg-brand-accentDark text-white font-semibold py-2 px-4 rounded"
          >
            Start Order
          </a>
        </div>
      </div>
    </section>
  );
}
