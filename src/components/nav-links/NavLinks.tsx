"use client";

import Link from "next/link";
import styles from "./nav-links.module.css";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "Home", href: "/home" },
  {
    name: "Create",
    href: "/create",
  },
  { name: "Contact", href: "/contact" },
];

export default function NavLinks() {
  return (
    <>
      {links.map((link) => {
        return (
          <Link key={link.name} href={link.href} className={styles.linkItem}>
            {link.name}
          </Link>
        );
      })}
    </>
  );
}
