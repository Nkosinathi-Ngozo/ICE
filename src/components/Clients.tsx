import { Building2, Briefcase } from 'lucide-react';

export default function Clients() {
  const clients = [
    {
      name: 'Department of Home Affairs',
      services: ['IT Crisis Management (NPR)', 'Project Management']
    },
    {
      name: 'Government Printing Works',
      services: ['Project Management', 'Software Development']
    },
    {
      name: 'Tshela Healthcare (Pty) Ltd',
      services: ['Project Management', 'Enterprise Architecture']
    },
    {
      name: 'Crown Accounting (Pty) Ltd',
      services: ['ERP Implementation']
    },
    {
      name: 'Reeg Finance (Pty) Ltd',
      services: ['Project Management']
    },
    {
      name: 'SMC Projects (Pty) Ltd',
      services: ['ERP and Web Integration']
    },
    {
      name: 'Dalesky & Associates CC',
      services: ['Computer Forensic Investigation']
    },
    {
      name: 'Phatsimo Engineering',
      services: ['Data Loss Recovery']
    }
  ];

  return (
    <section id="clients" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            OUR <span className="text-red-600">CLIENTS</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Companies we worked with</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg border-2 border-gray-200 hover:border-red-600 transition-all duration-300 transform hover:-translate-y-2 shadow-md hover:shadow-xl"
            >
              <div className="flex items-start mb-4">
                <Building2 className="text-red-600 mr-3 flex-shrink-0" size={24} />
                <h3 className="font-bold text-gray-900 text-lg leading-tight">{client.name}</h3>
              </div>
              <div className="space-y-2">
                {client.services.map((service, idx) => (
                  <div key={idx} className="flex items-start">
                    <Briefcase className="text-gray-400 mr-2 flex-shrink-0 mt-1" size={14} />
                    <span className="text-gray-600 text-sm">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}