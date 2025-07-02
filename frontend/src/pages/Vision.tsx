import { Target, TrendingUp, Users, Shield, Globe, Lightbulb } from 'lucide-react';

const Vision = () => {
  const visionPillars = [
    {
      title: 'Democratic Governance',
      icon: Shield,
      description: 'Strengthening democratic institutions and ensuring transparent, accountable governance.',
      points: [
        'Constitutional reform for stable governance',
        'Fixed five-year prime ministerial terms',
        'Clear separation of executive and opposition roles',
        'Enhanced parliamentary oversight'
      ]
    },
    {
      title: 'Economic Development',
      icon: TrendingUp,
      description: 'Creating sustainable economic growth that benefits all segments of society.',
      points: [
        'Removal of bureaucratic barriers to investment',
        'Job creation and agricultural development',
        'Infrastructure modernization',
        'Digital economy advancement'
      ]
    },
    {
      title: 'Youth Empowerment',
      icon: Users,
      description: 'Ensuring young people have opportunities and voice in national development.',
      points: [
        'Educational reform and skill development',
        'Youth employment programs',
        'Technology access and digital literacy',
        'Political participation opportunities'
      ]
    },
    {
      title: 'Environmental Protection',
      icon: Globe,
      description: 'Balancing development with environmental sustainability and climate action.',
      points: [
        'Climate change mitigation strategies',
        'Sustainable tourism development',
        'Environmental conservation programs',
        'Green technology adoption'
      ]
    }
  ];

  const vision95Goals = [
    {
      timeline: '2025-2030',
      title: 'Foundation Phase',
      goals: [
        'Constitutional reforms implementation',
        'Infrastructure development acceleration',
        'Educational system modernization',
        'Digital connectivity expansion'
      ]
    },
    {
      timeline: '2030-2035',
      title: 'Growth Phase',
      goals: [
        'Economic diversification',
        'Industrial development',
        'Tourism sector transformation',
        'Agricultural modernization'
      ]
    },
    {
      timeline: '2035-2040',
      title: 'Prosperity Phase',
      goals: [
        'Developed nation status achievement',
        'Full employment realization',
        'Environmental sustainability',
        'Regional leadership in democracy'
      ]
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          <span className="text-green-700">Vision </span>
           for Nepal's Future
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive roadmap for Nepal's transformation into a prosperous, democratic, and sustainable nation by 2040.
          </p>
        </div>

        {/* Vision 95 Overview */}
        <div className="bg-gradient-to-br from-green-800 to-green-700 rounded-2xl p-8 text-white mb-16">
          <div className="text-center mb-8">
            <Target className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Vision 95</h2>
            <p className="text-green-100 text-lg">
              A 15-year strategic development plan to transform Nepal into a developed nation by 2040
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">15</div>
              <div className="text-green-100">Years Roadmap</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">4</div>
              <div className="text-green-100">Key Pillars</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">2040 AD</div>
              <div className="text-green-100">Target Year</div>
            </div>
          </div>
        </div>

        {/* Vision Pillars */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Four Pillars of Development</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {visionPillars.map((pillar, index) => {
              const IconComponent = pillar.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-green-800 rounded-lg flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 ml-4">{pillar.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{pillar.description}</p>
                  <ul className="space-y-2">
                    {pillar.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-green-800 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Implementation Timeline</h2>
          <div className="space-y-8">
            {vision95Goals.map((phase, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-green-800 rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900">{phase.title}</h3>
                    <span className="text-green-800 font-semibold">{phase.timeline}</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-12">
                  {phase.goals.map((goal, goalIndex) => (
                    <div key={goalIndex} className="flex items-center">
                      <Lightbulb className="h-4 w-4 text-green-800 mr-2" />
                      <span className="text-gray-700">{goal}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Policies */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Policy Initiatives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border-l-4 border-green-800 pl-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Constitutional Reform</h3>
              <p className="text-gray-600">
                Implementing fixed five-year prime ministerial terms to ensure stable governance and long-term policy continuity.
              </p>
            </div>
            <div className="border-l-4 border-green-800 pl-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Economic Liberalization</h3>
              <p className="text-gray-600">
                Removing bureaucratic barriers to investment and creating an enabling environment for business growth.
              </p>
            </div>
            <div className="border-l-4 border-green-800 pl-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Digital Nepal</h3>
              <p className="text-gray-600">
                Expanding digital infrastructure and connectivity to all regions, including high-altitude areas.
              </p>
            </div>
            <div className="border-l-4 border-green-800 pl-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Green Development</h3>
              <p className="text-gray-600">
                Balancing economic growth with environmental protection and climate change mitigation.
              </p>
            </div>
            <div className="border-l-4 border-green-800 pl-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Education Reform</h3>
              <p className="text-gray-600">
                Modernizing educational systems to prepare youth for the digital economy and global competitiveness.
              </p>
            </div>
            <div className="border-l-4 border-green-800 pl-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Healthcare Access</h3>
              <p className="text-gray-600">
                Ensuring universal healthcare access and improving medical infrastructure across all regions.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-green-800 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">Join the Vision</h2>
          <p className="text-green-100 text-lg mb-6">
            Together, we can build a prosperous, democratic, and sustainable Nepal for future generations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-400 text-green-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
              Download Vision 95 Document
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-900 transition-colors">
              Get Involved
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;