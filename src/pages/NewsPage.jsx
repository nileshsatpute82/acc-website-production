import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { ArrowRight, Calendar, ExternalLink, Award, Handshake, Zap, Users, Building, TrendingUp, Shield, Database } from 'lucide-react'

const NewsPage = () => {
  const newsArticles = [
    {
      title: "Applied Cloud Computing Announces Strategic Partnership with Oracle Inc. and RackWare Inc.",
      date: "May 22, 2024",
      category: "Partnership",
      excerpt: "ACC partners with Oracle Inc. and RackWare Inc. for seamless cloud migration, management, and disaster recovery solutions, strengthening our enterprise cloud capabilities.",
      source: "Business Standard",
      link: "https://www.business-standard.com/content/specials/applied-cloud-computing-announces-strategic-partnership-with-oracle-inc-and-rackware-inc-for-seamless-cloud-migration-management-and-disaster-recovery-124052201171_1.html"
    },
    {
      title: "Neo4j and Applied Cloud Computing Forge Strategic Partnership to Revolutionize Data Management",
      date: "December 20, 2024",
      category: "Partnership",
      excerpt: "ACC partners with Neo4j to deliver advanced graph database solutions, enabling organizations to unlock deeper insights from connected data and drive innovation.",
      source: "Live Mint",
      link: "https://www.livemint.com/brand-stories/neo4j-and-applied-cloud-computing-forge-strategic-partnership-to-revolutionize-data-management-11734688380040.html"
    },
    {
      title: "Transforming Businesses with AI: Applied Cloud Computing's Vision and Strategy",
      date: "November 22, 2023",
      category: "AI Innovation",
      excerpt: "CEO Nilesh Satpute demystifies artificial intelligence (AI) as he shares insights into empowering organisations and ACC's comprehensive suite of AI solutions for business transformation.",
      source: "Economic Times",
      link: "https://economictimes.indiatimes.com/tech/technology/transforming-businesses-with-ai-applied-cloud-computings-vision-and-strategy/articleshow/105419837.cms"
    },
    {
      title: "Tessell and Applied Cloud Computing Transform Cloud Migration and Modernization Landscape",
      date: "November 15, 2023",
      category: "Partnership",
      excerpt: "Strategic partnership with Tessell enhances ACC's database-as-a-service capabilities, providing customers with simplified cloud migration and modernization solutions.",
      source: "The Hindu",
      link: "https://www.thehindu.com/brandhub/pr-release/tessell-and-applied-cloud-computing-transform-cloud-migration-and-modernization-landscape/article67617604.ece"
    },
    {
      title: "Applied Cloud Computing Appoints Lakhvinder Singh to Head Cloud Practice",
      date: "September 19, 2023",
      category: "Leadership",
      excerpt: "ACC strengthens its leadership team with the appointment of Lakhvinder Singh as Head of Cloud Practice, bringing extensive experience in cloud transformation and enterprise solutions.",
      source: "Hindustan Times",
      link: "https://www.hindustantimes.com/brand-stories/applied-cloud-computing-appoints-lakhvinder-singh-to-head-cloud-practice-101695129385364.html"
    },
    {
      title: "Wireless Earplug Apps, TWS, VPN Device Smartphone Laptop Bluetooth Vulnerable",
      date: "January 2023",
      category: "Security",
      excerpt: "ACC experts discuss cybersecurity vulnerabilities in wireless devices and provide insights on protecting against emerging threats in connected technologies.",
      source: "The Hindu",
      link: "https://www.thehindu.com/sci-tech/technology/wireless-earplug-apps-tws-vpn-device-smartphone-laptop-bluetooth-vulnerable-apple-iphone-hacks/article66139566.ece"
    },
    {
      title: "Robust Disaster Recovery Plan: A Must for Business Continuity",
      date: "2023",
      category: "Strategy",
      excerpt: "ACC thought leadership on the critical importance of disaster recovery planning and how organizations can ensure business continuity in the face of disruptions.",
      source: "Times of India",
      link: "https://timesofindia.indiatimes.com/blogs/voices/robust-disaster-recovery-plan-a-must-for-business-continuity/"
    },
    {
      title: "How to Approach Performance Improvement Plan and Layoffs",
      date: "2023",
      category: "HR Strategy",
      excerpt: "ACC leadership shares insights on managing organizational changes, performance improvement strategies, and maintaining team morale during challenging times.",
      source: "MoneyControl",
      link: "https://www.moneycontrol.com/news/business/pipped-to-the-post-how-to-approach-performance-improvement-plan-and-layoffs-10324721.html"
    },
    {
      title: "Digital Science Park to Expand Digital India Initiative",
      date: "2023",
      category: "Digital Transformation",
      excerpt: "Analysis of PM Modi's Digital Science Park announcement in Kerala and its potential impact on tech startups and the broader digital transformation landscape.",
      source: "News18",
      link: "https://www.news18.com/tech/digital-science-park-to-expand-digital-india-initiative-says-pm-modi-in-kerala-what-will-be-impact-on-tech-start-ups-7633723.html"
    },
    {
      title: "Applied Cloud Computing Partners with Snowflake to Expand Data Capabilities",
      date: "2023",
      category: "Partnership",
      excerpt: "Strategic partnership with Snowflake enhances ACC's data cloud capabilities, enabling customers to unlock the full potential of their data with advanced analytics and AI.",
      source: "The Industrial",
      link: "https://www.theindustrial.in/news/ec0bfd000f/Applied-Cloud-Computing-partners-with-Snowflake-to-expand-its-data-capabilities"
    },
    {
      title: "Cracking the Right Strategy: Clarity on Outcome Must for Digital Transformation Initiatives",
      date: "2022",
      category: "Digital Transformation",
      excerpt: "ACC experts discuss the importance of clear outcome definition and strategic planning for successful digital transformation initiatives across enterprises.",
      source: "CIO Economic Times",
      link: "https://cio.economictimes.indiatimes.com/news/business-analytics/cracking-the-right-strategy-clarity-on-outcome-must-for-digital-transformation-initiatives/94040925"
    },
    {
      title: "Automation of Containerisation Cloud Infrastructure Deployment",
      date: "2022",
      category: "Technology",
      excerpt: "Technical insights from ACC on automating containerization and cloud infrastructure deployment, improving efficiency and reducing operational overhead.",
      source: "Express Computer",
      link: "https://www.expresscomputer.in/guest-blogs/automation-of-containerisation-cloud-infrastructure-deployment/91376/"
    },
    {
      title: "Indian Startup Funding Report Q1 2023: Sectors That Attracted Maximum Funding",
      date: "Q1 2023",
      category: "Industry Analysis",
      excerpt: "Comprehensive analysis of Indian startup funding trends, highlighting sectors that attracted maximum investment and implications for the technology ecosystem.",
      source: "Zee Business",
      link: "https://www.zeebiz.com/startups/news-indian-startup-funding-report-q1-2023-equity-funding-news-unicorn-these-sectors-attracted-maximum-funding-check-out-which-ones-lagged-229740"
    },
    {
      title: "Future of Business Trade Hinges on Smart Contracts",
      date: "2022",
      category: "Blockchain",
      excerpt: "ACC thought leadership on how smart contracts are revolutionizing business trade, improving transparency, efficiency, and trust in commercial transactions.",
      source: "Express Computer",
      link: "https://www.expresscomputer.in/guest-blogs/future-of-business-trade-hinges-on-smart-contracts/88568/"
    },
    {
      title: "Applied Cloud Computing Expands Operations with New Initiatives",
      date: "July 14, 2022",
      category: "Business Growth",
      excerpt: "ACC announces expansion of operations and new strategic initiatives to strengthen market position and enhance service delivery capabilities.",
      source: "The Week",
      link: "https://www.theweek.in/wire-updates/business/2022/07/14/pwr3-applied-cloud-computing--acc.html"
    },
    {
      title: "API Economy Fuelling the Digital Transformation Among Enterprises",
      date: "2022",
      category: "Digital Transformation",
      excerpt: "Analysis of how the API economy is driving digital transformation initiatives across enterprises and enabling new business models and partnerships.",
      source: "DQ India",
      link: "https://www.dqindia.com/api-economy-fuelling-the-digital-transformation-among-enterprises/"
    },
    {
      title: "Migration to Cloud Services by BFSI Sector to Provide Distinct Business Advantage",
      date: "2022",
      category: "BFSI",
      excerpt: "ACC insights on how Banking, Financial Services, and Insurance sector organizations can leverage cloud migration for competitive advantage and operational efficiency.",
      source: "CXO Today",
      link: "https://cxotoday.com/cxo-bytes/migration-to-cloud-services-by-bfsi-sector-to-provide-distinct-business-advantage/"
    },
    {
      title: "Enterprise IT World June Issue 2022",
      date: "June 2022",
      category: "Publication",
      excerpt: "ACC featured in Enterprise IT World magazine, showcasing our expertise in enterprise technology solutions and digital transformation strategies.",
      source: "Enterprise IT World",
      link: "https://www.enterpriseitworld.com/enterprise-it-world-june-issue-2022/"
    },
    {
      title: "How Data Analytics Has Changed Retail Business in India",
      date: "2023",
      category: "Data Analytics",
      excerpt: "CEO Nilesh Satpute discusses the transformative impact of data analytics on India's retail sector and emerging trends in customer experience optimization.",
      source: "CIO Economic Times",
      link: "https://cio.economictimes.indiatimes.com/news/strategy-and-management/nilesh-satpute-acc-on-how-data-analytics-has-changed-retail-business-in-india/99803140"
    },
    {
      title: "Applied Cloud Computing Achieves AWS Migration Services Competency Status",
      date: "April 25, 2023",
      category: "Certification",
      excerpt: "ACC achieves the prestigious AWS Migration Services Competency, demonstrating our proven expertise in helping customers migrate workloads to AWS cloud infrastructure.",
      source: "DevDiscourse",
      link: "https://www.devdiscourse.com/article/technology/2428725-applied-cloud-computing-achieves-aws-migration-services-competency-status"
    },
    {
      title: "Digital Transformation for Insurance Sector",
      date: "2022",
      category: "Insurance",
      excerpt: "ACC experts share insights on digital transformation strategies specifically tailored for the insurance industry, addressing unique challenges and opportunities.",
      source: "Express Computer",
      link: "https://www.expresscomputer.in/guest-blogs/digital-transformation-for-insurance-sector/97916/"
    },
    {
      title: "Digital Transformation for Healthcare",
      date: "2022",
      category: "Healthcare",
      excerpt: "Comprehensive analysis of digital transformation trends in healthcare, exploring how technology is revolutionizing patient care and operational efficiency.",
      source: "Express Healthcare",
      link: "https://www.expresshealthcare.in/news/digital-transformation-for-healthcare/438871/"
    }
  ]

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Partnership": return <Handshake className="w-5 h-5" />
      case "AI Innovation": return <Zap className="w-5 h-5" />
      case "Leadership": return <Users className="w-5 h-5" />
      case "Security": return <Shield className="w-5 h-5" />
      case "Strategy": return <TrendingUp className="w-5 h-5" />
      case "Digital Transformation": return <Zap className="w-5 h-5" />
      case "Technology": return <Database className="w-5 h-5" />
      case "Certification": return <Award className="w-5 h-5" />
      case "BFSI": return <Building className="w-5 h-5" />
      case "Healthcare": return <Users className="w-5 h-5" />
      case "Insurance": return <Shield className="w-5 h-5" />
      default: return <Calendar className="w-5 h-5" />
    }
  }

  return (
    <Layout>
      {/* Main Content - News Articles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              News & Updates
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest news, partnerships, achievements, and innovations from Applied Cloud Computing.
            </p>
          </div>
          
          <div className="space-y-6">
            {newsArticles.map((article, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <Badge variant="outline" className="flex items-center gap-1">
                          {getCategoryIcon(article.category)}
                          {article.category}
                        </Badge>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Calendar className="w-4 h-4 mr-1" />
                          {article.date}
                        </div>
                        <span className="text-sm text-gray-500">• {article.source}</span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 hover:text-purple-600 transition-colors">
                        {article.title}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed">{article.excerpt}</p>
                    </div>
                    
                    <div className="mt-6 lg:mt-0 lg:ml-8">
                      <a 
                        href={article.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
                      >
                        Read Article <ExternalLink className="ml-2 w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Updated with ACC News</h2>
          <p className="text-xl text-purple-100 mb-8">
            Subscribe to our newsletter and be the first to know about our latest partnerships, achievements, and innovations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-700 hover:bg-purple-50 font-semibold">
              <Link to="/contact-sales" className="flex items-center">
                Subscribe Now <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-700">
              <Link to="/about" className="text-white hover:text-purple-700">About ACC</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default NewsPage
