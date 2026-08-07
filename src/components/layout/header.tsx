import { LogoIcon } from "@/components/icons";
import { headerCta, navLinks } from "@/data";
import Link from "next/link";
import MobileMenu from "./mobile-menu";

export default function Header() {
  return (
    <header className="relative z-20 bg-white px-6 lg:px-10">
      <div className="mx-auto flex h-20 max-w-page items-center justify-between">
        <Link href="/" className="text-very-dark-violet v-focus-ring">
          <LogoIcon className="w-28" />
        </Link>

        <div className="hidden items-center gap-8.25 md:flex">
          <nav aria-label="Main">
            <ul className="flex gap-6.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="v-nav-link v-focus-ring">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href={headerCta.href}
            className="v-btn h-10 w-36.5 v-btn-dark v-label v-focus-ring"
          >
            {headerCta.label}
          </a>
        </div>

        <MobileMenu links={navLinks} cta={headerCta} />
      </div>
    </header>
  );
}
