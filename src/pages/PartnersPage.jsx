import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  ArrowRight, 
  Award, 
  Users, 
  Handshake, 
  Star, 
  CheckCircle, 
  Building,
  Shield,
  Database,
  Cloud,
  BarChart3,
  HardDrive,
  Zap,
  Filter,
  Search
} from 'lucide-react'

const PartnersPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const partnerCategories = [
    { id: 'All', name: 'All Partners', icon: <Building className="w-4 h-4" />, count: 21 },
    { id: 'Security', name: 'Security', icon: <Shield className="w-4 h-4" />, count: 4 },
    { id: 'Database', name: 'Database & Data', icon: <Database className="w-4 h-4" />, count: 7 },
    { id: 'Cloud', name: 'Cloud & Infrastructure', icon: <Cloud className="w-4 h-4" />, count: 5 },
    { id: 'Monitoring', name: 'Monitoring & Analytics', icon: <BarChart3 className="w-4 h-4" />, count: 4 },
    { id: 'Backup', name: 'Backup & Recovery', icon: <HardDrive className="w-4 h-4" />, count: 1 }
  ]

  const partners = [
    // Security Partners
    {
      name: "Palo Alto Networks",
      category: "Security",
      type: "Cybersecurity Platform",
      description: "Next-generation cybersecurity platform providing advanced threat protection and zero trust architecture solutions.",
      logo: "/images/partners/palo-alto-networks.jpg",
      specializations: ["Next-gen Firewalls", "Cloud Security", "Zero Trust", "Threat Intelligence"],
      benefits: ["Advanced threat protection", "Zero trust architecture", "Cloud-native security", "AI-powered detection"],
      useCases: ["Network security", "Cloud security", "Endpoint protection", "Threat prevention"]
    },
    {
      name: "CrowdStrike",
      category: "Security",
      type: "Endpoint Protection",
      description: "Cloud-native endpoint protection platform delivering real-time threat detection and incident response capabilities.",
      logo: "/images/partners/crowdstrike.png",
      specializations: ["Endpoint Detection", "Threat Hunting", "Incident Response", "Cloud Security"],
      benefits: ["Real-time threat detection", "Behavioral analysis", "Cloud-native architecture", "Rapid response"],
      useCases: ["Endpoint security", "Threat hunting", "Incident response", "Malware protection"]
    },

    {
      name: "Thales",
      category: "Security",
      type: "Data Protection",
      description: "Data protection and encryption solutions ensuring data sovereignty, compliance, and comprehensive key management.",
      logo: "/images/partners/Group2085665705.svg",
      specializations: ["Data Encryption", "Key Management", "HSM Solutions", "Compliance"],
      benefits: ["Data sovereignty", "Regulatory compliance", "Enterprise encryption", "Key lifecycle management"],
      useCases: ["Data protection", "Compliance", "Key management", "Secure communications"]
    },

    // Database & Data Partners
    {
      name: "Oracle",
      category: "Database",
      type: "Enterprise Database",
      description: "Enterprise-grade database management and cloud applications with comprehensive features and reliability.",
      logo: "/images/partners/oracle.png",
      specializations: ["Enterprise Database", "Cloud Applications", "Data Warehousing", "Analytics"],
      benefits: ["Enterprise reliability", "Comprehensive features", "Proven scalability", "Advanced analytics"],
      useCases: ["Enterprise applications", "Data warehousing", "Cloud migration", "Business intelligence"]
    },
    {
      name: "MongoDB",
      category: "Database",
      type: "NoSQL Database",
      description: "Modern document-oriented database platform offering flexible schema design and horizontal scaling capabilities.",
      logo: "/images/partners/mongodb.png",
      specializations: ["Document Database", "Horizontal Scaling", "Developer Tools", "Cloud Services"],
      benefits: ["Flexible schema", "Developer productivity", "Horizontal scaling", "Rich query language"],
      useCases: ["Modern applications", "Content management", "IoT data", "Real-time analytics"]
    },
    {
      name: "PostgreSQL",
      category: "Database",
      type: "Open Source Database",
      description: "Advanced open source relational database with ACID compliance, extensibility, and standards compliance.",
      logo: "/images/partners/postgresql.jpg",
      specializations: ["Relational Database", "ACID Compliance", "Extensibility", "Standards Compliance"],
      benefits: ["Open source", "ACID compliance", "Extensible architecture", "Standards compliance"],
      useCases: ["Web applications", "Analytics", "Geospatial applications", "Data warehousing"]
    },
    {
      name: "CockroachDB",
      category: "Database",
      type: "Distributed Database",
      description: "Distributed SQL database providing global consistency, horizontal scaling, and exceptional resilience.",
      logo: "/images/partners/Group2085665704.svg",
      specializations: ["Distributed SQL", "Global Consistency", "Horizontal Scaling", "Resilience"],
      benefits: ["Global consistency", "Automatic scaling", "Fault tolerance", "SQL compatibility"],
      useCases: ["Global applications", "Financial services", "E-commerce", "Multi-region deployments"]
    },
    {
       name: "Redis",
      category: "Database",
      type: "In-Memory Database",
      description: "High-performance in-memory data structure store providing versatile data structures and real-time analytics.",
      logo: "/images/partners/redis.png",
      specializations: ["In-Memory Storage", "Data Structures", "Caching", "Real-time Analytics"],
      benefits: ["Ultra-high performance", "Versatile data types", "Real-time processing", "Horizontal scaling"],
      useCases: ["Caching", "Session management", "Real-time analytics", "Message queuing"]
    },
    {
      name: "Couchbase",
      category: "Database",
      type: "NoSQL Database",
      description: "Multi-model NoSQL database offering high performance, mobile synchronization, and full-text search capabilities.",
      logo: "/images/partners/Group2085665708.svg",
      specializations: ["Multi-Model", "Mobile Sync", "Full-Text Search", "High Performance"],
      benefits: ["Multi-model flexibility", "Mobile synchronization", "Full-text search", "High availability"],
      useCases: ["Mobile applications", "Content management", "User profiles", "Real-time personalization"]
    },
    {
      name: "Neo4j",
      category: "Database",
      type: "Graph Database",
      description: "Native graph database platform specializing in relationship-focused data and real-time pattern detection.",
      logo: "/images/partners/Group2085665710.svg",
      specializations: ["Graph Database", "Relationship Analysis", "Pattern Detection", "Real-time Insights"],
      benefits: ["Relationship-focused", "Pattern detection", "Real-time insights", "Intuitive modeling"],
      useCases: ["Fraud detection", "Recommendation engines", "Network analysis", "Knowledge graphs"]
    },

    // Cloud & Infrastructure Partners
    {
      name: "Amazon Web Services",
      category: "Cloud",
      type: "Cloud Platform",
      description: "Premier cloud platform partner providing comprehensive cloud services and infrastructure solutions.",
      logo: "/images/partners/aws.png",
      specializations: ["Cloud Computing", "Infrastructure", "AI/ML Services", "Global Reach"],
      benefits: ["Comprehensive services", "Global infrastructure", "Innovation leadership", "Enterprise support"],
      useCases: ["Cloud migration", "Application hosting", "Data analytics", "AI/ML workloads"]
    },
    {
      name: "Jio Cloud",
      category: "Cloud",
      type: "Regional Cloud",
      description: "India's premier cloud platform offering comprehensive digital infrastructure with data sovereignty, regulatory compliance, and enterprise-grade security. Provides localized cloud services with global standards and cost-effective solutions tailored for Indian businesses.",
      logo: "/images/partners/Group2085665711.svg",
      specializations: ["Regional Cloud Services", "Data Sovereignty", "Digital Infrastructure", "Enterprise Security", "Compliance Management", "Cost Optimization", "Local Support", "Multi-Cloud Integration"],
      benefits: ["Complete data sovereignty with Indian data centers", "Regulatory compliance for local laws", "Cost-effective pricing models", "24/7 local language support", "Enterprise-grade security and reliability", "Seamless integration with global cloud services", "Reduced latency for Indian users", "Government and enterprise compliance"],
      useCases: ["Government digital initiatives", "Banking and financial services", "Healthcare data management", "E-commerce platforms", "Educational institutions", "Startup ecosystem support", "Enterprise digital transformation", "Disaster recovery solutions"]
    },
    {
      name: "Nutanix",
      category: "Cloud",
      type: "Hyperconverged Infrastructure",
      description: "Hybrid cloud platform providing simplified operations, scalability, and comprehensive infrastructure solutions.",
      logo: "/images/partners/Group2085665713.svg",
      specializations: ["Hyperconverged Infrastructure", "Hybrid Cloud", "Simplified Operations", "Scalability"],
      benefits: ["Simplified operations", "Hybrid cloud flexibility", "Linear scalability", "Unified management"],
      useCases: ["Data center modernization", "Hybrid cloud", "Disaster recovery", "Edge computing"]
    },
    {
      name: "VMware",
      category: "Cloud",
      type: "Virtualization Platform",
      description: "Industry-leading virtualization and cloud infrastructure platform with proven technology and ecosystem.",
      logo: "/images/partners/vmware.png",
      specializations: ["Virtualization", "Cloud Infrastructure", "Digital Workspace", "Networking"],
      benefits: ["Proven technology", "Comprehensive portfolio", "Strong ecosystem", "Enterprise grade"],
      useCases: ["Server virtualization", "Cloud infrastructure", "Digital workspace", "Network virtualization"]
    },
    {
      name: "Red Hat",
      category: "Cloud",
      type: "Open Source Platform",
      description: "World's leading provider of enterprise open source solutions, delivering robust Linux platforms, advanced container technologies, and comprehensive automation tools. Enables organizations to build, deploy, and manage applications across hybrid and multi-cloud environments with enterprise-grade support and security.",
      logo: "/images/partners/redhat.png",
      specializations: ["Enterprise Linux (RHEL)", "OpenShift Container Platform", "Ansible Automation", "Hybrid Cloud Solutions", "Kubernetes Management", "Application Development", "Infrastructure Automation", "Security & Compliance"],
      benefits: ["Industry-leading open source innovation", "Enterprise-grade support and security", "Hybrid and multi-cloud flexibility", "Container and Kubernetes leadership", "Comprehensive automation capabilities", "Strong ecosystem and community", "Proven enterprise reliability", "Cost-effective licensing models"],
      useCases: ["Container orchestration and management", "Infrastructure automation and configuration", "Hybrid cloud deployments", "Application modernization and migration", "DevOps and CI/CD pipelines", "Edge computing solutions", "Microservices architecture", "Enterprise Linux standardization"]
    },

    // Monitoring & Analytics Partners

    {
      name: "New Relic",
      category: "Monitoring",
      type: "Observability Platform",
      description: "Full-stack observability platform delivering real-time insights, intelligent alerting, and performance optimization.",
      logo: "/images/partners/newrelic.png",
      specializations: ["Full-Stack Observability", "Real-time Insights", "Alerting", "Performance Optimization"],
      benefits: ["Full-stack visibility", "Real-time insights", "Intelligent alerting", "Performance optimization"],
      useCases: ["Application monitoring", "Infrastructure monitoring", "Browser monitoring", "Mobile monitoring"]
    },
    {
      name: "Vunet",
      category: "Monitoring",
      type: "IT Operations Analytics",
      description: "AIOps and business service monitoring platform providing business context and predictive analytics.",
      logo: "/images/partners/Group2085665715.svg",
      specializations: ["AIOps", "Business Service Monitoring", "Predictive Analytics", "Automation"],
      benefits: ["Business context", "Predictive analytics", "Automation capabilities", "Service assurance"],
      useCases: ["Service assurance", "Capacity planning", "Incident management", "Business monitoring"]
    },
    {
      name: "Cloudera",
      category: "Monitoring",
      type: "Data Platform",
      description: "Comprehensive data platform for analytics and machine learning with unified security and governance.",
      logo: "/images/partners/Group2085665717.svg",
      specializations: ["Data Analytics", "Machine Learning", "Data Engineering", "Governance"],
      benefits: ["Unified platform", "Enterprise security", "Data governance", "Scalable analytics"],
      useCases: ["Data analytics", "Machine learning", "Data engineering", "Business intelligence"]
    },

    // Backup & Recovery Partners
    {
      name: "Veeam",
      category: "Backup",
      type: "Data Protection",
      description: "Comprehensive backup, recovery, and data management solutions with reliable protection and cloud integration.",
      logo: "/images/partners/Group2085665720.svg",
      specializations: ["Backup Solutions", "Disaster Recovery", "Data Management", "Cloud Integration"],
      benefits: ["Reliable backup", "Fast recovery", "Cloud integration", "Comprehensive protection"],
      useCases: ["Data backup", "Disaster recovery", "Cloud data management", "Business continuity"]
    },

    // Specialized Technology Partners
    {
      name: "Speedata",
      category: "Cloud",
      type: "Data Processing",
      description: "Advanced high-performance data processing platform specializing in ultra-low latency solutions and real-time analytics. Delivers cutting-edge hardware acceleration and specialized processing capabilities for mission-critical applications requiring microsecond-level response times and massive data throughput.",
      logo: "/images/partners/Group2085665719.svg",
      specializations: ["Ultra-Low Latency Processing", "Hardware Acceleration", "Real-time Analytics", "High-Frequency Data Processing", "FPGA Solutions", "Memory Computing", "Stream Processing", "Performance Optimization"],
      benefits: ["Microsecond-level latency performance", "Massive data throughput capabilities", "Hardware-accelerated processing", "Real-time decision making", "Specialized FPGA technology", "Scalable processing architecture", "Mission-critical reliability", "Custom performance tuning"],
      useCases: ["High-frequency financial trading", "Real-time fraud detection", "Algorithmic trading systems", "Market data processing", "Risk management systems", "Real-time recommendation engines", "IoT data stream processing", "Performance-critical analytics"]
    },
    
    // Additional Technology Partners
    {
      name: "Dynatrace",
      category: "Monitoring",
      type: "Application Performance",
      description: "AI-powered observability platform providing automatic discovery, root cause analysis, and intelligent insights.",
      logo: "/images/partners/Group2085665722.svg",
      specializations: ["APM", "AI-Powered Analytics", "Automatic Discovery", "Root Cause Analysis"],
      benefits: ["AI-powered insights", "Automatic discovery", "Root cause analysis", "Real-time monitoring"],
      useCases: ["Application monitoring", "Infrastructure monitoring", "Digital experience", "Cloud monitoring"]
    },
    {
      name: "Fortinet",
      category: "Security",
      type: "Network Security",
      description: "Integrated cybersecurity solutions providing unified security fabric and comprehensive threat intelligence.",
      logo: "/images/partners/Group2085665725.svg",
      specializations: ["Network Security", "Secure SD-WAN", "Cloud Security", "Threat Intelligence"],
      benefits: ["Unified security fabric", "High performance", "Threat intelligence", "Scalable architecture"],
      useCases: ["Network protection", "Secure connectivity", "Cloud security", "Branch security"]
    }
  ]

  const filteredPartners = partners.filter(partner => {
    const matchesCategory = selectedCategory === 'All' || partner.category === selectedCategory
    const matchesSearch = partner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         partner.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         partner.specializations.some(spec => spec.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const stats = [
    { number: "21+", label: "Technology Partners" },
    { number: "100+", label: "Joint Implementations" },
    { number: "99.9%", label: "Solution Reliability" },
    { number: "24/7", label: "Partner Support" }
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                Technology Partners
                <span className="text-purple-200"> Ecosystem</span>
              </h1>
              <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                Collaborating with industry leaders to deliver comprehensive cloud solutions. Our extensive partner ecosystem ensures best-in-class technology integration and innovation.
              </p>
              <div className="flex justify-center sm:justify-start">
                <Button size="lg" className="bg-white text-purple-700 hover:bg-purple-50 font-semibold">
                  <Link to="/get-started" className="flex items-center">
                    Explore Solutions <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-lg">
                    <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-purple-200">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Categories & Search */}
      <section className="py-12 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search partners..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {partnerCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-purple-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-purple-50 border border-gray-200'
                  }`}
                >
                  {category.icon}
                  <span>{category.name}</span>
                  <Badge variant={selectedCategory === category.id ? "secondary" : "outline"} className="text-xs">
                    {category.id === 'All' ? partners.length : category.count}
                  </Badge>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Partners Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technology Partners</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic partnerships with industry leaders to deliver comprehensive cloud solutions
            </p>
          </div>
          
          {/* AWS Prominent Section */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-8 lg:p-12 border border-orange-200">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <img 
                      src="/images/partners/aws.png" 
                      alt="AWS Logo" 
                      className="h-16 w-auto mr-6"
                    />
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-2">Amazon Web Services</h3>
                      <Badge className="bg-orange-600 hover:bg-orange-700 text-white text-sm px-3 py-1">
                        Advanced Tier Partner
                      </Badge>
                    </div>
                  </div>
                  <p className="text-lg text-gray-700 mb-6">
                    Premier AWS Advanced Tier Partner with proven expertise in cloud migration, infrastructure optimization, and enterprise-scale deployments.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <h4 className="font-semibold text-gray-900 mb-2">Migration Competency</h4>
                      <p className="text-sm text-gray-600">Certified expertise in large-scale cloud migrations</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <h4 className="font-semibold text-gray-900 mb-2">DevOps Competency</h4>
                      <p className="text-sm text-gray-600">Advanced automation and CI/CD capabilities</p>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:block">
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <h4 className="font-bold text-gray-900 mb-4">Key Achievements</h4>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <Award className="w-5 h-5 text-orange-600 mr-3" />
                        <span className="text-gray-700">AWS Advanced Tier Status</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                        <span className="text-gray-700">Migration Services Competency</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-5 h-5 text-yellow-600 mr-3" />
                        <span className="text-gray-700">100+ Successful Migrations</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-5 h-5 text-blue-600 mr-3" />
                        <span className="text-gray-700">Certified Solution Architects</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Other Technology Partners */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {partners.filter(p => ['Security', 'Database', 'Monitoring', 'Backup'].includes(p.category)).map((partner, index) => (
              <div key={index} className="group flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300">
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`}
                  className="max-w-full max-h-12 object-contain opacity-100 transition-opacity"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden w-full h-12 bg-gray-100 rounded items-center justify-center text-gray-500 text-xs font-medium">
                  {partner.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Capabilities Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Platform Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise-grade platforms and infrastructure solutions for comprehensive cloud transformation
            </p>
          </div>
          
          {/* High Priority Platforms */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {partners.filter(p => ['Oracle', 'VMware', 'Nutanix', 'Jio Cloud', 'Red Hat', 'Speedata'].includes(p.name)).map((partner, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 flex items-center justify-center bg-gray-50 rounded-lg">
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} logo`}
                        className="max-w-full max-h-full object-contain"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="hidden w-full h-full bg-gray-100 rounded items-center justify-center text-gray-500 text-xs font-medium">
                        {partner.name}
                      </div>
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                        {partner.name}
                      </CardTitle>
                      <Badge variant="secondary" className="text-xs mt-1">{partner.type}</Badge>
                    </div>
                  </div>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {partner.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Specializations</h4>
                      <div className="flex flex-wrap gap-1">
                        {partner.specializations.slice(0, 3).map((spec, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {spec}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Benefits</h4>
                      <ul className="space-y-1">
                        {partner.benefits.slice(0, 2).map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Other Platform Partners */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {partners.filter(p => p.category === 'Cloud' && !['Amazon Web Services', 'Oracle', 'VMware', 'Nutanix', 'Jio Cloud', 'Red Hat', 'Speedata'].includes(p.name)).map((partner, index) => (
              <div key={index} className="group flex items-center justify-center p-4 bg-white rounded-lg hover:shadow-lg transition-all duration-300">
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`}
                  className="max-w-full max-h-12 object-contain opacity-100 transition-opacity"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden w-full h-12 bg-gray-100 rounded items-center justify-center text-gray-500 text-xs font-medium">
                  {partner.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Partnership Advantages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our strategic partnerships enable us to deliver comprehensive, best-in-class solutions for every business need.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Certified Expertise</h3>
              <p className="text-gray-600">Deep technical certifications and proven competencies across all partner technologies.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Rapid Innovation</h3>
              <p className="text-gray-600">Access to latest technologies and early adoption of cutting-edge solutions.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Joint Support</h3>
              <p className="text-gray-600">Combined support from ACC and partner teams for comprehensive solution delivery.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Proven Results</h3>
              <p className="text-gray-600">Track record of successful implementations and measurable business outcomes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Leverage Our Partner Ecosystem?</h2>
          <p className="text-xl text-purple-100 mb-8">
            Discover how our technology partnerships can accelerate your digital transformation journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-700 hover:bg-purple-50 font-semibold">
              <Link to="/contact-sales" className="flex items-center">
                Contact Sales <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-700">
              <Link to="/schedule-consultation">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default PartnersPage
