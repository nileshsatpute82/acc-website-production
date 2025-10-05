import React from 'react'
import Layout from '../../components/Layout'
import { Badge } from '@/components/ui/badge'

const AtlasAPIManagerPage = () => {
  return (
    <Layout>
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4">Atlas API Management</Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Robust API Management Platform</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Robust platform for managing, securing, and scaling APIs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Key Features</h2>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  API Gateway
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  Security
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  Analytics
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  Developer Portal
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Benefits</h2>
              <p className="text-gray-600">
                Comprehensive API management solution for enterprise-grade applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AtlasAPIManagerPage
