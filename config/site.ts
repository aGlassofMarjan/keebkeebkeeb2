export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "_WBoard",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Keycaps",
      href: "/keycaps",
    },
    {
      title: "Keyboards",
      href: "/keyboards",
    },
    {
      title: "About Us",
      href: "/about-us",
    },
  ],
  links: {
    whatsapp: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "/keyboards",
  },
}
