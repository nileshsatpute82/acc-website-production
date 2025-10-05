import React from 'react'
import Layout from '../../components/Layout'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Shield, Code, Zap, Lock, CheckCircle, Globe, Users } from 'lucide-react'

const SmartContractsPage = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Security First",
      description: "Built-in security protocols and audit trails ensure your contracts are tamper-proof and transparent."
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "Automated Execution",
      description: "Self-executing contracts with terms directly written into code, eliminating intermediaries."
    },
    {
      icon: <Lock className="w-8 h-8 text-blue-600" />,
      title: "Immutable Records",
      description: "Once deployed, smart contracts cannot be altered, ensuring trust and reliability."
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: "Global Accessibility",
      description: "Deploy contracts on multiple blockchain networks for worldwide accessibility."
    },
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "Custom Development",
      description: "Tailored smart contract solutions built to meet your specific business requirements."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Multi-Party Agreements",
      description: "Support for complex multi-party contracts with automated dispute resolution."
    }
  ]

  const useCases = [
    {
      title: "Supply Chain Management",
      description: "Track products from origin to consumer with transparent, immutable records.",
      benefits: ["Product authenticity", "Reduced fraud", "Automated payments"]
    },
    {
      title: "Financial Services",
      description: "Automate lending, insurance claims, and payment processing with smart contracts.",
      benefits: ["Faster settlements", "Reduced costs", "Transparent processes"]
    },
    {
      title: "Real Estate",
      description: "Streamline property transactions with automated escrow and title transfers.",
      benefits: ["Reduced paperwork", "Faster closings", "Lower fees"]
    },
    {
      title: "Healthcare",
      description: "Secure patient data sharing and automated insurance claim processing.",
      benefits: ["Data privacy", "Automated claims", "Audit trails"]
    }
  ]

  const process = [
    {
      step: "01",
      title: "Requirements Analysis",
      description: "We analyze your business needs and identify opportunities for smart contract automation."
    },
    {
      step: "02",
      title: "Contract Design",
      description: "Design the contract logic, terms, and conditions with security best practices."
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Code the smart contract and conduct thorough testing on test networks."
    },
    {
      step: "04",
      title: "Security Audit",
      description: "Comprehensive security audit to identify and fix potential vulnerabilities."
    },
    {
      step: "05",
      title: "Deployment & Monitoring",
      description: "Deploy to production blockchain and provide ongoing monitoring and support."
    }
  ]

  const benefits = [
    "Eliminate intermediaries and reduce costs",
    "Automate complex business processes",
    "Ensure transparency and trust",
    "Reduce processing time from days to minutes",
    "Minimize human error and disputes",
    "Enable 24/7 automated operations"
  ]

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-blue-200 text-blue-900">Smart Contracts</Badge>
              <h1 className="text-5xl font-bold mb-6">Automated Digital Agreements</h1>
              <p className="text-xl max-w-3xl mx-auto leading-relaxed">
                Transform your business processes with secure, transparent, and self-executing smart contracts 
                that eliminate intermediaries and automate complex agreements.
              </p>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Smart Contract Features</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Powerful features that make smart contracts the future of digital agreements
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="mb-4">{feature.icon}</div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Industry Use Cases</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Smart contracts are revolutionizing industries by automating complex processes
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900">{useCase.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{useCase.description}</p>
                    <div className="space-y-2">
                      {useCase.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                          <span className="text-sm text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Smart Contracts?</h2>
                <p className="text-xl text-gray-600 mb-8">
                  Smart contracts offer unprecedented automation, security, and efficiency for your business processes.
                </p>
                <div className="grid grid-cols-1 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-4"></div>
                      <span className="text-gray-700 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Smart Contract Stats</h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">95%</div>
                    <div className="text-gray-600">Cost Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">10x</div>
                    <div className="text-gray-600">Faster Processing</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">99.9%</div>
                    <div className="text-gray-600">Accuracy Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Development Process</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our proven methodology ensures secure, reliable, and efficient smart contract deployment
              </p>
            </div>
            
            <div className="grid md:grid-cols-5 gap-8">
              {process.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
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
        <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Automate Your Agreements?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Transform your business processes with secure, transparent smart contracts. 
              Let's discuss how we can help you implement automated digital agreements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
                Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default SmartContractsPage
