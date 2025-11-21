import { Canvas } from '@react-three/fiber'
import { OrbitControls, Float, Html } from '@react-three/drei'
import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'

const projects = [
  { title: '3D Analytics Explorer', tags: ['React', 'Three.js', 'LLM'], code: '#', demo: '#', color: '#60a5fa' },
  { title: 'Agentic Support Bot', tags: ['FastAPI', 'RAG', 'OpenAI'], code: '#', demo: '#', color: '#a78bfa' },
  { title: 'Realtime Collab Canvas', tags: ['WebRTC', 'Yjs', 'Vite'], code: '#', demo: '#', color: '#34d399' },
  { title: 'E‑commerce AI Search', tags: ['Next.js', 'Pinecone', 'Qdrant'], code: '#', demo: '#', color: '#f472b6' },
]

function SphereCatalog({ onSelect }) {
  const radius = 3
  const items = useMemo(() => {
    return projects.map((p, i) => {
      const angle = (i / projects.length) * Math.PI * 2
      return { ...p, position: [Math.cos(angle) * radius, Math.sin(angle) * radius, 0] }
    })
  }, [])

  return (
    <group>
      {items.map((item, idx) => (
        <Float key={idx} speed={2} rotationIntensity={0.5} floatIntensity={1.2}>
          <mesh position={item.position} onClick={() => onSelect(item)}>
            <icosahedronGeometry args={[0.7, 1]} />
            <meshStandardMaterial color={item.color} roughness={0.3} metalness={0.8} />
            <Html center distanceFactor={8} className="select-none">
              <div className="px-2 py-1 text-xs rounded bg-black/60 text-white border border-white/10 shadow-lg">
                {item.title}
              </div>
            </Html>
          </mesh>
        </Float>
      ))}
    </group>
  )
}

export default function Projects() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="projects" className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Projects</h2>
          <p className="text-slate-400 text-sm">Explore the sphere catalog — click items</p>
        </div>

        <div className="rounded-2xl border border-white/10 overflow-hidden">
          <div className="relative h-[520px] bg-black/40">
            <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
              <ambientLight intensity={0.4} />
              <directionalLight position={[5, 5, 5]} intensity={1.2} />
              <SphereCatalog onSelect={(item) => setSelected(item)} />
              <OrbitControls enablePan={false} />
            </Canvas>

            {selected && (
              <div className="absolute inset-x-0 bottom-0">
                <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="m-4 rounded-xl bg-slate-900/80 backdrop-blur border border-white/10 p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h3 className="text-white font-semibold">{selected.title}</h3>
                      <div className="mt-1 flex flex-wrap gap-2">
                        {selected.tags.map((t) => (
                          <span key={t} className="text-xs text-slate-300 bg-white/5 border border-white/10 px-2 py-0.5 rounded">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <a href={selected.demo} target="_blank" className="text-xs px-3 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white">Live demo</a>
                      <a href={selected.code} target="_blank" className="text-xs px-3 py-2 rounded bg-white/10 hover:bg-white/20 text-white">Source code</a>
                      <button onClick={() => setSelected(null)} className="text-xs px-3 py-2 rounded bg-white/10 hover:bg-white/20 text-white">Close</button>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
