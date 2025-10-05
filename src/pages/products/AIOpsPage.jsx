import React from 'react';
import { Card, CardContent, CardHeader } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { 
  Brain, 
  TrendingUp, 
  Shield, 
  Zap, 
  BarChart3, 
  AlertTriangle, 
  CheckCircle, 
  Clock,
  Users,
  Database,
  Settings,
  Monitor
} from 'lucide-react';
import Layout from '../../components/Layout';

const AIOpsPage = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Brain className="w-16 h-16 text-white" />
              </div>
              <h1 className="text-5xl font-bold mb-6">AI Ops Platform</h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
                Transform your AWS operations with AI-powered monitoring, proactive incident detection, and intelligent automation. Minimize human intervention while maximizing operational efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100">
                  Get Started
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-900">
                  Request Demo
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* AI-Enhanced AWS Operations */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">AI-Enhanced AWS Operations</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                When you migrate your workloads to AWS, you can take advantage of various AWS monitoring services that are enhanced with AI and machine learning (ML) capabilities. Although traditional monitoring through Amazon CloudWatch events, alarms, and AWS Config Rules provides foundational insights, the integration of ML techniques elevates operational intelligence to new levels.
              </p>
            </div>
            
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">The Convergence of AI and IT Operations</h3>
              <p className="text-gray-600 mb-6">
                Amazon CloudWatch investigations represents the convergence of AI and IT operations, designed to minimize human intervention in operational processes. Amazon DevOps Guru provides proactive incident detection and recommendations to help prevent potential issues before they impact your systems.
              </p>
              <p className="text-gray-600 mb-8">
                Amazon CloudWatch anomaly detection uses ML algorithms to analyze historical metric patterns to detect unusual behavior in your AWS resources.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <BarChart3 className="w-8 h-8 text-purple-600" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">ML Analytics</h4>
                  <p className="text-gray-600">Advanced pattern recognition</p>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <AlertTriangle className="w-8 h-8 text-purple-600" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Proactive Alerts</h4>
                  <p className="text-gray-600">Prevent issues before impact</p>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <Zap className="w-8 h-8 text-purple-600" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Automation</h4>
                  <p className="text-gray-600">Minimal human intervention</p>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <TrendingUp className="w-8 h-8 text-purple-600" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Optimization</h4>
                  <p className="text-gray-600">Continuous improvement</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Three Key Dimensions */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Three Key Dimensions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                AI operations (AIOps) services enhance operational capabilities through three key dimensions
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <h3 className="text-2xl font-bold text-gray-900">Service Quality Improvements</h3>
                  <p className="text-gray-600">Advanced metric correlation and pattern analysis with automated alerting systems</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Advanced metric correlation and pattern analysis</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Automated alerting and notification system implementation</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Seamless integration with incident management systems</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <h3 className="text-2xl font-bold text-gray-900">Proactive Operations</h3>
                  <p className="text-gray-600">ML-driven anomaly detection with continuous performance monitoring</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">ML-driven anomaly detection</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Continuous performance metric tracking and trending</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Real-time monitoring and alerting</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <h3 className="text-2xl font-bold text-gray-900">Enhanced Operational Insights</h3>
                  <p className="text-gray-600">Comprehensive resource analysis with automated issue detection</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Resource performance analysis</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Application behavior tracking</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Automated issue detection and classification</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* AWS Services Integration */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">AWS Services Integration</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Seamlessly integrate with core AWS services enhanced with AI and ML capabilities
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <h3 className="text-2xl font-bold text-gray-900">Amazon CloudWatch</h3>
                  <p className="text-gray-600">Enhanced monitoring with AI-powered investigations and anomaly detection</p>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <Badge variant="secondary">Metric Analysis</Badge>
                    <Badge variant="secondary">Automated Alerting</Badge>
                    <Badge variant="secondary">Historical Pattern Recognition</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <h3 className="text-2xl font-bold text-gray-900">Amazon DevOps Guru</h3>
                  <p className="text-gray-600">Proactive incident detection with ML-powered recommendations</p>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <Badge variant="secondary">Incident Prevention</Badge>
                    <Badge variant="secondary">Performance Insights</Badge>
                    <Badge variant="secondary">Automated Recommendations</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <h3 className="text-2xl font-bold text-gray-900">AWS Config</h3>
                  <p className="text-gray-600">Configuration monitoring and compliance tracking with intelligent rules</p>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <Badge variant="secondary">Configuration Tracking</Badge>
                    <Badge variant="secondary">Compliance Monitoring</Badge>
                    <Badge variant="secondary">Change Detection</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <h3 className="text-2xl font-bold text-gray-900">AWS CloudFormation</h3>
                  <p className="text-gray-600">Infrastructure as Code with intelligent deployment patterns</p>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <Badge variant="secondary">Template Management</Badge>
                    <Badge variant="secondary">Stack Monitoring</Badge>
                    <Badge variant="secondary">Drift Detection</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Transform Your Operations */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Transform Your Operations</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Achieve measurable improvements in operational efficiency and service reliability
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Clock className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Reduced MTTR</h3>
                <p className="text-gray-600">Minimize mean time to resolution through AI-powered root cause analysis</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <TrendingUp className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Proactive Operations</h3>
                <p className="text-gray-600">Move from reactive to proactive operations management with predictive insights</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Shield className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Enhanced Reliability</h3>
                <p className="text-gray-600">Improve overall service reliability through data-driven operational practices</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Zap className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Operational Efficiency</h3>
                <p className="text-gray-600">Achieve more efficient operations with reduced human intervention</p>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Technical Capabilities */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Advanced Technical Capabilities</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our AIOps platform leverages cutting-edge AI and ML technologies to provide comprehensive operational intelligence and automation.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Advanced metric correlation and pattern analysis",
                "ML-driven anomaly detection algorithms", 
                "Continuous performance metric tracking",
                "Real-time monitoring and alerting systems",
                "Automated incident management integration",
                "Resource performance optimization",
                "Application behavior analytics",
                "Predictive failure analysis",
                "Intelligent alert correlation",
                "Automated remediation workflows"
              ].map((capability, index) => (
                <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{capability}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Approach */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Implementation Approach</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Assessment & Planning</h3>
                <p className="text-gray-600">Analyze current operations and identify optimization opportunities</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">AI/ML Integration</h3>
                <p className="text-gray-600">Deploy advanced analytics and machine learning models</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Automation & Optimization</h3>
                <p className="text-gray-600">Implement automated workflows and continuous improvement</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Operations?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Move from reactive to proactive operations management with our AI-powered platform. Achieve more efficient operations and improved service reliability.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AIOpsPage;
