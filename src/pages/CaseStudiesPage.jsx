import React, { useState } from 'react'
import Layout from '../components/Layout'
import { Button } from '@/components/ui/button'
import { submitToHubSpot, getSuccessMessage } from '../services/hubspotUnifiedService'
import { 
  ArrowRight, 
  CheckCircle, 
  Building2, 
  Shield, 
  CreditCard,
  TrendingUp,
  Play,
  Heart,
  GraduationCap,
  Gamepad2,
  Settings,
  Cloud,
  Search,
  Filter,
  Download,
  ExternalLink,
  Users,
  Clock,
  Award,
  Target,
  Zap,
  BarChart3,
  Star,
  ChevronRight,
  FileText,
  Globe,
  Smartphone,
  Database,
  Bot,
  Cpu,
  Lock,
  X,
  Mail,
  Phone,
  User
} from 'lucide-react'

const CaseStudiesPage = () => {
  const [activeIndustry, setActiveIndustry] = useState('all')
  const [activeService, setActiveService] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [showContactModal, setShowContactModal] = useState(false)
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null)
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [debugPopup, setDebugPopup] = useState({ show: false, data: null })

  const handleWhatsAppClick = () => {
    window.location.href = '/contact-sales'
  }

  const handleScheduleDemo = () => {
    window.location.href = '/schedule-consultation'
  }

  const handleViewDetails = (caseStudy) => {
    setSelectedCaseStudy(caseStudy)
    setShowContactModal(true)
    setSubmitSuccess(false)
  }

  const handleContactFormChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    })
  }

  const handleContactFormSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError('')

    try {
      // Split name into firstName and lastName for HubSpot
      const nameParts = contactForm.name.trim().split(' ')
      const hubspotFormData = {
        firstName: nameParts[0] || '',
        lastName: nameParts.slice(1).join(' ') || '',
        email: contactForm.email,
        phone: contactForm.phone,
        company: contactForm.company,
        message: contactForm.message
      }

      const additionalData = {
        caseStudyTitle: selectedCaseStudy?.title || 'General Case Study Request',
        industry: selectedCaseStudy?.industry || 'Not specified'
      }

      const result = await submitToHubSpot(
        hubspotFormData, 
        'Request Case Study', 
        'Case Studies Page',
        additionalData
      )

      // Show debug popup first
      setDebugPopup({ show: true, data: result.debugData })

      if (result.success) {
        // Success - show success state after a delay
        setTimeout(() => {
          setSubmitSuccess(true)
        }, 3000) // Show debug for 3 seconds then success
        
        // Reset form after additional 3 seconds
        setTimeout(() => {
          setShowContactModal(false)
          setContactForm({ name: '', email: '', phone: '', company: '', message: '' })
          setSubmitSuccess(false)
        }, 6000)
      } else {
        throw new Error(result.error)
      }

    } catch (error) {
      console.error('Request Case Study submission error:', error)
      setSubmitError(error.message || 'Failed to submit request. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const industries = [
    { id: 'all', name: 'All Industries', icon: Globe, color: 'purple' },
    { id: 'bfsi', name: 'Banking & Financial Services', icon: Building2, color: 'blue' },
    { id: 'media', name: 'Media & Entertainment', icon: Play, color: 'pink' },
    { id: 'education', name: 'Education & Training', icon: GraduationCap, color: 'indigo' },
    { id: 'fintech', name: 'Fintech & Payments', icon: CreditCard, color: 'yellow' },
    { id: 'healthcare', name: 'Healthcare & Life Sciences', icon: Heart, color: 'emerald' },
    { id: 'insurance', name: 'Insurance & Financial Services', icon: Shield, color: 'green' },
    { id: 'gaming', name: 'Gaming & Technology', icon: Gamepad2, color: 'orange' },
    { id: 'engineering', name: 'Engineering & IoT', icon: Settings, color: 'teal' },
    { id: 'cloud', name: 'Specialized Cloud Solutions', icon: Cloud, color: 'cyan' },
    { id: 'capital', name: 'Exchanges & Capital Markets', icon: TrendingUp, color: 'red' }
  ]

  const services = [
    { id: 'all', name: 'All Services', icon: Globe, color: 'purple' },
    { id: 'cloud-migration', name: 'Cloud Migration', icon: Cloud, color: 'blue' },
    { id: 'ai-automation', name: 'AI & Automation', icon: Bot, color: 'green' },
    { id: 'digital-transformation', name: 'Digital Transformation', icon: Smartphone, color: 'orange' },
    { id: 'devops-automation', name: 'DevOps & Automation', icon: Settings, color: 'teal' },
    { id: 'financial-platform', name: 'Financial Platform', icon: CreditCard, color: 'yellow' },
    { id: 'disaster-recovery', name: 'Disaster Recovery', icon: Shield, color: 'red' },
    { id: 'performance-optimization', name: 'Performance Optimization', icon: Zap, color: 'pink' },
    { id: 'iot-analytics', name: 'IoT & Analytics', icon: BarChart3, color: 'indigo' }
  ]

  const caseStudies = [
    // Banking & Financial Services (BFSI)
    {
      id: 1,
      industry: 'bfsi',
      title: 'Migration of Financial-Services Workload to AWS',
      description: 'Modernized financial workloads by moving to AWS with Shield, WAF, and GuardDuty. Delivered resilience, compliance, and scalability.',
      impact: 'Reduced costs while ensuring secure, high-availability infrastructure',
      technologies: ['AWS', 'Shield', 'WAF', 'GuardDuty'],
      metrics: [
        { label: 'Cost Reduction', value: '40%' },
        { label: 'Uptime', value: '99.9%' },
        { label: 'Security Score', value: '100%' }
      ],
      category: 'cloud-migration'
    },
    {
      id: 2,
      industry: 'bfsi',
      title: 'Cloud Migration for a Leading Private Bank',
      description: 'Migrated banking workloads to AWS using Landing Zone and phased strategies. Enabled faster deployments, improved DR, and compliance alignment.',
      impact: 'Delivered agility and reduced infrastructure costs',
      technologies: ['AWS Landing Zone', 'DR Solutions', 'Compliance'],
      metrics: [
        { label: 'Deployment Speed', value: '10x faster' },
        { label: 'DR Recovery', value: '<15 min' },
        { label: 'Cost Savings', value: '35%' }
      ],
      category: 'cloud-migration'
    },
    {
      id: 3,
      industry: 'bfsi',
      title: 'AI-Powered Bank & Salary Statement Analyzer',
      description: 'Automated parsing of salary and bank statements. Reduced loan processing times by 90%. Improved accuracy and compliance in decision-making.',
      impact: 'Transformed loan processing with AI automation',
      technologies: ['AI/ML', 'Document Processing', 'Automation'],
      metrics: [
        { label: 'Processing Time', value: '90% faster' },
        { label: 'Accuracy', value: '99.5%' },
        { label: 'Manual Effort', value: '85% reduction' }
      ],
      category: 'ai-automation'
    },
    {
      id: 4,
      industry: 'bfsi',
      title: 'AI-Powered Voice Bot for Omnichannel Banking',
      description: 'Deployed multilingual voice bot for banking queries. Supported IVR, kiosks, and apps. Reduced branch load and improved CX.',
      impact: 'Enhanced customer experience across all channels',
      technologies: ['Voice AI', 'NLP', 'Omnichannel', 'IVR'],
      metrics: [
        { label: 'Query Resolution', value: '80%' },
        { label: 'Branch Load', value: '60% reduction' },
        { label: 'Customer Satisfaction', value: '95%' }
      ],
      category: 'ai-automation'
    },
    {
      id: 5,
      industry: 'bfsi',
      title: 'New Age Banking App for Tier 2/3 Towns',
      description: 'Created mobile app for microfinance and rural banking. Enabled shops as facilitators of banking services. Drove financial inclusion and reach.',
      impact: 'Extended banking services to underserved regions',
      technologies: ['Mobile App', 'Microfinance', 'Digital Banking'],
      metrics: [
        { label: 'New Customers', value: '500K+' },
        { label: 'Transaction Volume', value: '300% increase' },
        { label: 'Service Points', value: '10K+ shops' }
      ],
      category: 'digital-transformation'
    },
    {
      id: 6,
      industry: 'bfsi',
      title: 'Rural Banking App with Biometric KYC',
      description: 'Built Aadhaar-based onboarding app. Reduced fraud by 60% and onboarding time by 70%. Extended inclusion in rural/semi-urban regions.',
      impact: 'Revolutionized rural banking with secure, fast onboarding',
      technologies: ['Biometric KYC', 'Aadhaar', 'Mobile Banking'],
      metrics: [
        { label: 'Fraud Reduction', value: '60%' },
        { label: 'Onboarding Time', value: '70% faster' },
        { label: 'Rural Reach', value: '2M+ users' }
      ],
      category: 'digital-transformation'
    },

    // Insurance & Financial Services
    {
      id: 27,
      industry: 'insurance',
      title: 'First SAP for Insurance in India',
      description: 'Implemented SAP insurance platform to unify claims and policies. Improved compliance and efficiency. Reduced silos and enabled faster processing.',
      impact: 'Pioneered SAP insurance implementation in India',
      technologies: ['SAP', 'Insurance Platform', 'Claims Management'],
      metrics: [
        { label: 'Processing Speed', value: '50% faster' },
        { label: 'Compliance Score', value: '100%' },
        { label: 'Operational Efficiency', value: '40% improvement' }
      ],
      category: 'digital-transformation'
    },
    {
      id: 30,
      industry: 'insurance',
      title: 'Digital Investor App for a Leading Mutual Fund House',
      description: 'Revamped investor app with biometric KYC and analytics. Improved onboarding, engagement, and app ratings. Delivered better conversions and security.',
      impact: 'Enhanced investor experience and engagement',
      technologies: ['Mobile App', 'Biometric KYC', 'Analytics'],
      metrics: [
        { label: 'App Rating', value: '4.8/5' },
        { label: 'Onboarding Speed', value: '80% faster' },
        { label: 'User Engagement', value: '200% increase' }
      ],
      category: 'digital-transformation'
    },

    // Fintech & Payments
    {
      id: 34,
      industry: 'fintech',
      title: 'Cloud-Native Lending Platform',
      description: 'Built real-time decisioning platform for lenders. Enabled scale and customer engagement. Reduced costs through cloud automation.',
      impact: 'Transformed lending with real-time decisions',
      technologies: ['Cloud-Native', 'Real-time Processing', 'Automation'],
      metrics: [
        { label: 'Decision Time', value: '<30 seconds' },
        { label: 'Loan Volume', value: '500% increase' },
        { label: 'Operational Costs', value: '45% reduction' }
      ],
      category: 'digital-transformation'
    },
    {
      id: 36,
      industry: 'fintech',
      title: 'Touchless Merchant Onboarding for a Digital Bank',
      description: 'AI-driven onboarding with multilingual validation. Eliminated errors and improved compliance. Reduced merchant activation time drastically.',
      impact: 'Revolutionized merchant onboarding with AI',
      technologies: ['AI/ML', 'Multilingual Processing', 'Automation'],
      metrics: [
        { label: 'Onboarding Time', value: '90% reduction' },
        { label: 'Error Rate', value: '99% elimination' },
        { label: 'Merchant Satisfaction', value: '98%' }
      ],
      category: 'ai-automation'
    },

    // Media & Entertainment
    {
      id: 41,
      industry: 'media',
      title: 'Media OTT Platform for a Global Entertainment Company',
      description: 'Delivered OTT streaming platform on AWS. Enhanced scalability and DRM security. Supported millions of concurrent viewers.',
      impact: 'Enabled global streaming at massive scale',
      technologies: ['AWS', 'OTT Platform', 'DRM', 'CDN'],
      metrics: [
        { label: 'Concurrent Viewers', value: '10M+' },
        { label: 'Global Reach', value: '50+ countries' },
        { label: 'Uptime', value: '99.99%' }
      ],
      category: 'digital-transformation'
    },
    {
      id: 44,
      industry: 'media',
      title: 'Press Trust of India – AI Image Enrichment',
      description: 'Used AI to auto-tag image archives. Improved metadata and newsroom efficiency. Reduced manual cataloging efforts.',
      impact: 'Automated media cataloging with AI',
      technologies: ['AI/ML', 'Image Processing', 'Metadata'],
      metrics: [
        { label: 'Images Processed', value: '1M+' },
        { label: 'Tagging Accuracy', value: '95%' },
        { label: 'Manual Effort', value: '80% reduction' }
      ],
      category: 'ai-automation'
    },

    // Healthcare & Life Sciences
    {
      id: 47,
      industry: 'healthcare',
      title: 'Patient Treatment & Health Tracker App',
      description: 'Built oncology support app with week-wise tracking. Validated chemo suitability and suggested safer regimens. Improved patient safety and adherence.',
      impact: 'Enhanced cancer care with digital tracking',
      technologies: ['Mobile App', 'Health Analytics', 'Treatment Tracking'],
      metrics: [
        { label: 'Patient Adherence', value: '85% improvement' },
        { label: 'Safety Score', value: '98%' },
        { label: 'Treatment Outcomes', value: '30% better' }
      ],
      category: 'digital-transformation'
    },
    {
      id: 50,
      industry: 'healthcare',
      title: 'Database Modernization for a Pharma Leader',
      description: 'Migrated Oracle to PostgreSQL with Tessell DBaaS. Reduced costs and boosted performance. Enabled vendor independence.',
      impact: 'Modernized pharma data infrastructure',
      technologies: ['PostgreSQL', 'Tessell DBaaS', 'Database Migration'],
      metrics: [
        { label: 'Cost Reduction', value: '60%' },
        { label: 'Performance', value: '3x improvement' },
        { label: 'Migration Time', value: '50% faster' }
      ],
      category: 'cloud-migration'
    },

    // Education & Training
    {
      id: 53,
      industry: 'education',
      title: 'Interactive Whiteboard Platform for EdTech',
      description: 'Built annotation and file upload whiteboard tool. Enabled interactive learning and post-class downloads. Improved student retention.',
      impact: 'Enhanced online learning experience',
      technologies: ['Interactive Platform', 'Real-time Collaboration', 'EdTech'],
      metrics: [
        { label: 'Student Engagement', value: '75% increase' },
        { label: 'Retention Rate', value: '90%' },
        { label: 'Class Participation', value: '200% improvement' }
      ],
      category: 'digital-transformation'
    },

    // Gaming & Technology
    {
      id: 56,
      industry: 'gaming',
      title: 'DevOps Enablement for a Gaming Console Major',
      description: 'Implemented CI/CD pipelines and monitoring. Improved velocity and reduced release times. Enhanced resilience and DevOps maturity.',
      impact: 'Accelerated game development and deployment',
      technologies: ['DevOps', 'CI/CD', 'Monitoring', 'Automation'],
      metrics: [
        { label: 'Release Frequency', value: '10x faster' },
        { label: 'Deployment Time', value: '80% reduction' },
        { label: 'System Reliability', value: '99.9%' }
      ],
      category: 'devops-automation'
    },

    // More BFSI Cases
    {
      id: 7,
      industry: 'bfsi',
      title: 'Citrix Disaster Recovery Solution',
      description: 'Designed Citrix DR on AWS with robust governance and monitoring. Reduced downtime risks with automated failover.',
      impact: 'Improved compliance and lowered DR costs',
      technologies: ['Citrix', 'AWS', 'DR Solutions', 'Monitoring'],
      metrics: [
        { label: 'Downtime Risk', value: '90% reduction' },
        { label: 'Recovery Time', value: '<30 min' },
        { label: 'DR Costs', value: '50% lower' }
      ],
      category: 'disaster-recovery'
    },
    {
      id: 8,
      industry: 'bfsi',
      title: 'Rate Refresh Platform for Financial Distributor',
      description: 'Delivered secure AWS-based solution with multi-AZ load balancing. Automated financial rate refresh with high compliance.',
      impact: 'Improved resilience, efficiency, and transparency',
      technologies: ['AWS', 'Multi-AZ', 'Load Balancing', 'Automation'],
      metrics: [
        { label: 'Rate Updates', value: 'Real-time' },
        { label: 'Compliance Score', value: '100%' },
        { label: 'System Availability', value: '99.99%' }
      ],
      category: 'financial-platform'
    },
    {
      id: 9,
      industry: 'bfsi',
      title: 'National Pension System – Withdrawal Processing',
      description: 'Automated pension withdrawal processing with compliance validation. Reduced processing time and improved user experience.',
      impact: 'Streamlined pension processing with automation',
      technologies: ['Process Automation', 'Compliance', 'User Experience'],
      metrics: [
        { label: 'Processing Time', value: '75% reduction' },
        { label: 'Error Rate', value: '90% decrease' },
        { label: 'User Satisfaction', value: '4.7/5' }
      ],
      category: 'ai-automation'
    }
  ]

  // Filter case studies based on industry, service, and search query
  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesIndustry = activeIndustry === 'all' || study.industry === activeIndustry
    const matchesService = activeService === 'all' || study.category === activeService
    const matchesSearch = searchQuery === '' || 
      study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      study.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      study.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()))
    
    return matchesIndustry && matchesService && matchesSearch
  })

  return (
    <Layout>
      {/* Case Studies Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Case Studies
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our proven success stories across industries and discover how we've helped organizations transform their operations with innovative solutions.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search case studies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Dual Filter System */}
          <div className="mb-12 space-y-8">
            {/* Industry Filters */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">Filter by Industry</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {industries.map((industry) => {
                  const Icon = industry.icon
                  const isActive = activeIndustry === industry.id
                  return (
                    <button
                      key={industry.id}
                      onClick={() => setActiveIndustry(industry.id)}
                      className={`p-4 rounded-xl text-center transition-all duration-200 ${
                        isActive
                          ? 'bg-purple-600 text-white shadow-lg'
                          : 'bg-white text-gray-700 hover:shadow-md hover:bg-gray-50 border border-gray-200'
                      }`}
                    >
                      <Icon className={`w-8 h-8 mx-auto mb-2 ${
                        isActive ? 'text-white' : 'text-purple-600'
                      }`} />
                      <div className="font-medium text-sm">{industry.name}</div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Service Filters */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">Filter by Service</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {services.map((service) => {
                  const Icon = service.icon
                  const isActive = activeService === service.id
                  return (
                    <button
                      key={service.id}
                      onClick={() => setActiveService(service.id)}
                      className={`p-4 rounded-xl text-center transition-all duration-200 ${
                        isActive
                          ? 'bg-blue-600 text-white shadow-lg'
                          : 'bg-white text-gray-700 hover:shadow-md hover:bg-gray-50 border border-gray-200'
                      }`}
                    >
                      <Icon className={`w-8 h-8 mx-auto mb-2 ${
                        isActive ? 'text-white' : 'text-blue-600'
                      }`} />
                      <div className="font-medium text-sm">{service.name}</div>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Results Header */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {activeIndustry === 'all' && activeService === 'all' ? 'All Case Studies' : 
               `${activeIndustry !== 'all' ? industries.find(ind => ind.id === activeIndustry)?.name : ''} ${
                 activeService !== 'all' ? services.find(svc => svc.id === activeService)?.name : ''
               } Case Studies`.trim()}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((study) => (
              <div key={study.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">
                      {services.find(svc => svc.id === study.category)?.name || study.category}
                    </span>
                    <ExternalLink className="w-4 h-4 text-gray-400" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {study.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {study.description}
                  </p>

                  <div className="mb-4">
                    <div className="text-sm font-medium text-gray-900 mb-2">Key Impact:</div>
                    <div className="text-sm text-green-600 font-medium">
                      {study.impact}
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm font-medium text-gray-900 mb-2">Technologies:</div>
                    <div className="flex flex-wrap gap-1">
                      {study.technologies.slice(0, 3).map((tech, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                          {tech}
                        </span>
                      ))}
                      {study.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                          +{study.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {study.metrics.map((metric, index) => (
                      <div key={index} className="text-center">
                        <div className="text-lg font-bold text-purple-600">
                          {metric.value}
                        </div>
                        <div className="text-xs text-gray-500">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  <button 
                    onClick={() => handleViewDetails(study)}
                    className="w-full py-2 px-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200 flex items-center justify-center"
                  >
                    Request Case Study
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredCaseStudies.length === 0 && (
            <div className="text-center py-12">
              <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-900 mb-2">No case studies found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Success Metrics Section - Removed counts as requested */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Proven Results Across Industries
            </h2>
            <p className="text-xl text-gray-600">
              Measurable impact delivered through innovative solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-lg font-bold text-gray-900 mb-2">Processing Time</div>
              <div className="text-sm text-gray-600">Significant reduction in processing times</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div className="text-lg font-bold text-gray-900 mb-2">System Uptime</div>
              <div className="text-sm text-gray-600">High availability and reliability</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div className="text-lg font-bold text-gray-900 mb-2">Cost Optimization</div>
              <div className="text-sm text-gray-600">Substantial cost reductions achieved</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <div className="text-lg font-bold text-gray-900 mb-2">Client Satisfaction</div>
              <div className="text-sm text-gray-600">Exceptional client satisfaction rates</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join our satisfied clients across multiple industries. Let's discuss how ACC can 
            transform your business with proven solutions and measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleScheduleDemo}
              className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg font-semibold rounded-lg"
            >
              Schedule Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              onClick={handleWhatsAppClick}
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg font-semibold rounded-lg bg-transparent"
            >
              <span className="text-white hover:text-purple-600">Discuss Your Project</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-900">
                  Request Case Study Details
                </h3>
                <button
                  onClick={() => setShowContactModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {selectedCaseStudy && (
                <div className="mb-4 p-3 bg-purple-50 rounded-lg">
                  <h4 className="font-medium text-purple-900 mb-1">
                    {selectedCaseStudy.title}
                  </h4>
                  <p className="text-sm text-purple-700">
                    {services.find(svc => svc.id === selectedCaseStudy.category)?.name || selectedCaseStudy.category} • {selectedCaseStudy.impact}
                  </p>
                </div>
              )}

              {/* Debug Popup */}
              {debugPopup.show && !submitSuccess && (
                <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <h4 className="font-medium text-blue-900 mb-2">Submission Details</h4>
                  <div className="text-sm text-blue-800 space-y-1">
                    <div>Status: {debugPopup.data?.status || 'Processing...'}</div>
                    <div>Form ID: {debugPopup.data?.formId || 'N/A'}</div>
                    <div>Timestamp: {debugPopup.data?.timestamp || new Date().toISOString()}</div>
                  </div>
                </div>
              )}

              {!submitSuccess ? (
                <form onSubmit={handleContactFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="text"
                        name="name"
                        required
                        value={contactForm.name}
                        onChange={handleContactFormChange}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="email"
                        name="email"
                        required
                        value={contactForm.email}
                        onChange={handleContactFormChange}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={contactForm.phone}
                        onChange={handleContactFormChange}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name *
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="text"
                        name="company"
                        required
                        value={contactForm.company}
                        onChange={handleContactFormChange}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Enter your company name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message (Optional)
                    </label>
                    <textarea
                      name="message"
                      value={contactForm.message}
                      onChange={handleContactFormChange}
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Any specific questions or requirements..."
                    />
                  </div>

                  {/* Error message */}
                  {submitError && (
                    <div className="bg-red-50 border border-red-200 rounded-md p-3">
                      <p className="text-red-800 text-sm">{submitError}</p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Submitting...
                      </div>
                    ) : (
                      'Request Case Study'
                    )}
                  </Button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Request Submitted!</h3>
                  <p className="text-gray-600 mb-4">
                    {getSuccessMessage()}
                  </p>
                  <p className="text-sm text-gray-500">
                    We'll send you the detailed case study within 24 hours.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </Layout>
  )
}

export default CaseStudiesPage
