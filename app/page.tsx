import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Footer from "@/components/footer";
import ConsultBTN from "@/components/Button/consult_button";

export default function Home() {
  return (
    <main className={styles.main}>

      <div className={styles.index_container}>
        <h1>Make Your Brand Memorable</h1>
        <h2>Express your brand identity to connect with your customers</h2>
        <ConsultBTN />
        {/* <Image
          className={styles.logo}
          src="/full-icon.svg"
          alt="Nine Logo"
          width={180}
          height={37}
          priority
        /> */}
      </div>

      <Footer />
    </main>
  );
}
