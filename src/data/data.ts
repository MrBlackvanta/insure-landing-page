import affordablePrices from "@/assets/images/icon-affordable-prices.svg";
import peopleFirst from "@/assets/images/icon-people-first.svg";
import snappyProcess from "@/assets/images/icon-snappy-process.svg";
import {
  FacebookIcon,
  InstagramIcon,
  PinterestIcon,
  TwitterIcon,
} from "@/components/icons";
import type {
  CtaContent,
  Feature,
  FooterColumn,
  HeroContent,
  NavLink,
  SocialLink,
} from "./data.types";

export const navLinks: NavLink[] = [
  { label: "How we work", href: "#how-we-work" },
  { label: "Blog", href: "#" },
  { label: "Account", href: "#" },
];

export const headerCta = { label: "View plans", href: "#" };

export const hero: HeroContent = {
  title: "Humanizing your insurance.",
  description:
    "Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that’s right for you. Ensure you and your loved ones are protected.",
  cta: { label: "View plans", href: "#" },
};

export const differenceTitle = "We’re different";

export const features: Feature[] = [
  {
    icon: snappyProcess,
    title: "Snappy Process",
    description:
      "Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.",
  },
  {
    icon: affordablePrices,
    title: "Affordable Prices",
    description:
      "We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.",
  },
  {
    icon: peopleFirst,
    title: "People First",
    description:
      "Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it.",
  },
];

export const howWeWork: CtaContent = {
  title: "Find out more about how we work",
  cta: { label: "How we work", href: "#" },
};

export const footerColumns: FooterColumn[] = [
  {
    title: "Our company",
    links: [
      { label: "How we work", href: "#how-we-work" },
      { label: "Why Insure?", href: "#" },
      { label: "View plans", href: "#" },
      { label: "Reviews", href: "#" },
    ],
  },
  {
    title: "Help me",
    links: [
      { label: "FAQ", href: "#" },
      { label: "Terms of use", href: "#" },
      { label: "Privacy policy", href: "#" },
      { label: "Cookies", href: "#" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Sales", href: "#" },
      { label: "Support", href: "#" },
      { label: "Live chat", href: "#" },
    ],
  },
  {
    title: "Others",
    links: [
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
      { label: "Licenses", href: "#" },
    ],
  },
];

export const socialLinks: SocialLink[] = [
  { label: "Insure on Facebook", href: "#", icon: FacebookIcon },
  { label: "Insure on Twitter", href: "#", icon: TwitterIcon },
  { label: "Insure on Pinterest", href: "#", icon: PinterestIcon },
  { label: "Insure on Instagram", href: "#", icon: InstagramIcon },
];
