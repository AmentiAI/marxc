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
      <div className="mx-auto grid max-w-6xl items-center gap-6 px-5 py-5 sm:gap-8 sm:px-8 sm:py-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:py-16">
        <div className="order-2 lg:order-1">
          <p className="section-label">Westerly, Rhode Island</p>
          <h1 className="font-display mt-3 text-[clamp(2.6rem,11vw,5.5rem)] font-extrabold leading-[0.92] tracking-[-0.045em] text-ink sm:mt-4">
            Fire-kissed
            <span className="block">rotisserie.</span>
            <span className="block text-chili">Peruvian soul.</span>
          </h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-soft">
            Half chickens off the spit, causas, and ceviche — plated the way
            the neighborhood already knows them.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
            <a href="#menu" className="cta-primary inline-flex w-full sm:w-auto">
              View Menu
            </a>
            <a href={phoneHref} className="cta-secondary inline-flex w-full sm:w-auto">
              Call {phone}
            </a>
          </div>

          <dl className="mt-8 grid gap-5 border-t border-black/10 pt-6 sm:mt-10 sm:grid-cols-3 sm:pt-8">
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

        <div className="order-1 -mx-5 sm:mx-0 lg:order-2">
          <div className="relative aspect-[3/2] w-full overflow-hidden bg-neutral-100 sm:mx-auto sm:aspect-square sm:max-w-[34rem] sm:shadow-[0_30px_80px_-40px_rgba(26,18,12,0.55)] lg:max-w-none">
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
