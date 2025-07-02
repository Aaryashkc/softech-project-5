import { Calendar, MapPin, GraduationCap, Heart } from 'lucide-react';
import HomeImage from '../assets/profile.jpeg'; // Adjust the path as necessary

const About = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About Bishwa Prakash Sharma
          </h1>
          <div className="w-120 h-80 rounded-2xl shadow-2xl relative overflow-hidden m-10 justify-center mx-auto">
                <img
                  src={HomeImage}
                  alt="Bishwa Prakash Sharma"
                  className="w-full h-full object-cover"
                />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A dedicated leader committed to democratic principles, economic development, and the advancement of Nepal through principled governance.
          </p>
        </div>

        {/* Personal Information */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Personal Background</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Calendar className="h-6 w-6 text-green-800 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Born</h3>
                    <p className="text-gray-600">21 December 1970</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-green-800 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Birthplace</h3>
                    <p className="text-gray-600">Jhapa District (Kankadbhitta), Province No. 1, Nepal</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Heart className="h-6 w-6 text-green-800 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Parents</h3>
                    <p className="text-gray-600">Parshuram Sharma (father), Sabitri Sharma (mother)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <GraduationCap className="h-6 w-6 text-green-800 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Education</h3>
                    <p className="text-gray-600">Master's in Political Science from Tribhuvan University</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-green-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Family</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900">Spouse</h3>
                  <p className="text-gray-600">Kabita Sharma</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Children</h3>
                  <p className="text-gray-600">One son and one daughter</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Biography Narrative */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Biography</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              Bishwa Prakash Sharma's journey in politics began during his university years at Tribhuvan University, where he pursued a Master's degree in Political Science. His early engagement with democratic processes was evident when he contested in Free Students' Union elections at Mechi Multiple Campus, laying the foundation for his lifelong commitment to democratic principles.
            </p>
            
            <p className="mb-6">
              His leadership qualities became apparent during his tenure as President of the Nepal Student Union (NSU) from 2000 to 2002. During this period, he championed student rights, advocated for educational reforms, and mobilized youth participation in the democratic movement. This experience shaped his understanding of grassroots politics and the importance of youth engagement in nation-building.
            </p>
            
            <p className="mb-6">
              Born in Jhapa District's Kankadbhitta, Sharma maintained strong ties to his constituency throughout his political career. Despite facing electoral challenges in 2013 and 2017, he continued to serve the people of Jhapa 1 through various community initiatives and political advocacy. His persistence paid off in December 2022 when he was elected as Member of Parliament for Jhapa 1.
            </p>
            
            <p className="mb-6">
              Sharma's rise within the Nepali Congress party hierarchy culminated in his election as General Secretary in December 2021, alongside Gagan Thapa. Together, they represent a new generation of leadership within the party, bringing fresh perspectives on democratic reform, economic development, and youth empowerment.
            </p>
            
            <p>
              Beyond politics, Sharma is known for his adventurous spirit and commitment to environmental causes. His mountaineering expeditions, including the successful climb of Lobuche Peak in 2024, demonstrate his belief in leading by example and raising awareness about critical issues facing Nepal, particularly climate change and infrastructure development.
            </p>
          </div>
        </div>

        {/* Values and Principles */}
        <div className="bg-gradient-to-br from-green-800 to-green-700 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-6">Core Values & Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-yellow-400">Democratic Governance</h3>
              <p className="text-green-100">
                Committed to strengthening democratic institutions, promoting transparency, and ensuring accountability in governance.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-yellow-400">Youth Empowerment</h3>
              <p className="text-green-100">
                Passionate about creating opportunities for young people and ensuring their voices are heard in policy-making.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-yellow-400">Economic Development</h3>
              <p className="text-green-100">
                Focused on creating sustainable economic growth that benefits all segments of society.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-yellow-400">Environmental Stewardship</h3>
              <p className="text-green-100">
                Dedicated to protecting Nepal's natural heritage while promoting sustainable development practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;