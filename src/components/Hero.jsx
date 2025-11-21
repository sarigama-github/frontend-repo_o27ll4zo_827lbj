import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/30 to-slate-950/80 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 items-center gap-10">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center text-xs tracking-widest uppercase text-blue-300/80 bg-blue-500/10 border border-blue-400/20 rounded-full px-3 py-1 mb-5">
                Futuristic Full‑Stack + AI Engineer
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
                Building immersive web experiences with 3D and intelligence
              </h1>
              <p className="mt-5 text-slate-300 text-base sm:text-lg max-w-xl">
                I design and engineer high‑impact products that blend delightful UI, performant backends, and applied ML/AI integrations.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#projects" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-white/10 text-white hover:bg-white/20 border border-white/15">
                  View Projects
                </a>
                <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30">
                  Contact Me
                </a>
              </div>
            </motion.div>
          </div>
          <div className="hidden md:block" />
        </div>
      </div>
    </section>
  )
}
