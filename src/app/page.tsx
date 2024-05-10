import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <h1>Sufian Resume</h1>
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
