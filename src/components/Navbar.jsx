import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Why Us', href: '#why-us' },
  { name: 'Team', href: '#team' },
  { name: 'Photo Gallery', href: '#gallery' },
  { name: 'Support', href: '#support' },
  { name: 'Feedback', href: '#feedback' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3'
          : 'py-5 bg-transparent'
      }`}
      style={scrolled ? { backgroundColor: 'hsl(0 0% 4% / 0.85)', backdropFilter: 'blur(12px)', borderBottom: '1px solid hsl(0 100% 50% / 0.2)' } : {}}
    >
      <motion.div
        className="absolute bottom-0 left-0 h-px w-24"
        style={{ backgroundColor: 'hsl(0 100% 50% / 0.8)', filter: 'blur(1px)' }}
        animate={{ x: ['-100px', '100vw'] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#" onClick={scrollToTop} className="flex items-center gap-3 group">
            <div
              className="relative flex items-center justify-center w-12 h-12 rounded-full overflow-hidden transition-all duration-300"
              style={{ border: '1px solid hsl(0 100% 50% / 0.3)' }}
            >
              <img src="/spyder-sec-logo.jpg" alt="Spyder Sec Logo" className="w-full h-full object-cover" />
            </div>
            <span className="font-display font-bold text-xl tracking-widest transition-colors" style={{ color: 'hsl(0 0% 98%)' }}>
              SPYDER SEC
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium uppercase tracking-widest transition-colors duration-200"
                style={{ color: 'hsl(0 0% 65%)' }}
                onMouseEnter={e => e.target.style.color = 'hsl(0 100% 50%)'}
                onMouseLeave={e => e.target.style.color = 'hsl(0 0% 65%)'}
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/917665140660?text=Hello%2C%20I%20am%20interested%20to%20Enquire%20About%20Spyder%20Sec"
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-clip-button px-6 py-2.5 text-sm font-bold uppercase tracking-widest transition-all duration-300"
              style={{ backgroundColor: 'hsl(0 100% 50%)', color: 'hsl(0 0% 4%)' }}
            >
              Enquiry
            </a>
          </nav>

          <button
            className="md:hidden p-2 transition-colors"
            style={{ color: 'hsl(0 0% 98%)' }}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
            style={{ backgroundColor: 'hsl(0 0% 12%)', borderBottom: '1px solid hsl(0 100% 50% / 0.2)' }}
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium uppercase tracking-widest p-2 transition-colors"
                  style={{ color: 'hsl(0 0% 65%)', borderBottom: '1px solid hsl(0 0% 15%)' }}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://wa.me/917665140660?text=Hello%2C%20I%20am%20interested%20to%20Enquire%20About%20Spyder%20Sec"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="cyber-clip-button inline-flex items-center justify-center px-6 py-3 mt-4 text-sm font-bold uppercase tracking-widest"
                style={{ backgroundColor: 'hsl(0 100% 50%)', color: 'hsl(0 0% 4%)' }}
              >
                Enquiry
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
