import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Certifications from './components/Certifications'
import Stats from './components/Stats'
import WhyUs from './components/WhyUs'
import Team from './components/Team'
import Gallery from './components/Gallery'
import Support from './components/Support'
import Feedback from './components/Feedback'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'hsl(0 0% 4%)', color: 'hsl(0 0% 98%)' }}>
      <Navbar />
      <Hero />
      <Services />
      <Certifications />
      <Stats />
      <WhyUs />
      <Team />
      <Gallery />
      <Support />
      <Feedback />
      <Footer />
    </div>
  )
}
