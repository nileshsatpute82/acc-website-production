import React from 'react'

const ClientLogos = () => {
  const clients = [
    'Axis Bank', 'Federal Bank', 'Poonawala Finance', 'Max Life Insurance',
    'Religare Broking', 'Nippon Life India', 'HDFC Bank', 'ICICI Bank'
  ]

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <div key={index} className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm">
              <span className="text-gray-600 font-medium">{client}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ClientLogos
