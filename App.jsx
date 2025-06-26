import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import Products from './pages/Products';
import Compliance from './pages/Compliance';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/products" element={<Products />} />
        <Route path="/compliance" element={<Compliance />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
