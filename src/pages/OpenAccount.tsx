// src/pages/OpenAccount.tsx
export default function OpenAccount() {
  return (
    <section className="bg-gray-100 py-20 px-6 mt-32">
      <div className="max-w-xl mx-auto bg-white rounded-xl shadow-card p-8">
        <h1 className="text-2xl font-bold text-center text-brand-dark mb-6">Open a New Account</h1>
        <form className="space-y-6">
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
            <label className="block text-sm font-medium text-brand-dark mb-1">Email</label>
            <input type="email" className="w-full border rounded px-4 py-2" />
          </div>

          <div>
            <label className="block text-sm font-medium text-brand-dark mb-1">Company</label>
            <input type="text" className="w-full border rounded px-4 py-2" />
          </div>

          <div>
            <label className="block text-sm font-medium text-brand-dark mb-1">Reason for Opening Account</label>
            <textarea className="w-full border rounded px-4 py-2" rows={4}></textarea>
          </div>

          <div className="text-right">
            <button type="submit" className="bg-brand-accent hover:bg-brand-accentDark text-white font-semibold px-6 py-2 rounded">
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
