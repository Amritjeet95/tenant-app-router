// Note1: Check notes for more detail on layout shifting solved by Image component
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>Home page</div>
      <Image
        src="/tenant-hero-image.png"
        width={1000}
        height={760}
        alt="hero-image"
      />
    </main>
  );
}
