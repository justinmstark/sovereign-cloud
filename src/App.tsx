import { Routes, Route } from 'react-router-dom';
import TabbedHomepage from './pages/TabbedHomepage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<TabbedHomepage />} />
      {/* 👇 Add this explicitly */}
      <Route index element={<TabbedHomepage />} />
    </Routes>
  );
}
