import { MapPin, Clock, Users, Building } from 'lucide-react';

const Contact = () => {
  const officeHours = [
    { day: 'Monday - Friday', time: '9:00 AM - 5:00 PM' },
    { day: 'Saturday', time: '10:00 AM - 2:00 PM' },
    { day: 'Sunday', time: 'By Appointment' }
  ];

  const contactInfo = [
    {
      title: 'Parliamentary Office',
      icon: Building,
      details: [
        'Parliament Secretariat',
        'Singha Durbar, Kathmandu',
        'Nepal'
      ],
      contact: [
        'Phone: +977-1-4211234',
        'Email: bp.sharma@parliament.gov.np'
      ]
    },
    {
      title: 'Constituency Office',
      icon: MapPin,
      details: [
        'Jhapa District Office',
        'Birtamod, Jhapa',
        'Province No. 1, Nepal'
      ],
      contact: [
        'Phone: +977-23-540123',
        'Email: jhapa1@bishwaprakash.com'
      ]
    },
    {
      title: 'Party Office',
      icon: Users,
      details: [
        'Nepali Congress Central Office',
        'Sanepa, Lalitpur',
        'Nepal'
      ],
      contact: [
        'Phone: +977-1-5547021',
        'Email: gs@nepalicongress.org'
      ]
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          <span className="text-green-700">Contact </span>
           & Connect
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your voice matters. Reach out to share your concerns, ideas, or to get involved in building Nepal's future together.
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((office, index) => {
            const IconComponent = office.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-800 rounded-lg flex items-center justify-center">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 ml-4">{office.title}</h3>
                </div>
                <div className="space-y-2 mb-6">
                  {office.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="text-gray-600">{detail}</div>
                  ))}
                </div>
                <div className="space-y-2">
                  {office.contact.map((contact, contactIndex) => (
                    <div key={contactIndex} className="text-green-800 font-semibold">{contact}</div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Office Hours */}
        <div className="bg-green-50 rounded-2xl p-8 mb-16">
          <div className="flex items-center mb-6">
            <Clock className="h-8 w-8 text-green-800 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Office Hours</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {officeHours.map((schedule, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <div className="font-semibold text-gray-900 mb-2">{schedule.day}</div>
                <div className="text-green-800 font-medium">{schedule.time}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Send a Message</h2>
          <form className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Your first name"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Your last name"
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="your.email@example.com"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Subject
              </label>
              <select
                id="subject"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="">Select a subject</option>
                <option value="constituency">Constituency Matter</option>
                <option value="policy">Policy Inquiry</option>
                <option value="meeting">Meeting Request</option>
                <option value="support">Support Request</option>
                <option value="feedback">Feedback</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-green-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Constituency Map */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Jhapa 1 Constituency</h2>
          <div className="bg-gray-100 rounded-lg p-8 text-center">
            <MapPin className="h-16 w-16 text-green-800 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">Serving Jhapa District</h3>
            <p className="text-gray-600 mb-6">
              Representing the people of Jhapa 1 constituency, including Birtamod, Kankadbhitta, and surrounding communities in Province No. 1.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4">
                <div className="font-semibold text-gray-900">Population</div>
                <div className="text-green-800">~200,000</div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="font-semibold text-gray-900">Area</div>
                <div className="text-green-800">Eastern Nepal</div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="font-semibold text-gray-900">Province</div>
                <div className="text-green-800">Province No. 1</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;