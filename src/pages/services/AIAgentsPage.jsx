import React from 'react'
import Layout from '../../components/Layout'
import { Badge } from '@/components/ui/badge'

const AIAgentsPage = () => {
  return (
    <Layout>
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4">AI Agents</Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Intelligent Process Automation</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced AI agents to automate complex processes and enhance operational efficiency.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">AI Capabilities</h2>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  Regulatory Monitoring
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  Customer Prospecting
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  Automated Credit Memos
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  Digital Register
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  Branch Audit
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Automation Benefits</h2>
              <p className="text-gray-600 mb-4">
                Our AI agents help organizations automate complex business processes, reduce manual effort, and improve accuracy.
              </p>
              <p className="text-gray-600">
                Leverage the power of artificial intelligence to transform your operations and drive efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AIAgentsPage
