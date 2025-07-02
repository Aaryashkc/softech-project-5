import { ArrowRight, Users, Mountain, Award, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import HomeImage from '../assets/homeImage.jpg'

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <div className="inline-flex items-center px-4 py-2 bg-yellow-400 text-green-900 rounded-full text-sm font-semibold mb-6">
                <Award className="h-4 w-4 mr-2" />
                General Secretary, Nepali Congress
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Bishwa Prakash
                <span className="block text-yellow-400">Sharma</span>
              </h1>
              <p className="text-xl text-green-100 mb-8 leading-relaxed">
                Member of Parliament for Jhapa 1, championing democratic reform, economic development, and youth empowerment across Nepal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center px-8 py-3 bg-yellow-400 text-green-900 rounded-lg font-semibold hover:bg-yellow-300 transition-colors group"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/vision"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-green-900 transition-colors"
                >
                  Vision 95
                </Link>
              </div>
            </div>
            <div className="relative lg:order-1">
              <div className="w-full h-full bg-gradient-to-br from-green-700 to-green-800 rounded-2xl shadow-2xl relative overflow-hidden">
                <img
                  src={HomeImage}
                  alt="Bishwa Prakash Sharma"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Leadership That Inspires
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From student activism to parliamentary leadership, dedicated to serving Nepal with integrity and vision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group">
              <div className="bg-green-50 rounded-2xl p-8 text-center hover:bg-green-100 transition-colors">
                <div className="w-16 h-16 bg-green-800 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Student Leader</h3>
                <p className="text-gray-600">NSU President 2000-2002, pioneering youth engagement in democratic processes.</p>
              </div>
            </div>

            <div className="group">
              <div className="bg-green-50 rounded-2xl p-8 text-center hover:bg-green-100 transition-colors">
                <div className="w-16 h-16 bg-green-800 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Mountain className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Climate Advocate</h3>
                <p className="text-gray-600">Scaled Lobuche Peak to raise awareness on climate change and environmental issues.</p>
              </div>
            </div>

            <div className="group">
              <div className="bg-green-50 rounded-2xl p-8 text-center hover:bg-green-100 transition-colors">
                <div className="w-16 h-16 bg-green-800 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Party Leader</h3>
                <p className="text-gray-600">General Secretary of Nepali Congress, driving democratic reform and party modernization.</p>
              </div>
            </div>

            <div className="group">
              <div className="bg-green-50 rounded-2xl p-8 text-center hover:bg-green-100 transition-colors">
                <div className="w-16 h-16 bg-green-800 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Visionary</h3>
                <p className="text-gray-600">Architect of Vision 95, a comprehensive 15-year development roadmap for Nepal.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Achievements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Recent Achievements
            </h2>
            <p className="text-xl text-gray-600">
              Leading by example, making a difference in Nepal's political landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mountain className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Lobuche Peak Summit</h3>
                  <p className="text-gray-600 mb-4">
                    Successfully climbed Lobuche Peak (6,119m) in December 2024 to raise awareness about climate change, tourism development, and infrastructure needs.
                  </p>
                  <span className="text-sm text-green-800 font-semibold">December 2024</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Parliamentary Victory</h3>
                  <p className="text-gray-600 mb-4">
                    Elected as Member of Parliament for Jhapa 1 in December 2022, representing the constituency with dedication and vision.
                  </p>
                  <span className="text-sm text-green-800 font-semibold">December 2022</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 mb-10 bg-green-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Building Nepal's Future Together
          </h2>
          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            Join the movement for democratic reform, economic development, and youth empowerment. Together, we can create a prosperous Nepal for all.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/vision"
              className="inline-flex items-center px-8 py-3 bg-yellow-400 text-green-900 rounded-lg font-semibold hover:bg-yellow-300 transition-colors group"
            >
              Explore Vision
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-green-900 transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;