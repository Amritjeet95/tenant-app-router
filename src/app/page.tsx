// Note1: Check notes for more detail on layout shifting solved by Image component
// This is the HomePage of the application and all other folders in the src folder with page.tsx will be considered as a routes
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>Home page</div>
      <div className={styles['hero-image-gradient']}></div>
      <Image
        src="/tenant-hero-image.png"
        width={1000}
        height={760}
        alt="hero-image"
        className="hero-image"
      />
    </main>
  );
}
