import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Sovereign Industry Solutions', path: '/solutions' },
    { label: 'Products', path: '/products' },
    { label: 'Compliance Services', path: '/compliance' }
  ];

  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <div className="text-2xl font-bold text-gray-800">Sovereign AI</div>
      <div className="space-x-3 flex flex-wrap justify-end">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`px-4 py-2 rounded text-sm font-medium transition
              ${location.pathname === item.path
                ? 'bg-purple-700 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'}`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
