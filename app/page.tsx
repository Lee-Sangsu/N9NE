import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Footer from "@/components/footer";
import ConsultBTN from "@/components/Button/consult_button";

export default function Home() {
  return (
    <main className={styles.main}>
        <Image
          className={styles.star}
          src="/images/star.svg"
          alt="Nine decor 1"
          width={200}
          height={200}
        />
        <Image
          className={styles.rect}
          src="/images/rounded-rect.svg"
          alt="Nine decor 2"
          width={250}
          height={400}
        />

      <div className={styles.index_container}>
        <h1>Make Your Brand Memorable</h1>
        <h2>Express your brand identity to connect with your customers</h2>
        <ConsultBTN />
      </div>

      <div className={styles.statement}>
        <h1>We transform<br/>We innovate<br/>We create</h1>
        <p>
        We are N9NE, a creative and dynamic agency made up of a team of designers, communicators, strategists, and leaders.
        With a collective and multicultural approach, we enhance our design process to adapt it to the unique needs of each client, creating memorable and meaningful brands.
        We're eager to help you create a brand that reflects your vision and connects with your audience in deep and meaningful ways.
        </p>
      </div>
      
      <div>
        <h2>Services</h2>
        <p>
        We are N9NE, a creative and dynamic agency made up of a team of designers, communicators, strategists, and leaders.
        With a collective and multicultural approach, we enhance our design process to adapt it to the unique needs of each client, creating memorable and meaningful brands.
        We're eager to help you create a brand that reflects your vision and connects with your audience in deep and meaningful ways.
        </p>
      </div>

      <Footer />
    </main>
  );
}
