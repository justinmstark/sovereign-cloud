// src/components/Hero.tsx
import cloudHero from '../assets/cloud-hero.jpg'; // Ensure this image is saved in /src/assets/

export default function Hero() {
  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-5xl font-bold font-sans text-brand-dark mb-6">
            Cloud Services
          </h1>
          <p className="text-lg font-sans text-brand-gray mb-8 max-w-xl">
            Unlock new possibilities and drive growth with our scalable and secure cloud services, tailored to fuel innovation. With seamless integration and robust support, we collaborate closely with your organization throughout your public, private or hybrid cloud journey.
          </p>
          <button className="bg-brand-accent hover:bg-brand-accentDark text-white font-semibold px-6 py-3 rounded shadow">
            Contact sales
          </button>
        </div>
        <div className="flex justify-center">
          <img src={cloudHero} alt="Cloud visualization" className="rounded-xl shadow-lg max-w-full h-auto" />
        </div>
      </div>
    </section>
  );
}
