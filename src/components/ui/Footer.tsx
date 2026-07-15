import { Link } from "react-router-dom";
import { Link2, AtSign, Mail } from "lucide-react";
import { Container } from "./Container";

const columns = [
  {
    title: "Program",
    links: [
      { label: "Machine Learning Track", href: "#tracks" },
      { label: "Generative AI Track", href: "#tracks" },
      { label: "Roadmaps", href: "#roadmaps" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Philosophy", href: "#philosophy" },
      { label: "FAQ", href: "#faq" },
      { label: "Apply", href: "/apply" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-forest-900 text-ivory-25">
      <Container className="py-14 tablet:py-20">
        <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 gap-10">
          <div>
            <p className="font-heading text-h3">Phronesis</p>
            <p className="mt-3 text-body-sm text-ivory-25/70 max-w-xs">
              Practical wisdom for builders. We teach how to think, not tools.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://linkedin.com"
                aria-label="Phronesis on LinkedIn"
                className="text-ivory-25/70 hover:text-copper-400 transition-colors duration-fast"
              >
                <Link2 size={20} strokeWidth={1.5} />
              </a>
              <a
                href="https://instagram.com"
                aria-label="Phronesis on Instagram"
                className="text-ivory-25/70 hover:text-copper-400 transition-colors duration-fast"
              >
                <AtSign size={20} strokeWidth={1.5} />
              </a>
              <a
                href="mailto:hello@phronesis.edu"
                aria-label="Email Phronesis"
                className="text-ivory-25/70 hover:text-copper-400 transition-colors duration-fast"
              >
                <Mail size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <p className="text-label uppercase tracking-wide text-ivory-25/50 mb-4">{col.title}</p>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("/") ? (
                      <Link to={link.href} className="text-body-sm text-ivory-25/80 hover:text-copper-400 transition-colors duration-fast">
                        {link.label}
                      </Link>
                    ) : (
                      <a href={link.href} className="text-body-sm text-ivory-25/80 hover:text-copper-400 transition-colors duration-fast">
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-ivory-25/15 flex flex-col tablet:flex-row justify-between gap-4 text-mono-detail text-ivory-25/50">
          <p>© {new Date().getFullYear()} Phronesis. All rights reserved.</p>
          <p>Φρόνησις — practical wisdom</p>
        </div>
      </Container>
    </footer>
  );
}
