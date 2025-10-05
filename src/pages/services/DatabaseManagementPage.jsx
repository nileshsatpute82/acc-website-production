import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { ArrowRight, Database, Server, Shield, Zap, CheckCircle, Star, Target, Clock, Users, Settings, BarChart3, Globe } from 'lucide-react'

const DatabaseManagementPage = () => {
  const [activeService, setActiveService] = useState('oracle')

  const services = {
    'oracle': {
      title: 'Oracle Managed Services',
      description: 'Comprehensive managed services for Oracle databases, ensuring optimal performance, security, and availability with enterprise-grade support and monitoring.',
      icon: Database,
      features: [
        'Oracle Database Administration (DBA) services',
        'Performance tuning and optimization',
        'Backup and disaster recovery management',
        'Security hardening and compliance',
        'Patch management and upgrades',
        'High availability and clustering setup',
        '24/7 monitoring and alerting',
        'Capacity planning and scaling'
      ],
      benefits: [
        '99.9% Uptime SLA',
        '24/7 Expert Support',
        'Cost Optimization',
        'Security Compliance'
      ],
      technologies: ['Oracle Database', 'Oracle RAC', 'Oracle Data Guard', 'Oracle GoldenGate', 'Oracle Enterprise Manager', 'RMAN'],
      metrics: [
        { label: 'Database Uptime', value: '99.9%' },
        { label: 'Performance Improvement', value: '40%' },
        { label: 'Cost Reduction', value: '35%' },
        { label: 'Response Time', value: '<15min' }
      ],
      useCases: [
        'Enterprise Resource Planning (ERP) systems',
        'Customer Relationship Management (CRM)',
        'Financial and banking applications',
        'Supply chain management systems',
        'Business intelligence and analytics',
        'E-commerce platforms'
      ]
    },
    'couchbase': {
      title: 'Couchbase Managed Services',
      description: 'Expert management of Couchbase NoSQL databases, delivering high-performance, scalable, and flexible data solutions for modern applications.',
      icon: Server,
      features: [
        'Couchbase cluster management and optimization',
        'Multi-dimensional scaling (MDS) configuration',
        'Cross datacenter replication (XDCR) setup',
        'Full-text search and analytics integration',
        'Mobile and edge synchronization',
        'Memory and storage optimization',
        'Security and access control management',
        'Application integration and SDK support'
      ],
      benefits: [
        'Sub-millisecond Performance',
        'Elastic Scalability',
        'Multi-cloud Deployment',
        'Built-in Caching'
      ],
      technologies: ['Couchbase Server', 'Couchbase Mobile', 'Couchbase Lite', 'Sync Gateway', 'N1QL', 'FTS'],
      metrics: [
        { label: 'Query Performance', value: '<1ms' },
        { label: 'Scalability', value: '1M+ ops/sec' },
        { label: 'Availability', value: '99.99%' },
        { label: 'Data Sync Speed', value: 'Real-time' }
      ],
      useCases: [
        'Real-time personalization engines',
        'Content management systems',
        'Gaming and social applications',
        'IoT and sensor data processing',
        'Mobile application backends',
        'Session and catalog management'
      ]
    },
    'neo4j': {
      title: 'Neo4j Graph Database Services',
      description: 'Expert management of Neo4j graph databases, enabling powerful relationship-based analytics and real-time recommendations for connected data scenarios.',
      icon: Globe,
      features: [
        'Neo4j cluster setup and management',
        'Graph data modeling and optimization',
        'Cypher query optimization and tuning',
        'Real-time graph analytics implementation',
        'Graph algorithms and machine learning integration',
        'Multi-database and federation setup',
        'Security and access control configuration',
        'Performance monitoring and scaling'
      ],
      benefits: [
        'Real-time Insights',
        'Connected Data Analytics',
        'Fraud Detection',
        'Recommendation Engines'
      ],
      technologies: ['Neo4j Database', 'Cypher Query Language', 'Graph Data Science', 'Neo4j Bloom', 'APOC', 'GraphQL'],
      metrics: [
        { label: 'Query Performance', value: '10x Faster' },
        { label: 'Relationship Traversal', value: 'Millions/sec' },
        { label: 'Data Connections', value: 'Billions' },
        { label: 'Real-time Analytics', value: '<100ms' }
      ],
      useCases: [
        'Fraud detection and prevention',
        'Real-time recommendation engines',
        'Network and IT operations',
        'Knowledge graphs and semantic search',
        'Social network analysis',
        'Supply chain optimization'
      ]
    },
    'cockroachdb': {
      title: 'CockroachDB Distributed SQL Services',
      description: 'Comprehensive management of CockroachDB distributed SQL databases, providing global consistency, horizontal scaling, and cloud-native resilience.',
      icon: Shield,
      features: [
        'CockroachDB cluster deployment and management',
        'Multi-region setup and geo-partitioning',
        'Horizontal scaling and load balancing',
        'ACID transactions and consistency management',
        'Backup and disaster recovery automation',
        'Performance monitoring and optimization',
        'Security and encryption configuration',
        'Migration from traditional SQL databases'
      ],
      benefits: [
        'Global Consistency',
        'Horizontal Scaling',
        'Zero Downtime',
        'Cloud-Native Architecture'
      ],
      technologies: ['CockroachDB', 'PostgreSQL Wire Protocol', 'Kubernetes', 'Raft Consensus', 'SQL', 'JDBC/ODBC'],
      metrics: [
        { label: 'Availability', value: '99.999%' },
        { label: 'Global Latency', value: '<50ms' },
        { label: 'Horizontal Scale', value: 'Unlimited' },
        { label: 'Data Consistency', value: 'ACID' }
      ],
      useCases: [
        'Global financial applications',
        'Multi-region e-commerce platforms',
        'Real-time gaming and leaderboards',
        'IoT data collection and analytics',
        'Distributed microservices architectures',
        'Compliance and audit systems'
      ]
    }
  }

  const stats = [
    { label: 'Databases Managed', value: '1000+', icon: Database },
    { label: 'Uptime Achieved', value: '99.9%', icon: Shield },
    { label: 'Performance Boost', value: '40%', icon: Zap },
    { label: 'Client Satisfaction', value: '98%', icon: Star }
  ]

  const benefits = [
    {
      icon: Target,
      title: 'Expert Management',
      description: 'Certified database administrators with deep expertise in Oracle and Couchbase technologies.'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Optimized configurations and tuning for maximum database performance and efficiency.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Comprehensive security measures including encryption, access controls, and compliance.'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock monitoring, support, and maintenance for critical database systems.'
    }
  ]

  const managementServices = [
    {
      icon: Settings,
      title: 'Database Administration',
      description: 'Complete DBA services including installation, configuration, and ongoing management'
    },
    {
      icon: BarChart3,
      title: 'Performance Optimization',
      description: 'Continuous monitoring and tuning for optimal database performance'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security implementation and regulatory compliance'
    },
    {
      icon: Globe,
      title: 'Disaster Recovery',
      description: 'Comprehensive backup strategies and disaster recovery planning'
    },
    {
      icon: Users,
      title: 'Migration Services',
      description: 'Seamless database migration and modernization services'
    },
    {
      icon: Zap,
      title: 'Scaling & Optimization',
      description: 'Elastic scaling and resource optimization for growing workloads'
    }
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-white/20 text-white border-white/30">
                Database Management Services
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                Expert Management of Critical Database Systems
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl">
                Comprehensive managed services for Oracle, Couchbase, Neo4j, and CockroachDB databases, ensuring optimal performance, security, and availability with enterprise-grade support and monitoring.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-indigo-700 hover:bg-blue-50 font-semibold">
                  Get Database Assessment <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-700 bg-transparent">
                  <span className="text-white hover:text-indigo-700">Schedule Consultation</span>
                </Button>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center">
                <div className="text-4xl text-blue-200 mb-4">"</div>
                <blockquote className="text-lg font-medium leading-relaxed mb-6 text-white">
                  Migrating from Oracle to PostgreSQL with ACC was a game-changer for us. What we feared would be a complex, high-risk project turned into a seamless transition, thanks to their expertise and disciplined execution. ACC's team not only reduced our licensing and infrastructure costs significantly but also modernized our data environment for scalability and performance. Their hands-on approach, honesty, and never-give-up attitude gave us confidence at every stage. Today, we run business-critical workloads on PostgreSQL with complete reliability — and the credit goes to ACC for making this journey smooth, efficient, and future-ready.
                </blockquote>
                <div className="border-t border-white/20 pt-4">
                  <p className="text-sm font-semibold text-blue-200">
                    — Leading Indian Asset Management Company
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Navigation */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Database Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From traditional Oracle databases to modern NoSQL Couchbase solutions, we provide expert management services that ensure your critical data systems operate at peak performance.
            </p>
          </div>

          {/* Service Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(services).map(([key, service]) => {
              const getLogoSrc = (dbKey) => {
                switch(dbKey) {
                  case 'oracle': return '/images/oracle-logo.png'
                  case 'couchbase': return '/images/couchbase-logo.png'
                  case 'neo4j': return '/images/neo4j-logo.png'
                  case 'cockroachdb': return '/images/cockroachdb-logo.png'
                  default: return '/images/oracle-logo.png'
                }
              }
              
              return (
                <button
                  key={key}
                  onClick={() => setActiveService(key)}
                  className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all ${
                    activeService === key
                      ? 'bg-indigo-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-indigo-50 border border-gray-200'
                  }`}
                >
                  <img 
                    src={getLogoSrc(key)} 
                    alt={`${key} logo`}
                    className="w-5 h-5 mr-2 object-contain"
                  />
                  {key === 'oracle' ? 'Oracle Services' : 
                   key === 'couchbase' ? 'Couchbase Services' :
                   key === 'neo4j' ? 'Neo4j Services' : 'CockroachDB Services'}
                </button>
              )
            })}
          </div>

          {/* Active Service Content */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="flex items-center mb-4">
                  {React.createElement(services[activeService].icon, { className: "w-8 h-8 text-indigo-600 mr-3" })}
                  <h3 className="text-2xl font-bold text-gray-900">
                    {services[activeService].title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6 text-lg">
                  {services[activeService].description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <div className="grid md:grid-cols-2 gap-2">
                    {services[activeService].features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {services[activeService].technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-indigo-700 border-indigo-200">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Performance Metrics:</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {services[activeService].metrics.map((metric, idx) => (
                      <div key={idx} className="text-center p-3 bg-indigo-50 rounded-lg">
                        <div className="text-2xl font-bold text-indigo-600">{metric.value}</div>
                        <div className="text-sm text-gray-600">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Common Use Cases:</h4>
                  <div className="grid md:grid-cols-2 gap-2">
                    {services[activeService].useCases.map((useCase, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{useCase}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Key Benefits:</h4>
                <div className="space-y-3">
                  {services[activeService].benefits.map((benefit, idx) => (
                    <div key={idx} className="bg-indigo-50 p-3 rounded-lg">
                      <span className="font-medium text-indigo-900">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Management Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Complete Database Management Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive approach covers every aspect of database management, from initial setup to ongoing optimization and support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {managementServices.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Platform Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose ACC Database Management?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our database management services combine deep technical expertise with proven methodologies to deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className="text-center p-6 rounded-xl bg-white hover:bg-indigo-50 transition-colors">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Proven Database Management Excellence
              </h2>
              <p className="text-xl text-indigo-100 mb-8">
                Our database management services have helped organizations achieve exceptional performance, reliability, and cost efficiency across their critical data systems.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold mb-2">1000+</div>
                  <div className="text-indigo-200">Databases Managed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">99.9%</div>
                  <div className="text-indigo-200">Uptime Achieved</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">40%</div>
                  <div className="text-indigo-200">Performance Improvement</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">35%</div>
                  <div className="text-indigo-200">Cost Reduction</div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Management Highlights</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                  <span>24/7 proactive monitoring and alerting systems</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                  <span>Expert DBA team with Oracle and Couchbase certifications</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                  <span>Automated backup and disaster recovery solutions</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                  <span>Performance optimization and capacity planning</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                  <span>Enterprise security and compliance management</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Optimize Your Database Performance?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our database experts help you achieve maximum performance, reliability, and cost efficiency. Get a comprehensive database assessment and discover optimization opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold">
              Get Database Assessment
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent">
              <span className="text-white hover:text-gray-900">Schedule Consultation</span>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default DatabaseManagementPage
