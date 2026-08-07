import { LogoIcon } from "@/components/icons";
import { footerColumns, socialLinks } from "@/data";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-very-light-gray px-6 pt-22 pb-0.5 lg:px-10 lg:pt-16">
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 -z-10 h-43.25 w-93.5 bg-[url('/bg-pattern-footer-mobile.svg')] md:hidden"
      />
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 -z-10 hidden h-57.75 w-132 bg-[url('/bg-pattern-footer-desktop.svg')] md:block"
      />

      <div className="mx-auto max-w-page">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between lg:gap-0">
          <Link href="/" className="text-very-dark-violet v-focus-ring">
            <LogoIcon className="w-28" />
          </Link>

          <ul className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  aria-label={social.label}
                  className="v-social-link"
                >
                  <social.icon className="w-6" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 h-px bg-divider lg:mt-8.5" />

        <nav
          aria-label="Footer"
          className="mt-10 grid gap-10 text-center md:grid-cols-4 md:gap-x-7.5 lg:mt-11.75 lg:text-left"
        >
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h2 className="v-label text-dark-grayish-violet">
                {column.title}
              </h2>

              <ul className="mt-9 flex flex-col gap-4 text-label">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="v-footer-link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <p className="mt-22 text-center text-sm lg:mt-16">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noopener noreferrer"
          className="v-credit-link"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://www.linkedin.com/in/abdelrhman-vanta/"
          target="_blank"
          rel="noopener noreferrer"
          className="v-credit-link"
        >
          Abdelrhman Abdelaal
        </a>
        .
      </p>
    </footer>
  );
}
