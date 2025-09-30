import { Target, Eye, Shield } from 'lucide-react';

export default function About() {
  const values = [
    'Trust', 'Honesty', 'Extreme Ownership', 'Intelligence',
    'Commitment', 'Entrepreneurial Self-efficacy', 'Fairness',
    'Integrity', 'Loyalty', 'Transparency', 'Excellence', 'Reliability'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            ABOUT <span className="text-red-600">US</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-3xl font-bold mb-6">Who <span className="text-red-600">are we?</span></h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Industrial Computing Engineering (ICE) PTY LTD is a black-owned pioneering analytics firm
              dedicated to driving technological advancement within government and private sectors, established in 2012.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With a diverse team of over 30 professionals, many of them young and innovative, ICE brings over
              100 years of combined experience to its projects. We specialize in IT, software solutions, and
              data analytics, focusing on cutting-edge technology and strategic transformation.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-red-600 to-red-700 p-6 rounded-lg text-white shadow-xl">
              <div className="flex items-center mb-4">
                <Eye size={32} className="mr-3" />
                <h4 className="text-2xl font-bold">Vision</h4>
              </div>
              <p>
                To lead in African-owned innovation by delivering excellence in IT, software solutions,
                and data analytics empowering organizations to succeed in the digital age.
              </p>
            </div>

            <div className="bg-gradient-to-br from-black to-gray-900 p-6 rounded-lg text-white shadow-xl">
              <div className="flex items-center mb-4">
                <Target size={32} className="mr-3" />
                <h4 className="text-2xl font-bold">Mission</h4>
              </div>
              <p>
                ICE delivers cutting-edge technology and digital transformation solutions tailored to each
                client's needs, aiming to boost efficiency, drive growth, and support sustainable development.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-red-600 text-white py-12 px-8 rounded-lg">
          <div className="flex items-center justify-center mb-6">
            <Shield size={40} className="mr-4" />
            <h3 className="text-3xl font-bold">THE ICE FILTER</h3>
          </div>
          <p className="text-center mb-8 text-lg">
            Code of Ethics - The 12 Cardinal Values
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center hover:bg-white/20 transition-all transform hover:scale-105"
              >
                <span className="font-semibold text-sm">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}