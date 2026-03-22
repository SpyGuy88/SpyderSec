import { motion } from 'framer-motion'
import { Target, Eye, Cpu, Lock } from 'lucide-react'

const features = [
  {
    title: 'Precision Targeting',
    desc: "We don't waste time on false positives. Our AI-driven heuristics isolate genuine threats instantly.",
    icon: Target,
  },
  {
    title: 'Complete Visibility',
    desc: 'Deep packet inspection and endpoint monitoring give you absolute oversight of your digital domain.',
    icon: Eye,
  },
  {
    title: 'Automated Defense',
    desc: 'Smart contracts and automated scripts lockdown compromised sectors faster than humanly possible.',
    icon: Cpu,
  },
  {
    title: 'Zero-Trust Architecture',
    desc: 'Never trust, always verify. We implement strict access controls across all infrastructure tiers.',
    icon: Lock,
  },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 relative overflow-hidden" style={{ backgroundColor: 'hsl(0 0% 4%)' }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, hsl(0 100% 50% / 0.03) 0%, transparent 70%)' }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold uppercase mb-4">
            WHY <span style={{ color: 'hsl(0 100% 50%)' }}>CHOOSE US</span>
          </h2>
          <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: 'hsl(0 100% 50%)' }} />
          <p style={{ color: 'hsl(0 0% 65%)' }} className="max-w-2xl mx-auto">
            Tactical precision. Uncompromising standards. Battle-tested operators.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="flex gap-6 p-8 cyber-clip group transition-all duration-300"
              style={{ backgroundColor: 'hsl(0 0% 7%)', border: '1px solid hsl(0 0% 15%)' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'hsl(0 100% 50% / 0.4)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'hsl(0 0% 15%)'}
            >
              <div
                className="w-16 h-16 flex items-center justify-center rounded-full shrink-0 transition-all duration-300"
                style={{ backgroundColor: 'hsl(0 100% 50% / 0.1)', border: '2px solid hsl(0 100% 50% / 0.3)' }}
              >
                <feature.icon className="w-8 h-8" style={{ color: 'hsl(0 100% 50%)' }} />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl uppercase tracking-wide mb-3" style={{ color: 'hsl(0 0% 98%)' }}>
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'hsl(0 0% 65%)' }}>
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
