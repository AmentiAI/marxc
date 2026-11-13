import Image from "next/image";
import { address, hours, phone, phoneHref, website } from "@/data/menu";

export function Visit() {
  return (
    <section id="visit" className="bg-bg-deep px-5 py-14 sm:px-8 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="section-label">Visit</p>
        <span className="reveal-line mt-4" />
        <h2 className="font-display mt-5 text-[clamp(2.4rem,6vw,4rem)] font-extrabold leading-[1] tracking-[-0.03em]">
          Find us on Oak Street
        </h2>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="grid gap-10 border-t border-line pt-10 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              <div>
                <h3 className="text-xs font-bold tracking-[0.16em] text-chili uppercase">
                  Address
                </h3>
                <p className="mt-3 font-display text-2xl font-semibold leading-snug">
                  {address}
                </p>
                <p className="mt-2 text-sm text-ink-soft">
                  Across from Ritacco&apos;s Market · Oak &amp; Marion
                </p>
              </div>
              <div>
                <h3 className="text-xs font-bold tracking-[0.16em] text-chili uppercase">
                  Hours
                </h3>
                <p className="mt-3 font-display text-2xl font-semibold leading-snug">
                  {hours}
                </p>
              </div>
              <div>
                <h3 className="text-xs font-bold tracking-[0.16em] text-chili uppercase">
                  Order
                </h3>
                <p className="mt-3 font-display text-2xl font-semibold leading-snug">
                  <a
                    href={phoneHref}
                    className="transition-colors hover:text-chili"
                  >
                    {phone}
                  </a>
                </p>
                <p className="mt-2 text-sm text-ink-soft">{website}</p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap">
              <a href={phoneHref} className="cta-primary inline-flex w-full sm:w-auto">
                Call {phone}
              </a>
              <a
                href="https://maps.google.com/?q=87+Oak+St+Westerly+RI"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-secondary inline-flex w-full sm:w-auto"
              >
                Get Directions
              </a>
            </div>

            <dl className="mt-10 grid gap-4 border-t border-line pt-8 sm:grid-cols-2">
              <div>
                <dt className="text-xs font-bold tracking-[0.14em] text-chili uppercase">
                  Street parking
                </dt>
                <dd className="mt-2 text-ink-soft">
                  Green curb zones on Oak &amp; Marion.
                </dd>
              </div>
              <div>
                <dt className="text-xs font-bold tracking-[0.14em] text-chili uppercase">
                  Pickup
                </dt>
                <dd className="mt-2 text-ink-soft">
                  Orange curb — 15 minute pickup only.
                </dd>
              </div>
            </dl>
          </div>

          <div className="relative overflow-hidden border border-line bg-cream">
            <div className="relative aspect-[16/10]">
              <Image
                src="/brand/photo-3.jpg"
                alt="Parking map for Pacheco Rotisserie at 87 Oak Street"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-left"
              />
            </div>
            <p className="px-4 py-3 text-sm text-ink-soft">
              Parking guide from the{" "}
              <a
                href="https://www.facebook.com/profile.php?id=61595449018351"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-chili"
              >
                Facebook page
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
