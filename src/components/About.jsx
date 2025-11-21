import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="absolute inset-0 pointer-events-none [background:radial-gradient(600px_200px_at_20%_10%,rgba(59,130,246,.12),transparent),radial-gradient(600px_200px_at_80%_90%,rgba(168,85,247,.12),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">I build products people love</h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              With a background in full‑stack engineering and applied AI, I turn complex ideas into elegant, production‑ready experiences. I care about clean architecture, performance, and the tiny details that make interfaces feel alive.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {[ 
                { k: 'Frontend', v: 'React, Tailwind, Three.js, Framer, GSAP' },
                { k: 'Backend', v: 'FastAPI, Node, GraphQL, MongoDB, Postgres' },
                { k: 'AI/ML', v: 'LLM integration, vector search, model ops' },
                { k: 'Cloud', v: 'AWS, Vercel, Docker, CI/CD' },
              ].map((item) => (
                <div key={item.k} className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs text-slate-400">{item.k}</p>
                  <p className="text-sm font-medium text-slate-100">{item.v}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-blue-500/10 to-purple-500/10">
              <div className="absolute inset-0 [mask-image:radial-gradient(white,transparent_70%)]">
                <div className="absolute -inset-20 bg-[conic-gradient(from_0deg_at_50%_50%,rgba(59,130,246,0.35),rgba(168,85,247,0.35),transparent_60%)] animate-[spin_12s_linear_infinite]" />
              </div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <p className="text-slate-300 text-sm">A blend of design intuition, rigorous engineering, and a relentless focus on outcomes.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
