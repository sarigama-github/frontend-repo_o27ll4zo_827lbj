import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'

const logos = [
  'React', 'TypeScript', 'Node.js', 'FastAPI', 'MongoDB', 'Postgres', 'Three.js', 'Framer', 'GSAP', 'Tailwind', 'Python', 'PyTorch', 'OpenAI', 'HuggingFace'
]

export default function Skills() {
  const marqueeRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const el = marqueeRef.current
      if (!el) return
      const w = el.scrollWidth / 2
      gsap.fromTo(el, { x: 0 }, { x: -w, repeat: -1, duration: 18, ease: 'none' })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section id="skills" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none [background:radial-gradient(500px_150px_at_10%_30%,rgba(59,130,246,.12),transparent),radial-gradient(500px_150px_at_90%_70%,rgba(168,85,247,.12),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Skills</h2>
          <p className="text-slate-400 text-sm">An ever‑growing toolkit</p>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
          <div className="flex gap-3 whitespace-nowrap py-6" ref={marqueeRef}>
            {[...logos, ...logos].map((name, i) => (
              <span key={i} className="inline-flex items-center gap-2 text-sm text-slate-200 px-4 py-2 rounded-full bg-slate-900/60 border border-white/10">
                <span className="w-2 h-2 rounded-full" style={{ background: i % 2 ? '#60a5fa' : '#a78bfa' }} />
                {name}
              </span>
            ))}
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { h: 'Performance', p: 'Ship fast, render faster. Measure, profile, optimize.' },
            { h: '3D/Immersion', p: 'Delight with tactility. Modern WebGL with restraint.' },
            { h: 'AI Systems', p: 'LLM agents, retrieval, evals, and observability.' },
          ].map((c) => (
            <div key={c.h} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-white font-semibold">{c.h}</h3>
              <p className="text-slate-300 text-sm mt-1">{c.p}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
