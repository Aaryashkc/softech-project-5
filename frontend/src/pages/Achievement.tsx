import React from 'react';
import { Mountain, Award, Users, Target, Globe, Lightbulb } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: 'Lobuche Peak Summit',
      date: 'December 2024',
      description: 'Successfully climbed Lobuche Peak (6,119m) to raise awareness about climate change, tourism development, and infrastructure needs in Nepal.',
      icon: Mountain,
      category: 'Environmental Advocacy',
      impact: 'Raised national awareness on climate issues and mountain tourism'
    },
    {
      title: 'Everest Base Camp Campaign',
      date: '2025',
      description: 'Led expedition to Everest Base Camp, advocating for cellular connectivity and technological infrastructure in high-altitude areas.',
      icon: Globe,
      category: 'Infrastructure Development',
      impact: 'Highlighted need for modern connectivity in remote areas'
    },
    {
      title: 'General Secretary Election',
      date: 'December 2021',
      description: 'Elected as General Secretary of Nepali Congress alongside Gagan Thapa, bringing fresh leadership to the party.',
      icon: Award,
      category: 'Political Achievement',
      impact: 'Modernized party leadership and introduced democratic reforms'
    },
    {
      title: 'Vision 95 Development',
      date: '2023',
      description: 'Architected Vision 95, a comprehensive 15-year development roadmap for Nepal focusing on economic growth and democratic strengthening.',
      icon: Target,
      category: 'Policy Innovation',
      impact: 'Provided long-term strategic framework for national development'
    },
    {
      title: 'Youth Empowerment Initiatives',
      date: '2000-Present',
      description: 'Continuous leadership in youth empowerment, from NSU presidency to ongoing mentorship programs.',
      icon: Users,
      category: 'Social Impact',
      impact: 'Inspired and mobilized thousands of young people in democratic participation'
    },
    {
      title: 'Constitutional Reform Advocacy',
      date: '2025',
      description: 'Championed constitutional amendments for a fixed five-year prime ministerial term and clearer executive-opposition roles.',
      icon: Lightbulb,
      category: 'Democratic Reform',
      impact: 'Advanced constitutional stability and governance efficiency'
    }
  ];

  const categories = [
    'All',
    'Environmental Advocacy',
    'Political Achievement',
    'Policy Innovation',
    'Social Impact',
    'Democratic Reform',
    'Infrastructure Development'
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredAchievements = selectedCategory === 'All' 
    ? achievements 
    : achievements.filter(achievement => achievement.category === selectedCategory);

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          <span className="text-green-700">Achievements </span>
             & Impact
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A record of dedicated service, innovative leadership, and meaningful contributions to Nepal's democratic and economic development.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-green-800 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-green-50 hover:text-green-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredAchievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-800 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <span className="text-sm font-semibold text-green-800">{achievement.category}</span>
                    <div className="text-xs text-gray-500">{achievement.date}</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{achievement.title}</h3>
                <p className="text-gray-600 mb-4">{achievement.description}</p>
                <div className="border-t pt-4">
                  <div className="text-sm font-semibold text-gray-900 mb-1">Impact:</div>
                  <div className="text-sm text-gray-600">{achievement.impact}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Statistics */}
        <div className="bg-green-800 rounded-2xl p-8 text-white mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Impact in Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">25+</div>
              <div className="text-green-100">Years in Politics</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">6,119m</div>
              <div className="text-green-100">Lobuche Peak Height</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">15</div>
              <div className="text-green-100">Year Vision 95 Plan</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">1M+</div>
              <div className="text-green-100">Jhapa 1 Constituents</div>
            </div>
          </div>
        </div>

        {/* Recognition */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Recognition & Awards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-l-4 border-green-800 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Democratic Leadership</h3>
              <p className="text-gray-600 mb-2">
                Recognized for modernizing Nepali Congress and introducing democratic reforms within the party structure.
              </p>
              <span className="text-sm text-green-800 font-semibold">Nepali Congress, 2021</span>
            </div>
            <div className="border-l-4 border-green-800 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Youth Advocacy</h3>
              <p className="text-gray-600 mb-2">
                Acknowledged for continuous commitment to youth empowerment and democratic participation.
              </p>
              <span className="text-sm text-green-800 font-semibold">Nepal Student Union, 2002</span>
            </div>
            <div className="border-l-4 border-green-800 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Environmental Advocacy</h3>
              <p className="text-gray-600 mb-2">
                Praised for unique approach to climate awareness through mountaineering and adventure tourism.
              </p>
              <span className="text-sm text-green-800 font-semibold">Environmental Groups, 2024</span>
            </div>
            <div className="border-l-4 border-green-800 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Policy Innovation</h3>
              <p className="text-gray-600 mb-2">
                Commended for Vision 95 and long-term strategic thinking in national development planning.
              </p>
              <span className="text-sm text-green-800 font-semibold">Policy Experts, 2023</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;