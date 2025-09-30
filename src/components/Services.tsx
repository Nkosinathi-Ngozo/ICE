import { Code, Database, Network, Shield, Brain, Cloud, AlertTriangle, Server, Cpu } from 'lucide-react';

interface ServicesProps {
  scrollY: number;
}

export default function Services({ scrollY }: ServicesProps) {
  const services = [
    {
      icon: Code,
      title: 'Software Development',
      description: 'Custom software solutions that address specific needs and complexities for business operations.'
    },
    {
      icon: Database,
      title: 'Business Intelligence (BI)',
      description: 'Turn complex data into clear, actionable insights with customized dashboards and real-time analytics.'
    },
    {
      icon: Network,
      title: 'Enterprise Architecture',
      description: 'Analyze current and desired future system architecture to identify gaps and outline clear roadmaps.'
    },
    {
      icon: Shield,
      title: 'Cyber Security',
      description: 'Advanced AI-driven techniques protecting businesses from DDoS attacks, phishing, and malicious intrusions.'
    },
    {
      icon: Brain,
      title: 'Data Science',
      description: 'AI and machine learning techniques including computer vision, prediction, and natural language processing.'
    },
    {
      icon: Cpu,
      title: 'ICT Systems Integration',
      description: 'End-to-end integration expertise connecting diverse software systems for automated business processes.'
    },
    {
      icon: AlertTriangle,
      title: 'IT Crisis Management',
      description: 'Swift solutions to IT system meltdowns, restoring systems to normal, stable operating levels.'
    },
    {
      icon: Cloud,
      title: 'Cloud & Hosting Solutions',
      description: 'Store, manage, and access data, websites, and applications over the internet.'
    },
    {
      icon: Server,
      title: 'IT Infrastructure',
      description: 'Design, install, and manage everything from networks and servers to hardware and data centers.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          transform: `translateY(${scrollY * 0.2}px)`,
          backgroundImage: 'radial-gradient(circle at 50% 50%, #dc2626 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            OUR <span className="text-red-600">SERVICES</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-red-600"
            >
              <service.icon size={48} className="text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}