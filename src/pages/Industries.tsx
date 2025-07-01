import { LucideIcon, Plane, Banknote, Building2, BarChart3, FlaskConical, Radio, ShoppingBag, Flame, HeartPulse, Cpu, Factory, Shield, TreePine, ShoppingCart, Code, Zap} from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Breadcrumb from '../components/Breadcrumb';

const industries: { name: string; icon?: LucideIcon; link?: string }[] = [
  { name: 'Aerospace and Defense', icon: Plane, link: '/industries/aerospace-defence/canada' },
  { name: 'Automotive', icon: Building2, link: '/industries/automotive/canada' },
  { name: 'Banking', icon: Banknote, link: '/industries/banking/canada' },
  { name: 'Capital Markets', icon: BarChart3, link: '/industries/capital-markets/canada' },
  { name: 'Chemicals', icon: FlaskConical, link: '/industries/chemicals/canada' },
  { name: 'Communications and Media', icon: Radio, link: '/industries/communications-media/canada' },
  { name: 'Consumer Goods and Services', icon: ShoppingBag, link: '/industries/consumer-goods-services/canada' },
  { name: 'Energy', icon: Flame, link: '/industries/energy/canada' },
  { name: 'Health', icon: HeartPulse, link: '/industries/health/canada' },
  { name: 'High Tech', icon: Cpu, link: '/industries/high-tech/canada' } ,
  { name: 'Industrial', icon: Factory, link: '/industries/industrial/canada' },
  { name: 'Insurance', icon: Shield, link: '/industries/insurance/canada' },
  { name: 'Life Sciences', icon: FlaskConical, link: '/industries/life-sciences/canada' },
  { name: 'Natural Resources', icon: TreePine, link: '/industries/natural-resources/canada' },
  { name: 'Public Service', link: '/industries/public-sector/canada' },
  { name: 'Retail', icon: ShoppingCart, link: '/industries/retail/canada' },
  { name: 'Software and Platforms', icon: Code, link: '/industries/software-platforms/canada' },
  { name: 'Travel', icon: Plane, link: '/industries/travel/canada' },
  { name: 'Utilities', icon: Zap, link: '/industries/utilities/canada' }
];

export default function Industries() {
  return (
    <Layout>
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb segments={[{ label: 'Industries' }]} />
          <h1 className="text-3xl font-bold text-brand-dark mb-6">Select Industry</h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {industries.map((industry, idx) => {
              const Icon = industry.icon || Plane;
              const content = (
                <div className="bg-brand-light border rounded-xl shadow-card hover:shadow-cardHover p-6 flex flex-col justify-between transition text-center">
                  <div className="flex flex-col items-center space-y-4">
                    <Icon className="w-6 h-6 text-brand-purple" />
                    <span className="text-sm font-medium text-brand-dark leading-tight">
                      {industry.name}
                    </span>
                  </div>
                </div>
              );

              // internal route vs external link
              return industry.link?.startsWith('/') ? (
                <Link key={idx} to={industry.link}>
                  {content}
                </Link>
              ) : industry.link ? (
                <a key={idx} href={industry.link} target="_blank" rel="noopener noreferrer">
                  {content}
                </a>
              ) : (
                <div key={idx}>{content}</div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
