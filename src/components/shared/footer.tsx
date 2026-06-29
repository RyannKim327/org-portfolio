import Image from "next/image";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "Pillars", href: "#pillars" },
  { label: "Tracks", href: "#tracks" },
  { label: "Projects", href: "#projects" },
  { label: "Events", href: "#events" },
  { label: "FAQ", href: "#faq" },
  { label: "Connect", href: "#connect" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-black">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <Image
                src="/images/logo.png"
                alt="GZ Logo"
                width={28}
                height={28}
                className="h-7 w-7 shrink-0"
              />
              <div className="flex items-center gap-0.5">
                <span className="text-xs font-bold tracking-tight text-white">
                  GROUND{" "}
                </span>
                <span className="text-xs font-bold tracking-tight text-brand">
                  ZERO
                </span>
              </div>
            </div>
            <p className="text-xs text-foreground-secondary leading-relaxed max-w-xs">
              Code Beyond Limits, Build Beyond Boundaries. A community for
              developers, designers, and tech enthusiasts.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-[10px] font-semibold text-white uppercase tracking-widest">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-1.5">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs text-foreground-secondary hover:text-white transition-colors w-fit"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="text-[10px] font-semibold text-white uppercase tracking-widest">
              Get in Touch
            </h4>
            <div className="space-y-1.5">
              <a
                href="mailto:info@groundzero.tech"
                className="block text-xs text-foreground-secondary hover:text-brand transition-colors"
              >
                info@groundzero.tech
              </a>
              <a
                href="https://discord.gg/4H2v6UwjmY"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xs text-foreground-secondary hover:text-brand transition-colors"
              >
                Discord Community
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-white/[0.06]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-[10px] text-foreground-muted">
              &copy; {new Date().getFullYear()} Ground Zero Community. All rights
              reserved.
            </p>
            <p className="text-[10px] text-foreground-muted">
              Built with 💚 by the{" "}
              <a
                href="https://github.com/GroundZero-Community"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                community
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
