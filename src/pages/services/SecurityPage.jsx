import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { ArrowRight, Shield, Eye, AlertTriangle, Lock, CheckCircle, Star, Zap, Target, Globe, Clock, Users, Search, FileText, Activity } from 'lucide-react'

const SecurityPage = () => {
  const [activeService, setActiveService] = useState('cloud-security')

  const services = {
    'cloud-security': {
      title: 'Cloud Security Posture Management',
      description: 'Comprehensive cloud security assessment and continuous monitoring to ensure optimal security posture across your cloud infrastructure.',
      icon: Shield,
      phases: [
        {
          title: 'Discover & Baseline',
          items: [
            'Enumerate all orgs/subscriptions/projects/tenancies',
            'Auto-inventory accounts, regions, VPC/VNet, subnets, gateways, peering',
            'Map EKS/AKS/GKE/OKE, databases, storage, keys, secrets, serverless',
            'Identify public endpoints, tags and owners',
            'Map against CIS Benchmarks (L1/L2), NIST CSF, ISO 27001 Annex A controls'
          ]
        },
        {
          title: 'Prioritize & Threat Model',
          items: [
            'Threat-model misconfigurations using attack-path analysis',
            'Analyze IAM privilege escalation paths',
            'Assess exposed object storage, IMDS/SSRF vulnerabilities',
            'Evaluate OIDC trust issues, KMS misuse, flat networks',
            'Rank by exploitability, blast radius, and business impact'
          ]
        },
        {
          title: 'Remediate & Govern',
          items: [
            'Provide policy-as-code and automated fixes (native & IaC)',
            'Engineer guardrails (SCPs/Policies), blueprints, and CI/CD gates',
            'Implement continuous monitoring dashboards',
            'Establish executive risk register and exceptions workflow',
            'Define KPIs/SLOs and evidence collection for audits'
          ]
        }
      ],
      benefits: [
        'Automated Discovery',
        'Risk-Based Prioritization',
        'Policy-as-Code Fixes',
        'Continuous Monitoring'
      ],
      technologies: ['AWS Security Hub', 'Azure Security Center', 'Google Cloud Security', 'CIS Benchmarks', 'NIST CSF', 'ISO 27001'],
      metrics: [
        { label: 'Asset Discovery', value: '100%' },
        { label: 'Risk Reduction', value: '85%' },
        { label: 'Compliance Score', value: '98%' },
        { label: 'Automation Rate', value: '90%' }
      ]
    },
    'pre-audit': {
      title: 'Pre-Audit Readiness (BFS)',
      description: 'Comprehensive audit preparation services to ensure your organization is ready for regulatory compliance assessments and certifications.',
      icon: FileText,
      phases: [
        {
          title: 'Plan & Define Scope',
          items: [
            'Define boundaries, in-scope systems/workloads, data classifications',
            'Identify suppliers, sites/regions for assessment',
            'Create Statement of Applicability (for ISO)',
            'Define trust services criteria (for SOC 2)',
            'Establish audit timeline and resource allocation'
          ]
        },
        {
          title: 'Document Review & Control Testing',
          items: [
            'Review policies, procedures, risk registers',
            'Assess BCP/DR, change management processes',
            'Evaluate vulnerability management and incident response',
            'Test vendor risk and secure SDLC/DevSecOps practices',
            'Sample-based testing of identity, network, logging controls'
          ]
        },
        {
          title: 'Gap Analysis & Mock Audit',
          items: [
            'Comprehensive gap analysis with severity/owner/ETA',
            'Quick wins (0-30 days), medium (31-90), strategic (90+) remediation',
            'Risk acceptance workflow and compensating controls',
            'Interview preparation and stakeholder Q&A scripts',
            'Auditor day-in-the-life dry-run walkthroughs'
          ]
        }
      ],
      benefits: [
        'Audit Readiness',
        'Compliance Gaps Identified',
        'Remediation Roadmap',
        'Mock Audit Training'
      ],
      technologies: ['ISO 27001', 'SOC 2', 'PCI-DSS', 'NIST', 'Evidence Vault', 'Control Testing'],
      metrics: [
        { label: 'Audit Success Rate', value: '98%' },
        { label: 'Gap Remediation', value: '95%' },
        { label: 'Time to Compliance', value: '60%↓' },
        { label: 'Cost Reduction', value: '40%' }
      ]
    },
    'red-teaming': {
      title: 'Red Teaming (with Purple Team Option)',
      description: 'Advanced adversarial simulation services that test your security defenses through real-world attack scenarios and collaborative purple team exercises.',
      icon: Eye,
      phases: [
        {
          title: 'Scoping & Threat Modeling',
          items: [
            'Define crown jewels, adversary profiles, success criteria',
            'Set dwell-time targets and engagement boundaries',
            'Identify critical assets and attack surfaces',
            'Establish rules of engagement and safety protocols',
            'Plan scenario coverage and testing methodology'
          ]
        },
        {
          title: 'Attack Simulation',
          items: [
            'Recon & Initial Access: OSINT, code/search dorks, phishing/OAuth',
            'Privilege Escalation: Cloud IAM privesc paths, account pivoting',
            'Lateral Movement: Target KMS/Secrets, CI/CD runners',
            'Actions on Objectives: Data access, tamper resilience tests',
            'Evasion & Persistence: Logging gaps, role persistence, federated identity abuse'
          ]
        },
        {
          title: 'Debrief & Purple Team Workshops',
          items: [
            'Comprehensive attack path documentation',
            'Replay TTPs with Blue Team for learning',
            'Turn findings into detections and hardening backlog',
            'Knowledge transfer and capability building',
            'Continuous improvement recommendations'
          ]
        }
      ],
      scenarios: [
        'External to Cloud',
        'Control Plane Abuse',
        'Policies & Data Exfiltration',
        'Kubernetes Attack Paths',
        'Insider/Partner Threat'
      ],
      benefits: [
        'Real Attack Simulation',
        'Purple Team Learning',
        'Detection Improvement',
        'Capability Building'
      ],
      technologies: ['Metasploit', 'Cobalt Strike', 'Custom Tools', 'Cloud TTPs', 'MITRE ATT&CK', 'Purple Team'],
      metrics: [
        { label: 'Attack Paths Found', value: '95%' },
        { label: 'Detection Gaps', value: '100%' },
        { label: 'Team Capability', value: '80%↑' },
        { label: 'Security Posture', value: '90%↑' }
      ]
    }
  }

  const stats = [
    { label: 'Security Assessments', value: '350+', icon: Shield },
    { label: 'Threats Mitigated', value: '10K+', icon: AlertTriangle },
    { label: 'Compliance Frameworks', value: '15+', icon: CheckCircle },
    { label: 'Client Protection Rate', value: '99.9%', icon: Star }
  ]

  const benefits = [
    {
      icon: Target,
      title: 'Proactive Defense',
      description: 'Stay ahead of threats with continuous monitoring and proactive security measures.'
    },
    {
      icon: Zap,
      title: 'Rapid Response',
      description: 'Automated incident response and real-time threat mitigation capabilities.'
    },
    {
      icon: Globe,
      title: 'Multi-Cloud Security',
      description: 'Comprehensive security across AWS, Azure, Google Cloud, and hybrid environments.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Certified security professionals with extensive experience in enterprise security.'
    }
  ]

  const complianceFrameworks = [
    { name: 'ISO 27001', description: 'Information Security Management System' },
    { name: 'SOC 2', description: 'Service Organization Control Type 2' },
    { name: 'PCI-DSS', description: 'Payment Card Industry Data Security Standard' },
    { name: 'NIST CSF', description: 'Cybersecurity Framework' },
    { name: 'CIS Controls', description: 'Center for Internet Security Benchmarks' },
    { name: 'GDPR', description: 'General Data Protection Regulation' }
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-600 via-purple-600 to-purple-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-white/20 text-white border-white/30">
                Enterprise Security Audits
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                Comprehensive Security Audit Services
              </h1>
              <p className="text-xl text-purple-100 mb-8 max-w-2xl">
                Protect your digital assets with our comprehensive security audit services including Cloud Security Posture Management, Pre-Audit Readiness, and Advanced Red Teaming with Purple Team collaboration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-purple-700 hover:bg-purple-50 font-semibold">
                  Security Assessment <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-700 bg-transparent">
                  <span className="text-white hover:text-purple-700">Schedule Consultation</span>
                </Button>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => {
                  const Icon = stat.icon
                  return (
                    <div key={index} className="text-center">
                      <Icon className="w-8 h-8 mx-auto mb-3 text-purple-200" />
                      <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-sm text-purple-200">{stat.label}</div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Selection */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Security Audit Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive suite of security audit services designed to protect and strengthen your organization's security posture.
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
                  {service.title}
                </button>
              )
            })}
          </div>

          {/* Active Service Details */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8">
              <div className="flex items-center mb-6">
                {React.createElement(services[activeService].icon, { className: "w-8 h-8 text-purple-600 mr-4" })}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{services[activeService].title}</h3>
                  <p className="text-gray-600 mt-2">{services[activeService].description}</p>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Phases/Process */}
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Process & Methodology</h4>
                  <div className="space-y-6">
                    {services[activeService].phases.map((phase, index) => (
                      <div key={index} className="border-l-4 border-purple-200 pl-4">
                        <h5 className="font-semibold text-gray-900 mb-2">{phase.title}</h5>
                        <ul className="space-y-1">
                          {phase.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="text-sm text-gray-600 flex items-start">
                              <CheckCircle className="w-4 h-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits & Metrics */}
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Key Benefits</h4>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {services[activeService].benefits.map((benefit, index) => (
                      <div key={index} className="bg-purple-50 p-3 rounded-lg text-center">
                        <div className="font-semibold text-purple-700 text-sm">{benefit}</div>
                      </div>
                    ))}
                  </div>

                  <h4 className="text-xl font-bold text-gray-900 mb-4">Success Metrics</h4>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {services[activeService].metrics.map((metric, index) => (
                      <div key={index} className="text-center">
                        <div className="text-2xl font-bold text-purple-600">{metric.value}</div>
                        <div className="text-sm text-gray-600">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Scenarios for Red Teaming */}
                  {services[activeService].scenarios && (
                    <>
                      <h4 className="text-xl font-bold text-gray-900 mb-4">Attack Scenarios Covered</h4>
                      <div className="space-y-2">
                        {services[activeService].scenarios.map((scenario, index) => (
                          <div key={index} className="flex items-center">
                            <Target className="w-4 h-4 text-red-500 mr-2" />
                            <span className="text-sm text-gray-700">{scenario}</span>
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  <h4 className="text-xl font-bold text-gray-900 mb-4 mt-6">Technologies & Frameworks</h4>
                  <div className="flex flex-wrap gap-2">
                    {services[activeService].technologies.map((tech, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Security Commitment
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              At ACC, security and compliance are at the core of everything we build. From financial services to healthcare and enterprise workloads, our solutions are designed with zero-trust principles, strong data protection, and industry-standard compliance frameworks. We ensure every client can operate confidently in a secure and compliant environment.
            </p>
          </div>
        </div>
      </section>

      {/* Key Security Practices */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Key Security Practices
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Shield className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Multi-Layered Protection</h3>
              <p className="text-gray-600">Network firewalls, intrusion detection, and end-to-end encryption safeguard sensitive workloads.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Lock className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Identity & Access Controls</h3>
              <p className="text-gray-600">Fine-grained IAM, role-based access, and multi-factor authentication ensure that only authorized users can access critical systems.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Eye className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Data Privacy</h3>
              <p className="text-gray-600">All customer data is encrypted at rest and in transit. Sensitive information is anonymized wherever possible.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <AlertTriangle className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Proactive Threat Detection</h3>
              <p className="text-gray-600">Tools like AWS GuardDuty, Security Hub, and SIEM integrations continuously monitor for anomalies and potential risks.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Zap className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Disaster Recovery & Business Continuity</h3>
              <p className="text-gray-600">Automated backups, multi-region architectures, and DR drills guarantee uptime and resilience.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Activity className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Continuous Monitoring</h3>
              <p className="text-gray-600">Real-time security monitoring and automated response systems ensure 24/7 protection and rapid incident response.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Frameworks */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Compliance & Regulatory Frameworks
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We ensure your security posture meets the highest industry standards and regulatory requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceFrameworks.map((framework, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-3">
                  <Lock className="w-6 h-6 text-purple-600 mr-3" />
                  <h3 className="text-lg font-bold text-gray-900">{framework.name}</h3>
                </div>
                <p className="text-gray-600">{framework.description}</p>
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
              Why Choose ACC Security?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive security approach combines cutting-edge technology with expert knowledge to deliver unparalleled protection.
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
      <section className="py-20 bg-gradient-to-r from-purple-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Strengthen Your Security Posture?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Get started with a comprehensive security assessment and discover how ACC can help protect your organization from evolving threats.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-700 hover:bg-purple-50 font-semibold">
              Start Security Assessment <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-700 bg-transparent">
              <span className="text-white hover:text-purple-700">Contact Security Team</span>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default SecurityPage
