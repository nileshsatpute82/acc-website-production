import React from 'react';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Users, Heart, Award, Target } from 'lucide-react';
import Layout from '../components/Layout';

const OurTeamPage = () => {
  const leaders = [
    {
      name: "Nilesh Satpute",
      title: "CEO and Cloud Delivery",
      image: "/images/Nilesh1.png",
      description: "Founder of ACC, Nilesh transformed a small garage vision into a global technology company. Through resilience, innovation, and people-first leadership, he built ACC into a 450+ member organization serving some of the largest BFSI and enterprise clients. His journey reflects empathy toward people, humility in success, and an unwavering commitment to hard work.",
      experience: "Founder & CEO",
      specialization: "Cloud Strategy & Leadership"
    },
    {
      name: "Rogin Rappai",
      title: "Head of Sales & Marketing",
      image: "/images/rogin1.png",
      description: "With five years at ACC and prior experience at Oracle, Rogin built the sales and marketing function from the ground up. Known for his honesty and relentless pursuit of client success, he has led ACC into marquee BFSI and enterprise accounts. His leadership blends strategic thinking with humility and team spirit.",
      experience: "5+ Years at ACC",
      specialization: "Sales & Marketing Strategy"
    },
    {
      name: "Shubho Pramanik",
      title: "Head of Application & Product Delivery",
      image: "/images/shubho1.png",
      description: "An MCA graduate who joined ACC as a fresher 11 years ago, Shubho embodies the never-give-up spirit. From his first project to leading large-scale banking transformations, he has shown that dedication, honesty, and empathy can turn fresh talent into a cornerstone of product and application delivery.",
      experience: "11 Years at ACC",
      specialization: "Application & Product Delivery"
    },
    {
      name: "Ghanshyam Pawar",
      title: "Head of Operations & Chief of Staff",
      image: "/images/Gahnshyam1.png",
      description: "Joining ACC after his MBA, Ghanshyam quickly rose to lead operations, alliances, and RFPs. In just four years, he has established operational excellence across the company. His humility and focus on teamwork have made him an empathetic leader and a trusted Chief of Staff.",
      experience: "4 Years at ACC",
      specialization: "Operations & Strategic Planning"
    },
    {
      name: "Mithun Kadam",
      title: "Head of Data & AI Delivery",
      image: "/images/Mithun1.png",
      description: "An MCA graduate who also joined ACC as a fresher 11 years ago, Mithun has been central to building ACC's data and AI practice. His hard work and never-give-up attitude helped the company pioneer intelligent automation projects. Known for being humble and approachable, he inspires his teams to push boundaries.",
      experience: "11 Years at ACC",
      specialization: "Data & AI Solutions"
    },
    {
      name: "Reema Masson",
      title: "Head of Human Resources",
      image: "/images/Reema1.png",
      description: "Reema re-entered the corporate world after a five-year career break, starting as a hiring executive. With resilience and empathy, she built a strong HR function that reflects ACC's people-first values. Her journey is a testament to hard work, humility, and the belief that every individual deserves opportunity and respect.",
      experience: "HR Leadership",
      specialization: "People & Culture"
    },
    {
      name: "Priyanka Hegde",
      title: "Head of Project Management Office (PMO)",
      image: "/images/Priyanka1.png",
      description: "A Collegey topper with a MSC in Bioinformatics, Priyanka joined ACC as a fresher. Through determination and empathy, she built the PMO practice from scratch, ensuring discipline, governance, and client trust in every project. Her humility and hard work define the culture of ACC's delivery excellence.",
      experience: "PMO Leadership",
      specialization: "Project Management & Governance"
    },
    {
      name: "Sachin Gunjal",
      title: "Head of Finance",
      image: "/images/sachin1.png",
      description: "A Chartered Accountant, Sachin serves as ACC's On-Demand CFO. He is agile, frugal, and passionate about simplifying finance. By creating a lean and effective finance function, he ensures transparency and financial discipline while supporting rapid growth. Known for his humility and straightforward approach, Sachin exemplifies hard work and honesty, making finance a true enabler of ACC's journey.",
      experience: "Chartered Accountant",
      specialization: "Financial Strategy & Operations"
    }
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8 text-purple-600" />,
      title: "Empathy",
      description: "We lead with empathy, understanding that behind every project are real people with real needs."
    },
    {
      icon: <Award className="w-8 h-8 text-purple-600" />,
      title: "Hard Work",
      description: "Success comes from dedication, perseverance, and the willingness to go the extra mile."
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: "Humility",
      description: "We stay grounded, learn continuously, and celebrate collective achievements over individual glory."
    },
    {
      icon: <Target className="w-8 h-8 text-purple-600" />,
      title: "Honesty",
      description: "We believe in transparency, integrity, and honest communication in all our relationships and decisions."
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold mb-6">ACC Leadership Team</h1>
            <h2 className="text-3xl font-semibold mb-8 text-purple-200">Real Leaders Who Built from Scratch</h2>
            <p className="text-xl max-w-4xl mx-auto leading-relaxed">
              At ACC, leadership is not about titles — it's about building with empathy, perseverance, and humility. 
              Each member of our leadership team has grown with the company, embodying hard work, honesty, and 
              integrity that has shaped ACC into a trusted partner for enterprises worldwide.
            </p>
          </div>
        </section>

        {/* Leadership Values */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Leadership Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide our leaders and define our culture
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{value.title}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Leaders</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Visionary leaders who have built ACC through dedication, innovation, and unwavering commitment to excellence
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              {leaders.map((leader, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 bg-gradient-to-br from-purple-100 to-indigo-100 p-6 flex items-center justify-center">
                      <div className="relative">
                        <img 
                          src={leader.image} 
                          alt={leader.name}
                          className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-lg border-4 border-white"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div className="hidden w-32 h-32 md:w-40 md:h-40 rounded-full bg-purple-200 items-center justify-center text-purple-600 font-bold text-2xl shadow-lg border-4 border-white">
                          {leader.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      </div>
                    </div>
                    
                    <div className="md:w-2/3 p-6">
                      <CardHeader className="p-0 mb-4">
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                          {leader.name}
                        </h3>
                        <p className="text-lg font-semibold text-purple-600 mb-2">{leader.title}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge variant="secondary" className="text-xs">
                            {leader.experience}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {leader.specialization}
                          </Badge>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="p-0">
                        <p className="text-gray-600 leading-relaxed text-sm">
                          {leader.description}
                        </p>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Join Our Journey</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Be part of a team that values empathy, hard work, humility, and honesty. 
              Together, we're building the future of cloud and AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/careers" 
                className="bg-white text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Explore Careers
              </a>
              <a 
                href="/contact" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default OurTeamPage;
