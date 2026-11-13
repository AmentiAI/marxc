import Image from "next/image";

const shots = [
  {
    src: "/brand/photo-2.jpg",
    alt: "Rotisserie chicken plate from Pacheco Rotisserie",
    caption: "Rotisserie chicken",
    detail: "Crispy skin, rice, salad, and aji.",
  },
  {
    src: "/brand/photo-1.jpg",
    alt: "GIGIs Peruvian ceviche from Pacheco Rotisserie",
    caption: "GIGIs ceviche",
    detail: "White fish, choclo, sweet potato, cancha.",
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="bg-white px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-label">The plates</p>
            <h2 className="font-display mt-4 text-[clamp(2.4rem,6vw,4rem)] font-extrabold leading-[1] tracking-[-0.03em]">
              Straight off the spit
            </h2>
          </div>
          <a
            href="https://www.facebook.com/profile.php?id=61595449018351"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-chili underline-offset-4 hover:underline"
          >
            More on Facebook
          </a>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {shots.map((shot) => (
            <figure key={shot.src}>
              <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100">
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-4">
                <p className="font-display text-xl font-bold">{shot.caption}</p>
                <p className="mt-1 text-sm text-ink-soft">{shot.detail}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}