// src/components/IndustrySolutions.tsx
const groupedSolutions = [
  {
    title: "Industry-Specific Agents",
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

export default function IndustrySolutions() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">Agentic AI Solutions by Industry</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {groupedSolutions.map((group, idx) => (
          <div key={idx} className="bg-white border rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-purple-800 mb-4">{group.title}</h3>
            <ul className="space-y-2">
              {group.items.map((item, i) => (
                <li key={i} className="bg-gray-50 px-4 py-2 rounded text-sm text-gray-700 shadow-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
