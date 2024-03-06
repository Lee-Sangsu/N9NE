"use client";

import styles from "../app/page.module.css";
import Image from "next/image";
import ConsultBTN from "./Button/consult_button";
import Link from "next/link";
// import { useEffect, useState } from "react";


export default function Header() {

    return ( <div className={styles.header}>
        <div>
          <Link href="/">
            <Image
              src="/light-icon.svg"
              alt="Nine Logo"
              className={styles.n9neLogo}
              width={100}
              height={48}
              priority
            />
          </Link>
        </div>
        <ul className={styles.nav_menu}>
          <li>Services</li>
          <li>Portfolio</li>
          <li>About Us</li>
        </ul>

        <ConsultBTN />
        
        {/* <p>
        Would your&nbsp;
          <code className={styles.code}>food</code>&nbsp;
        product will be successful in&nbsp;market?
        </p> */}
      </div>)
};