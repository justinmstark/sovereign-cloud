// src/components/Hero.tsx
export default function Hero() {
  return (
    <section className="bg-purple-700 text-white py-20 px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Unlock the Future of AI with Sovereign Cloud</h1>
      <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
        Your trusted platform for secure, high-performance AI services, built on a foundation of data sovereignty and privacy.
      </p>
      <button className="bg-white text-purple-700 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100 transition">
        Explore Our AI Services
      </button>
    </section>
  );
}
