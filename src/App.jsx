import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <div className="fixed inset-0 -z-0 pointer-events-none opacity-60" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(800px_300px_at_10%_10%,rgba(59,130,246,.15),transparent),radial-gradient(800px_300px_at_90%_90%,rgba(168,85,247,.15),transparent)]" />
      </div>

      <Navbar />

      <main className="relative">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />

        <footer className="py-10 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Your Name. Built with love for craft.
        </footer>
      </main>
    </div>
  )
}

export default App
