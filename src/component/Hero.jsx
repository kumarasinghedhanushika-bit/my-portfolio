import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiInstagram, FiArrowDown } from "react-icons/fi";
const roles = ["fullstack developer", "React ", "UI/UX Enthusiast", "Problem Solver"];

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-5 md:px-8 pt-28 pb-16 overflow-hidden"
    >
      {/* animated gradient blobs - signature element */}
      <div className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-pink/30 blur-[100px] animate-blob" />
      <div className="absolute top-40 right-0 h-80 w-80 rounded-full bg-teal/25 blur-[100px] animate-blob" style={{ animationDelay: "3s" }} />
      <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-gold/20 blur-[100px] animate-blob" style={{ animationDelay: "6s" }} />

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-[1.1fr_0.9fr] gap-12 items-center relative">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-sm text-muted glass px-4 py-1.5 rounded-full mb-6"
          >
            <span className="h-2 w-2 rounded-full bg-teal animate-pulse" />
            Available for new opportunities
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl leading-[1.05]"
          >
            Hi, I'm{" "}
            <span className="text-gradient">Krishani Kumarasinghe</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-5 flex flex-wrap gap-2"
          >
            {roles.map((role) => (
              <span
                key={role}
                className="text-sm font-medium px-4 py-1.5 rounded-full glass text-muted"
              >
                {role}
              </span>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-6 text-muted max-w-md leading-relaxed"
          >
            I craft playful, polished web experiences — blending clean code
            with bold, expressive design. Let's build something people
            actually enjoy using.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="px-7 py-3 rounded-full bg-gradient-to-r from-pink via-gold to-teal bg-[length:200%_auto] hover:bg-right transition-all duration-500 text-bg font-semibold text-sm"
            >
              See My Work
            </a>
            <a
              href="#contact"
              className="px-7 py-3 rounded-full glass text-text font-semibold text-sm hover:bg-white/10 transition-colors"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-9 flex items-center gap-5 text-xl text-muted"
          >
            <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-pink transition-colors">
              <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/dhanushika-kumarasinghe" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-teal transition-colors">
              <FiLinkedin />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-gold transition-colors">
              <FiInstagram />
            </a>
          </motion.div>
        </div>

        {/* Floating avatar card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto md:mx-0 animate-floaty"
        >
          <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-[2.5rem] glass overflow-hidden flex items-center justify-center">
            <span className="font-display text-muted text-sm px-6 text-center">
              your-photo.jpg
              <br />
              <span className="text-xs opacity-60">(swap this for a real photo)</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent" />
          </div>
          <div className="absolute -top-6 -right-6 h-16 w-16 rounded-2xl bg-gradient-to-br from-pink to-gold animate-spinSlow" />
          <div className="absolute -bottom-5 -left-5 h-14 w-14 rounded-full glass flex items-center justify-center font-display text-xs text-teal">
            HNDIT
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 items-center gap-2 text-muted text-xs"
      >
        Scroll <FiArrowDown />
      </motion.a>
    </section>
  );
}

export default Hero;
