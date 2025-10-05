import React from 'react'
import Layout from '../../components/Layout'
import { Badge } from '@/components/ui/badge'

const AgentStudioPage = () => {
  return (
    <Layout>
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4">Agent Studio</Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Intelligent Agent Development</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful environment for developing intelligent agents
            </p>
          </div>
          <div className="text-center">
            <p className="text-gray-600">AI Development • Automation • Integration • Monitoring</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AgentStudioPage
