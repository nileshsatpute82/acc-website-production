import React from 'react';
import { Card, CardContent, CardHeader } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { 
  Shield, 
  Clock, 
  Zap, 
  Globe, 
  CheckCircle, 
  ArrowRight,
  Cloud,
  Users,
  Settings,
  BarChart3,
  Database,
  Monitor
} from 'lucide-react';
import Layout from '../../components/Layout';

const ITSMTicketingPage = () => {
  const stats = [
    { value: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> },
    { value: "<2min", label: "Avg Response", icon: <Clock className="w-6 h-6" /> },
    { value: "80%", label: "Auto-Resolution", icon: <Zap className="w-6 h-6" /> },
    { value: "24/7", label: "Availability", icon: <Globe className="w-6 h-6" /> }
  ];

  const keyFeatures = [
    "Cloud-Native Architecture",
    "Simple, OS-Like Ticketing", 
    "Multi-Tenant Hosting",
    "End-to-End ITSM Workflows",
    "Self-Service Portal",
    "Automation & Integrations"
  ];

  const workflows = [
    {
      title: "Incident Management",
      description: "Rapid incident detection, classification, and resolution",
      steps: ["Auto-detection", "Smart routing", "Escalation", "Resolution"]
    },
    {
      title: "Problem Management", 
      description: "Root cause analysis and permanent problem resolution",
      steps: ["Investigation", "Analysis", "Solution", "Prevention"]
    },
    {
      title: "Change Management",
      description: "Controlled change implementation with approval workflows", 
      steps: ["Request", "Approval", "Implementation", "Review"]
    },
    {
      title: "Service Requests",
      description: "Standardized service delivery with automated fulfillment",
      steps: ["Request", "Validation", "Fulfillment", "Closure"]
    }
  ];

  const useCases = [
    {
      title: "Cloud Infrastructure Ticketing",
      subtitle: "Cloud Operations",
      description: "Comprehensive ticketing for AWS/Azure/GCP environments with automated monitoring integration.",
      features: ["Multi-cloud support", "Auto-scaling alerts", "Resource optimization", "Cost monitoring"]
    },
    {
      title: "BFSI Service Management", 
      subtitle: "Banking & Finance",
      description: "Service request and incident management for banking and financial services operations.",
      features: ["Compliance tracking", "Audit trails", "Security incidents", "Regulatory reporting"]
    },
    {
      title: "Enterprise IT Helpdesk",
      subtitle: "Enterprise IT", 
      description: "Internal IT helpdesk for enterprises with comprehensive service management capabilities.",
      features: ["Employee self-service", "Asset management", "Change control", "Knowledge base"]
    },
    {
      title: "Managed Services Operations",
      subtitle: "Service Providers",
      description: "Support provider operations with multi-tenant capabilities and client management.",
      features: ["Multi-tenant hosting", "Client portals", "SLA management", "Billing integration"]
    }
  ];

  const whyChoose = [
    { title: "Lightweight Alternative", stat: "90% lighter", description: "Lightweight alternative to bulky ITSM suites without compromising functionality" },
    { title: "Cloud-First Design", stat: "Multi-cloud", description: "Cloud-first and client-hosted for flexibility and compliance requirements" },
    { title: "Faster Deployment", stat: "10x faster", description: "Faster deployment and easier customization compared to legacy solutions" },
    { title: "Cost-Effective", stat: "60% savings", description: "Cost-effective, scalable, and future-ready ITSM solution" },
    { title: "Enterprise Security", stat: "Bank-grade", description: "Enterprise-grade security with compliance and audit capabilities" },
    { title: "User Adoption", stat: "95% adoption", description: "High user adoption rate due to intuitive OS-like interface" }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl font-bold mb-4">ITSM</h1>
                <h2 className="text-4xl font-bold text-yellow-400 mb-6">Ticketing Tool</h2>
                <Badge className="mb-6 bg-yellow-400 text-purple-900 font-semibold">Built for Cloud</Badge>
                <p className="text-xl mb-8 leading-relaxed">
                  Cloud-Native IT Service Management for Modern Operations. Lightweight, agile, and scalable—making it easy for clients to host, manage, and extend.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100">
                    Schedule Demo
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-900">
                    Learn More
                  </Button>
                </div>
              </div>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                    <div className="flex justify-center mb-3 text-white">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold mb-2">{stat.value}</div>
                    <div className="text-sm opacity-90">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Features</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Purpose-built cloud-native ITSM platform with enterprise-grade capabilities and intuitive user experience
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {keyFeatures.map((feature, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-900">{feature}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Cloud-Native Architecture */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Cloud-Native Architecture</h2>
                <p className="text-xl text-gray-600 mb-8">
                  Designed for scalability, flexibility, and performance—deploy in AWS, Azure, or private clouds with complete control.
                </p>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Capabilities</h3>
                  <ul className="space-y-3">
                    {[
                      "Multi-cloud deployment support",
                      "Auto-scaling infrastructure", 
                      "Microservices architecture",
                      "Container-ready deployment",
                      "High availability design",
                      "Disaster recovery built-in"
                    ].map((capability, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{capability}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Benefits</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">99.9%</div>
                      <div className="text-sm text-gray-600">uptime</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">Infinite</div>
                      <div className="text-sm text-gray-600">scalability</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">Cloud</div>
                      <div className="text-sm text-gray-600">flexibility</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center">
                <Cloud className="w-64 h-64 text-purple-600" />
              </div>
            </div>
          </div>
        </section>

        {/* End-to-End ITSM Workflows */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">End-to-End ITSM Workflows</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive workflow management from incident detection to resolution
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {workflows.map((workflow, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <h3 className="text-2xl font-bold text-gray-900">{workflow.title}</h3>
                    <p className="text-gray-600">{workflow.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      {workflow.steps.map((step, stepIndex) => (
                        <React.Fragment key={stepIndex}>
                          <div className="text-center">
                            <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-2">
                              {stepIndex + 1}
                            </div>
                            <div className="text-sm text-gray-600">{step}</div>
                          </div>
                          {stepIndex < workflow.steps.length - 1 && (
                            <ArrowRight className="w-4 h-4 text-gray-400" />
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Use Cases</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Versatile ITSM solution for diverse industry requirements
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <Badge className="mb-2 w-fit">{useCase.subtitle}</Badge>
                    <h3 className="text-2xl font-bold text-gray-900">{useCase.title}</h3>
                    <p className="text-gray-600">{useCase.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2">
                      {useCase.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="text-sm text-gray-600">
                          • {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why ACC ITSM Tool */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why ACC ITSM Tool?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Next-generation ticketing solution with measurable business impact
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChoose.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">{item.stat}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Next-Generation ITSM Solution */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Next-Generation ITSM Solution</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Simple, cloud-native, and client-controlled—giving enterprises agility without complexity
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Simple & Agile</h3>
                <p className="text-gray-600">Lightweight alternative to complex legacy ITSM suites</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Cloud-Native</h3>
                <p className="text-gray-600">Built for modern cloud infrastructure and operations</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Client-Controlled</h3>
                <p className="text-gray-600">Full control over data, hosting, and customization</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Future-Ready</h3>
                <p className="text-gray-600">Scalable architecture for growing business needs</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your IT Operations?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Experience the next-generation ITSM solution that combines simplicity, scalability, and complete control for modern IT operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100">
                Schedule Demo
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-900">
                Contact Sales
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ITSMTicketingPage;
