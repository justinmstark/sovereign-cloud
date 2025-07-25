// src/components/Layout.tsx
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <div className="h-16" />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}