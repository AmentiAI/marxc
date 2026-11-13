import Image from "next/image";
import { menu } from "@/data/menu";

export function MenuSection() {
  return (
    <section id="menu" className="relative bg-bg px-5 py-14 sm:px-8 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="section-label">The Menu</p>
            <span className="reveal-line mt-4" />
            <h2 className="font-display mt-5 text-[clamp(2.4rem,6vw,4rem)] font-extrabold leading-[1] tracking-[-0.03em]">
              From the spit to the plate
            </h2>
            <p className="mt-4 max-w-lg text-lg text-ink-soft">
              Anticuchos, causas, ceviche, and the rotisserie chicken that keeps
              Westerly coming back.
            </p>
          </div>
          <div className="relative hidden w-full max-w-xs overflow-hidden lg:block">
            <div className="relative aspect-square">
              <Image
                src="/brand/dish-ceviche.jpg"
                alt="GIGIs Peruvian ceviche"
                fill
                sizes="320px"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-10 sm:mt-14 lg:grid-cols-2 lg:gap-x-16">
          {menu.map((section) => (
            <div key={section.title}>
              <h3 className="font-display text-2xl font-bold tracking-tight text-chili sm:text-3xl">
                {section.title}
              </h3>
              <ul className="mt-4">
                {section.items.map((item) => (
                  <li key={item.name} className="menu-row py-4">
                    <div className="flex items-baseline justify-between gap-3">
                      <h4 className="min-w-0 font-display text-lg font-semibold tracking-tight sm:text-xl">
                        {item.name}
                      </h4>
                      <span className="shrink-0 font-display text-lg font-bold whitespace-nowrap text-chili">
                        ${item.price}
                      </span>
                    </div>
                    {item.description ? (
                      <p className="mt-1 max-w-xl text-sm leading-relaxed text-ink-soft sm:text-base">
                        {item.description}
                      </p>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
