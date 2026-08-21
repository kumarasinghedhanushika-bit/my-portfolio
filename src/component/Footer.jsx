import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-5 md:px-8 py-8 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted">
          © {year} Krishani Kumarasinghe. Built with React, Tailwind CSS &amp; Framer Motion.
        </p>
        <div className="flex items-center gap-5 text-lg text-muted">
          <a href="https://github.com/kumarasinghedhanushika-bit" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-pink transition-colors">
            <FiGithub />
          </a>
          <a href="https://www.linkedin.com/in/krishani-kumarasinghe" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-teal transition-colors">
            <FiLinkedin />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-gold transition-colors">
            <FiInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
