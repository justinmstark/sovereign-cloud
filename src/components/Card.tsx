// ✅ Card.tsx
interface CardProps {
  title: string;
  desc: string;
}

export default function Card({ title, desc }: CardProps) {
  return (
    <div className="border rounded-xl shadow-sm p-6 hover:shadow-md transition bg-white">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );
}