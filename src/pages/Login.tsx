// src/pages/Login.tsx
export default function Login() {
  return (
     <section className="bg-gray-100 py-20 px-6 mt-32">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-card p-8">
        <h1 className="text-2xl font-bold text-center text-brand-dark mb-6">Sign in to your account</h1>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-brand-dark mb-1">Email address</label>
            <input type="email" className="w-full border rounded px-4 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-brand-dark mb-1">Password</label>
            <input type="password" className="w-full border rounded px-4 py-2" />
          </div>
          <div className="flex justify-between items-center">
            <label className="text-sm text-brand-gray">
              <input type="checkbox" className="mr-2" /> Remember me
            </label>
            <a href="#" className="text-sm text-brand-purple hover:underline">Forgot password?</a>
          </div>
          <div>
            <button type="submit" className="w-full bg-brand-accent hover:bg-brand-accentDark text-white font-semibold py-2 px-4 rounded">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
