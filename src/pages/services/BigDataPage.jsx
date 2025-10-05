import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { ArrowRight, Database, Cloud, BarChart3, Zap, Target, Shield, Globe, CheckCircle, Star, TrendingUp, Layers, GitBranch, Brain, Settings } from 'lucide-react'

const BigDataPage = () => {
  const [activeService, setActiveService] = useState('data-lake')

  const services = {
    'data-lake': {
      title: 'Data Lake Build and Operate',
      description: 'Designing, implementing, and managing scalable data lakes for storing, processing, and analyzing large volumes of structured and unstructured data.',
      icon: Database,
      features: [
        'Scalable data lake architecture design',
        'Multi-format data ingestion (structured, semi-structured, unstructured)',
        'Real-time and batch processing capabilities',
        'Advanced data cataloging and metadata management',
        'Cost-optimized storage strategies',
        'Data governance and security implementation',
        'Performance monitoring and optimization'
      ],
      benefits: [
        'Unlimited scalability',
        'Cost-effective storage',
        'Flexible data formats',
        'Real-time analytics'
      ],
      technologies: ['Apache Hadoop', 'Apache Spark', 'AWS S3', 'Azure Data Lake', 'Delta Lake', 'Apache Hive']
    },
    'data-pipelines': {
      title: 'Cloud-Native Data Pipelines',
      description: 'Expertise in constructing high-performance, resilient data pipelines optimized for cloud environments, facilitating seamless data flow from diverse sources to analytical platforms.',
      icon: GitBranch,
      features: [
        'Event-driven pipeline architecture',
        'Auto-scaling and fault-tolerant design',
        'Multi-cloud deployment capabilities',
        'Real-time stream processing',
        'Data quality validation and monitoring',
        'Automated error handling and recovery',
        'CI/CD integration for pipeline deployment'
      ],
      benefits: [
        'High availability',
        'Auto-scaling',
        'Real-time processing',
        'Cost optimization'
      ],
      technologies: ['Apache Kafka', 'Apache Airflow', 'AWS Kinesis', 'Azure Stream Analytics', 'Google Dataflow', 'Kubernetes']
    },
    'partnerships': {
      title: 'Strategic Data Platform Partnerships',
      description: 'Leveraging our strong partnerships with industry leaders like Couchbase, Cloudera, and Databricks to provide comprehensive and integrated big data solutions.',
      icon: Globe,
      features: [
        'Couchbase NoSQL database solutions for high-performance applications',
        'Cloudera enterprise-grade data management and analytics platforms',
        'Databricks unified data analytics and AI capabilities',
        'Integrated solution architecture across platforms',
        'Best-practice implementation methodologies',
        'Ongoing support and optimization services',
        'Training and knowledge transfer programs'
      ],
      benefits: [
        'Enterprise-grade solutions',
        'Proven methodologies',
        'Expert support',
        'Integrated platforms'
      ],
      technologies: ['Couchbase', 'Cloudera CDP', 'Databricks', 'Apache Spark', 'MLflow', 'Delta Lake']
    },
    'ml-enablement': {
      title: 'ML Enablement',
      description: 'Providing the infrastructure, tools, and expertise to build, deploy, and manage machine learning models, enabling data-driven insights and predictive capabilities.',
      icon: Brain,
      features: [
        'MLOps pipeline development and automation',
        'Model training and validation infrastructure',
        'Real-time model serving and inference',
        'A/B testing and model performance monitoring',
        'Feature engineering and data preparation',
        'Model versioning and lifecycle management',
        'Automated model retraining and deployment'
      ],
      benefits: [
        'Faster time-to-market',
        'Scalable ML operations',
        'Automated workflows',
        'Production-ready models'
      ],
      technologies: ['TensorFlow', 'PyTorch', 'Kubeflow', 'MLflow', 'Apache Airflow', 'Docker', 'Kubernetes']
    },
    'data-modernization': {
      title: 'Data Modernization',
      description: 'Helping organizations transform their legacy data systems into modern, agile, and scalable data architectures, leveraging cloud technologies for improved performance and efficiency.',
      icon: Settings,
      features: [
        'Legacy system assessment and migration planning',
        'Cloud-first architecture design',
        'Data warehouse to data lake migration',
        'API-first data integration strategies',
        'Microservices-based data architecture',
        'Real-time analytics capability implementation',
        'Change management and training programs'
      ],
      benefits: [
        'Reduced operational costs',
        'Improved agility',
        'Enhanced performance',
        'Future-ready architecture'
      ],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Snowflake', 'Apache Kafka', 'Kubernetes', 'Terraform']
    }
  }

  const stats = [
    { label: 'Data Projects Delivered', value: '200+', icon: Database },
    { label: 'Petabytes Processed', value: '150+', icon: BarChart3 },
    { label: 'Processing Speed Improvement', value: '10x', icon: Zap },
    { label: 'Client Satisfaction', value: '98%', icon: Star }
  ]

  const benefits = [
    {
      icon: Target,
      title: 'Scalable Architecture',
      description: 'Build data solutions that grow with your business, handling petabytes of data with ease.'
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Enable instant insights with real-time data processing and streaming analytics capabilities.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Implement robust security measures and compliance frameworks for sensitive data protection.'
    },
    {
      icon: Cloud,
      title: 'Cloud-Native Solutions',
      description: 'Leverage cloud technologies for cost-effective, scalable, and resilient data infrastructure.'
    }
  ]

  const partners = [
    {
      name: 'Couchbase',
      description: 'NoSQL database solutions for high-performance applications',
      specialization: 'NoSQL Database',
      benefits: ['High performance', 'Flexible data model', 'Built-in caching', 'Mobile sync']
    },
    {
      name: 'Cloudera',
      description: 'Enterprise-grade data management and analytics platforms',
      specialization: 'Data Platform',
      benefits: ['Enterprise security', 'Hybrid cloud', 'Machine learning', 'Data governance']
    },
    {
      name: 'Databricks',
      description: 'Unified data analytics and AI platform',
      specialization: 'Analytics & AI',
      benefits: ['Unified platform', 'Collaborative notebooks', 'MLOps', 'Delta Lake']
    }
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-purple-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-white/20 text-white border-white/30">
                Big Data Solutions
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                Harness the Full Potential of Your Data
              </h1>
              <p className="text-xl text-purple-100 mb-8 max-w-2xl">
                ACC empowers organizations to unlock the value of their data through comprehensive Big Data solutions, enabling advanced analytics and informed decision-making across the enterprise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-purple-700 hover:bg-purple-50 font-semibold">
                  <Link to="/get-started" className="flex items-center text-purple-700 hover:text-purple-800 font-semibold">
                    Get Started <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-700 font-semibold">
                  <Link to="/schedule-consultation" className="flex items-center text-white hover:text-purple-700 font-semibold">
                    Schedule Assessment <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center">
                <div className="text-4xl text-purple-200 mb-4">"</div>
                <blockquote className="text-lg font-medium leading-relaxed mb-6 text-white">
                  Our first client has already subscribed and downloaded 2 years of data in under a minute—something that earlier took almost a month through our on-premises downloader. A big thank you to the entire team for making this possible.
                </blockquote>
                <div className="border-t border-white/20 pt-4">
                  <p className="text-sm font-semibold text-purple-200">
                    — The biggest stock exchange in India
                  </p>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">2 Years</div>
                    <div className="text-xs text-purple-200">Data Downloaded</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">&lt; 1 Min</div>
                    <div className="text-xs text-purple-200">Processing Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">30x</div>
                    <div className="text-xs text-purple-200">Faster</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Data Lifecycle */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Driving Digital Transformation across the Full Data Lifecycle
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Comprehensive Big Data Solutions and Advanced Analytics through our complete data lifecycle approach
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Data Strategy */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Data Strategy</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Designs cloud-native AWS strategies</li>
                <li>• Defines roadmap for cloud adoption and modernization</li>
              </ul>
            </div>

            {/* Data Governance */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Data Governance</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Implements governance frameworks with AWS Lake Formation</li>
                <li>• Establishes policies for access and retention</li>
              </ul>
            </div>

            {/* Data Engineering */}
            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-6 rounded-xl border border-cyan-200">
              <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center mb-4">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Data Engineering</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Builds enterprise-grade data lakes and pipelines</li>
                <li>• Leverages Databricks for AI/ML optimization</li>
              </ul>
            </div>

            {/* Data Analytics */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Data Analytics</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Connects ERP, CRM, IoT, and operational systems</li>
                <li>• Creates unified, real-time platforms</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Data Integration */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                <GitBranch className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Data Integration</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Builds dashboards and tracking KPIs</li>
                <li>• Supports advanced analytics and executive reporting</li>
              </ul>
            </div>

            {/* Machine Learning */}
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-xl border border-indigo-200">
              <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Machine Learning</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Operationalizes ML models on Databricks</li>
                <li>• Drives predictions, personalization, and modernization</li>
              </ul>
            </div>

            {/* Data Visualization */}
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl border border-pink-200">
              <div className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Data Visualization</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Creates interactive dashboards with Tableau</li>
                <li>• Enables drill-down insights and automated reports</li>
              </ul>
            </div>

            {/* Cloud Solutions */}
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-xl border border-teal-200">
              <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-4">
                <Cloud className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Cloud Solutions</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Migrates legacy systems to AWS-native architectures</li>
                <li>• Implements cloud-native and modernization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Navigation */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Big Data Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From data lake implementation to ML enablement, we provide end-to-end big data solutions that transform how organizations leverage their data assets.
            </p>
          </div>

          {/* Service Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(services).map(([key, service]) => {
              const Icon = service.icon
              return (
                <button
                  key={key}
                  onClick={() => setActiveService(key)}
                  className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all ${
                    activeService === key
                      ? 'bg-purple-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-purple-50 border border-gray-200'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-2" />
                  {service.title.split(' ')[0]} {service.title.split(' ')[1]}
                </button>
              )
            })}
          </div>

          {/* Active Service Content */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="flex items-center mb-4">
                  {React.createElement(services[activeService].icon, { className: "w-8 h-8 text-purple-600 mr-3" })}
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

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {services[activeService].technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-purple-700 border-purple-200">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Key Benefits:</h4>
                <div className="space-y-3">
                  {services[activeService].benefits.map((benefit, idx) => (
                    <div key={idx} className="bg-purple-50 p-3 rounded-lg">
                      <span className="font-medium text-purple-900">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Partnerships */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Strategic Technology Partnerships
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We partner with industry leaders to deliver best-in-class big data solutions that meet enterprise requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{partner.name}</h3>
                  <Badge className="bg-purple-100 text-purple-800">
                    {partner.specialization}
                  </Badge>
                </div>
                <p className="text-gray-600 mb-4 text-center">{partner.description}</p>
                <div className="space-y-2">
                  {partner.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose ACC for Big Data?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive approach to big data delivers measurable business value through proven methodologies and cutting-edge technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className="text-center p-6 rounded-xl bg-white hover:bg-purple-50 transition-colors">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Data Strategy?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our big data experts help you unlock the full potential of your data assets. Start your transformation journey today with a comprehensive data assessment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white font-semibold">
              Get Started Today
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent">
              <span className="text-white hover:text-gray-900">Schedule Data Assessment</span>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default BigDataPage
