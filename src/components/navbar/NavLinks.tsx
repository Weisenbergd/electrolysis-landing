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

export default function NavLinks({ className }: { className?: string }) {
  return navLinks.map((link) => {
    return (
      <Link className={`${className}`} key={link.href} href={link.href}>
        {link.href}
      </Link>
    );
  });
}
