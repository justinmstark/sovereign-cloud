import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import CoreServices from '../components/CoreServices';
import Solutions from './Solutions';
import Pricing from '../components/Pricing';
import Docs from '../components/Docs';
import WhySovereign from '../components/WhySovereign';
import About from '../components/About';
import Layout from '../components/Layout';
import Research from './Research'; // ✅ Inline Research component
import ServiceDetail from './ServiceDetail'; //

const tabs = [
  { label: 'Overview', component: <Hero /> },
// { label: 'Services', route: '/services' }, // ✅ Routed only
  { label: 'Services', component: <ServiceDetail embedded /> },
  { label: 'Solutions', component: <Solutions /> },
  { label: 'Research', component: <Research /> }, // ✅ Now inline
  { label: 'Pricing', component: <Pricing /> },
  { label: 'Documentation', component: <Docs /> },
  { label: 'Why Sovereign', component: <WhySovereign /> },
  { label: 'About', component: <About /> },
];

export default function TabbedHomepage() {
  const location = useLocation();
  const tabFromState = location.state?.activeTab;
  const [activeTab, setActiveTab] = useState('Overview');

  useEffect(() => {
    if (tabFromState) {
      setActiveTab(tabFromState);
    }
  }, [tabFromState]);

  const currentTab = tabs.find(tab => tab.label === activeTab)?.component;

  return (
    <Layout>
      <div className="w-full min-h-screen px-4 py-6 pt-24 max-w-7xl mx-auto">
        
        {/* Tab Menu */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {tabs.map(tab =>
            tab.route ? (
              <Link
                key={tab.label}
                to={tab.route}
                state={{ activeTab: tab.label }}
                className={`px-4 py-2 rounded font-medium text-sm shadow-sm border transition
                  ${activeTab === tab.label ? 'bg-purple-700 text-white border-purple-700' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}
              >
                {tab.label}
              </Link>
            ) : (
              <button
                key={tab.label}
                onClick={() => setActiveTab(tab.label)}
                className={`px-4 py-2 rounded font-medium text-sm shadow-sm border transition
                  ${activeTab === tab.label ? 'bg-purple-700 text-white border-purple-700' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}
              >
                {tab.label}
              </button>
            )
          )}
        </div>

        {/* Tab content */}
        {currentTab}
      </div>
    </Layout>
  );
}
