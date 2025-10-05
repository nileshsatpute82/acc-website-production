import React, { useState } from 'react'
import Layout from '../components/Layout'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ArrowRight, CheckCircle, Clock, Users, Zap, Phone, Mail, MapPin } from 'lucide-react'

const GetStartedPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    timeline: '',
    message: ''
  })

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const services = [
    "Cloud Migration & Modernization",
    "AI & Machine Learning Solutions",
    "Application Development",
    "Data Analytics & Big Data",
    "Cybersecurity Services",
    "DevOps & Automation",
    "Digital Transformation",
    "Custom Software Development"
  ]

  const steps = [
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: "Initial Consultation",
      description: "We discuss your requirements, challenges, and goals to understand your needs.",
      duration: "30-60 minutes"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-purple-600" />,
      title: "Solution Design",
      description: "Our experts create a tailored solution architecture and project roadmap.",
      duration: "1-2 weeks"
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-600" />,
      title: "Implementation",
      description: "We execute the project with regular updates and milestone deliveries.",
      duration: "Varies by project"
    },
    {
      icon: <Clock className="w-8 h-8 text-purple-600" />,
      title: "Support & Optimization",
      description: "Ongoing support, monitoring, and optimization to ensure continued success.",
      duration: "Ongoing"
    }
  ]

  const packages = [
    {
      name: "Starter",
      price: "Contact Us",
      description: "Perfect for small businesses starting their digital journey",
      features: [
        "Initial consultation",
        "Basic cloud setup",
        "Standard support",
        "Documentation",
        "30-day warranty"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "Contact Us",
      description: "Comprehensive solutions for growing enterprises",
      features: [
        "Everything in Starter",
        "Advanced integrations",
        "Custom development",
        "Priority support",
        "90-day warranty",
        "Training sessions"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Contact Us",
      description: "Full-scale transformation for large organizations",
      features: [
        "Everything in Professional",
        "Dedicated team",
        "24/7 support",
        "Custom SLAs",
        "1-year warranty",
        "Ongoing optimization"
      ],
      popular: false
    }
  ]

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-purple-200 text-purple-900">Get Started</Badge>
              <h1 className="text-5xl font-bold mb-6">Begin Your Digital Transformation</h1>
              <p className="text-xl max-w-3xl mx-auto leading-relaxed">
                Take the first step towards modernizing your business with ACC's expert cloud and technology solutions. 
                Let's transform your vision into reality.
              </p>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">How We Work Together</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our proven process ensures successful project delivery from concept to completion
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="mx-auto mb-4">{step.icon}</div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                    <div className="text-sm text-purple-600 font-medium">{step.duration}</div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Service Packages */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Package</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Flexible packages designed to meet your specific needs and budget
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <Card key={index} className={`relative ${pkg.popular ? 'ring-2 ring-purple-600 shadow-lg' : ''}`}>
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-purple-600 text-white">Most Popular</Badge>
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                    <div className="text-3xl font-bold text-purple-600 mt-2">{pkg.price}</div>
                    <p className="text-gray-600 mt-2">{pkg.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full mt-6 ${pkg.popular ? 'bg-purple-600 hover:bg-purple-700' : ''}`}
                      variant={pkg.popular ? 'default' : 'outline'}
                    >
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Form */}
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Let's Start Your Project</h2>
                <p className="text-xl text-gray-600 mb-8">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <Input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your.email@company.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                      <Input
                        type="text"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Needed *</label>
                    <Select onValueChange={(value) => handleInputChange('service', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service, index) => (
                          <SelectItem key={index} value={service}>{service}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                      <Select onValueChange={(value) => handleInputChange('budget', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-50k">Under $50K</SelectItem>
                          <SelectItem value="50k-100k">$50K - $100K</SelectItem>
                          <SelectItem value="100k-250k">$100K - $250K</SelectItem>
                          <SelectItem value="250k-500k">$250K - $500K</SelectItem>
                          <SelectItem value="over-500k">Over $500K</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Timeline</label>
                      <Select onValueChange={(value) => handleInputChange('timeline', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Project timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asap">ASAP</SelectItem>
                          <SelectItem value="1-3-months">1-3 months</SelectItem>
                          <SelectItem value="3-6-months">3-6 months</SelectItem>
                          <SelectItem value="6-12-months">6-12 months</SelectItem>
                          <SelectItem value="over-12-months">Over 12 months</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Project Details</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell us about your project requirements, challenges, and goals..."
                      rows={4}
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full bg-purple-600 hover:bg-purple-700">
                    Submit Request <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </div>
              
              {/* Contact Info */}
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-purple-600 mr-4 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Phone</h4>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                      <p className="text-sm text-gray-500">Mon-Fri 9AM-6PM EST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-purple-600 mr-4 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600">info@acc.com</p>
                      <p className="text-sm text-gray-500">We respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-purple-600 mr-4 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Office</h4>
                      <p className="text-gray-600">123 Business Ave<br />Suite 100<br />City, State 12345</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-white rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Why Choose ACC?</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      15+ years of experience
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      500+ successful projects
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      24/7 support available
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      Certified cloud experts
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default GetStartedPage
