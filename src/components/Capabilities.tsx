// src/pages/Capabilities.tsx
import Layout from '../components/Layout';

const capabilities = [
  {
    title: 'Tenant Isolation',
    desc: 'Logical isolation (VPCs, namespaces), physical isolation, strong IAM policies.'
  },
  {
    title: 'Data Sovereignty Compliance',
    desc: 'Geographic data residency, cross-border transfer controls, and data encryption.'
  },
  {
    title: 'Scalable & Elastic Architecture',
    desc: 'Modular scale out architecture, node sprawling, IaC for efficient multi-tenant provisioning.'
  },
  {
    title: 'Secure Multi-Tenant Networking',
    desc: 'Network segmentation, firewalls, IDS/IPS, zero-trust networking principles.'
  },
  {
    title: 'Compliance by Design',
    desc: 'Integrated compliance aligned with DoD, GDPR, HIPAA, ISO 27001; policy reporting and audit hooks via code.'
  },
  {
    title: 'Data Protection & Privacy by Design',
    desc: 'Encryption, data minimization, access logging, and monitoring.'
  },
  {
    title: 'Auditing, Monitoring & Reporting',
    desc: 'Real-time telemetry, observability pipelines, audit trails, and tenant-specific analytics.'
  },
  {
    title: 'Resource Optimization with Multi-Tenancy',
    desc: 'Shared compute/storage with strict tenant separation and containerization.'
  },
  {
    title: 'Automated Governance',
    desc: 'Policy as Code (PaC), GitOps-based compliance enforcement, CI/CD validation, and drift detection.'
  },
  {
    title: 'Disaster Recovery & High Availability',
    desc: 'Region-specific failovers, local DR mechanisms, immutable backups, and defined RPO/RTO metrics.'
  },
  {
    title: 'Multi-Layered Security Model',
    desc: 'Encryption, access control, intrusion detection, firewalls, endpoint security.'
  },
  {
    title: 'Tenant Self-Service with Governance',
    desc: 'RBAC to allow limited tenant access and enforce governance policies.'
  },
  {
    title: 'Lifecycle Management',
    desc: 'Secure data disposal, automated onboarding / offboarding.'
  },
  {
    title: 'Performance Optimization for Multi-tenant Workloads',
    desc: 'GPU scheduling, distributed workload balancing, model training observability, and inference latency monitoring.'
  }
];

export default function Capabilities() {
  return (
    <Layout>
      <section className="py-16 px-6 bg-white">
        <h1 className="text-3xl font-bold text-center mb-10">Sovereign Architecture Capabilities</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {capabilities.map((cap, idx) => (
            <div
              key={idx}
              className="border rounded-xl p-6 bg-purple-50 hover:shadow-lg transition h-full flex flex-col justify-between"
            >
              <h2 className="text-md font-bold text-purple-800 mb-2 leading-tight">{cap.title}</h2>
              <p className="text-sm text-gray-700 leading-normal">{cap.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
