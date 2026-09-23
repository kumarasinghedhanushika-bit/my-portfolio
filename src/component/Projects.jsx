import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Reveal from "./Reveal.jsx";

const projects = [
  {
    name: "Hospital Management System",
    desc: "A student portal for SLIATE with course schedules, announcements and a resource-sharing hub.",
    tags: ["React", "Spring Boot", "MongoDB"],
    gradient: "from-pink/30 to-gold/20",
    github: "https://github.com/kumarasinghedhanushika-bit",
    live: "https://example.com",
  },
 
  {
    name: "i computer",
    desc: "A -commerce website.",
    tags: ["Mongo DB", "MERN Stack", "REST API"],
    gradient: "from-gold/25 to-teal/20",
    github: "https://github.com/kumarasinghedhanushika-bit",
    live: "https://example.com",
  },
 

];

function Projects() {
  return (
    <section id="projects" className="py-28 px-5 md:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <span className="text-sm font-semibold text-pink">Portfolio</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl mt-2 mb-14">
            Projects I've <span className="text-gradient">crafted</span>
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-7">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-3xl glass p-7 h-full overflow-hidden"
              >
                <div className={`absolute -top-10 -right-10 h-40 w-40 rounded-full bg-gradient-to-br ${p.gradient} blur-2xl opacity-70 group-hover:opacity-100 transition-opacity`} />
                <div className="relative flex items-start justify-between">
                  <h3 className="font-display font-semibold text-xl">{p.name}</h3>
                  <div className="flex items-center gap-3 text-lg text-muted shrink-0 ml-3">
                    <a href={p.github} target="_blank" rel="noreferrer" aria-label={`${p.name} GitHub repo`} className="hover:text-text transition-colors">
                      <FiGithub />
                    </a>
                    <a href={p.live} target="_blank" rel="noreferrer" aria-label={`${p.name} live site`} className="hover:text-text transition-colors">
                      <FiExternalLink />
                    </a>
                  </div>
                </div>
                <p className="relative text-sm text-muted mt-3 leading-relaxed">{p.desc}</p>
                <div className="relative flex flex-wrap gap-2 mt-6">
                  {p.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full bg-white/5 text-muted">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
