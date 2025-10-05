import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Globe, Menu, X, Search, ChevronDown } from 'lucide-react'

const Layout = ({ children }) => {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      // Simple search implementation - redirect to services page with search
      window.location.href = `/services?search=${encodeURIComponent(searchQuery.trim())}`
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <img 
                  src="/images/acc-logo.png" 
                  alt="Applied Cloud Computing" 
                  className="h-12 w-auto"
                />
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              {/* Services Dropdown */}
              <div className="relative">
                <button
                  className={`flex items-center space-x-1 transition-colors ${isActive('/services') ? 'text-purple-600' : 'text-gray-700 hover:text-purple-600'}`}
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <span>Services</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {servicesDropdownOpen && (
                  <div 
                    className="absolute top-full left-0 mt-1 w-56 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-50"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <Link 
                      to="/services/cloud-practice" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                    >
                      Cloud Practice
                    </Link>
                    <Link 
                      to="/services/digitalization" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                    >
                      Digitalization
                    </Link>
                    <Link 
                      to="/services/ai-agents" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                    >
                      AI Agents
                    </Link>
                    <Link 
                      to="/services/big-data" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                    >
                      Big Data
                    </Link>
                    <Link 
                      to="/services/application-modernization" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                    >
                      App Modernization
                    </Link>
                    <Link 
                      to="/services/security" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                    >
                      Security
                    </Link>
                    <Link 
                      to="/services/database-management" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                    >
                      Database Management
                    </Link>
                    <Link 
                      to="/services/erp-testing" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                    >
                      ERP & Testing
                    </Link>
                  </div>
                )}
              </div>
              
              {/* Products Dropdown */}
              <div className="relative">
                <button
                  className={`flex items-center space-x-1 transition-colors ${isActive('/products') ? 'text-purple-600' : 'text-gray-700 hover:text-purple-600'}`}
                  onMouseEnter={() => setProductsDropdownOpen(true)}
                  onMouseLeave={() => setProductsDropdownOpen(false)}
                >
                  <span>Products</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {productsDropdownOpen && (
                  <div 
                    className="absolute top-full left-0 mt-1 w-56 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-50"
                    onMouseEnter={() => setProductsDropdownOpen(true)}
                    onMouseLeave={() => setProductsDropdownOpen(false)}
                  >
                    <Link 
                      to="/products/atlas-api-management" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                    >
                      Atlas API Manager
                    </Link>
                    <Link 
                      to="/products/agent-studio" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                    >
                      Agent Studio
                    </Link>
                    <Link 
                      to="/products/ottohm-video-streaming" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                    >
                      Ottohm Video
                    </Link>
                    <Link 
                      to="/products/itsm-ticketing" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                    >
                      ITSM Ticketing
                    </Link>
                    <Link 
                      to="/products/ai-ops-platform" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                    >
                      AI Ops Platform
                    </Link>
                    <Link 
                      to="/products/smart-contracts" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                    >
                      Smart Contracts
                    </Link>
                  </div>
                )}
              </div>

              {/* AI Menu Item */}
              <Link 
                to="/ai" 
                className={`transition-colors ${isActive('/ai') ? 'text-purple-600' : 'text-gray-700 hover:text-purple-600'}`}
              >
                AI
              </Link>
              
              <Link 
                to="/case-studies" 
                className={`transition-colors ${isActive('/case-studies') ? 'text-purple-600' : 'text-gray-700 hover:text-purple-600'}`}
              >
                Case Studies
              </Link>
              
              {/* Company Dropdown */}
              <div className="relative">
                <button
                  className={`flex items-center space-x-1 transition-colors ${isActive('/about') || isActive('/our-team') || isActive('/partners') || isActive('/careers') || isActive('/news') || isActive('/contact-sales') || isActive('/competencies') ? 'text-purple-600' : 'text-gray-700 hover:text-purple-600'}`}
                  onMouseEnter={() => setAboutDropdownOpen(true)}
                  onMouseLeave={() => setAboutDropdownOpen(false)}
                >
                  <span>Company</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {aboutDropdownOpen && (
                  <div 
                    className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-50"
                    onMouseEnter={() => setAboutDropdownOpen(true)}
                    onMouseLeave={() => setAboutDropdownOpen(false)}
                  >
                    <Link 
                      to="/about" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                    >
                      About Us
                    </Link>
                    <Link 
                      to="/our-team" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                    >
                      Our Team
                    </Link>
                    <Link 
                      to="/partners" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                    >
                      Partners
                    </Link>
                    <Link 
                      to="/careers" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                    >
                      Careers
                    </Link>
                    <Link 
                      to="/news" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                    >
                      News
                    </Link>
                    <Link 
                      to="/contact-sales" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                    >
                      Contact
                    </Link>
                  </div>
                )}
              </div>
            </nav>
            
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative">
                {searchOpen ? (
                  <form onSubmit={handleSearch} className="flex items-center">
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-48 px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      autoFocus
                      onBlur={() => {
                        if (!searchQuery.trim()) {
                          setSearchOpen(false)
                        }
                      }}
                    />
                    <button type="submit" className="ml-2 p-1 text-gray-500 hover:text-purple-600">
                      <Search className="w-4 h-4" />
                    </button>
                  </form>
                ) : (
                  <button
                    onClick={() => setSearchOpen(true)}
                    className="p-2 text-gray-500 hover:text-purple-600 transition-colors"
                  >
                    <Search className="w-5 h-5" />
                  </button>
                )}
              </div>
              
              <Button 
                variant="outline" 
                className="hidden sm:inline-flex text-purple-600 border-purple-600 hover:bg-purple-600 hover:text-white"
                asChild
              >
                <Link to="/contact-sales">Contact Sales</Link>
              </Button>
              <Button 
                className="hidden sm:inline-flex bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white"
                asChild
              >
                <Link to="/get-started">Get Started</Link>
              </Button>
              
              {/* Mobile menu button */}
              <button
                className="md:hidden p-2 rounded-md text-gray-700 hover:text-purple-600"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 bottom-0 z-40 bg-white border-b border-gray-200 shadow-lg overflow-y-auto">
          <div className="px-4 py-2 space-y-1 pb-20">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="flex items-center mb-4">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button type="submit" className="ml-2 p-2 text-gray-500 hover:text-purple-600">
                <Search className="w-5 h-5" />
              </button>
            </form>
            
            {/* Services Section in Mobile */}
            <div className="py-2">
              <div className="text-sm font-medium text-gray-500 px-3 py-1">Services</div>
              <Link 
                to="/services/cloud-practice" 
                className={`block px-6 py-2 rounded-md text-base font-medium transition-colors ${isActive('/services/cloud-practice') ? 'text-purple-600 bg-purple-50' : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Cloud Practice
              </Link>
              <Link 
                to="/services/digitalization" 
                className={`block px-6 py-2 rounded-md text-base font-medium transition-colors ${isActive('/services/digitalization') ? 'text-purple-600 bg-purple-50' : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Digitalization
              </Link>
              <Link 
                to="/services/ai-agents" 
                className={`block px-6 py-2 rounded-md text-base font-medium transition-colors ${isActive('/services/ai-agents') ? 'text-purple-600 bg-purple-50' : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                AI Agents
              </Link>
              <Link 
                to="/services/big-data" 
                className={`block px-6 py-2 rounded-md text-base font-medium transition-colors ${isActive('/services/big-data') ? 'text-purple-600 bg-purple-50' : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Big Data
              </Link>
              <Link 
                to="/services/application-modernization" 
                className={`block px-6 py-2 rounded-md text-base font-medium transition-colors ${isActive('/services/application-modernization') ? 'text-purple-600 bg-purple-50' : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                App Modernization
              </Link>
              <Link 
                to="/services/security" 
                className={`block px-6 py-2 rounded-md text-base font-medium transition-colors ${isActive('/services/security') ? 'text-purple-600 bg-purple-50' : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Security
              </Link>
              <Link 
                to="/services/database-management" 
                className={`block px-6 py-2 rounded-md text-base font-medium transition-colors ${isActive('/services/database-management') ? 'text-purple-600 bg-purple-50' : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Database Management
              </Link>
              <Link 
                to="/services/erp-testing" 
                className={`block px-6 py-2 rounded-md text-base font-medium transition-colors ${isActive('/services/erp-testing') ? 'text-purple-600 bg-purple-50' : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                ERP & Testing
              </Link>
            </div>
            
            {/* Products Section in Mobile */}
            <div className="py-2">
              <div className="text-sm font-medium text-gray-500 px-3 py-1">Products</div>
              <Link 
                to="/products/atlas-api-management" 
                className={`block px-6 py-2 rounded-md text-base font-medium transition-colors ${isActive('/products/atlas-api-management') ? 'text-purple-600 bg-purple-50' : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Atlas API Manager
              </Link>
              <Link 
                to="/products/agent-studio" 
                className={`block px-6 py-2 rounded-md text-base font-medium transition-colors ${isActive('/products/agent-studio') ? 'text-purple-600 bg-purple-50' : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Agent Studio
              </Link>
              <Link 
                to="/products/ottohm-video-streaming" 
                className={`block px-6 py-2 rounded-md text-base font-medium transition-colors ${isActive('/products/ottohm-video-streaming') ? 'text-purple-600 bg-purple-50' : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Ottohm Video
              </Link>
              <Link 
                to="/products/itsm-ticketing" 
                className={`block px-6 py-2 rounded-md text-base font-medium transition-colors ${isActive('/products/itsm-ticketing') ? 'text-purple-600 bg-purple-50' : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                ITSM Ticketing
              </Link>
              <Link 
                to="/products/ai-ops-platform" 
                className={`block px-6 py-2 rounded-md text-base font-medium transition-colors ${isActive('/products/ai-ops-platform') ? 'text-purple-600 bg-purple-50' : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                AI Ops Platform
              </Link>
              <Link 
                to="/products/smart-contracts" 
                className={`block px-6 py-2 rounded-md text-base font-medium transition-colors ${isActive('/products/smart-contracts') ? 'text-purple-600 bg-purple-50' : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Smart Contracts
              </Link>
            </div>
            
            <Link 
              to="/ai" 
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive('/ai') ? 'text-purple-600 bg-purple-50' : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              AI
            </Link>
            
            <Link 
              to="/case-studies" 
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive('/case-studies') ? 'text-purple-600 bg-purple-50' : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Case Studies
            </Link>
            
            {/* Company Section in Mobile */}
            <div className="py-2">
              <div className="text-sm font-medium text-gray-500 px-3 py-1">Company</div>
              <Link 
                to="/about" 
                className={`block px-6 py-2 rounded-md text-base font-medium transition-colors ${isActive('/about') ? 'text-purple-600 bg-purple-50' : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                to="/our-team" 
                className={`block px-6 py-2 rounded-md text-base font-medium transition-colors ${isActive('/our-team') ? 'text-purple-600 bg-purple-50' : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Our Team
              </Link>
              <Link 
                to="/partners" 
                className={`block px-6 py-2 rounded-md text-base font-medium transition-colors ${isActive('/partners') ? 'text-purple-600 bg-purple-50' : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Partners
              </Link>
              <Link 
                to="/careers" 
                className={`block px-6 py-2 rounded-md text-base font-medium transition-colors ${isActive('/careers') ? 'text-purple-600 bg-purple-50' : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Careers
              </Link>
              <Link 
                to="/news" 
                className={`block px-6 py-2 rounded-md text-base font-medium transition-colors ${isActive('/news') ? 'text-purple-600 bg-purple-50' : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                News
              </Link>
              <Link 
                to="/contact-sales" 
                className={`block px-6 py-2 rounded-md text-base font-medium transition-colors ${isActive('/contact-sales') ? 'text-purple-600 bg-purple-50' : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                to="/competencies" 
                className={`block px-6 py-2 rounded-md text-base font-medium transition-colors ${isActive('/competencies') ? 'text-purple-600 bg-purple-50' : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Competencies
              </Link>
            </div>
            
            <div className="pt-4 pb-2 border-t border-gray-200">
              <Button 
                variant="outline" 
                className="w-full mb-2 text-purple-600 border-purple-600 hover:bg-purple-600 hover:text-white"
                asChild
              >
                <Link 
                  to="/contact-sales"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Sales
                </Link>
              </Button>
              <Button 
                className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white"
                asChild
              >
                <Link 
                  to="/get-started"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-8">
            <div>
              <div className="mb-4">
                <img 
                  src="/images/acc-logo.png" 
                  alt="Applied Cloud Computing" 
                  className="h-16 w-auto"
                />
              </div>
              <p className="text-gray-400 mb-4">
                Applied Cloud Computing - Your comprehensive solution provider for digital transformation.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/company/10403765" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/appliedcloudcomputing/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://www.facebook.com/AppliedCloudComputing" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://www.youtube.com/@appliedcloudcomputing" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/services/cloud-practice" className="hover:text-purple-400 transition-colors">Cloud Practice</Link></li>
                <li><Link to="/services/digitalization" className="hover:text-purple-400 transition-colors">Digitalization</Link></li>
                <li><Link to="/services/ai-agents" className="hover:text-purple-400 transition-colors">AI Agents</Link></li>
                <li><Link to="/services/big-data" className="hover:text-purple-400 transition-colors">Big Data</Link></li>
                <li><Link to="/services/application-modernization" className="hover:text-purple-400 transition-colors">App Modernization</Link></li>
                <li><Link to="/services/security" className="hover:text-purple-400 transition-colors">Security</Link></li>
                <li><Link to="/services/database-management" className="hover:text-purple-400 transition-colors">Database Management</Link></li>
                <li><Link to="/services/erp-testing" className="hover:text-purple-400 transition-colors">ERP & Testing</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Products</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/products/atlas-api-management" className="hover:text-purple-400 transition-colors">Atlas API Manager</Link></li>
                <li><Link to="/products/agent-studio" className="hover:text-purple-400 transition-colors">Agent Studio</Link></li>
                <li><Link to="/products/ottohm-video-streaming" className="hover:text-purple-400 transition-colors">Ottohm Video</Link></li>
                <li><Link to="/products/itsm-ticketing" className="hover:text-purple-400 transition-colors">ITSM Ticketing</Link></li>
                <li><Link to="/products/ai-ops-platform" className="hover:text-purple-400 transition-colors">AI Ops Platform</Link></li>
                <li><Link to="/products/smart-contracts" className="hover:text-purple-400 transition-colors">Smart Contracts</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/about" className="hover:text-purple-400 transition-colors">About Us</Link></li>
                <li><Link to="/our-team" className="hover:text-purple-400 transition-colors">Our Team</Link></li>
                <li><Link to="/partners" className="hover:text-purple-400 transition-colors">Partners</Link></li>
                <li><Link to="/careers" className="hover:text-purple-400 transition-colors">Careers</Link></li>
                <li><Link to="/news" className="hover:text-purple-400 transition-colors">News</Link></li>
                <li><Link to="/contact-sales" className="hover:text-purple-400 transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Office Locations</h3>
              <div className="space-y-4 text-gray-400 text-sm">
                <div>
                  <h4 className="font-medium text-white mb-1">Mumbai (HQ)</h4>
                  <p>201/202, New Era Business Park Road No. 33, Wagle Industrial Estate, Thane, 400604</p>
                </div>
                <div>
                  <h4 className="font-medium text-white mb-1">Mumbai</h4>
                  <p>Unit 102, Rupa Solitaire, Millennium Business Park, Mahape, Navi Mumbai</p>
                </div>
                <div>
                  <h4 className="font-medium text-white mb-1">Pune</h4>
                  <p>Office 305, White square, Hinjawadi, Wakad Rd, Pimpri-Chinchwad</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Applied Cloud Computing. All rights reserved.</p>
            <div className="mt-2 flex justify-center space-x-4">
              <Link to="/privacy-policy" className="hover:text-purple-400 transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:text-purple-400 transition-colors">Terms of Service</Link>
              <Link to="/security-compliance" className="hover:text-purple-400 transition-colors">Security & Compliance</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
