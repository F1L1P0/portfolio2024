import Skills from '@/components/main/Skills'
import Hero from '../components/main/Hero'
import Api from '@/components/main/Api'
import Projects from '@/components/main/Projects'

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Api />
        <Projects />
      </div>
    </main>
  )
}
