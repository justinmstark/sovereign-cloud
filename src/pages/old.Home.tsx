// ✅ Home.jsx
import Card from '../components/Card';

const features = [
  {
    title: "No-cost cloud migration",
    desc: "Easily move and set up workloads on Sovereign Cloud infrastructure",
  },
  {
    title: "Easy to use",
    desc: "Access a rich collection of over 45 compatible cloud services",
  },
  {
    title: "Scale with confidence",
    desc: "Securely deploy applications with high-availability architecture",
  },
  {
    title: "Continuous security",
    desc: "Proactive monitoring and protection of your data environments",
  },
];

export default function Home() {
  return (
    <div className="px-6 py-12 max-w-6xl mx-auto">
      <h1 className="text-5xl font-bold text-gray-900 mb-4">
        SOVEREIGN <span className="text-purple-700">Cloud</span>
      </h1>
      <p className="text-xl text-gray-600 mb-10">
        Run sensitive workloads and applications on sovereign cloud infrastructure
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <Card title="Sovereign Industry Solutions" desc="Customized cloud offerings designed strictly for domestic industry needs" />
        <Card title="Products" desc="Cloud native products for AI, analytics, security, compute, and more" />
        <Card title="Compliance Services" desc="Expert guidance and assurances to meet local regulatory mandates" />
      </div>

      <h2 className="text-2xl font-semibold mb-6">Get started on Sovereign Cloud today</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((f, idx) => (
          <div key={idx} className="flex space-x-4">
            <div className="h-10 w-10 rounded-full bg-green-500 text-white flex items-center justify-center text-xl font-bold">
              ✓
            </div>
            <div>
              <h3 className="font-bold text-gray-800">{f.title}</h3>
              <p className="text-gray-600 text-sm">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}