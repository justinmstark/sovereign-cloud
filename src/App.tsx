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
import Research from './pages/Research';
import BankingCanada from './pages/BankingCanada';
import PublicSectorCanada from './pages/PublicSectorCanada';
import AerospaceDefenceCanada from './pages/AerospaceDefenceCanada';
import AutomotiveCanada from './pages/AutomotiveCanada';
import CapitalMarketsCanada from './pages/CapitalMarketsCanada';
import ChemicalsCanada from './pages/ChemicalsCanada';
import CommunicationsMediaCanada from './pages/CommunicationsMediaCanada';
import ConsumerGoodsCanada from './pages/ConsumerGoodsCanada';
import EnergyCanada from './pages/EnergyCanada';
import HealthCanada from './pages/HealthCanada';
import HighTechCanada from './pages/HighTechCanada';
import IndustrialCanada from './pages/IndustrialCanada';
import InsuranceCanada from './pages/InsuranceCanada';
import LifeSciencesCanada from './pages/LifeSciencesCanada';
import NaturalResourcesCanada from './pages/NaturalResourcesCanada';
import RetailCanada from './pages/RetailCanada';
import SoftwarePlatformsCanada from './pages/SoftwarePlatformsCanada';
import TravelCanada from './pages/TravelCanada';
import UtilitiesCanada from './pages/UtilitiesCanada';

export default function App() {
  return (
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
	<Route path="/research" element={<Research />} />
	<Route path="/research/:id" element={<Research />} />
	<Route path="/industries/banking/canada" element={<Layout><BankingCanada /></Layout>} />
	<Route path="/industries/public-sector/canada" element={<Layout><PublicSectorCanada /></Layout>} />
	<Route path="/industries/aerospace-defence/canada" element={<AerospaceDefenceCanada />} />
	<Route path="/industries/aerospace-defence/canada/:id" element={<AerospaceDefenceCanada />} />
	<Route path="/industries/automotive/canada" element={<AutomotiveCanada/>} />
	<Route path="/industries/capital-markets/canada" element={<CapitalMarketsCanada />} />
	<Route path="/industries/chemicals/canada" element={<ChemicalsCanada />} />
	<Route path="/industries/communications-media/canada" element={<CommunicationsMediaCanada />} />
	<Route path="/industries/consumer-goods-services/canada" element={<ConsumerGoodsCanada />} />
	<Route path="/industries/energy/canada" element={<EnergyCanada />} />
	<Route path="/industries/health/canada" element={<HealthCanada />} />
	<Route path="/industries/high-tech/canada" element={<HighTechCanada />} />
	<Route path="/industries/industrial/canada" element={<IndustrialCanada />} />
	<Route path="/industries/insurance/canada" element={<InsuranceCanada />} />
	<Route path="/industries/life-sciences/canada" element={<LifeSciencesCanada />} />
	<Route path="/industries/natural-resources/canada" element={<NaturalResourcesCanada />} />
	<Route path="/industries/retail/canada" element={<RetailCanada />} />
	<Route path="/industries/software-platforms/canada" element={<SoftwarePlatformsCanada />} />
	<Route path="/industries/travel/canada" element={<TravelCanada />} />
	<Route path="/industries/utilities/canada" element={<UtilitiesCanada />} />
      </Routes>
    </Router>
  );
}
