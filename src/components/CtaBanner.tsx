// src/components/CtaBanner.tsx
export default function CtaBanner() {
  return (
    <section className="bg-purple-700 text-white text-center py-16 px-6">
      <h2 className="text-3xl font-bold mb-4">Ready to build with Sovereign AI?</h2>
      <p className="text-lg mb-6">
        Explore the platform, deploy agents, or contact our solution architects to get started today.
      </p>
      <button className="bg-white text-purple-700 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100 transition">
        Get Started
      </button>
    </section>
  );
}
