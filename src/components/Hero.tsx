import Image from "next/image";
import { address, hours, phone, phoneHref } from "@/data/menu";

const facts = [
  { label: "Hours", value: hours },
  { label: "Address", value: address },
  { label: "Order", value: phone, href: phoneHref },
];

export function Hero() {
  return (
    <section id="top" className="bg-white pt-[4.25rem] sm:pt-[4.75rem]">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-8 sm:px-8 sm:py-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:py-16">
        <div className="order-2 lg:order-1">
          <p className="section-label">Westerly, Rhode Island</p>
          <h1 className="font-display mt-4 text-[clamp(3.1rem,7.4vw,5.5rem)] font-extrabold leading-[0.9] tracking-[-0.045em] text-ink">
            Fire-kissed
            <span className="block">rotisserie.</span>
            <span className="block text-chili">Peruvian soul.</span>
          </h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-soft">
            Half chickens off the spit, causas, and ceviche — plated the way
            the neighborhood already knows them.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#menu" className="cta-primary">
              View Menu
            </a>
            <a href={phoneHref} className="cta-secondary">
              Call {phone}
            </a>
          </div>

          <dl className="mt-10 grid gap-6 border-t border-black/10 pt-8 sm:grid-cols-3">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-[0.68rem] font-bold tracking-[0.16em] text-chili uppercase">
                  {fact.label}
                </dt>
                <dd className="mt-2 text-sm font-semibold leading-snug text-ink">
                  {fact.href ? (
                    <a href={fact.href} className="hover:text-chili">
                      {fact.value}
                    </a>
                  ) : (
                    fact.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative mx-auto aspect-square w-full max-w-[34rem] overflow-hidden bg-neutral-100 shadow-[0_30px_80px_-40px_rgba(26,18,12,0.55)] lg:max-w-none">
            <Image
              src="/brand/hero-clean.jpg"
              alt="Pacheco rotisserie chicken with rice, salad, and aji sauce"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 46vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
