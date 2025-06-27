// ✅ Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-600 py-6 mt-12 border-t">
      <div className="max-w-6xl mx-auto px-6 flex justify-between">
        <div>
          <p className="text-sm">&copy; 2025 Sovereign Cloud. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-sm hover:text-purple-600">Legal</a>
          <a href="#" className="text-sm hover:text-purple-600">Contact</a>
          <a href="https://github.com/justinmstark/sovereign-cloud" className="text-sm hover:text-purple-600">GitHub</a>
        </div>
      </div>
    </footer>
  );
}