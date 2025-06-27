// src/components/WhySovereign.tsx
const features = [
  {
    title: "Built for Data Sovereignty",
    desc: "Run AI workloads in compliance with local regulations, including ISM, IRAP, and GDPR."
  },
  {
    title: "High-Performance Infrastructure",
    desc: "Leverage NVIDIA-powered GPUs, InfiniBand, and H200/Hopper-class compute for scalable AI pipelines."
  },
  {
    title: "Integrated Agent Framework",
    desc: "Deploy modular agentic apps with observability, controls, and industry alignment built-in."
  },
  {
    title: "Secure by Design",
    desc: "Air-gapped options, hardened OS layers, and monitored service planes ensure resilient multi-tenant security."
  }
];

export default function WhySovereign() {
  return (
    <section className="py-20 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12">Why Choose Sovereign AI?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {features.map((f, idx) => (
          <div key={idx} className="bg-gray-50 rounded-xl p-6 border shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{f.title}</h3>
            <p className="text-sm text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
