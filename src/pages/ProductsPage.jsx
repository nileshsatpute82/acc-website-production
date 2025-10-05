import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const ProductsPage = () => {
  const products = [
    {
      title: "Atlas API Management",
      description: "Robust platform for managing, securing, and scaling APIs",
      features: ["API Gateway", "Security", "Analytics", "Developer Portal"],
      link: "/products/atlas-api-management"
    },
    {
      title: "Agent Studio",
      description: "Powerful environment for developing intelligent agents",
      features: ["AI Development", "Automation", "Integration", "Monitoring"],
      link: "/products/agent-studio"
    },
    {
      title: "Ottohm Video Streaming",
      description: "Comprehensive video content delivery solution",
      features: ["Live Streaming", "CDN", "Analytics", "Security"],
      link: "/products/ottohm-video-streaming"
    },
    {
      title: "ITSM Ticketing Tool",
      description: "Cloud-native IT Service Management solution",
      features: ["Ticket Management", "Workflow", "Reporting", "Integration"],
      link: "/products/itsm-ticketing"
    },
    {
      title: "Smart Contracts",
      description: "Secure, transparent automated agreements",
      features: ["Blockchain", "Automation", "Security", "Compliance"],
      link: "/products/smart-contracts"
    },
    {
      title: "AI Ops Platform",
      description: "Advanced AI-powered IT operations automation",
      features: ["Predictive Analytics", "Automation", "Monitoring", "Optimization"],
      link: "/products/ai-ops-platform"
    }
  ]

  return (
    <Layout>
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Innovative cloud products designed to solve specific enterprise challenges
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{product.title}</h3>
                <p className="text-gray-600 mb-6">{product.description}</p>
                <div className="mb-6">
                  {product.features.map((feature, idx) => (
                    <span key={idx} className="inline-block bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full mr-2 mb-2">
                      {feature}
                    </span>
                  ))}
                </div>
                <Link to={product.link}>
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

export default ProductsPage
