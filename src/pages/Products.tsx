export default function Products() {
  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-purple-700 mb-10 text-center">Everything you need for a sovereign cloud stack</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Column 1 */}
        <div className="bg-white border rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Resilient Software Stack</h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="bg-gray-50 rounded px-3 py-2">Managed Service for Kubernetes</li>
            <li className="bg-gray-50 rounded px-3 py-2">Network Balancer</li>
            <li className="bg-gray-50 rounded px-3 py-2">Monitoring</li>
            <li className="bg-gray-50 rounded px-3 py-2">SLA</li>
            <li className="bg-gray-50 rounded px-3 py-2">Autoscaling</li>
            <li className="bg-gray-50 rounded px-3 py-2">Terraform</li>
            <li className="bg-gray-50 rounded px-3 py-2">On-demand Contracts</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="bg-white border rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Environment for GenAI Apps</h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="bg-gray-50 rounded px-3 py-2">Object Storage</li>
            <li className="bg-gray-50 rounded px-3 py-2">Managed OpenSearch</li>
            <li className="bg-gray-50 rounded px-3 py-2">Managed Redis®</li>
            <li className="bg-gray-50 rounded px-3 py-2">ClickHouse / PostgreSQL</li>
            <li className="bg-gray-50 rounded px-3 py-2">vLLM + Gradio</li>
            <li className="bg-gray-50 rounded px-3 py-2">Triton™, RayIO, Kubeflow, Qdrant</li>
            <li className="bg-gray-50 rounded px-3 py-2">Marketplace</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="bg-white border rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Hardware for Cost-Effectiveness</h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="bg-gray-50 rounded px-3 py-2">CPUs for conventional models</li>
            <li className="bg-gray-50 rounded px-3 py-2">L40s for models up to 8B</li>
            <li className="bg-gray-50 rounded px-3 py-2">NVLink (H100 SXM5)</li>
            <li className="bg-gray-50 rounded px-3 py-2">InfiniBand clusters (320B+ models)</li>
            <li className="bg-gray-50 rounded px-3 py-2">H200 and B200 (coming soon)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
