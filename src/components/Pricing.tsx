// src/components/Pricing.tsx
const plans = [
  {
    name: "Starter",
    price: "$0",
    features: [
      "Access to public agent library",
      "Deploy up to 3 models",
      "Community support"
    ],
    highlight: false
  },
  {
    name: "Pro",
    price: "$199/mo",
    features: [
      "Everything in Starter",
      "Priority API access",
      "Deploy unlimited models",
      "Performance monitoring"
    ],
    highlight: true
  },
  {
    name: "Enterprise",
    price: "Contact us",
    features: [
      "Custom agent development",
      "Sovereign region setup",
      "Dedicated support",
      "Integration SLAs"
    ],
    highlight: false
  }
];

export default function Pricing() {
  return (
    <section className="py-1 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`rounded-xl p-6 border shadow-sm text-center ${
              plan.highlight ? 'bg-purple-50 border-purple-600' : 'bg-gray-50'
            }`}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{plan.name}</h3>
            <p className="text-3xl font-bold text-purple-700 mb-4">{plan.price}</p>
            <ul className="text-sm text-gray-700 space-y-2 mb-6">
              {plan.features.map((feature, fidx) => (
                <li key={fidx} className="bg-white py-2 px-3 rounded shadow-sm">{feature}</li>
              ))}
            </ul>
            <button className="bg-purple-600 text-white font-semibold px-4 py-2 rounded hover:bg-purple-700">
              {plan.price === 'Contact us' ? 'Get in Touch' : 'Get Started'}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
