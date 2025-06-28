import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import TabbedHomepage from './pages/TabbedHomepage'; // or Home if using that
import Solutions from './pages/Solutions';
import Products from './pages/Products';
import Compliance from './pages/Compliance';
import Capabilities from './pages/Capabilities';
import Industries from './pages/Industries';
import ServiceDetail from './pages/ServiceDetail';
import OrderGPU from './pages/OrderGPU';

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
	<Route path="/services/:id" element={<Layout><ServiceDetail /></Layout>} />
	<Route path="/services/gpu/order" element={<Layout><OrderGPU /></Layout>} />
      </Routes>
    </Router>
  );
}
