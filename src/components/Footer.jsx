import { motion } from 'framer-motion'

const links = [
  { name: 'Services', href: '#services' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Why Us', href: '#why-us' },
  { name: 'Team', href: '#team' },
  { name: 'Photo Gallery', href: '#gallery' },
  { name: 'Support', href: '#support' },
  { name: 'Feedback', href: '#feedback' },
]

export default function Footer() {
  return (
    <footer className="relative py-16 overflow-hidden" style={{ backgroundColor: 'hsl(0 0% 4%)', borderTop: '1px solid hsl(0 0% 15%)' }}>
      <div className="absolute top-0 left-0 w-full h-px" style={{ background: 'linear-gradient(to right, transparent, hsl(0 100% 50% / 0.5), transparent)' }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <a href="#" className="flex items-center gap-3 mb-4" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
              <div
                className="relative flex items-center justify-center w-10 h-10 rounded-full overflow-hidden"
                style={{ border: '1px solid hsl(0 100% 50% / 0.3)' }}
              >
                <img src="/spyder-sec-logo.jpg" alt="Spyder Sec Logo" className="w-full h-full object-cover" />
              </div>
              <span className="font-display font-bold text-lg tracking-widest" style={{ color: 'hsl(0 0% 98%)' }}>
                SPYDER SEC
              </span>
            </a>
            <p className="text-sm leading-relaxed" style={{ color: 'hsl(0 0% 65%)' }}>
              "The Smarter You Are, The Safer You'll Be"
            </p>
            <p className="text-xs mt-3 font-mono" style={{ color: 'hsl(0 100% 50%)' }}>
              AES-256 ENCRYPTED
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold uppercase tracking-widest text-sm mb-6" style={{ color: 'hsl(0 0% 98%)' }}>
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {links.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm uppercase tracking-widest transition-colors"
                    style={{ color: 'hsl(0 0% 65%)' }}
                    onMouseEnter={e => e.target.style.color = 'hsl(0 100% 50%)'}
                    onMouseLeave={e => e.target.style.color = 'hsl(0 0% 65%)'}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold uppercase tracking-widest text-sm mb-6" style={{ color: 'hsl(0 0% 98%)' }}>
              Contact
            </h4>
            <ul className="flex flex-col gap-3 text-sm" style={{ color: 'hsl(0 0% 65%)' }}>
              <li>📞 7665140660</li>
              <li>✉️ spyder.sec.org@gmail.com</li>
              <li>💬 WhatsApp: 7665140660</li>
            </ul>
            <div className="mt-6">
              <a
                href="https://wa.me/917665140660?text=Hello%2C%20I%20am%20interested%20to%20Enquire%20About%20Spyder%20Sec"
                target="_blank"
                rel="noopener noreferrer"
                className="cyber-clip-button inline-flex px-6 py-2 text-sm font-bold uppercase tracking-widest transition-all duration-300"
                style={{ backgroundColor: 'hsl(0 100% 50%)', color: 'hsl(0 0% 4%)' }}
              >
                Enquire Now
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderTop: '1px solid hsl(0 0% 15%)' }}>
          <p className="text-sm" style={{ color: 'hsl(0 0% 65%)' }}>
            © {new Date().getFullYear()} Spyder Sec. All rights reserved.
          </p>
          <p className="text-xs font-mono uppercase tracking-widest" style={{ color: 'hsl(0 0% 65%)' }}>
            SYSTEM SECURE &amp; ONLINE
          </p>
        </div>
      </div>
    </footer>
  )
}
