import { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { ArrowRight, Settings, CheckCircle, Zap, Shield, Target, Users, BarChart3, Globe, Database, Cog, TestTube, Layers, RefreshCw, Cloud } from 'lucide-react'

const ERPTestingPage = () => {
  const [activeService, setActiveService] = useState('erp')

  const services = {
    'erp': {
      title: 'ERP Implementation & Modernization',
      description: 'Comprehensive ERP solutions that embrace digital transformation, modernize business processes, and drive organizational growth through strategic implementation and optimization.',
      icon: Settings,
      features: [
        'Implementation and Global Rollout',
        'Modernizing Business Processes',
        'Upgrade and Migration Services',
        'Support and Maintenance',
        'Cloud Migration and Optimization',
        'Integration Services',
        'Agile Implementation Methodology',
        'Post-Implementation Flexibility'
      ],
      benefits: [
        'Digital Transformation',
        'Process Modernization',
        'Cost Control',
        'Business Growth'
      ],
      approaches: [
        'Lean Implementation Team',
        'Inclusive Implementation Approach',
        'Prioritizing Business Needs',
        'Mitigating Implementation Risks',
        'Controlling Implementation Costs',
        'Driving Business Growth & Adaptability'
      ],
      platforms: ['SAP', 'Oracle ERP', 'Microsoft Dynamics', 'Workday', 'NetSuite', 'Salesforce'],
      useCases: [
        'Enterprise resource planning transformation',
        'Global ERP rollout and standardization',
        'Legacy system modernization',
        'Cloud ERP migration and optimization',
        'Multi-location ERP integration',
        'Business process reengineering'
      ]
    },
    'testing': {
      title: 'Comprehensive Testing Services',
      description: 'End-to-end testing solutions ensuring quality, reliability, and performance across all business applications and systems with specialized focus on ERP and enterprise platforms.',
      icon: TestTube,
      features: [
        'Functional & E2E Business Process Testing',
        'Integration & Middleware Testing',
        'Data Migration & Reconciliation Testing',
        'Non-Functional (NFR) Testing',
        'Performance and Load Testing',
        'Security and Compliance Testing',
        'Automated Testing Framework',
        'Continuous Testing Integration'
      ],
      benefits: [
        'Quality Assurance',
        'Risk Mitigation',
        'Performance Optimization',
        'Compliance Validation'
      ],
      testingTypes: [
        'Functional Testing',
        'Integration Testing',
        'Performance Testing',
        'Security Testing',
        'Data Validation',
        'User Acceptance Testing',
        'Regression Testing',
        'API Testing'
      ],
      technologies: ['Selenium', 'TestComplete', 'LoadRunner', 'JMeter', 'Postman', 'Cypress'],
      useCases: [
        'ERP system validation and verification',
        'End-to-end business process testing',
        'Data migration quality assurance',
        'Integration testing for complex systems',
        'Performance testing for enterprise applications',
        'Compliance and security validation'
      ]
    }
  }



  const benefits = [
    {
      icon: Target,
      title: 'Strategic Implementation',
      description: 'Comprehensive approach to ERP implementation focusing on business transformation and process optimization.'
    },
    {
      icon: Zap,
      title: 'Agile Methodology',
      description: 'Lean implementation teams using agile methodologies for faster delivery and reduced risks.'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Rigorous testing protocols ensuring system reliability, performance, and compliance standards.'
    },
    {
      icon: Users,
      title: 'Inclusive Approach',
      description: 'Collaborative implementation involving all stakeholders for maximum adoption and success.'
    }
  ]

  const offerings = [
    {
      icon: Settings,
      title: 'ERP Implementation',
      description: 'End-to-end ERP implementation with global rollout capabilities and process modernization'
    },
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamless migration of ERP systems to cloud platforms with optimization and integration'
    },
    {
      icon: RefreshCw,
      title: 'System Upgrades',
      description: 'Comprehensive ERP upgrades and modernization with minimal business disruption'
    },
    {
      icon: Layers,
      title: 'Integration Services',
      description: 'Complex system integration and middleware solutions for enterprise connectivity'
    },
    {
      icon: TestTube,
      title: 'Testing Services',
      description: 'Comprehensive testing including functional, integration, and performance validation'
    },
    {
      icon: Database,
      title: 'Data Migration',
      description: 'Secure data migration and reconciliation with quality assurance and validation'
    }
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-white/20 text-white border-white/30">
                ERP & Testing Services
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                Enterprise ERP Implementation & Comprehensive Testing Solutions
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl">
                Transform your business with strategic ERP implementation and ensure quality through comprehensive testing services. From digital transformation to performance optimization, we deliver end-to-end solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-indigo-700 hover:bg-blue-50 font-semibold">
                  Get ERP Assessment <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-700 bg-transparent">
                  <span className="text-white hover:text-indigo-700">Schedule Consultation</span>
                </Button>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="relative">
                <div className="text-6xl text-white/20 mb-4">"</div>
                <blockquote className="text-lg text-white/90 mb-6 leading-relaxed">
                  ACC's expertise in PeopleSoft support helped us ensure seamless operations for one of our key clients. Their proactive monitoring, quick issue resolution, and reliable 24×7 model gave us the confidence to deliver uninterrupted services.
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Delivery Head</div>
                    <div className="text-sm text-blue-200">Leading IT Services Company</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Navigation */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive ERP & Testing Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From strategic ERP implementation to comprehensive testing services, we provide end-to-end solutions that drive digital transformation and ensure system reliability.
            </p>
          </div>

          {/* Service Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(services).map(([key, service]) => {
              const Icon = service.icon
              return (
                <button
                  key={key}
                  onClick={() => setActiveService(key)}
                  className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all ${
                    activeService === key
                      ? 'bg-indigo-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-indigo-50 border border-gray-200'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-2" />
                  {key === 'erp' ? 'ERP Services' : 'Testing Services'}
                </button>
              )
            })}
          </div>

          {/* Active Service Content */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="flex items-center mb-6">
                  {(() => {
                    const Icon = services[activeService].icon;
                    return <Icon className="w-8 h-8 text-indigo-600 mr-3" />;
                  })()}
                  <h3 className="text-2xl font-bold text-gray-900">{services[activeService].title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{services[activeService].description}</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {services[activeService].features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">
                      {activeService === 'erp' ? 'Implementation Approach' : 'Testing Types'}
                    </h4>
                    <ul className="space-y-2">
                      {(activeService === 'erp' ? services[activeService].approaches : services[activeService].testingTypes).map((item, index) => (
                        <li key={index} className="flex items-start">
                          <Zap className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Key Benefits</h4>
                <div className="space-y-3">
                  {services[activeService].benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center p-3 bg-white rounded-lg">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
                      <span className="font-medium text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6">
                  <h5 className="font-semibold text-gray-900 mb-3">
                    {activeService === 'erp' ? 'Supported Platforms' : 'Technologies'}
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {(activeService === 'erp' ? services[activeService].platforms : services[activeService].technologies).map((tech, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Complete Service Offerings
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive ERP and testing services designed to support your digital transformation journey from implementation to optimization.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.map((offering, index) => {
              const Icon = offering.icon
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{offering.title}</h3>
                  <p className="text-gray-600">{offering.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose ACC for ERP & Testing?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven methodology and comprehensive approach ensure successful ERP implementations and reliable testing outcomes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-indigo-100 mb-8">
            Let's discuss how our ERP implementation and testing services can drive your digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-indigo-700 hover:bg-indigo-50 font-semibold">
              <Link to="/get-started" className="flex items-center">
                Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-700">
              <Link to="/contact-sales">Contact Our Experts</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ERPTestingPage
