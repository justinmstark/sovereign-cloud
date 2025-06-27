// src/pages/Home.tsx
import Hero from '../components/Hero';
import CoreServices from '../components/CoreServices';
import IndustrySolutions from '../components/IndustrySolutions';
import Pricing from '../components/Pricing';
import Docs from '../components/Docs';
import WhySovereign from '../components/WhySovereign';
import About from '../components/About';
import CtaBanner from '../components/CtaBanner';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <CoreServices />
      <IndustrySolutions />
      <Pricing />
      <Docs />
      <WhySovereign />
      <About />
      <CtaBanner />
    </Layout>
  );
}
