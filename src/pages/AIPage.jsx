import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  ArrowRight, 
  Bot, 
  Brain, 
  Shield, 
  Zap, 
  CheckCircle, 
  Star, 
  Target, 
  Clock, 
  Users, 
  FileText, 
  TrendingUp, 
  Settings,
  Activity,
  Eye,
  BarChart3,
  AlertTriangle,
  Cpu,
  Cloud,
  Globe,
  Layers,
  Code,
  Workflow
} from 'lucide-react'

const AIPage = () => {
  const [activeTab, setActiveTab] = useState('agents')

  const aiOfferings = {
    agents: {
      title: 'AI Agents',
      subtitle: 'Intelligent Banking Automation',
      description: 'Deploy specialized, autonomous AI agents leveraging Large Language Models (LLMs) and Machine Learning (ML) to drive efficiency, ensure compliance, and revolutionize customer experiences across the BFSI sector.',
      icon: Bot,
      color: 'from-blue-600 to-purple-600',
      features: [
        {
          category: 'Compliance & Risk Management',
          icon: Shield,
          agents: [
            {
              name: 'Regulatory Compliance Orchestration Agent (RCOA)',
              description: 'Continuously monitors, interprets, and maps regulatory updates to internal policies with 99.9% compliance accuracy.',
              benefits: ['Real-time Regulatory Updates', 'Audit-ready Documentation', 'Multi-language Support']
            },
            {
              name: 'Digital Audit Lifecycle Management Agent (D-ALMA)',
              description: 'Revolutionizes internal control and audit traceability with centralized, system-generated frameworks.',
              benefits: ['80% Faster Audit Processing', 'Predictive Risk Analysis', 'Centralized Framework']
            },
            {
              name: 'System Log Analysis and Root Cause Agent (SLA-RCA)',
              description: 'Deploys Agentic AI to analyze massive volumes of system logs in real-time for incident resolution.',
              benefits: ['90% Faster Resolution', 'Real-time Analysis', 'Automated Reporting']
            }
          ]
        },
        {
          category: 'Customer Engagement',
          icon: Users,
          agents: [
            {
              name: 'Multilingual Conversational Sentiment Agent (M-CSA)',
              description: 'Multilingual AI voice bot with sentiment detection for optimized contact center operations.',
              benefits: ['70% Query Resolution', 'Multilingual Support', 'Sentiment Analysis']
            },
            {
              name: 'Hyper-Personalized Client Concierge Agent (HPCCA)',
              description: '24x7 Digital Relationship Manager delivering hyper-personalized support across all segments.',
              benefits: ['24x7 Availability', 'Hyper-personalization', 'Multi-segment Support']
            },
            {
              name: 'Real-Time Customer Prospecting & Event Agent (RCPEA)',
              description: 'Identifies and acts upon customer intent in real-time, detecting critical events and opportunities.',
              benefits: ['40% Upsell Increase', 'Real-time Detection', 'Revenue Maximization']
            }
          ]
        }
      ],
      stats: [
        { label: 'AI Agents Deployed', value: '15+', icon: Bot },
        { label: 'Compliance Accuracy', value: '99.9%', icon: Shield },
        { label: 'Processing Speed Increase', value: '80%', icon: Zap },
        { label: 'Customer Satisfaction', value: '95%', icon: Star }
      ]
    },
    studio: {
      title: 'Agent Studio',
      subtitle: 'Design, Deploy, and Scale AI Agents',
      description: 'Purpose-built platform for creating intelligent, action-oriented AI agents that go beyond traditional chatbots. These agents take action, complete tasks, and orchestrate end-to-end processes.',
      icon: Code,
      color: 'from-purple-600 to-pink-600',
      features: [
        {
          category: 'Banking Solutions',
          icon: Bot,
          solutions: [
            {
              name: 'Customer Onboarding & KYC Automation',
              description: 'Streamline customer onboarding with intelligent document processing and automated KYC compliance.',
              benefits: ['90% faster onboarding', 'Reduced manual errors', 'Enhanced compliance']
            },
            {
              name: 'Loan Processing and Disbursement',
              description: 'Accelerate loan processing with automated document verification and credit assessment.',
              benefits: ['70% faster approvals', 'Improved accuracy', 'Enhanced customer experience']
            },
            {
              name: 'Fraud Detection and Risk Monitoring',
              description: 'Proactively identify suspicious activities with real-time transaction monitoring.',
              benefits: ['99.5% fraud detection', 'Real-time alerts', 'Reduced false positives']
            }
          ]
        },
        {
          category: 'Platform Capabilities',
          icon: Settings,
          solutions: [
            {
              name: 'End-to-End Process Automation',
              description: 'Orchestrate complete workflows across core banking, CRM, compliance, and payment systems.',
              benefits: ['Complete workflow automation', 'System integration', 'Process optimization']
            },
            {
              name: 'BFSI-Specific Intelligence',
              description: 'Agents designed for KYC, loan disbursement, mutual fund operations, and regulatory reporting.',
              benefits: ['Industry-specific design', 'Regulatory compliance', 'Domain expertise']
            },
            {
              name: 'Developer & Business Friendly',
              description: 'Low-code tools for business users, APIs/SDKs for developers.',
              benefits: ['Low-code platform', 'Developer APIs', 'Business user tools']
            }
          ]
        }
      ],
      stats: [
        { label: 'Process Automation', value: '80%', icon: Zap },
        { label: 'Deployment Time', value: '90% faster', icon: Clock },
        { label: 'Integration Points', value: '50+', icon: Layers },
        { label: 'Industry Solutions', value: '4+', icon: Target }
      ]
    },
    aiops: {
      title: 'AI Ops Platform',
      subtitle: 'AI-Enhanced AWS Operations',
      description: 'Transform your AWS operations with AI-powered monitoring, proactive incident detection, and intelligent automation. Minimize human intervention while maximizing operational efficiency.',
      icon: Activity,
      color: 'from-green-600 to-blue-600',
      features: [
        {
          category: 'Intelligent Monitoring',
          icon: Eye,
          capabilities: [
            {
              name: 'ML-Driven Anomaly Detection',
              description: 'Advanced algorithms analyze historical patterns to detect unusual behavior in AWS resources.',
              benefits: ['Proactive issue detection', 'Pattern recognition', 'Automated alerting']
            },
            {
              name: 'Advanced Metric Correlation',
              description: 'Correlate metrics across services to identify root causes and predict potential issues.',
              benefits: ['Root cause analysis', 'Predictive insights', 'Cross-service correlation']
            },
            {
              name: 'Real-Time Performance Tracking',
              description: 'Continuous monitoring with intelligent alerting and notification systems.',
              benefits: ['Real-time monitoring', 'Intelligent alerts', 'Performance optimization']
            }
          ]
        },
        {
          category: 'AWS Service Integration',
          icon: Cloud,
          capabilities: [
            {
              name: 'Amazon CloudWatch Enhancement',
              description: 'AI-powered investigations and anomaly detection with automated alerting systems.',
              benefits: ['Enhanced monitoring', 'Automated investigations', 'Historical analysis']
            },
            {
              name: 'Amazon DevOps Guru Integration',
              description: 'Proactive incident detection with ML-powered recommendations and insights.',
              benefits: ['Incident prevention', 'ML recommendations', 'Performance insights']
            },
            {
              name: 'AWS Config Intelligence',
              description: 'Configuration monitoring and compliance tracking with intelligent rules.',
              benefits: ['Configuration tracking', 'Compliance monitoring', 'Change detection']
            }
          ]
        }
      ],
      stats: [
        { label: 'MTTR Reduction', value: '75%', icon: Clock },
        { label: 'Proactive Detection', value: '95%', icon: Target },
        { label: 'Automation Rate', value: '85%', icon: Cpu },
        { label: 'Service Reliability', value: '99.9%', icon: Shield }
      ]
    }
  }

  const overallStats = [
    { label: 'AI Solutions Deployed', value: '25+', icon: Bot },
    { label: 'Enterprise Clients', value: '150+', icon: Users },
    { label: 'Process Automation', value: '80%', icon: Zap },
    { label: 'ROI Improvement', value: '300%', icon: TrendingUp }
  ]

  const benefits = [
    {
      icon: Target,
      title: 'Precision Automation',
      description: 'AI solutions deliver precise, consistent results with industry-leading accuracy across all operations.'
    },
    {
      icon: Clock,
      title: 'Real-time Intelligence',
      description: '24/7 continuous monitoring and instant response to critical events and operational changes.'
    },
    {
      icon: Globe,
      title: 'Scalable Solutions',
      description: 'Enterprise-grade AI platforms that scale with your business needs and growth requirements.'
    },
    {
      icon: Brain,
      title: 'Continuous Learning',
      description: 'Advanced ML models that continuously learn and adapt to evolving business scenarios.'
    }
  ]

  const industries = [
    { name: 'Banking & Financial Services', icon: Bot, description: 'Comprehensive AI solutions for core banking operations' },
    { name: 'Insurance', icon: Shield, description: 'Intelligent claims processing and policy management' },
    { name: 'Mutual Funds', icon: TrendingUp, description: 'Automated portfolio management and compliance' },
    { name: 'Brokerage & Securities', icon: BarChart3, description: 'Real-time trade processing and risk monitoring' }
  ]

  const currentOffering = aiOfferings[activeTab]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-blue-600 to-purple-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">
              Comprehensive AI Solutions
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              ACC AI Platform
            </h1>
            <p className="text-xl text-purple-100 mb-8 max-w-4xl mx-auto">
              Transform your business with our comprehensive AI ecosystem. From intelligent agents to development platforms and operational intelligence, 
              ACC delivers end-to-end AI solutions designed specifically for the BFSI sector.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                className="bg-white text-purple-700 hover:bg-purple-50 font-semibold"
                onClick={() => window.location.href = '/contact-sales'}
              >
                Explore AI Solutions <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-purple-700 bg-transparent"
                onClick={() => window.location.href = '/contact-sales'}
              >
                <span className="text-white hover:text-purple-700">Schedule Demo</span>
              </Button>
            </div>
            
            {/* Overall Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {overallStats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <Icon className="w-8 h-8 mx-auto mb-3 text-purple-200" />
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-purple-200">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* AI Offerings Tabs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Complete AI Ecosystem
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our three core AI platforms designed to address every aspect of your digital transformation journey.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(aiOfferings).map(([key, offering]) => {
              const Icon = offering.icon
              const isActive = activeTab === key
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex items-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-purple-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:shadow-md hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  <Icon className={`w-6 h-6 ${isActive ? 'text-white' : 'text-purple-600'}`} />
                  {offering.title}
                </button>
              )
            })}
          </div>

          {/* Active Tab Content */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Tab Header */}
            <div className={`bg-gradient-to-r ${currentOffering.color} text-white p-8`}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                  <currentOffering.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold">{currentOffering.title}</h3>
                  <p className="text-xl text-white/90">{currentOffering.subtitle}</p>
                </div>
              </div>
              <p className="text-lg text-white/90 max-w-4xl">{currentOffering.description}</p>
            </div>

            {/* Tab Stats */}
            <div className="p-8 border-b border-gray-200">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {currentOffering.stats.map((stat, index) => {
                  const Icon = stat.icon
                  return (
                    <div key={index} className="text-center">
                      <Icon className="w-8 h-8 mx-auto mb-3 text-purple-600" />
                      <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Tab Features */}
            <div className="p-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {currentOffering.features.map((feature, index) => {
                  const Icon = feature.icon
                  return (
                    <div key={index}>
                      <div className="flex items-center gap-3 mb-6">
                        <Icon className="w-8 h-8 text-purple-600" />
                        <h4 className="text-xl font-bold text-gray-900">{feature.category}</h4>
                      </div>
                      <div className="space-y-6">
                        {(feature.agents || feature.solutions || feature.capabilities || []).map((item, itemIndex) => (
                          <div key={itemIndex} className="bg-gray-50 rounded-lg p-6">
                            <h5 className="font-semibold text-gray-900 mb-2">{item.name}</h5>
                            <p className="text-gray-600 mb-4">{item.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {item.benefits.map((benefit, benefitIndex) => (
                                <Badge key={benefitIndex} variant="secondary" className="bg-purple-100 text-purple-700">
                                  {benefit}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
              
              <div className="mt-8 text-center">
                <Button 
                  size="lg" 
                  className="bg-purple-600 hover:bg-purple-700 text-white"
                  onClick={() => window.location.href = '/contact-sales'}
                >
                  Learn More About {currentOffering.title} <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose ACC AI Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI platforms deliver measurable business value through proven technology and industry expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored AI solutions designed for the unique challenges and requirements of financial services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => {
              const Icon = industry.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="text-center">
                    <Icon className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                    <CardTitle className="text-lg">{industry.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">{industry.description}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform with AI?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Discover how ACC's comprehensive AI ecosystem can revolutionize your business operations and drive unprecedented growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg font-semibold rounded-lg"
              onClick={() => window.location.href = '/contact-sales'}
            >
              Start Your AI Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg font-semibold rounded-lg bg-transparent"
              onClick={() => window.location.href = '/case-studies'}
            >
              <span className="text-white hover:text-purple-600">View Case Studies</span>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default AIPage
