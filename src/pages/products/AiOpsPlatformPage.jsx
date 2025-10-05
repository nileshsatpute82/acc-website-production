import React from 'react'
import Layout from '../../components/Layout'
import { Badge } from '@/components/ui/badge'

const AiOpsPlatformPage = () => {
  return (
    <Layout>
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4">AI Ops Platform</Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Operations Platform</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced AI-powered IT operations automation
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AiOpsPlatformPage
