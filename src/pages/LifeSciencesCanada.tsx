import Layout from '../components/Layout';
import Breadcrumb from '../components/Breadcrumb';

const lifeSciencesUseCases = [
  {
    id: 'reinventing-life-sciences-genai',
    title: 'Reinventing Life Sciences in the Age of Generative AI',
    description: 'Explore how generative AI is transforming the life sciences industry, enhancing drug discovery and improving patient care.',
    url: 'https://www.accenture.com/ca-en/insights/life-sciences/reinventing-life-sciences-age-generative-ai',
  },
  {
    id: 'life-sciences-technology-services',
    title: 'Life Sciences Technology Services',
    description: 'Learn how life sciences organizations can embrace intelligent technology to address inefficiencies, reduce costs, and unlock data potential.',
    url: 'https://www.accenture.com/ca-en/industries/life-sciences/technology',
  },
  {
    id: 'life-sciences-consulting-services',
    title: 'Life Sciences Consulting Services',
    description: 'Discover how Accenture’s consulting services help life sciences companies deliver better patient outcomes in a dynamic healthcare landscape.',
    url: 'https://www.accenture.com/ca-en/industries/life-sciences',
  },
  {
    id: 'research-development-life-sciences',
    title: 'Research and Development in Life Sciences',
    description: 'Understand how to innovate faster, boost productivity, and transform patient outcomes through life sciences R&D and intelligent technologies.',
    url: 'https://lifesciences.accenture.com/',
  },
  {
    id: 'life-sciences-advanced-therapies',
    title: 'Life Sciences Advanced Therapies',
    description: 'Explore how next-generation precision medicines are transforming patient outcomes and how to bring these therapies to more people.',
    url: 'https://www.accenture.com/ca-en/industries/life-sciences/advanced-therapies',
  },
  {
    id: 'life-sciences-medical-technology',
    title: 'Life Sciences Medical Technology',
    description: 'Learn how intelligent technologies like generative AI and predictive analytics are reshaping the MedTech industry.',
    url: 'https://www.accenture.com/ca-en/industries/life-sciences/medical-technology',
  },
];

export default function LifeSciencesCanada() {
  return (
    <Layout>
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb segments={[
            { label: 'Industries', href: '/industries' },
            { label: 'Life Sciences' },
            { label: 'Canada' }
          ]} />
          <h1 className="text-3xl font-bold text-brand-dark mb-6">Life Sciences & AI in Canada</h1>
          <p className="text-brand-gray mb-10 text-sm max-w-3xl">
            Discover how Canadian life sciences companies are leveraging generative AI and advanced technologies to transform operations, enhance patient care, and drive innovation.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {lifeSciencesUseCases.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-light border rounded-xl shadow-card hover:shadow-cardHover p-6 flex flex-col justify-between transition text-center"
              >
                <div>
                  <h2 className="text-lg font-semibold text-brand-purple mb-2">{item.title}</h2>
                  <p className="text-sm text-brand-gray mb-4">{item.description}</p>
                </div>
                <div className="mt-auto text-brand-accent font-semibold text-sm underline">
                  Learn More
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
