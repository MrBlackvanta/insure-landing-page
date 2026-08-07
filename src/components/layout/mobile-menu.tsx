"use client";

import { CloseIcon, MenuIcon } from "@/components/icons";
import type { Link, NavLink } from "@/data";
import { cn } from "@/lib";
import { useEffect, useRef, useState } from "react";

type MobileMenuProps = {
  links: NavLink[];
  cta: Link;
};

export default function MobileMenu({ links, cta }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const close = () => {
      setOpen(false);
      toggleRef.current?.focus();
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    const onResize = () => {
      if (window.matchMedia("(min-width: 48rem)").matches) setOpen(false);
    };
    const behindOverlay = document.querySelectorAll("main, footer");

    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    document.body.classList.add("v-scroll-lock");
    behindOverlay.forEach((element) => element.setAttribute("inert", ""));

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
      document.body.classList.remove("v-scroll-lock");
      behindOverlay.forEach((element) => element.removeAttribute("inert"));
    };
  }, [open]);

  return (
    <>
      <button
        ref={toggleRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen(!open)}
        className="flex size-8 items-center justify-center border-[1.5px] border-very-dark-violet text-very-dark-violet v-focus-ring md:hidden"
      >
        {open ? <CloseIcon className="w-3" /> : <MenuIcon className="w-4" />}
      </button>

      <div
        id="mobile-menu"
        inert={!open}
        className={cn(
          "fixed inset-x-0 top-20 bottom-0 hidden bg-very-dark-violet bg-[url('/bg-pattern-mobile-nav.svg')] bg-size-[100%_auto] bg-bottom bg-no-repeat px-6 pt-10 opacity-0 transition-[opacity,display] transition-discrete duration-200 motion-reduce:transition-none md:hidden starting:opacity-0",
          { "block opacity-100": open },
        )}
      >
        <nav aria-label="Main">
          <ul className="flex flex-col gap-6">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="v-menu-link"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={cta.href}
                onClick={() => setOpen(false)}
                className="v-btn h-14 w-full v-btn-light v-menu-label"
              >
                {cta.label}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
