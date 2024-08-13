import styles from "./main-nav.module.css";
import NavLinks from "@/app/components/nav-links/NavLinks";

export default function MainNav() {
  return (
    <nav className={styles.mainNav}>
      <div className={styles.navLinks}>
        <NavLinks />
      </div>
      <form
        className={styles.form}
        action={async () => {
          "use server";
        }}
      >
        <span className="">Sign Out</span>
      </form>
    </nav>
  );
}
