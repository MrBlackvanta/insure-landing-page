import heroImage from "@/assets/images/image-intro.webp";
import { hero } from "@/data";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative z-10 bg-dark-violet lg:h-150 lg:px-10">
      <div
        aria-hidden="true"
        className="absolute -top-20 right-0 -z-10 hidden h-148.25 w-109 bg-[url('/bg-pattern-intro-right-desktop.svg')] lg:block"
      />
      <div
        aria-hidden="true"
        className="absolute top-103.5 left-0 -z-10 hidden h-126 w-48.75 bg-[url('/bg-pattern-intro-left-desktop.svg')] lg:block"
      />

      <div className="flex flex-col lg:mx-auto lg:grid lg:h-full lg:max-w-page lg:grid-cols-[33.75rem_1fr] lg:gap-7.5">
        <div className="relative px-6 pt-23.25 pb-23.25 lg:px-0 lg:pt-26.25 lg:pb-0">
          <div
            aria-hidden="true"
            className="absolute top-0 left-0 -z-10 h-41.25 w-42 bg-[url('/bg-pattern-intro-left-mobile.svg')] lg:hidden"
          />
          <div
            aria-hidden="true"
            className="absolute right-0 -bottom-44 -z-10 h-82.5 w-31 bg-[url('/bg-pattern-intro-right-mobile.svg')] lg:hidden"
          />

          <div className="mx-auto max-w-135 text-center text-white lg:mx-0 lg:text-left">
            <div className="hidden h-px w-37.5 bg-white lg:block" />

            <h1 className="mx-auto max-w-[6.9em] font-display text-display tracking-display max-[374px]:text-[2.5rem]/10 lg:mx-0 lg:mt-15.75 lg:text-display-lg">
              {hero.title}
            </h1>

            <p className="mt-4 lg:mt-7">{hero.description}</p>

            <a
              href={hero.cta.href}
              className="mt-8 v-btn h-10 w-36.5 v-btn-light v-label lg:mt-7.5"
            >
              {hero.cta.label}
            </a>
          </div>
        </div>

        <Image
          src={heroImage}
          alt="A family of four holding hands as they walk along a footpath."
          priority
          sizes="(min-width: 34rem) 540px, 100vw"
          className="order-first mx-auto w-full max-w-135 lg:order-0 lg:mt-26.25 lg:aspect-54/65 lg:max-w-none lg:self-start lg:object-cover"
        />
      </div>
    </section>
  );
}
