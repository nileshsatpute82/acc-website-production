import React from 'react'
import Layout from '../../components/Layout'
import { Badge } from '@/components/ui/badge'

const CloudPracticePage = () => {
  return (
    <Layout>
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4">Cloud Practice</Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Strategic Cloud Transformation</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic guidance, assessment, migration, DevOps, 24/7 managed services, and automation using Ansible and Terraform.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Services</h2>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  Consulting & Assessment
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  Migration Services
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  DevOps & CI/CD
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  24/7 Managed Services
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  Cloud Automation
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Key Benefits</h2>
              <p className="text-gray-600 mb-4">
                Our cloud practice helps organizations accelerate their digital transformation journey with proven methodologies and best practices.
              </p>
              <p className="text-gray-600">
                We provide end-to-end cloud solutions from strategy to implementation and ongoing management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CloudPracticePage
