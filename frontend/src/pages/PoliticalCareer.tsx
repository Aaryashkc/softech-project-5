import { Calendar, Award, Users, Megaphone } from 'lucide-react';

const PoliticalCareer = () => {
  const timeline = [
    {
      year: '2000-2002',
      title: 'President, Nepal Student Union (NSU)',
      description: 'Led the student wing of Nepali Congress, advocating for student rights and democratic participation.',
      icon: Users,
      color: 'bg-blue-500'
    },
    {
      year: '2018',
      title: 'Spokesperson, Nepali Congress',
      description: 'Appointed as party spokesperson, representing NC policies and positions to the media and public.',
      icon: Megaphone,
      color: 'bg-green-500'
    },
    {
      year: '2021',
      title: 'General Secretary, Nepali Congress',
      description: 'Elected as General Secretary alongside Gagan Thapa, bringing fresh leadership to the party.',
      icon: Award,
      color: 'bg-yellow-500'
    },
    {
      year: '2022',
      title: 'Member of Parliament, Jhapa 1',
      description: 'Successfully elected to represent Jhapa 1 constituency in the House of Representatives.',
      icon: Award,
      color: 'bg-green-600'
    }
  ];

  const positions = [
    {
      title: 'General Secretary',
      organization: 'Nepali Congress',
      period: '2021 - Present',
      description: 'Leading party modernization efforts and democratic reform initiatives.'
    },
    {
      title: 'Member of Parliament',
      organization: 'House of Representatives',
      period: '2022 - Present',
      description: 'Representing Jhapa 1 constituency and advocating for national development.'
    },
    {
      title: 'Spokesperson',
      organization: 'Nepali Congress',
      period: '2018 - 2021',
      description: 'Articulated party positions and engaged with media on policy matters.'
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          <span className="text-green-700">Political </span>
            Career
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A journey of dedicated service to Nepal's democratic institutions and the people of Jhapa constituency.
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Career Timeline</h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-green-200"></div>
            <div className="space-y-8">
              {timeline.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="relative flex items-start">
                    <div className={`${item.color} w-16 h-16 rounded-full flex items-center justify-center z-10`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <div className="ml-8 bg-white rounded-lg p-6 shadow-lg flex-1">
                      <div className="flex items-center mb-2">
                        <Calendar className="h-5 w-5 text-green-800 mr-2" />
                        <span className="text-green-800 font-semibold">{item.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Current Positions */}
        <div className="bg-green-50 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Current Positions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {positions.map((position, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{position.title}</h3>
                <p className="text-green-800 font-semibold mb-2">{position.organization}</p>
                <p className="text-gray-600 text-sm mb-3">{position.period}</p>
                <p className="text-gray-700">{position.description}</p>
              </div>
            ))}
          </div>
        </div>


        {/* Key Contributions */}
        <div className="bg-gradient-to-br from-green-800 to-green-700 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-8 text-center">Key Contributions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-yellow-400">Party Modernization</h3>
              <ul className="space-y-2 text-green-100">
                <li>• Advocated for democratic reforms within Nepali Congress</li>
                <li>• Promoted youth participation in party leadership</li>
                <li>• Opposed pre-election alliances to strengthen party identity</li>
                <li>• Championed transparency in party operations</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-yellow-400">Policy Advocacy</h3>
              <ul className="space-y-2 text-green-100">
                <li>• Constitutional amendment for five-year PM term</li>
                <li>• Vision 95: 15-year national development roadmap</li>
                <li>• Economic reforms to reduce bureaucratic barriers</li>
                <li>• Environmental protection and climate action</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoliticalCareer;