import { Facebook, Linkedin, Instagram, Youtube, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">ICE</span>
              </div>
              <div>
                <div className="font-bold text-lg">INDUSTRIAL</div>
                <div className="text-xs text-gray-400">COMPUTING ENGINEERING</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Leading in African-owned innovation by delivering excellence in IT,
              software solutions, and data analytics.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-red-600">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Our Services', 'Our Projects', 'Our Clients', 'Contact Us'].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/\s+/g, '')}`} className="text-gray-400 hover:text-red-600 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-red-600">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-red-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-red-600 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-red-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-red-600 transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-red-600 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              www.ice4po.co.za
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            copyright@2025 design by ICE
          </p>
        </div>
      </div>
    </footer>
  );
}