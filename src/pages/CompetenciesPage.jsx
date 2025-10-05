import React from 'react'
import Layout from '../components/Layout'

const CompetenciesPage = () => {
  return (
    <Layout>
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Competencies</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deep expertise across cloud technologies and industry verticals
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AWS Expertise</h3>
              <p className="text-gray-600">Advanced AWS consulting partner with deep expertise across all AWS services</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Financial Services</h3>
              <p className="text-gray-600">Specialized solutions for banking, insurance, and financial technology</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI & Machine Learning</h3>
              <p className="text-gray-600">Advanced AI and ML capabilities for intelligent automation</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CompetenciesPage
