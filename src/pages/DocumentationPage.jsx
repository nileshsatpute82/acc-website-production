import React from 'react'
import Layout from '../components/Layout'

const DocumentationPage = () => {
  return (
    <Layout>
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Documentation</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Technical documentation and guides
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default DocumentationPage
