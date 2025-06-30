import { useState } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';

export default function Solutions() {
  const [activeGroup, setActiveGroup] = useState<string | null>(null);

  const toggleGroup = (title: string) => {
    setActiveGroup(prev => (prev === title ? null : title));
  };

  const solutionGroups = [
    {
      title: "Industry-Specific Services",
      items: [
        "B2B Marketing",
        "Hyper-personalization for Beauty",
        "Revenue Growth Management for CG&S",
        "Intelligent Sales Coach for CG&S",
        "Contact Center Agent-assist for Telco",
        "P&C Underwriting for Insurance",
        "AI Led Claims for Insurance",
        "Clinical Trial Companion for Life Sciences",
        "Asset Troubleshooting for Industrial",
        "Transportation Router and Optimizer for Retail",
        "Travel Companion for Airlines"
      ]
    },
    {
      title: "Enterprise Ops & Decision Intelligence",
      items: [
        "Intelligent Recruiting for Public Sector",
        "Commercial Credit Assistant Intelligence for Banking",
        "KYC Review Intelligence for Banking",
        "Agentic AI Enabled Deal Advisory for FDCI",
        "WebApp Security Assessor"
      ]
    },
    {
      title: "Agent Framework & Infra Assistants",
      items: [
        "Order-to-Cash AI Agent Assistant",
        "Agentic AI Source to Pay: Sourcing",
        "Agentic AI Source to Pay: Requisition",
        "Agentic AI Source to Pay: Invoicing and Validation",
        "Supply and Demand Gap Optimization (SAP Integration)",
        "Trade Marketing Agentic Assistant",
        "Warehouse Scheduling Assistant",
        "Utility Asset Maintenance Agent System",
        "Dynamic Customer Support with AI Agent"
      ]
    },
    {
      title: "Modernization & Analytics",
      items: [
        "Marketing Effectiveness Reconciler for B2C",
        "TDLC Legacy Modernization for Banking",
        "Supply Chain Demand Forecasting for CG&S",
        "Testing for Agentforce AI Agents"
      ]
    }
  ];

  const upcomingGroups = [
    {
      title: "E2E Merchandise Planning",
      items: [
        "Category Manager *",
        "Inventory Manager *",
        "Pricing/Promotion Manager *",
        "Physical Space Manager *",
        "Digital Planning Manager *",
        "Digital Marketing Manager *"
      ]
    },
    {
      title: "Digital Lab Assistants",
      items: [
        "Research Scientist **",
        "Lab Technician **",
        "Research Analyst **"
      ]
    },
    {
      title: "Order Management",
      items: [
        "Order Creation/Modification **",
        "Order Fulfillment **",
        "Query Resolution **"
      ]
    }
  ];

  return (
    <div className="px-6 pt-32 pb-12 max-w-7xl mx-auto">
<Breadcrumb
  segments={[
    { label: 'Services', path: '/services' },
    { label: 'Industry Solutions' }
  ]}
/>
      

      <h1 className="text-4xl font-bold text-purple-700 mb-8 text-center">
        Live Agentic Jumpstarters and Existing Pipeline
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* What we have */}
        <div className="bg-white border rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-purple-800 mb-4">What do we have</h2>
          {solutionGroups.map((group, gIdx) => (
            <div key={gIdx} className="mb-4 border rounded">
              <button
                onClick={() => toggleGroup(group.title)}
                className="w-full text-left px-4 py-2 font-semibold text-gray-800 bg-gray-100 hover:bg-gray-200 rounded-t"
              >
                {group.title}
              </button>
              {activeGroup === group.title && (
                <div className="p-4 space-y-2 bg-gray-50 rounded-b">
                  {group.items.map((item, idx) => (
                    <div key={idx} className="bg-white px-4 py-2 rounded text-sm text-gray-700 shadow-sm">
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* What's upcoming */}
        <div className="bg-white border rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-purple-800 mb-4">What’s upcoming</h2>
          {upcomingGroups.map((group, gIdx) => (
            <div key={gIdx} className="mb-4 border rounded">
              <button
                onClick={() => toggleGroup(group.title)}
                className="w-full text-left px-4 py-2 font-semibold text-gray-800 bg-gray-100 hover:bg-gray-200 rounded-t"
              >
                {group.title}
              </button>
              {activeGroup === group.title && (
                <div className="p-4 space-y-2 bg-gray-50 rounded-b">
                  {group.items.map((item, idx) => (
                    <div key={idx + 1000} className="bg-white px-4 py-2 rounded text-sm text-gray-700 shadow-sm">
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="mt-4 text-xs text-gray-500 italic">
            * Cross-industry application<br />
            ** Target Go-live: May / June
          </div>
        </div>
      </div>
    </div>
  );
}
