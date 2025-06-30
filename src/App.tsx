// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import TabbedHomepage from './pages/TabbedHomepage';
import Solutions from './pages/Solutions';
import Products from './pages/Products';
import Compliance from './pages/Compliance';
import Capabilities from './pages/Capabilities';
import Industries from './pages/Industries';
import ServiceDetail from './pages/ServiceDetail';
import OrderGPU from './pages/OrderGPU';
import Contact from './pages/Contact';
import Login from './pages/Login';
import OpenAccount from './pages/OpenAccount';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TabbedHomepage />} />
        <Route path="/solutions" element={<Layout><Solutions /></Layout>} />
        <Route path="/products" element={<Layout><Products /></Layout>} />
        <Route path="/compliance" element={<Layout><Compliance /></Layout>} />
        <Route path="/capabilities" element={<Layout><Capabilities /></Layout>} />
        <Route path="/industries" element={<Layout><Industries /></Layout>} />
        <Route path="/services" element={<Layout><ServiceDetail /></Layout>} />
        <Route path="/services/:id" element={<Layout><ServiceDetail /></Layout>} />
        <Route path="/services/gpu/order" element={<Layout><OrderGPU /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/login" element={<Layout><Login /></Layout>} />
        <Route path="/open-account" element={<Layout><OpenAccount /></Layout>} />
      </Routes>
    </Router>
  );
}
