import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Industries', path: '/industries' },
 // { label: 'Sovereign Industry Solutions', path: '/solutions' },
    { label: 'Contact Us', path: '/contact' },
    { label: 'Open Account', path: '/open-account' },
    { label: 'Login', path: '/login' }
  ];

  return (
    <div className="w-full bg-white shadow-md fixed top-0 z-30">
      <nav className="w-full flex justify-between items-center h-16 px-6">
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/src/assets/telus-digital-logo.png"
            alt="Sovereign AI"
            className="h-8 w-auto object-contain"
          />
        </Link>
        <div className="flex flex-wrap justify-end gap-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-4 py-2 w-[140px] text-center rounded text-sm font-medium transition
                ${location.pathname === item.path
                  ? 'bg-purple-700 text-white border border-purple-700'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
      <div className="h-20" /> {/* spacer to offset fixed navbar */}
    </div>
  );
}
