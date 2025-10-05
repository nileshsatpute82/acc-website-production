import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { ArrowRight, Users, Heart, Zap, Globe, MapPin, Clock, DollarSign } from 'lucide-react'

const CareersPage = () => {
  const openPositions = [
    {
      title: "Senior Cloud Architect",
      department: "Engineering",
      location: "Pune, India",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead cloud architecture design and implementation for enterprise clients using AWS, Azure, and multi-cloud strategies.",
      requirements: ["AWS Solutions Architect certification", "5+ years cloud experience", "Terraform/CloudFormation", "Kubernetes expertise"]
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Mumbai, India",
      type: "Full-time",
      experience: "3+ years",
      description: "Build and maintain CI/CD pipelines, automate infrastructure, and ensure reliable deployments for client projects.",
      requirements: ["Docker/Kubernetes", "Jenkins/GitLab CI", "AWS/Azure DevOps", "Infrastructure as Code"]
    },
    {
      title: "AI/ML Engineer",
      department: "AI & Innovation",
      location: "Bangalore, India",
      type: "Full-time",
      experience: "4+ years",
      description: "Develop AI agents and machine learning solutions for enterprise automation and intelligent decision-making.",
      requirements: ["Python/TensorFlow", "ML model deployment", "NLP/Computer Vision", "Cloud ML services"]
    },
    {
      title: "Cloud Security Specialist",
      department: "Security",
      location: "Delhi, India",
      type: "Full-time",
      experience: "4+ years",
      description: "Design and implement security frameworks for cloud environments, conduct security assessments and compliance audits.",
      requirements: ["Cloud security certifications", "Penetration testing", "Compliance frameworks", "Security automation"]
    },
    {
      title: "Technical Project Manager",
      department: "Operations",
      location: "Hyderabad, India",
      type: "Full-time",
      experience: "6+ years",
      description: "Lead complex cloud transformation projects, coordinate cross-functional teams, and ensure successful client deliveries.",
      requirements: ["PMP/Agile certifications", "Cloud project experience", "Client management", "Technical background"]
    },
    {
      title: "Business Development Manager",
      department: "Sales",
      location: "Pan India",
      type: "Full-time",
      experience: "5+ years",
      description: "Drive business growth by identifying new opportunities, building client relationships, and expanding our market presence.",
      requirements: ["B2B sales experience", "Cloud industry knowledge", "Relationship building", "Target achievement"]
    }
  ]

  const benefits = [
    {
      icon: <Heart className="w-8 h-8 text-purple-600" />,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, and wellness programs for you and your family."
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-600" />,
      title: "Learning & Growth",
      description: "Continuous learning opportunities, certifications, conferences, and skill development programs."
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-600" />,
      title: "Remote-First Culture",
      description: "Work from anywhere with flexible hours, modern tools, and a collaborative remote-first environment."
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: "Inclusive Team",
      description: "Diverse, inclusive workplace where everyone's voice matters and contributions are valued."
    }
  ]

  const values = [
    {
      title: "Innovation First",
      description: "We embrace cutting-edge technologies and encourage creative problem-solving to deliver exceptional solutions."
    },
    {
      title: "Client Success",
      description: "Our clients' success is our success. We go above and beyond to ensure their digital transformation journey succeeds."
    },
    {
      title: "Continuous Learning",
      description: "We invest in our team's growth through training, certifications, and exposure to latest technologies."
    },
    {
      title: "Work-Life Balance",
      description: "We believe in sustainable work practices that allow our team to thrive both professionally and personally."
    }
  ]

  return (
    <Layout>


      {/* Company Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Work at ACC?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're more than just a cloud consulting company. We're a team of passionate professionals dedicated to transforming businesses through technology.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-purple-100 rounded-full w-fit">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape our company culture.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our growing team and help shape the future of cloud computing.
            </p>
          </div>
          
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <h3 className="text-2xl font-bold text-gray-900">{position.title}</h3>
                        <Badge variant="secondary">{position.department}</Badge>
                        <Badge variant="outline">{position.type}</Badge>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {position.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {position.experience}
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-4">{position.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {position.requirements.map((req, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {req}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-6 lg:mt-0 lg:ml-8">
                      <Button 
                        className="w-full lg:w-auto bg-purple-600 hover:bg-purple-700"
                        onClick={() => {
                          const message = `💼 JOB APPLICATION - ACC Website

🎯 Position: ${position.title}
📍 Location: ${position.location}
⏰ Experience: ${position.experience}
🏢 Department: ${position.department}

📝 Job Requirements:
${position.requirements.join('\n• ')}

👤 I am interested in applying for this position. Please find my details below:

Name: [Your Name]
Email: [Your Email]
Phone: [Your Phone]
Experience: [Your Experience]
Resume: [Please attach or provide link]

📅 Applied: ${new Date().toLocaleString()}
🌐 Source: ${window.location.href}

---
Applied Cloud Computing - Career Application`;
                          
                          const whatsappURL = `https://wa.me/917057422731?text=${encodeURIComponent(message)}`;
                          window.open(whatsappURL, '_blank');
                        }}
                      >
                        <span className="flex items-center text-white">
                          Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                        </span>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Hiring Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've designed a transparent and efficient hiring process to help you succeed.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Application", description: "Submit your resume and cover letter through our careers page" },
              { step: "02", title: "Screening", description: "Initial phone/video screening with our HR team" },
              { step: "03", title: "Technical Interview", description: "Technical discussion with our engineering team" },
              { step: "04", title: "Final Interview", description: "Culture fit and final interview with leadership team" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Our Team?</h2>
          <p className="text-xl text-purple-100 mb-8">
            Don't see a position that fits? We're always looking for talented individuals to join our growing team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-purple-700 hover:bg-purple-50 font-semibold"
              onClick={() => {
                const message = `📄 GENERAL RESUME SUBMISSION - ACC Website

👋 Hello ACC Team,

I am interested in joining Applied Cloud Computing and would like to submit my resume for consideration.

👤 My Details:
Name: [Your Name]
Email: [Your Email]
Phone: [Your Phone]
Current Role: [Your Current Position]
Experience: [Years of Experience]
Skills: [Your Key Skills]

💼 I am interested in opportunities related to:
□ Cloud Architecture
□ DevOps Engineering
□ AI/ML Engineering
□ Security
□ Project Management
□ Business Development

📎 Resume: [Please attach or provide link to your resume]

📅 Submitted: ${new Date().toLocaleString()}
🌐 Source: ${window.location.href}

---
Applied Cloud Computing - General Application`;
                
                const whatsappURL = `https://wa.me/917057422731?text=${encodeURIComponent(message)}`;
                window.open(whatsappURL, '_blank');
              }}
            >
              <span className="flex items-center">
                Send Your Resume <ArrowRight className="ml-2 w-5 h-5" />
              </span>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-700">
              <Link to="/about" className="text-white hover:text-purple-700">Learn More About ACC</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default CareersPage
