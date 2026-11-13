import Image from "next/image";
import { phone, phoneHref } from "@/data/menu";

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg px-5 pt-12 pb-28 sm:px-8 sm:pb-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="relative h-14 w-14 overflow-hidden rounded-full bg-cream ring-1 ring-line">
            <Image
              src="/brand/logo.png"
              alt="Pacheco Rotisserie logo"
              fill
              sizes="56px"
              className="object-cover scale-[1.08]"
            />
          </span>
          <div>
            <p className="font-display text-xl font-extrabold tracking-tight">
              Pacheco Rotisserie
            </p>
            <p className="text-sm text-ink-soft">Peruvian Inspired Cuisine</p>
          </div>
        </div>

        <div className="text-sm text-ink-soft sm:text-right">
          <a
            href={phoneHref}
            className="font-semibold text-ink transition-colors hover:text-chili"
          >
            {phone}
          </a>
          <p className="mt-1">87 Oak St, Westerly · Open daily 11am–10pm</p>
          <a
            href="https://www.facebook.com/profile.php?id=61595449018351"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block font-semibold text-chili"
          >
            Follow on Facebook
          </a>
          <p className="mt-4 text-xs">© 2026 Pacheco Rotisserie</p>
        </div>
      </div>
    </footer>
  );
}
