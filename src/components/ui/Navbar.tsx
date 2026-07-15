import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "../../utils/cn";
import { scrollToSection } from "../../utils/scrollToSection";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import { Button } from "./Button";

const NAV_LINKS = [
  { id: "philosophy", label: "Philosophy" },
  { id: "tracks", label: "Tracks" },
  { id: "methodology", label: "Methodology" },
  { id: "faq", label: "FAQ" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useScrollSpy(NAV_LINKS.map((l) => l.id));

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY >= 80);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleNavClick(id: string) {
    setMobileOpen(false);
    scrollToSection(id);
  }

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-nav transition-colors duration-fast ease-standard",
        scrolled ? "bg-ivory-25/95 backdrop-blur border-b border-stone-300" : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-section items-center justify-between px-6 tablet:px-10 laptop:px-16 h-18" aria-label="Primary">
        <Link to="/" className="font-heading text-h4 text-forest-500 tracking-tight">
          Phronesis
        </Link>

        <ul className="hidden tablet:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleNavClick(link.id)}
                className={cn(
                  "text-body-sm transition-colors duration-fast ease-standard hover:text-copper-700",
                  activeId === link.id ? "text-forest-500 font-medium" : "text-ink-500"
                )}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden tablet:block">
          <Button variant="primary" size="sm" onClick={() => (window.location.href = "/apply")}>
            Apply Now
          </Button>
        </div>

        <button
          className="tablet:hidden text-ink-500"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((o) => !o)}
        >
          {mobileOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="tablet:hidden fixed inset-0 top-18 bg-forest-900 z-nav"
          >
            <motion.ul
              className="flex flex-col items-center justify-center gap-8 h-full"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
            >
              {NAV_LINKS.map((link) => (
                <motion.li
                  key={link.id}
                  variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
                >
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className="font-heading text-h2 text-ivory-25 hover:text-copper-400"
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
              <motion.li variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}>
                <Button variant="primary" size="lg" onClick={() => (window.location.href = "/apply")}>
                  Apply Now
                </Button>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
