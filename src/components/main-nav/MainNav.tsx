import styles from "./main-nav.module.css";
import NavLinks from "@/components/nav-links/NavLinks";

export default function MainNav() {
  return (
    <>
      <NavLinks />
      <form
        className={styles.form}
        action={async () => {
          "use server";
        }}
      >
        <span className="">Sign Out</span>
      </form>
    </>
  );
}
