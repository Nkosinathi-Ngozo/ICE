import { useRef } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export default function Projects() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: 'TAIP',
      subtitle: 'Technology Assisted Intelligent Processor',
      description: 'AI-powered platform for Government Printing Works revolutionizing legal document publishing with automation and human oversight.',
      features: ['AI Process Mining', 'Real-time Analytics', 'Automated Publishing', 'Quality Assurance']
    },
    {
      title: 'MAIL SORTER',
      subtitle: 'Intelligent Mail Processing',
      description: 'Advanced mail sorting system using AI for efficient processing and routing.',
      features: ['Automated Sorting', 'Pattern Recognition', 'High Speed Processing', 'Error Reduction']
    },
    {
      title: 'SIZR',
      subtitle: 'Smart Sizing Solution',
      description: 'Intelligent sizing and classification system for data and document management.',
      features: ['Smart Classification', 'Data Analysis', 'Automated Processing', 'Scalable Solution']
    },
    {
      title: 'EXPRESS PROCESSES',
      subtitle: 'Rapid Workflow Automation',
      description: 'Streamlined process automation for rapid deployment and execution.',
      features: ['Fast Deployment', 'Workflow Automation', 'Real-time Monitoring', 'Efficiency Boost']
    },
    {
      title: 'DATA ARCHIVE',
      subtitle: 'Secure Data Management',
      description: 'Comprehensive data archiving solution with advanced security and retrieval capabilities.',
      features: ['Secure Storage', 'Quick Retrieval', 'Compliance Ready', 'Long-term Preservation']
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            OUR <span className="text-red-600">PROJECTS</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-red-600 p-3 rounded-full hover:bg-red-700 transition-colors shadow-lg"
          >
            <ChevronLeft size={24} />
          </button>

          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-8 pb-8 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="min-w-[350px] md:min-w-[400px] snap-center"
              >
                <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-lg border border-red-600 hover:border-red-500 transition-all duration-300 transform hover:scale-105 h-full">
                  <div className="flex items-center mb-4">
                    <Sparkles className="text-red-600 mr-3" size={32} />
                    <div>
                      <h3 className="text-2xl font-bold text-red-600">{project.title}</h3>
                      <p className="text-gray-400 text-sm">{project.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                  <div className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                        <span className="text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-red-600 p-3 rounded-full hover:bg-red-700 transition-colors shadow-lg"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}