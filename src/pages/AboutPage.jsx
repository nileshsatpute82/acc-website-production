import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { ArrowRight, Building, Users, Target, Award } from 'lucide-react'

const AboutPage = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-purple-600" />,
      title: "Innovation",
      description: "We continuously innovate to deliver cutting-edge cloud solutions that drive business transformation."
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: "Client-Centric",
      description: "Our clients' success is our priority. We build long-term relationships based on trust and results."
    },
    {
      icon: <Award className="w-8 h-8 text-purple-600" />,
      title: "Excellence",
      description: "We maintain the highest standards of quality and expertise in everything we do."
    }
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative">
        {/* Desktop Hero Image */}
        <img 
          src="/images/aboutusdesk.png" 
          alt="About ACC - Empowering People to achieve more" 
          className="hidden md:block w-full h-auto object-cover"
        />
        {/* Mobile Hero Image */}
        <img 
          src="/images/aboutus.png" 
          alt="About ACC - Empowering People to achieve more" 
          className="block md:hidden w-full h-auto object-cover"
        />
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our vision is to empower businesses to harness the full potential of cloud technology, driving efficiency, innovation, and competitive advantage. ACC's strength lies in its holistic approach, combining deep technical knowledge with a client-centric methodology.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We pride ourselves on building long-term relationships, guiding our clients through every stage of their cloud journey, from initial strategy and assessment to ongoing management and optimization.
              </p>
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                <Link to="/get-started" className="flex items-center">
                  Start Your Journey <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-600 rounded-3xl transform rotate-6"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <Building className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">Leading Innovation</h3>
                <p className="text-gray-600 text-center">
                  Comprehensive solution provider in the rapidly expanding cloud computing landscape
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our work and define our commitment to excellence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-purple-100 rounded-full w-fit">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ACC Growth Journey Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">ACC Growth Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a bedroom startup to a leading cloud transformation company - our journey of creating 1200+ jobs and empowering businesses across industries.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-purple-200"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {/* Early Years */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8 text-right">
                  <div className="bg-purple-50 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-purple-800 mb-2">Early Years - Bedroom Startup</h3>
                    <p className="text-sm text-gray-600 mb-2">Before 2014</p>
                    <p className="text-gray-700">Operated from a 1BHK home in Thane, delivering cloud trainings with a mission to create opportunities for engineers from vernacular backgrounds.</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-600 rounded-full border-4 border-white"></div>
                <div className="flex-1 pl-8"></div>
              </div>

              {/* 2014 Incorporation */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-600 rounded-full border-4 border-white"></div>
                <div className="flex-1 pl-8">
                  <div className="bg-purple-50 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-purple-800 mb-2">Incorporation</h3>
                    <p className="text-sm text-gray-600 mb-2">August 2014</p>
                    <p className="text-gray-700">Registered as Applied Cloud Computing Pvt. Ltd. Operations began in a garage office, marking the corporate journey.</p>
                  </div>
                </div>
              </div>

              {/* FY2014-15 */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8 text-right">
                  <div className="bg-purple-50 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-purple-800 mb-2">First Migration & Open Source</h3>
                    <p className="text-sm text-gray-600 mb-2">FY2014-15</p>
                    <p className="text-gray-700 mb-2">Revenue: ₹0.15 Cr | Employees: 4</p>
                    <p className="text-gray-700">Thane office opened. Delivered first cloud migration for a media company and introduced open-source cloud solutions.</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-600 rounded-full border-4 border-white"></div>
                <div className="flex-1 pl-8"></div>
              </div>

              {/* FY2015-16 */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-600 rounded-full border-4 border-white"></div>
                <div className="flex-1 pl-8">
                  <div className="bg-purple-50 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-purple-800 mb-2">BFSI Entry & Windows Cloud</h3>
                    <p className="text-sm text-gray-600 mb-2">FY2015-16</p>
                    <p className="text-gray-700 mb-2">Revenue: ₹1.22 Cr | Employees: 15</p>
                    <p className="text-gray-700">Executed first cloud migration for a banking customer and expanded into Windows on cloud workloads.</p>
                  </div>
                </div>
              </div>

              {/* FY2016-17 */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8 text-right">
                  <div className="bg-purple-50 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-purple-800 mb-2">Pune Expansion & Mobile Apps</h3>
                    <p className="text-sm text-gray-600 mb-2">FY2016-17</p>
                    <p className="text-gray-700 mb-2">Revenue: ₹1.32 Cr | Employees: 35</p>
                    <p className="text-gray-700">Opened Pune office, executed data center migration in 3 weeks, and entered mobile app development.</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-600 rounded-full border-4 border-white"></div>
                <div className="flex-1 pl-8"></div>
              </div>

              {/* FY2017-18 */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-600 rounded-full border-4 border-white"></div>
                <div className="flex-1 pl-8">
                  <div className="bg-purple-50 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-purple-800 mb-2">Loan Platform & 24×7 Services</h3>
                    <p className="text-sm text-gray-600 mb-2">FY2017-18</p>
                    <p className="text-gray-700 mb-2">Revenue: ₹2.58 Cr | Employees: 42</p>
                    <p className="text-gray-700">New Thane office, delivered loan disbursement platform, and introduced 24×7 managed services.</p>
                  </div>
                </div>
              </div>

              {/* FY2018-19 */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8 text-right">
                  <div className="bg-purple-50 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-purple-800 mb-2">OTT Platform Launch</h3>
                    <p className="text-sm text-gray-600 mb-2">FY2018-19</p>
                    <p className="text-gray-700 mb-2">Revenue: ₹5.91 Cr | Employees: 80</p>
                    <p className="text-gray-700">Launched an OTT platform and expanded enterprise managed services.</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-600 rounded-full border-4 border-white"></div>
                <div className="flex-1 pl-8"></div>
              </div>

              {/* FY2019-20 */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-600 rounded-full border-4 border-white"></div>
                <div className="flex-1 pl-8">
                  <div className="bg-purple-50 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-purple-800 mb-2">Atlas API & AWS Recognition</h3>
                    <p className="text-sm text-gray-600 mb-2">FY2019-20</p>
                    <p className="text-gray-700 mb-2">Revenue: ₹9.82 Cr | Employees: 120</p>
                    <p className="text-gray-700">Launched Atlas API Management, Open Banking Platform. Recognized by AWS as Best BFSI Consulting Partner.</p>
                  </div>
                </div>
              </div>

              {/* FY2020-21 */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8 text-right">
                  <div className="bg-purple-50 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-purple-800 mb-2">Bangalore Expansion</h3>
                    <p className="text-sm text-gray-600 mb-2">FY2020-21</p>
                    <p className="text-gray-700 mb-2">Revenue: ₹17.20 Cr | Employees: 165</p>
                    <p className="text-gray-700">Expanded Bangalore operations and acquired major BFSI clients.</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-600 rounded-full border-4 border-white"></div>
                <div className="flex-1 pl-8"></div>
              </div>

              {/* FY2021-22 */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-600 rounded-full border-4 border-white"></div>
                <div className="flex-1 pl-8">
                  <div className="bg-purple-50 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-purple-800 mb-2">Overseas Expansion & Security</h3>
                    <p className="text-sm text-gray-600 mb-2">FY2021-22</p>
                    <p className="text-gray-700 mb-2">Revenue: ₹22.00 Cr | Employees: 250</p>
                    <p className="text-gray-700">Began overseas engagements with dedicated product teams and established Security Practice.</p>
                  </div>
                </div>
              </div>

              {/* FY2022-23 */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8 text-right">
                  <div className="bg-purple-50 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-purple-800 mb-2">Big Data & Modernisation</h3>
                    <p className="text-sm text-gray-600 mb-2">FY2022-23</p>
                    <p className="text-gray-700 mb-2">Revenue: ₹48.00 Cr | Employees: 320</p>
                    <p className="text-gray-700">Launched Big Data Practice and accelerated application modernisation.</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-600 rounded-full border-4 border-white"></div>
                <div className="flex-1 pl-8"></div>
              </div>

              {/* FY2023-24 */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-600 rounded-full border-4 border-white"></div>
                <div className="flex-1 pl-8">
                  <div className="bg-purple-50 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-purple-800 mb-2">Public Sector & Product Focus</h3>
                    <p className="text-sm text-gray-600 mb-2">FY2023-24</p>
                    <p className="text-gray-700 mb-2">Revenue: ₹55.00 Cr | Employees: 370</p>
                    <p className="text-gray-700">Secured public sector bank projects and shifted towards product-first strategy.</p>
                  </div>
                </div>
              </div>

              {/* FY2024-25 */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8 text-right">
                  <div className="bg-purple-50 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-purple-800 mb-2">AI Agents & ERP</h3>
                    <p className="text-sm text-gray-600 mb-2">FY2024-25</p>
                    <p className="text-gray-700 mb-2">Revenue: ₹85.00 Cr | Employees: 400</p>
                    <p className="text-gray-700">Launched AI agents for banking back-office automation and expanded into ERP and testing services.</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-600 rounded-full border-4 border-white"></div>
                <div className="flex-1 pl-8"></div>
              </div>

              {/* FY2025-26 */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-600 rounded-full border-4 border-white"></div>
                <div className="flex-1 pl-8">
                  <div className="bg-gradient-to-r from-purple-100 to-purple-200 rounded-lg p-6 border-2 border-purple-300">
                    <h3 className="text-lg font-bold text-purple-800 mb-2">AI Practice & Enterprise Services</h3>
                    <p className="text-sm text-gray-600 mb-2">FY2025-26 (Current)</p>
                    <p className="text-gray-700 mb-2">Revenue: ₹120.00 Cr | Employees: 450</p>
                    <p className="text-gray-700">Formally launched AI Practice and consolidated enterprise-wide AI-first services.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Achievements */}
          <div className="mt-16 bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-purple-800 text-center mb-8">Key Achievements</h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">1200+</div>
                <div className="text-gray-700">Jobs Created</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">₹120 Cr</div>
                <div className="text-gray-700">Current Revenue</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">450+</div>
                <div className="text-gray-700">Team Members</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">11+</div>
                <div className="text-gray-700">Years of Growth</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Work with ACC?</h2>
          <p className="text-xl text-purple-100 mb-8">
            Join leading enterprises who trust ACC for their digital transformation needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-700 hover:bg-purple-50 font-semibold">
              <Link to="/get-started" className="flex items-center">
                Get Started <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-700">
              <Link to="/contact-sales">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default AboutPage
