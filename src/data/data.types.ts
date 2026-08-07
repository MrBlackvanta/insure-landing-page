import type { StaticImageData } from "next/image";

export type Link = {
  label: string;
  href: string;
};

export type NavLink = Link;

export type Icon = React.ComponentType<React.SVGProps<SVGSVGElement>>;

export type SectionIntro = {
  title: string;
  description: string;
};

export type HeroContent = SectionIntro & {
  cta: Link;
};

export type CtaContent = {
  title: string;
  cta: Link;
};

export type Feature = SectionIntro & {
  icon: StaticImageData;
};

export type FooterColumn = {
  title: string;
  links: Link[];
};

export type SocialLink = Link & {
  icon: Icon;
};
