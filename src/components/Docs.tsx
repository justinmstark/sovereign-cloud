// src/components/Docs.tsx
const docs = [
  {
    title: "Sovereign AI Documentation",
    description: "Explore API usage, data handling policies, and deployment guides for our full sovereign platform.",
    link: "#"
  },
  {
    title: "Integration FAQ",
    description: "Answers to common questions on onboarding, service access, security zones, and scaling.",
    link: "#"
  }
];

export default function Docs() {
  return (
    <section className="py-16 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">Resources & Documentation</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {docs.map((doc, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{doc.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{doc.description}</p>
            <a
              href={doc.link}
              className="text-purple-700 font-semibold hover:underline text-sm"
            >
              View Documentation →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
