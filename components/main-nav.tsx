import * as React from "react"
import Link from "next/link"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { AlignJustify } from "lucide-react"

interface MainNavProps {
  items?: NavItem[]
}

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Red Jamon",
    href: "/docs/primitives/alert-dialog",
    description:
      "Red, rose, maroon variation across your keyboard.",
  },
  {
    title: "Black on White (BoW)",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Botanical",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex gap-6 md:gap-10">
      <div className="flex md:hidden">
        <Sheet>
          <SheetTrigger><AlignJustify /></SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <div>
                <Link href="/" className="flex items-center space-x-2">
                  <Icons.logo className="size-6" />
                  <SheetTitle>{siteConfig.name}</SheetTitle>
                </Link>
              </div>
              <SheetDescription>


              </SheetDescription>
              {items?.map(item => {
                return (
                  <SheetItem items={item}/>
                )
              })}
              {/* <Link href={'/keycaps'}>Keycaps</Link>
              <Link href={'/keyboard'}>Keyboard</Link> */}
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>


      <Link href="/" className="flex items-center space-x-2">
        <Icons.logo className="size-6" />
        <span className="inline-block font-bold">{siteConfig.name}</span>
      </Link>
      <div className="hidden md:flex">
        <NavigationMenuDemo />
      </div>
    </div>
  )
}

const NavigationMenuDemo = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Prebuilts</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="from-muted/50 to-muted hover:bg-accent flex size-full select-none flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none focus:shadow-md"
                    href="/keyboards"
                  >
                    <Icons.logo className="size-6" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Search between our staff pick
                    </div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      Greets your new keyboard.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/keyboards/luminkey75v2" title="LUMINKEY75v2">
                Modern 75 percent keyboard and unique knob.
              </ListItem>
              <ListItem href="/keyboards/weikav-lucky80" title="Weikav Lucky80">
                Premium TKL with budget price.
              </ListItem>
              <ListItem href="/keyboards/cidoo-abm098" title="CIDOO ABM098">
                Unique 1800 keyboard, now integrated with VIA/QMK
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>PCB</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="from-muted/50 to-muted hover:bg-accent flex size-full select-none flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none focus:shadow-md"
                    href="/keyboard"
                  >
                    <Icons.logo className="size-6" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Build your own
                    </div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      Maximize your experience
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/pcb/venom60" title="VENOM 60 HE">
                Modern 75 percent keyboard and unique knob.
              </ListItem>
              <ListItem href="/pcb/galateatkl" title="Galatea TKL F12/F13">
                Many keycaps profile with one board.
              </ListItem>
              {/* <ListItem href="/keyboard/cidoo-abm098" title="CIDOO ABM098">
                Unique 1800 keyboard, now integrated with VIA/QMK
              </ListItem> */}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* <NavigationMenuItem>
          <NavigationMenuTrigger>Keycaps</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem title={'Keycaps'} href={'/keycaps'} className="from-muted/50 to-muted bg-gradient-to-b">
                Modify your keyboard with our varied keycaps; ABS, PBT, and more.
              </ListItem>
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}

            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem> */}
        {/* <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem> */}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

const SheetItem = ({ items }: { items: NavItem }) => {
  return (
    <>
      <Link href={items.href || '/'}>
        <div className="focus-visible:ring-ring hover:bg-accent hover:text-accent-foreground inline-flex h-9 w-full items-center justify-start gap-2 whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">
          {items.title}
        </div>
      </Link>
    </>
  )
}