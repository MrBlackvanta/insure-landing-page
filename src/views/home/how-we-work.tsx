import { howWeWork } from "@/data";

export default function HowWeWork() {
  return (
    <section
      id="how-we-work"
      aria-labelledby="how-we-work-heading"
      className="px-6 pb-35 lg:px-10 lg:pb-37.5"
    >
      <div className="mx-auto max-w-page">
        <div className="relative isolate v-reveal overflow-hidden bg-dark-violet px-6 py-18 text-center lg:flex lg:h-62.5 lg:items-center lg:justify-between lg:px-20 lg:py-0 lg:text-left">
          <div
            aria-hidden="true"
            className="absolute right-0 bottom-5.25 -z-10 h-79.25 w-44 bg-[url('/bg-pattern-how-we-work-mobile.svg')] lg:hidden"
          />
          <div
            aria-hidden="true"
            className="absolute inset-y-0 right-0 -z-10 hidden w-108.5 bg-[url('/bg-pattern-how-we-work-desktop.svg')] lg:block"
          />

          <h2
            id="how-we-work-heading"
            className="mx-auto max-w-[8.59em] v-heading text-white lg:mx-0 lg:text-heading-lg"
          >
            {howWeWork.title}
          </h2>

          <a
            href={howWeWork.cta.href}
            className="mt-10 v-btn h-10 w-40 shrink-0 v-btn-light v-label lg:mt-0"
          >
            {howWeWork.cta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
