import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import ClientLogos from '../components/ClientLogos'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Cloud, 
  Cpu, 
  Database, 
  Shield, 
  Zap, 
  Bot,
  BarChart3,
  Layers,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Globe,
  Award
} from 'lucide-react'

const HomePage = () => {
  const services = [
    {
      icon: <Cloud className="w-12 h-12 text-purple-600" />,
      title: "Cloud Practice",
      description: "Strategic guidance, assessment, migration, DevOps, 24/7 managed services, and automation using Ansible and Terraform.",
      features: ["Consulting & Assessment", "Migration Services", "DevOps & CI/CD", "24/7 Managed Services", "Cloud Automation"],
      link: "/services/cloud-practice"
    },
    {
      icon: <Zap className="w-12 h-12 text-purple-600" />,
      title: "Digitalization",
      description: "Cloud-native applications and specialized solutions for modern businesses.",
      features: ["Open Banking Platforms", "LOS and LMS Systems", "Game-Tech Training", "Custom ERP Development", "IoT Dashboards"],
      link: "/services/digitalization"
    },
    {
      icon: <Bot className="w-12 h-12 text-purple-600" />,
      title: "AI Agents",
      description: "Advanced AI agents to automate complex processes and enhance operational efficiency.",
      features: ["Regulatory Monitoring", "Customer Prospecting", "Automated Credit Memos", "Digital Register", "Branch Audit"],
      link: "/services/ai-agents"
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-purple-600" />,
      title: "Big Data",
      description: "Harness the full potential of your data through comprehensive Big Data solutions.",
      features: ["Data Lake Build & Operate", "Cloud-Native Pipelines", "ML Enablement", "Data Modernization", "Strategic Partnerships"],
      link: "/services/big-data"
    },
    {
      icon: <Layers className="w-12 h-12 text-purple-600" />,
      title: "Application Modernization",
      description: "Transform legacy applications into agile, scalable, and cloud-native solutions.",
      features: ["Platform Re-platforming", ".NET to Java Migration", "Oracle to PostgreSQL", "Monolith to Microservices", "Cloud-Native Refactoring"],
      link: "/services/application-modernization"
    },
    {
      icon: <Shield className="w-12 h-12 text-purple-600" />,
      title: "Security",
      description: "Robust security measures to protect your digital assets and ensure compliance.",
      features: ["Cloud Security Management", "Red Teaming Services", "Compliance & Risk", "Threat Detection", "Security Audits"],
      link: "/services/security"
    }
  ]

  const products = [
    {
      name: "Atlas API Management",
      description: "Robust platform for managing, securing, and scaling APIs",
      features: ["API Gateway", "Security", "Analytics", "Developer Portal"],
      link: "/products/atlas-api-management"
    },
    {
      name: "Agent Studio",
      description: "Powerful environment for developing intelligent agents",
      features: ["AI Development", "Automation", "Integration", "Monitoring"],
      link: "/products/agent-studio"
    },
    {
      name: "Ottohm Video Streaming",
      description: "Comprehensive video content delivery solution",
      features: ["Live Streaming", "CDN", "Analytics", "Security"],
      link: "/products/ottohm-video-streaming"
    },
    {
      name: "ITSM Ticketing Tool",
      description: "Cloud-native IT Service Management solution",
      features: ["Ticket Management", "Workflow", "Reporting", "Integration"],
      link: "/products/itsm-ticketing"
    },
    {
      name: "Smart Contracts",
      description: "Secure, transparent automated agreements",
      features: ["Blockchain", "Automation", "Security", "Compliance"],
      link: "/products/smart-contracts"
    },
    {
      name: "AI Ops Platform",
      description: "Advanced AI-powered IT operations automation",
      features: ["Predictive Analytics", "Automation", "Monitoring", "Optimization"],
      link: "/products/ai-ops-platform"
    }
  ]

  const competencies = [
    "Financial Services Consulting",
    "Microsoft Workloads Consulting", 
    "Advertising & Marketing Technology",
    "Migration & Modernization Consulting",
    "SaaS Consulting",
    "DevOps Consulting",
    "Generative AI Services"
  ]

  const stats = [
    { number: "300+", label: "Successful Projects" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Support Available" },
    { number: "150+", label: "Enterprise Clients" }
  ]

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative">
        {/* Desktop Hero Image */}
        <img 
          src="/images/homepage-hero.png" 
          alt="Building Trustworthy AI with the Power of Cloud" 
          className="hidden md:block w-full h-auto object-cover"
        />
        {/* Mobile Hero Image */}
        <img 
          src="/images/home-mobile1.png" 
          alt="Building Trustworthy AI with the Power of Cloud" 
          className="block md:hidden w-full h-auto object-cover"
        />
      </section>

      {/* Existing Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                Accelerating AI Powered Digital Transformation with 
                <span className="text-purple-200"> Comprehensive Cloud Solutions</span>
              </h1>
              <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                ACC stands as a leading innovator and comprehensive solution provider in the rapidly expanding cloud computing landscape. Your one-stop solution for digital transformation.
              </p>
              <div className="flex justify-center sm:justify-start">
                <Button size="lg" className="bg-white text-purple-700 hover:bg-purple-50 font-semibold">
                  <Link to="/get-started" className="flex items-center text-purple-700 hover:text-purple-800 font-semibold">
                    Get Started <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-600 rounded-3xl transform rotate-6"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                  <div className="grid grid-cols-2 gap-4">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-2xl font-bold text-purple-600">{stat.number}</div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Value Proposition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Your one-stop shop for cloud transformation.
            <span className="text-purple-600"> Fully compliant</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Unlock new markets and scale faster with access to capital and growth opportunities. All in one seamless platform.
          </p>
          <Button 
            size="lg" 
            className="mt-8 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold cursor-pointer relative z-10"
            style={{ pointerEvents: 'auto' }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              console.log('Homepage Get Started clicked!');
              window.location.href = '/get-started';
            }}
          >
            Get Started
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Cloud Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our extensive service portfolio addresses every facet of your cloud requirements, ensuring a seamless and integrated experience.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-purple-100 rounded-full w-fit group-hover:bg-purple-200 transition-colors">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="ghost" className="w-full mt-4 text-purple-600 hover:text-purple-700 hover:bg-purple-50">
                    <Link to={service.link} className="flex items-center">
                      Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Innovative Cloud Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to innovation reflected in our suite of proprietary products, designed to solve specific enterprise challenges.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600">{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4 group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600 transition-all">
                    <Link to={product.link}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AWS Competencies */}
      <section id="competencies" className="py-20 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">AWS Certified Excellence</h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Our deep expertise validated by comprehensive AWS Competencies, demonstrating our specialized knowledge and proven success.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {competencies.map((competency, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300">
                <Award className="w-8 h-8 mx-auto mb-3 text-purple-200" />
                <h3 className="font-semibold text-white">{competency}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Position */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Leading the Cloud Revolution</h2>
              <p className="text-lg text-gray-600 mb-8">
                ACC is strategically positioned at the forefront of the burgeoning cloud computing market, experiencing unprecedented growth driven by digital transformation and AI integration.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-purple-600 mr-3" />
                  <span className="text-gray-700">One-Stop Solution Provider</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-purple-600 mr-3" />
                  <span className="text-gray-700">Deep Expertise & Specialization</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-purple-600 mr-3" />
                  <span className="text-gray-700">Client-Centric Approach</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-purple-600 mr-3" />
                  <span className="text-gray-700">Innovation & Product Development</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ACC Award Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full mb-6">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">AWS APN Industry Segment Partner of the Year</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              2019-2020 Award Recognition for Extraordinary Results in Banking, Financial Services and Insurance (BFSI)
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Video */}
            <div className="order-2 lg:order-1">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/fX8ZlG9UWfo"
                  title="ACC - AWS APN Industry Segment Partner of the Year 2019-2020"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
            
            {/* Content */}
            <div className="order-1 lg:order-2">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Recognition for Excellence</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  This award is given to an AWS Partner who has delivered extraordinary results in an industry segment through customer wins and customer impact, and has generated the highest impact towards AWS business, during the qualifying period of 2019-2020.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  ACC is an AWS Advanced Consulting Partner, and has received this award in recognition of its contribution to AWS's business in the banking, financial services and insurance (BFSI) business segment.
                </p>
                
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900">Key Achievements:</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Deployed over 700 microservices on Amazon EKS for a global bank</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Seamless migration of 30 vendor applications in 30 days for a national bank</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span>First VMware Cloud (VMC) migration implementation in a commercial bank</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Helped a stock exchange company adopt containerization on cloud in production</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Customer Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear directly from our clients about how ACC's cloud solutions transformed their businesses.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Religare Broking Testimonial */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="aspect-video mb-4 rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/hsUEiFOh1UA"
                  title="How Cloud Migration Transformed Religare Broking's IT Infrastructure"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Cloud Migration Success at Religare Broking
              </h3>
              <p className="text-gray-600 mb-4">
                Amit Bhatia, CISO at Religare Broking, shares how ACC's multi-tier cloud solution transformed their IT infrastructure, improving uptime, performance, and scalability.
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mr-3">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Amit Bhatia</div>
                  <div className="text-gray-600">CISO, Religare Broking</div>
                </div>
              </div>
            </div>

            {/* Nippon India Mutual Fund Testimonial */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="aspect-video mb-4 rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/QbjcP1JPYQU"
                  title="Nippon India Mutual Fund: Digital Success Story with Abhijit Shah"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Digital Transformation at Nippon India Mutual Fund
              </h3>
              <p className="text-gray-600 mb-4">
                Abhijit Shah, CTO at Nippon Life India Asset Management, discusses how ACC helped create a seamless mobile-first investor experience and enhanced their digital presence.
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mr-3">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Abhijit Shah</div>
                  <div className="text-gray-600">CTO, Nippon Life India Asset Management</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <ClientLogos />

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-purple-100 mb-8">
            Join leading enterprises already growing with ACC's comprehensive cloud solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-700 hover:bg-purple-50 font-semibold">
              <Link to="/get-started" className="flex items-center">
                Get Started Today <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-700">
              <Link to="/schedule-consultation">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default HomePage
