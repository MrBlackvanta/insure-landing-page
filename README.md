# Insure landing page

My solution to the [Insure landing page](https://www.frontendmentor.io/challenges/insure-landing-page-uTU68JV8)
challenge on Frontend Mentor.

![](./screenshot.webp)

- Live: https://insure-landing-page.abdelrhman-ahmed8881.workers.dev
- Code: https://github.com/MrBlackvanta/insure-landing-page

## Built with

- Next.js 16, App Router
- React 19 and TypeScript
- Tailwind CSS v4

## Notes

**One colour changed.** Dark Grayish Violet carries the nav links, all three feature
paragraphs, the footer column headings and the social icons, and it fails AA on both
backdrops it sits on. `#837D88` becomes `#77717C`, which is the lightest value that clears
4.5:1 on both. The footer's off-white rather than pure white is what decides the value.

The social icons would have passed as designed, since UI graphics only need 3:1, but they
keep the same token. They sit fifty pixels from the column headings, and two greys that
close together would read as a mistake.

**Nothing else moved.** The decorative pieces fail on paper and ship as drawn, because none
of them carry information: the feature icons (the `<h3>` beneath each carries the meaning),
the mauve rule, the footer divider and the curve patterns. Where a curve crosses white text
it's a 1px hairline, not a background. Repainting the palette so white cleared 4.5:1 against
it would mean losing the curves, which is a much bigger loss than the theoretical one it
fixes.

**Five places where the design disagrees with itself**, and what I did:

- The desktop logo sits 3px off the content edge every other element in that row aligns to.
  It ships at the content edge.
- The header centres the logo in the bar but nudges the CTA and nav labels a pixel below
  centre. Everything is centred.
- The two nav gaps are 25px and 26px. One gap can't be both, so 26 ships.
- The CTA box has 81px of padding on one side and 80 on the other. Both are 80.
- The desktop footer says VIEW PLANS where the mobile frame says CHECK PRICE. VIEW PLANS
  ships at both, matching the header CTA.

Colours come from the design file rather than the style guide, which rounds four of five a
point off. The file also uses four colours the guide never lists.

The footer is about 22px taller than the mock because it carries the attribution line,
which the mock has no room for.

**The hero photo isn't the one supplied with the challenge.** It's a different photograph
in the same crop and aspect ratio, so the layout is unaffected but the hero won't
pixel-match the design JPGs.

## Author

- [LinkedIn](https://www.linkedin.com/in/abdelrhman-vanta/)
- [UpWork](https://www.upwork.com/freelancers/mrblackvanta)
- [Frontend Mentor](https://www.frontendmentor.io/profile/MrBlackvanta)
