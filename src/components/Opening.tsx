import Image from "next/image";

export function Opening() {
  return (
    <section
      id="opening"
      className="relative overflow-hidden bg-bg px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative mx-auto w-full max-w-md overflow-hidden bg-cream lg:mx-0">
          <div className="relative aspect-[16/9]">
            <Image
              src="/brand/logo-cover.jpg"
              alt="Pacheco Rotisserie logo banner"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <p className="section-label">Grand Opening</p>
          <h2 className="font-display mt-4 text-[clamp(2.6rem,7vw,4.4rem)] font-extrabold leading-[0.95] tracking-[-0.035em]">
            Ribbon cutting
            <span className="block text-chili">November 16</span>
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-soft">
            Join us at 5:15pm for the official ribbon cutting — then stay for
            the chicken, the sauces, and the neighborhood welcome.
          </p>
          <dl className="mt-8 grid gap-5 border-t border-line pt-8 sm:grid-cols-2">
            <div>
              <dt className="text-xs font-bold tracking-[0.16em] text-chili uppercase">
                When
              </dt>
              <dd className="mt-2 font-display text-xl font-semibold">
                Nov 16, 2026
                <span className="mt-1 block text-base font-medium text-ink-soft">
                  5:15pm
                </span>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-bold tracking-[0.16em] text-chili uppercase">
                Where
              </dt>
              <dd className="mt-2 font-display text-xl font-semibold">
                87 Oak St
                <span className="mt-1 block text-base font-medium text-ink-soft">
                  Westerly, RI
                </span>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
