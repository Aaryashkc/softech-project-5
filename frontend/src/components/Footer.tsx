import { MapPin, Phone, Mail } from 'lucide-react';
import MainImage from '../assets/main.svg'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src={MainImage} alt="" className='size-10'/>
              <div>
                <div className="text-xl font-bold">Bishwa Prakash Sharma</div>
                <div className="text-green-700 text-sm">General Secretary, Nepali Congress</div>
              </div>
            </div>
            <p className="text-green-100 text-sm leading-relaxed">
              Dedicated to democratic reform, economic development, and the advancement of Nepal through principled leadership and grassroots engagement.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-green-700 flex-shrink-0" />
                <span className="text-green-100 text-sm">Jhapa District, Province No. 1, Nepal</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-700 flex-shrink-0" />
                <span className="text-green-100 text-sm">Parliament Secretariat, Kathmandu</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-700 flex-shrink-0" />
                <span className="text-green-100 text-sm">info@bishwaprakash.com</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-green-700 transition-colors">About</Link></li>
              <li><Link to="/career" className="text-gray-400 hover:text-green-700 transition-colors">Career</Link></li>
              <li><Link to="/achievements" className="text-gray-400 hover:text-green-700 transition-colors">Achievements</Link></li>
              <li><Link to="/vision" className="text-gray-400 hover:text-green-700 transition-colors">Vision</Link></li>
            </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-green-800 mt-8 pt-8 text-center">
          <p className="text-green-200 text-sm">
            © 2025 Bishwa Prakash Sharma. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;