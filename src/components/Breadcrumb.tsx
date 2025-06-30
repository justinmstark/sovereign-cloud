import { Link } from 'react-router-dom';

interface BreadcrumbProps {
  segments: { label: string; path?: string }[];
}

export default function Breadcrumb({ segments }: BreadcrumbProps) {
  return (
    <nav className="text-sm text-gray-600 mb-4">
      <ul className="flex items-center space-x-2">
        <li>
          <Link to="/" className="text-brand-accent hover:underline">Home</Link>
        </li>
        {segments.map((segment, idx) => (
          <li key={idx} className="flex items-center space-x-2">
            <span>/</span>
            {segment.path ? (
              <Link to={segment.path} className="text-brand-accent hover:underline">{segment.label}</Link>
            ) : (
              <span className="text-gray-800 font-medium">{segment.label}</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
