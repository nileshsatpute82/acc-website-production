import React from 'react'
import Layout from '../../components/Layout'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Code, Database, Cloud, Layers, Zap, Shield } from 'lucide-react'

const ApplicationModernizationPage = () => {
  const services = [
    {
      icon: <Layers className="w-8 h-8 text-purple-600" />,
      title: "Platform Re-platforming",
      description: "Migrate applications to modern cloud platforms with enhanced scalability and performance."
    },
    {
      icon: <Code className="w-8 h-8 text-purple-600" />,
      title: ".NET to Java Migration",
      description: "Seamless migration from .NET framework to Java ecosystem with minimal business disruption."
    },
    {
      icon: <Database className="w-8 h-8 text-purple-600" />,
      title: "Oracle to PostgreSQL",
      description: "Database modernization from Oracle to PostgreSQL for cost optimization and flexibility."
    },
    {
      icon: <Cloud className="w-8 h-8 text-purple-600" />,
      title: "Monolith to Microservices",
      description: "Break down monolithic applications into scalable, maintainable microservices architecture."
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-600" />,
      title: "Cloud-Native Refactoring",
      description: "Transform legacy applications to leverage cloud-native capabilities and services."
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-600" />,
      title: "Legacy System Modernization",
      description: "Modernize legacy systems while maintaining data integrity and business continuity."
    }
  ]

  const benefits = [
    "Improved Performance & Scalability",
    "Reduced Infrastructure Costs",
    "Enhanced Security & Compliance",
    "Better Developer Productivity",
    "Faster Time-to-Market",
    "Increased System Reliability"
  ]

  const process = [
    {
      step: "01",
      title: "Assessment & Planning",
      description: "Comprehensive analysis of existing applications and modernization roadmap creation."
    },
    {
      step: "02", 
      title: "Architecture Design",
      description: "Design modern architecture patterns and technology stack selection."
    },
    {
      step: "03",
      title: "Migration & Development",
      description: "Phased migration approach with continuous testing and validation."
    },
    {
      step: "04",
      title: "Testing & Optimization",
      description: "Comprehensive testing, performance optimization, and quality assurance."
    },
    {
      step: "05",
      title: "Deployment & Support",
      description: "Production deployment with ongoing support and maintenance."
    }
  ]

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-purple-200 text-purple-900">Application Modernization</Badge>
              <h1 className="text-5xl font-bold mb-6">Transform Legacy Applications</h1>
              <p className="text-xl max-w-3xl mx-auto leading-relaxed">
                Transform legacy applications into agile, scalable, and cloud-native solutions that drive business growth and innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Modernization Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive application modernization services to transform your legacy systems
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="mb-4">{service.icon}</div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Transformation Benefits</h2>
                <p className="text-xl text-gray-600 mb-8">
                  Modernize your legacy applications to improve performance, scalability, and maintainability while reducing costs.
                </p>
                <div className="grid grid-cols-1 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mr-4"></div>
                      <span className="text-gray-700 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Modernize?</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-purple-600 pl-4">
                    <h4 className="font-semibold text-gray-900">Legacy Challenges</h4>
                    <p className="text-gray-600 text-sm">High maintenance costs, security vulnerabilities, and limited scalability</p>
                  </div>
                  <div className="border-l-4 border-green-600 pl-4">
                    <h4 className="font-semibold text-gray-900">Modern Solutions</h4>
                    <p className="text-gray-600 text-sm">Cloud-native architecture, improved security, and enhanced performance</p>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h4 className="font-semibold text-gray-900">Business Impact</h4>
                    <p className="text-gray-600 text-sm">Faster innovation, reduced costs, and competitive advantage</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Modernization Process</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Proven methodology for successful application modernization with minimal business disruption
              </p>
            </div>
            
            <div className="grid md:grid-cols-5 gap-8">
              {process.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Modernize Your Applications?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Transform your legacy systems with our proven modernization approach. 
              Let's discuss how we can help accelerate your digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100">
                Get Started <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-900">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default ApplicationModernizationPage
