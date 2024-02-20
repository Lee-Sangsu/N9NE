import Link from "next/link";
import styles from "@/app/page.module.css";


export default function ConsultBTN() {

    return (
        <Link href="https://calendly.com/n9neteamcompany/15min" className={styles.consult_btn}>Get Your Free Consult</Link>
    )
}