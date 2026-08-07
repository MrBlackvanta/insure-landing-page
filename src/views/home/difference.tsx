import { differenceTitle, features } from "@/data";
import Image from "next/image";

export default function Difference() {
  return (
    <section
      aria-labelledby="difference-heading"
      className="px-6 pt-35 pb-35 lg:px-10 lg:pt-76.25 lg:pb-39.5"
    >
      <div className="mx-auto max-w-page">
        <div className="v-reveal">
          <div className="mx-auto h-px w-37.5 bg-mauve lg:mx-0" />

          <h2
            id="difference-heading"
            className="mt-10 text-center v-display text-very-dark-violet lg:mt-15.75 lg:text-left lg:text-display-lg"
          >
            {differenceTitle}
          </h2>
        </div>

        <ul className="mt-20 grid gap-14 md:grid-cols-2 md:gap-x-7.5 lg:mt-24 lg:grid-cols-3">
          {features.map((feature) => (
            <li
              key={feature.title}
              className="v-reveal text-center lg:text-left"
            >
              <Image
                src={feature.icon}
                alt=""
                className="mx-auto w-21.5 lg:mx-0"
              />

              <h3 className="mt-8 font-display text-title tracking-display text-very-dark-violet">
                {feature.title}
              </h3>

              <p className="mt-4">{feature.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
