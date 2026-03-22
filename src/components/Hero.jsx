import { motion } from 'framer-motion'

export default function Hero() {
  const line1 = 'WE SECURE THE'.split(' ')
  const line2 = 'UNSEEN THREATS'.split(' ')

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="/images/hero-bg.svg" alt="" className="w-full h-full object-cover" style={{ opacity: 0.7 }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, hsl(0 0% 4% / 0.4), hsl(0 0% 4% / 0.8), hsl(0 0% 4%))' }} />
        <div className="absolute inset-0 cyber-grid" style={{ opacity: 0.2 }} />
        <motion.div
          className="absolute inset-0 h-[10%]"
          style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,0,0,0.05), transparent)' }}
          animate={{ y: ['-100%', '1000%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded w-fit"
              style={{ border: '1px solid hsl(0 100% 50% / 0.3)', backgroundColor: 'hsl(0 100% 50% / 0.05)' }}
            >
              <span className="relative flex h-2 w-2">
                <motion.span
                  animate={{ opacity: [1, 0.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="absolute inline-flex h-full w-full rounded-full"
                  style={{ backgroundColor: 'hsl(0 100% 50%)' }}
                />
                <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: 'hsl(0 100% 50%)' }} />
              </span>
              <span className="text-xs font-mono uppercase tracking-widest" style={{ color: 'hsl(0 0% 65%)' }}>
                SYSTEM SECURE &amp; ONLINE
              </span>
            </motion.div>

            <div className="flex flex-col gap-2">
              <div className="text-5xl sm:text-6xl lg:text-7xl font-display font-black uppercase leading-none tracking-tight">
                {line1.map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    className="inline-block mr-4"
                    style={{ color: 'hsl(0 0% 98%)' }}
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
              <div className="text-5xl sm:text-6xl lg:text-7xl font-display font-black uppercase leading-none tracking-tight">
                {line2.map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                    className="inline-block mr-4"
                    style={{ color: 'hsl(0 100% 50%)' }}
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg max-w-md leading-relaxed italic"
              style={{ color: 'hsl(0 0% 65%)' }}
            >
              "The Smarter You Are, The Safer You'll Be"
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#services"
                className="cyber-clip-button px-8 py-3 text-sm font-bold uppercase tracking-widest transition-all duration-300"
                style={{ backgroundColor: 'hsl(0 100% 50%)', color: 'hsl(0 0% 4%)' }}
              >
                Initiate Defense
              </a>
              <a
                href="#support"
                className="cyber-clip-button px-8 py-3 text-sm font-bold uppercase tracking-widest transition-all duration-300"
                style={{ border: '1px solid hsl(0 100% 50% / 0.5)', color: 'hsl(0 0% 98%)' }}
              >
                Contact Us
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{ border: '2px solid hsl(0 100% 50% / 0.3)' }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute inset-4 rounded-full"
                style={{ border: '1px solid hsl(0 100% 50% / 0.2)' }}
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              />
              <div className="absolute inset-8 rounded-full overflow-hidden flex items-center justify-center"
                style={{ backgroundColor: 'hsl(0 0% 7%)', border: '2px solid hsl(0 100% 50% / 0.4)' }}>
                <img src="/images/hero-bg.png" alt="Spyder Sec" className="w-full h-full object-cover" style={{ opacity: 0.8 }} />
                <div className="absolute bottom-4 left-0 right-0 text-center">
                  <span className="font-display font-bold text-sm tracking-widest" style={{ color: 'hsl(0 0% 98%)' }}>
                    SPYDER SEC
                  </span>
                </div>
              </div>
              <div className="absolute top-4 right-8 px-3 py-1 text-xs font-mono uppercase tracking-widest"
                style={{ backgroundColor: 'hsl(0 0% 7%)', border: '1px solid hsl(0 100% 50% / 0.3)', color: 'hsl(0 0% 65%)' }}>
                THREAT LEVEL<br />
                <span style={{ color: 'hsl(0 100% 50%)' }}>NEUTRALIZED</span>
              </div>
              <div className="absolute bottom-8 left-0 px-3 py-1 text-xs font-mono"
                style={{ backgroundColor: 'hsl(0 0% 7%)', border: '1px solid hsl(0 100% 50% / 0.3)', color: 'hsl(0 0% 65%)' }}>
                🔒 ENCRYPTION<br />
                <span style={{ color: 'hsl(0 0% 98%)' }}>AES-256 ACTIVE</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
