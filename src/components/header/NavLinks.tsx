import Link from "next/link";

const navLinks = [
  {
    href: "home",
  },
  {
    href: "about",
  },
  {
    href: "contact",
  },
];

export default function NavLinks() {
  return navLinks.map((link) => {
    return (
      <Link key={link.href} href={link.href}>
        {link.href}
      </Link>
    );
  });
}
