import styles from "../app/page.module.css";
import Image from "next/image";

export default function Header() {
    return ( <div className={styles.header}>
        <div>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/full-icon.svg"
              alt="Nine Logo"
              className={styles.n9neLogo}
              width={100}
              height={24}
              priority
            /> team company
          </a>
        </div>
        <div>
          <p>Services</p>
          <p>Portfolio</p>
          <p>About Us</p>
        </div>
        {/* <p>
        Would your&nbsp;
          <code className={styles.code}>food</code>&nbsp;
        product will be successful in&nbsp;market?
        </p> */}
      </div>)
};