import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 left-0 right-0 z-50 px-4"
    >
      <nav
        className={`max-w-4xl mx-auto flex items-center justify-between rounded-full px-5 py-3 transition-all duration-300 ${
          scrolled ? "glass shadow-lg shadow-black/30" : "bg-transparent"
        }`}
      >
        <a
          href="#home"
          className="font-display font-bold text-lg tracking-tight"
        >
          K<span className="text-gradient">.</span>K
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="px-4 py-2 text-sm text-muted hover:text-text rounded-full hover:bg-white/5 transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}

          {/* Resume */}
          <li>
            <a
              href="/Krishani_Kumarasinghe CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm text-muted hover:text-text rounded-full hover:bg-white/5 transition-colors"
            >
              Resume
            </a>
          </li>
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-block text-sm font-semibold px-5 py-2 rounded-full bg-gradient-to-r from-pink to-gold text-bg hover:opacity-90 transition-opacity"
        >
          Say Hi
        </a>

        <button
          className="md:hidden text-2xl text-text"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden max-w-4xl mx-auto mt-2 glass rounded-3xl overflow-hidden"
          >
            {links.map((l) => (
              <li
                key={l.label}
                className="border-b border-white/5 last:border-b-0"
              >
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-6 py-4 text-sm text-text"
                >
                  {l.label}
                </a>
              </li>
            ))}

            {/* Resume - Mobile */}
            <li className="border-b border-white/5">
              <a
                href="/Krishani_Kumarasinghe CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="block px-6 py-4 text-sm text-text"
              >
                Resume
              </a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;