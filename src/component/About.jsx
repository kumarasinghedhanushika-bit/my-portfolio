import { motion } from "framer-motion";
import Reveal from "./Reveal.jsx";

const stats = [
  { value: "2", label: "Projects Built" },
  { value: "2+", label: "Years Learning" },
  { value: "5+", label: "Happy Collaborators" },
];

function About() {
  return (
    <section id="about" className="py-28 px-5 md:px-8 relative">
      <div className="absolute top-0 right-10 h-64 w-64 rounded-full bg-teal/10 blur-[100px]" />
      <div className="max-w-6xl mx-auto relative">
        <Reveal>
          <span className="text-sm font-semibold text-pink">About Me</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl mt-2 mb-14">
            The person behind <span className="text-gradient">the code</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-14 items-center">
          <Reveal delay={0.1}>
            <motion.div
              whileHover={{ rotate: -2, scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="relative w-full max-w-sm mx-auto md:mx-0"
            >
              <div className="aspect-[4/5] rounded-[2rem] glass flex items-center justify-center overflow-hidden">
                <img
                  src="/preview.png"
                  alt="Krishani Kumarasinghe"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute -bottom-5 -right-5 h-24 w-24 rounded-full bg-gradient-to-br from-pink to-gold opacity-90 blur-sm" />
            </motion.div>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-muted leading-relaxed text-lg">
              I'm Krishani — a developer who loves turning ideas into
              interactive, good-looking products. I'm currently pursuing my
              Higher National Diploma in Information Technology (HNDIT) at{" "}
              <span className="text-text font-medium">SLIATE</span>, where
              I've been building everything from small UI experiments to
              full-stack applications.
            </p>
            <p className="mt-4 text-muted leading-relaxed text-lg">
              I enjoy the whole process — sketching a layout, animating a
              button until it feels just right, and wiring up the backend
              that makes it all work. This portfolio is a playground for
              that: built with React, Tailwind CSS and Framer Motion.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="glass rounded-2xl px-4 py-6 text-center"
                >
                  <div className="font-display text-2xl font-bold text-gradient">{s.value}</div>
                  <div className="text-xs text-muted mt-1">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default About;
