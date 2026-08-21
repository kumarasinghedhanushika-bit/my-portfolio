import { motion } from "framer-motion";
import Reveal from "./Reveal.jsx";

const timeline = [
  {
    year: "2023 — Present",
    title: "Higher National Diploma in Information Technology (HNDIT)",
    place: "SLIATE — Sri Lanka Institute of Advanced Technological Education",
    desc: "Specializing in software development, databases and web technologies, with hands-on project work each semester.",
  },
  {
    year: "2022",
    title: "Fullstack Web Development Certificate",
    place: "Online Program Skyray ",
    desc: "Completed a focused course covering MERN stack and responsive design fundamentals.",
  },
  {
    year: "2022",
    title: "G.C.E. Advanced Level",
    place: "Buddist Girls' College, Mount Lavinia",
    desc: "Studied for the G.C.E. Advanced Level examination, focusing on subjects.",
  }
]

function Education() {
  return (
    <section id="education" className="py-28 px-5 md:px-8 relative">
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-pink/10 blur-[100px]" />
      <div className="max-w-4xl mx-auto relative">
        <Reveal>
          <span className="text-sm font-semibold text-gold">Education</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl mt-2 mb-14">
            Where I've <span className="text-gradient">learned</span>
          </h2>
        </Reveal>

        <div className="relative">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-pink via-gold to-teal" />
          <div className="space-y-10">
            {timeline.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.12}>
                <motion.div
                  whileHover={{ x: 6 }}
                  className="relative pl-12"
                >
                  <span className="absolute left-0 top-1.5 h-8 w-8 rounded-full glass flex items-center justify-center">
                    <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-pink to-gold" />
                  </span>
                  <span className="text-xs font-semibold text-teal">{item.year}</span>
                  <h3 className="font-display font-semibold text-lg mt-1">{item.title}</h3>
                  <p className="text-sm text-muted mt-0.5">{item.place}</p>
                  <p className="text-sm text-muted mt-2 leading-relaxed max-w-xl">{item.desc}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
