import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="absolute inset-0 pointer-events-none [background:radial-gradient(600px_200px_at_20%_10%,rgba(59,130,246,.12),transparent),radial-gradient(600px_200px_at_80%_90%,rgba(168,85,247,.12),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Contact</h2>
          <p className="text-slate-400 text-sm">Let’s build something great</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-slate-300 mb-1">Name</label>
                <input required className="w-full px-4 py-2 rounded-md bg-slate-900/80 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1">Email</label>
                <input type="email" required className="w-full px-4 py-2 rounded-md bg-slate-900/80 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="jane@company.com" />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1">Message</label>
                <textarea required rows={5} className="w-full px-4 py-2 rounded-md bg-slate-900/80 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Tell me about your project..." />
              </div>
              <button className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30">Send message</button>
              {sent && <p className="text-sm text-green-400">Thanks! I’ll get back to you shortly.</p>}
            </form>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-white font-semibold">Availability</h3>
                <p className="text-slate-300 text-sm">Open to full‑time or contract roles. Remote‑first, globally flexible.</p>
              </div>
              <div>
                <h3 className="text-white font-semibold">Focus</h3>
                <p className="text-slate-300 text-sm">0 → 1 products, design systems, immersive web, and applied AI.</p>
              </div>
              <div>
                <h3 className="text-white font-semibold">Elsewhere</h3>
                <div className="flex gap-3 mt-2">
                  <a className="text-slate-300 hover:text-white text-sm underline" href="#" target="_blank">GitHub</a>
                  <a className="text-slate-300 hover:text-white text-sm underline" href="#" target="_blank">LinkedIn</a>
                  <a className="text-slate-300 hover:text-white text-sm underline" href="#" target="_blank">Twitter</a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
