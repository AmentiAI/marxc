"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { phone, phoneHref } from "@/data/menu";

const links = [
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
  { href: "#opening", label: "Opening" },
  { href: "#visit", label: "Visit" },
];

const facebookUrl = "https://www.facebook.com/profile.php?id=61595449018351";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white">
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center gap-4 px-4 sm:h-[4.75rem] sm:px-6 lg:px-8">
        <a
          href="#top"
          className="flex min-w-0 items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full bg-white ring-1 ring-black/10 sm:h-12 sm:w-12">
            <Image
              src="/brand/logo.png"
              alt="Pacheco Rotisserie logo"
              fill
              sizes="48px"
              className="object-cover scale-[1.08]"
              priority
            />
          </span>
          <span className="min-w-0">
            <span className="font-display block truncate text-[0.95rem] font-extrabold leading-none tracking-tight text-ink sm:text-[1.05rem]">
              Pacheco Rotisserie
            </span>
            <span className="mt-1 block truncate text-[0.62rem] font-semibold tracking-[0.14em] text-ink-soft uppercase">
              Peruvian Inspired Cuisine
            </span>
          </span>
        </a>

        <nav className="ml-auto hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-sm px-3 py-2 text-sm font-semibold text-ink-soft transition-colors hover:bg-neutral-100 hover:text-chili"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-3">
          <a
            href={phoneHref}
            className="hidden items-center text-sm font-semibold text-ink-soft transition-colors hover:text-chili xl:inline-flex"
          >
            {phone}
          </a>
          <a
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hidden h-10 w-10 items-center justify-center rounded-sm text-ink-soft transition-colors hover:bg-neutral-100 hover:text-chili sm:inline-flex"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
              <path d="M14 8h3V4h-3c-2.8 0-5 2.2-5 5v2H7v4h2v7h4v-7h3l1-4h-4V9c0-.6.4-1 1-1z" />
            </svg>
          </a>
          <a href={phoneHref} className="cta-primary !px-3.5 !py-2.5 text-sm sm:!px-4">
            Order Now
          </a>
          <button
            type="button"
            aria-expanded={open}
            aria-label="Toggle menu"
            className="relative flex h-10 w-10 items-center justify-center text-ink lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`absolute h-0.5 w-5 bg-current transition-transform ${
                open ? "translate-y-0 rotate-45" : "-translate-y-1.5"
              }`}
            />
            <span
              className={`absolute h-0.5 w-5 bg-current transition-opacity ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute h-0.5 w-5 bg-current transition-transform ${
                open ? "translate-y-0 -rotate-45" : "translate-y-1.5"
              }`}
            />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-black/10 bg-white lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-5 sm:px-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-display rounded-sm px-2 py-3 text-2xl font-bold text-ink"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={phoneHref}
              className="mt-2 px-2 text-base font-semibold text-ink-soft"
              onClick={() => setOpen(false)}
            >
              {phone}
            </a>
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 text-base font-semibold text-chili"
              onClick={() => setOpen(false)}
            >
              Facebook
            </a>
            <a
              href={phoneHref}
              className="cta-primary mt-4 w-full"
              onClick={() => setOpen(false)}
            >
              Call to Order
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
