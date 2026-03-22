import { motion } from 'framer-motion'
import { User } from 'lucide-react'

const teamMembers = [
  {
    name: 'Himanshu Vyas',
    role: 'Founder',
    bio: 'Cybersecurity visionary and the driving force behind Spyder Sec.',
    photo: '/himanshu.jpg',
  },
  {
    name: 'Harsh Tikkiwal',
    role: 'Chief Technology Officer',
    bio: 'Cybersecurity professional and dedicated team member at Spyder Sec.',
    photo: '/harsh.jpg',
  },
  {
    name: 'Michelle Dhawan',
    role: 'Chief Marketing Officer',
    bio: 'Cybersecurity professional and dedicated team member at Spyder Sec.',
    photo: '/michelle.jpg',
  },
  { name: 'TBD', role: 'TBD', bio: 'Coming soon.', photo: null },
  { name: 'TBD', role: 'TBD', bio: 'Coming soon.', photo: null },
  { name: 'TBD', role: 'TBD', bio: 'Coming soon.', photo: null },
  { name: 'TBD', role: 'TBD', bio: 'Coming soon.', photo: null },
  { name: 'TBD', role: 'TBD', bio: 'Coming soon.', photo: null },
]

export default function Team() {
  return (
    <section id="team" className="py-24 relative overflow-hidden" style={{ backgroundColor: 'hsl(0 0% 4%)' }}>
      <div className="absolute inset-0 cyber-dots pointer-events-none" style={{ opacity: 0.1 }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold uppercase mb-4">
            Meet The <span style={{ color: 'hsl(0 100% 50%)' }}>Team</span>
          </h2>
          <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: 'hsl(0 100% 50%)' }} />
          <p style={{ color: 'hsl(0 0% 65%)' }} className="max-w-2xl mx-auto">
            Elite operators with real-world experience defending the digital frontier.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, i) => (
            <motion.div
              key={`${member.name}-${i}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="flex flex-col items-center text-center p-6 cyber-clip group transition-all duration-300"
              style={{ border: '1px solid hsl(0 100% 50% / 0.2)', backgroundColor: 'hsl(0 0% 12%)' }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'hsl(0 100% 50% / 0.6)'
                e.currentTarget.style.boxShadow = '0 0 20px rgba(255,0,0,0.1)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'hsl(0 100% 50% / 0.2)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div
                className="w-20 h-20 flex items-center justify-center rounded-full mb-5 overflow-hidden transition-all duration-300"
                style={{ border: '2px solid hsl(0 100% 50% / 0.4)', backgroundColor: 'hsl(0 100% 50% / 0.1)' }}
              >
                {member.photo ? (
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <User className="w-8 h-8" style={{ color: 'hsl(0 100% 50%)' }} />
                )}
              </div>
              <h3 className="font-display font-bold uppercase tracking-wide" style={{ color: 'hsl(0 0% 98%)' }}>
                {member.name}
              </h3>
              <p className="text-xs font-mono uppercase tracking-widest mt-1 mb-3" style={{ color: 'hsl(0 100% 50%)' }}>
                {member.role}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'hsl(0 0% 65%)' }}>
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
