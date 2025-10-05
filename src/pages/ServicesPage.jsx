import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Cloud, Zap, Bot, BarChart3, Layers, Shield } from 'lucide-react'

const ServicesPage = () => {
  const services = [
    {
      icon: <Cloud className="w-12 h-12 text-purple-600" />,
      title: "Cloud Practice",
      description: "Strategic guidance, assessment, migration, DevOps, 24/7 managed services, and automation using Ansible and Terraform.",
      link: "/services/cloud-practice"
    },
    {
      icon: <Zap className="w-12 h-12 text-purple-600" />,
      title: "Digitalization",
      description: "Cloud-native applications and specialized solutions for modern businesses.",
      link: "/services/digitalization"
    },
    {
      icon: <Bot className="w-12 h-12 text-purple-600" />,
      title: "AI Agents",
      description: "Advanced AI agents to automate complex processes and enhance operational efficiency.",
      link: "/services/ai-agents"
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-purple-600" />,
      title: "Big Data",
      description: "Harness the full potential of your data through comprehensive Big Data solutions.",
      link: "/services/big-data"
    },
    {
      icon: <Layers className="w-12 h-12 text-purple-600" />,
      title: "Application Modernization",
      description: "Transform legacy applications into agile, scalable, and cloud-native solutions.",
      link: "/services/application-modernization"
    },
    {
      icon: <Shield className="w-12 h-12 text-purple-600" />,
      title: "Security",
      description: "Robust security measures to protect your digital assets and ensure compliance.",
      link: "/services/security"
    }
  ]

  return (
    <Layout>
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive cloud solutions to accelerate your digital transformation journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link to={service.link}>
                  <Button className="w-full">Learn More</Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ServicesPage
