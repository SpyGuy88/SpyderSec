import { useState } from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Khushi Jain',
    company: 'Spyder Sec',
    rating: 5,
    text: 'This was one of the best courses I have taken, Sir was very supportive, 5/5 Star',
  },
  {
    name: 'Anonymous',
    company: 'Spyder Sec',
    rating: 5,
    text: 'Excellent cybersecurity training. The hands-on approach made complex concepts easy to understand.',
  },
  {
    name: 'Anonymous',
    company: 'Spyder Sec',
    rating: 5,
    text: 'Professional team, great content and very helpful sessions. Highly recommended!',
  },
]

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="w-4 h-4"
          style={{ color: 'hsl(0 100% 50%)', fill: i < count ? 'hsl(0 100% 50%)' : 'transparent' }}
        />
      ))}
    </div>
  )
}

export default function Feedback() {
  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="feedback" className="py-24 relative overflow-hidden" style={{ backgroundColor: 'hsl(0 0% 12%)' }}>
      <div className="absolute inset-0 cyber-grid pointer-events-none" style={{ opacity: 0.1 }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold uppercase mb-4">
            Client <span style={{ color: 'hsl(0 100% 50%)' }}>Feedback</span>
          </h2>
          <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: 'hsl(0 100% 50%)' }} />
          <p style={{ color: 'hsl(0 0% 65%)' }} className="max-w-2xl mx-auto">
            Hear from those who trust Spyder Sec to guard their digital frontier — and share your own experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name + i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col gap-4 p-6 cyber-clip transition-all duration-300"
              style={{ border: '1px solid hsl(0 100% 50% / 0.2)', backgroundColor: 'hsl(0 0% 4%)' }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'hsl(0 100% 50% / 0.5)'
                e.currentTarget.style.boxShadow = '0 0 20px rgba(255,0,0,0.08)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'hsl(0 100% 50% / 0.2)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <StarRating count={t.rating} />
              <p className="text-sm leading-relaxed italic flex-1" style={{ color: 'hsl(0 0% 65%)' }}>
                "{t.text}"
              </p>
              <div className="pt-4" style={{ borderTop: '1px solid hsl(0 0% 15%)' }}>
                <p className="font-display font-bold text-sm" style={{ color: 'hsl(0 0% 98%)' }}>{t.name}</p>
                <p className="text-xs font-mono mt-0.5" style={{ color: 'hsl(0 100% 50%)' }}>{t.company}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto cyber-clip p-8"
          style={{ border: '1px solid hsl(0 100% 50% / 0.2)', backgroundColor: 'hsl(0 0% 4%)' }}
        >
          <h3 className="font-display font-bold uppercase tracking-widest text-xl mb-6 text-center" style={{ color: 'hsl(0 0% 98%)' }}>
            Share Your <span style={{ color: 'hsl(0 100% 50%)' }}>Experience</span>
          </h3>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: 'hsl(0 100% 50% / 0.1)', border: '2px solid hsl(0 100% 50%)' }}>
                <span className="text-2xl">✓</span>
              </div>
              <h4 className="font-display font-bold uppercase tracking-widest mb-2" style={{ color: 'hsl(0 0% 98%)' }}>
                FEEDBACK RECEIVED
              </h4>
              <p className="text-sm" style={{ color: 'hsl(0 0% 65%)' }}>
                Thank you for your valuable feedback. We appreciate your time.
              </p>
            </motion.div>
          ) : (
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full outline-none px-4 py-3 text-sm font-mono transition-colors"
                style={{ backgroundColor: 'hsl(0 0% 12%)', border: '1px solid hsl(0 0% 15%)', color: 'hsl(0 0% 98%)' }}
                onFocus={e => e.target.style.borderColor = 'hsl(0 100% 50%)'}
                onBlur={e => e.target.style.borderColor = 'hsl(0 0% 15%)'}
              />
              <input
                type="text"
                placeholder="Company / Organization"
                className="w-full outline-none px-4 py-3 text-sm font-mono transition-colors"
                style={{ backgroundColor: 'hsl(0 0% 12%)', border: '1px solid hsl(0 0% 15%)', color: 'hsl(0 0% 98%)' }}
                onFocus={e => e.target.style.borderColor = 'hsl(0 100% 50%)'}
                onBlur={e => e.target.style.borderColor = 'hsl(0 0% 15%)'}
              />
              <div>
                <p className="text-sm font-mono mb-2" style={{ color: 'hsl(0 0% 65%)' }}>Your Rating</p>
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-7 h-7 cursor-pointer transition-colors"
                      onClick={() => setRating(i + 1)}
                      onMouseEnter={() => setHoverRating(i + 1)}
                      onMouseLeave={() => setHoverRating(0)}
                      style={{
                        color: 'hsl(0 100% 50%)',
                        fill: i < (hoverRating || rating) ? 'hsl(0 100% 50%)' : 'transparent',
                      }}
                    />
                  ))}
                </div>
              </div>
              <textarea
                placeholder="Share your experience..."
                rows={4}
                required
                className="w-full outline-none px-4 py-3 text-sm font-mono transition-colors resize-none"
                style={{ backgroundColor: 'hsl(0 0% 12%)', border: '1px solid hsl(0 0% 15%)', color: 'hsl(0 0% 98%)' }}
                onFocus={e => e.target.style.borderColor = 'hsl(0 100% 50%)'}
                onBlur={e => e.target.style.borderColor = 'hsl(0 0% 15%)'}
              />
              <button
                type="submit"
                className="cyber-clip-button w-full py-3 text-sm font-bold uppercase tracking-widest transition-all duration-300"
                style={{ backgroundColor: 'hsl(0 100% 50%)', color: 'hsl(0 0% 4%)' }}
              >
                Submit Feedback
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
