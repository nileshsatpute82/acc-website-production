import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import ScrollToTop from './components/ScrollToTop'

// Import main page components
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import AIPage from './pages/AIPage'
import CaseStudiesPage from './pages/CaseStudiesPage'
import NewsPage from './pages/NewsPage'
import CareersPage from './pages/CareersPage'
import PartnersPage from './pages/PartnersPage'
import OurTeamPage from './pages/OurTeamPage'
import GetStartedPage from './pages/GetStartedPage'
import ServicesPage from './pages/ServicesPage'
import ProductsPage from './pages/ProductsPage'
import CompetenciesPage from './pages/CompetenciesPage'
import ContactSalesPage from './pages/ContactSalesPage'
import ScheduleConsultationPage from './pages/ScheduleConsultationPage'

// Service pages
import BigDataPage from './pages/services/BigDataPage'
import DatabaseManagementPage from './pages/services/DatabaseManagementPage'
import SecurityPage from './pages/services/SecurityPage'
import ERPTestingPage from './pages/services/ERPTestingPage'
import CloudPracticePage from './pages/services/CloudPracticePage'
import DigitalizationPage from './pages/services/DigitalizationPage'
import AIAgentsPage from './pages/services/AIAgentsPage'
import ApplicationModernizationPage from './pages/services/ApplicationModernizationPage'

// Product pages
import SmartContractsPage from './pages/products/SmartContractsPage'
import AtlasAPIManagerPage from './pages/products/AtlasAPIManagerPage'
import AgentStudioPage from './pages/products/AgentStudioPage'
import AIOpsPage from './pages/products/AIOpsPage'
import ITSMTicketingPage from './pages/products/ITSMTicketingPage'
import OttohmVideoPage from './pages/products/OttohmVideoPage'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <ScrollToTop />
        <Routes>
          {/* Main pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/ai" element={<AIPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/our-team" element={<OurTeamPage />} />
          <Route path="/competencies" element={<CompetenciesPage />} />
          
          {/* Service pages */}
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/big-data" element={<BigDataPage />} />
          <Route path="/services/database-management" element={<DatabaseManagementPage />} />
          <Route path="/services/security" element={<SecurityPage />} />
          <Route path="/services/erp-testing" element={<ERPTestingPage />} />
          <Route path="/services/cloud-practice" element={<CloudPracticePage />} />
          <Route path="/services/digitalization" element={<DigitalizationPage />} />
          <Route path="/services/ai-agents" element={<AIAgentsPage />} />
          <Route path="/services/application-modernization" element={<ApplicationModernizationPage />} />
          
          {/* Product pages */}
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/smart-contracts" element={<SmartContractsPage />} />
          <Route path="/products/atlas-api-management" element={<AtlasAPIManagerPage />} />
          <Route path="/products/agent-studio" element={<AgentStudioPage />} />
          <Route path="/products/ai-ops-platform" element={<AIOpsPage />} />
          <Route path="/products/itsm-ticketing" element={<ITSMTicketingPage />} />
          <Route path="/products/ottohm-video-streaming" element={<OttohmVideoPage />} />
          
          {/* Action pages */}
          <Route path="/get-started" element={<GetStartedPage />} />
          <Route path="/contact-sales" element={<ContactSalesPage />} />
          <Route path="/schedule-consultation" element={<ScheduleConsultationPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
