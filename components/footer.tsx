import Link from "next/link";
import styles from "../app/page.module.css";
import Image from "next/image";

export default function Footer() {
    return (<div className={styles.grid}>
        <Link
          href="/about"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            About Us <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about N9NE team company.</p>
        </Link>

        <Link
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Design <span>-&gt;</span>
          </h2>
          <p>Check out our designs and &nbsp;contact us!</p>
        </Link>

        <Link
          href="/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>→</span> 
          </h2>
          <p>Lorem Ipsum B.</p>
        </Link>

        <Link
          href="/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>→</span>
          </h2>
          <p>
            Instantly Lorem Ipsum
          </p>
        </Link>
      </div>)
};