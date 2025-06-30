// src/pages/Contact.tsx
export default function Contact() {
  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-brand-dark mb-4">Let’s connect</h1>
        <p className="text-brand-gray text-lg mb-10">
          Our team is here to help you understand how Sovereign Cloud can support your AI strategy.
        </p>

        <form className="bg-white shadow-card rounded-xl p-8 text-left space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-brand-dark mb-1">First Name</label>
              <input type="text" className="w-full border rounded px-4 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium text-brand-dark mb-1">Last Name</label>
              <input type="text" className="w-full border rounded px-4 py-2" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-brand-dark mb-1">Email Address</label>
            <input type="email" className="w-full border rounded px-4 py-2" />
          </div>

          <div>
            <label className="block text-sm font-medium text-brand-dark mb-1">Message</label>
            <textarea rows={4} className="w-full border rounded px-4 py-2" />
          </div>

          <div className="text-right">
            <button type="submit" className="bg-brand-accent hover:bg-brand-accentDark text-white font-semibold px-6 py-2 rounded">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
