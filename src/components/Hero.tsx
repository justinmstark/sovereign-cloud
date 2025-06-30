// src/components/Hero.tsx
import cloudHero from '../assets/cloud-hero.jpg';

export default function Hero() {
  return (
    <section className="bg-gray-100 pt-28 pb-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Block */}
        <div className="text-left">
          <h1 className="text-5xl font-bold text-brand-dark mb-6">
            Cloud Services
          </h1>
          <p className="text-lg text-brand-gray mb-8">
            Unlock new possibilities and drive growth with our scalable and secure cloud services, tailored to fuel innovation. With seamless integration and robust support, we collaborate closely with your organization throughout your public, private or hybrid cloud journey.
          </p>
          <button className="bg-brand-accent hover:bg-brand-accentDark text-white font-semibold px-6 py-3 rounded shadow">
            Contact sales
          </button>
        </div>

        {/* Image Block */}
        <div className="flex justify-center">
          <div className="max-w-[400px] w-full overflow-hidden rounded-l-[10rem] shadow-lg">
            <img
              src={cloudHero}
              alt="Cloud visualization"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
