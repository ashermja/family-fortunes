"use client";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import bg from "./assets/family-fortunes.gif";
import Link from "next/link";

export default function StartScreen() {
  const router = useRouter();

  return (
    <main className={styles.main}>
      <div
        style={{
          backgroundImage: `url(${bg.src})`,
          height: "100vh",
          backgroundSize: "cover",
        }}
      >
        <Link className={styles.start} href={`/game`}>
          START
        </Link>
      </div>
    </main>
  );
}
