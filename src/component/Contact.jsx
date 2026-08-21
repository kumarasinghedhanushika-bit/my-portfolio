import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";
import Reveal from "./Reveal.jsx";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Demo only — connect this to a backend or a service like
    // Formspree / EmailJS to actually deliver messages.
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-28 px-5 md:px-8 relative">
      <div className="absolute top-10 right-1/4 h-72 w-72 rounded-full bg-gold/10 blur-[100px]" />
      <div className="max-w-6xl mx-auto relative">
        <Reveal>
          <span className="text-sm font-semibold text-teal">Contact</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl mt-2 mb-14">
            Let's build <span className="text-gradient">something</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-14">
          <Reveal delay={0.1} className="space-y-6">
            <p className="text-muted leading-relaxed text-lg">
              Got an idea, an opportunity, or just want to chat about
              design and code? I'd love to hear from you.
            </p>
            {[
              { icon: FiMail, text: "krishanikumarasinghe@gmail.com" },
              { icon: FiPhone, text: "+94 742892064" },
              { icon: FiMapPin, text: "Sri Lanka,western province" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3 text-sm glass rounded-2xl px-4 py-3">
                <Icon className="text-pink shrink-0" />
                <span>{text}</span>
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="text-xs text-muted">Name</label>
                  <input
                    id="name" name="name" type="text" required
                    value={form.name} onChange={handleChange}
                    placeholder="Your name"
                    className="mt-1 w-full glass rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-pink/50 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-xs text-muted">Email</label>
                  <input
                    id="email" name="email" type="email" required
                    value={form.email} onChange={handleChange}
                    placeholder="you@example.com"
                    className="mt-1 w-full glass rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-pink/50 transition-all"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="text-xs text-muted">Message</label>
                <textarea
                  id="message" name="message" required rows={5}
                  value={form.message} onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="mt-1 w-full glass rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-pink/50 transition-all resize-none"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-pink via-gold to-teal text-bg font-semibold text-sm"
              >
                <FiSend /> Send Message
              </motion.button>
              {sent && (
                <p className="text-xs text-teal">
                  ✓ Message queued — connect a backend to deliver it for real.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Contact;
