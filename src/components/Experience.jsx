import { motion } from 'framer-motion'

const roles = [
  {
    company: 'NeoTech Labs',
    title: 'Senior Full‑Stack + AI Engineer',
    period: '2022 — Present',
    points: [
      'Led development of a real‑time analytics platform with 3D data views',
      'Integrated LLM agents into product workflows, reducing ops toil by 35%',
      'Drove performance optimization achieving 2.7s faster TTI on core flows',
    ],
  },
  {
    company: 'Orbit Systems',
    title: 'Full‑Stack Engineer',
    period: '2020 — 2022',
    points: [
      'Built component libraries and design tokens with accessibility baked‑in',
      'Shipped scalable APIs and event streams handling millions of events/day',
      'Mentored junior devs and championed testing culture',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none [background:radial-gradient(500px_150px_at_10%_30%,rgba(59,130,246,.12),transparent),radial-gradient(500px_150px_at_90%_70%,rgba(168,85,247,.12),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Experience</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {roles.map((role, idx) => (
            <motion.div key={role.company} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">{role.title}</h3>
                  <p className="text-slate-300">{role.company}</p>
                </div>
                <p className="text-slate-400 text-sm">{role.period}</p>
              </div>
              <ul className="mt-4 space-y-2 list-disc list-inside text-slate-300">
                {role.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
