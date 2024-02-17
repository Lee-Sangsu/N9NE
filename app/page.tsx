import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <Header /> */}

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/full-icon.svg"
          alt="Nine Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <Footer />
    </main>
  );
}
