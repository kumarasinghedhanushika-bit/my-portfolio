import { motion } from "framer-motion";
import Reveal from "./Reveal.jsx";

const skills = [
  { name: "React", level: 88, color: "from-pink to-gold" },
  { name: "JavaScript (ES6+)", level: 85, color: "from-gold to-teal" },
  { name: "Tailwind CSS", level: 92, color: "from-teal to-pink" },
  { name: "Node.js & Express", level: 75, color: "from-pink to-teal" },
  { name: "MongoDB / SQL", level: 70, color: "from-gold to-pink" },
  { name: "UI / UX Design", level: 80, color: "from-teal to-gold" },
  { name: "spring boot", level: 70, color: "from-gold to-pink" },
  { name: "MERN stack", level: 60, color: "from-teal to-pink" },
];

function Skills() {
  return (
    <section id="skills" className="py-28 px-5 md:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <span className="text-sm font-semibold text-teal">My Skills</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl mt-2 mb-14">
            Things I'm <span className="text-gradient">good at</span>
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
          {skills.map((skill, i) => (
            <Reveal key={skill.name} delay={i * 0.08}>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-sm">{skill.name}</span>
                  <span className="text-xs text-muted">{skill.level}%</span>
                </div>
                <div className="h-2.5 rounded-full glass overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="mt-16 flex flex-wrap gap-3">
          {["Figma", "GitHub", "Vite", "REST APIs", "Database", "Postman"].map((tool) => (
            <motion.span
              key={tool}
              whileHover={{ scale: 1.08, y: -3 }}
              className="text-sm px-4 py-2 rounded-full glass text-muted hover:text-text transition-colors"
            >
              {tool}
            </motion.span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export default Skills;
