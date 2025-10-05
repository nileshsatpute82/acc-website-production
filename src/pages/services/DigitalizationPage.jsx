import React from 'react'
import Layout from '../../components/Layout'
import { Badge } from '@/components/ui/badge'

const DigitalizationPage = () => {
  return (
    <Layout>
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4">Digitalization</Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Modernize IT Landscape & Accelerate Digital Transformation</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cloud-native applications and specialized solutions for modern businesses.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Solutions</h2>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  Open Banking Platforms
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  LOS and LMS Systems
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  Game-Tech Training
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  Custom ERP Development
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  IoT Dashboards
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Digital Innovation</h2>
              <p className="text-gray-600 mb-4">
                We help organizations transform their business processes through innovative digital solutions and cloud-native applications.
              </p>
              <p className="text-gray-600">
                Our digitalization services enable businesses to stay competitive in the digital economy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default DigitalizationPage
