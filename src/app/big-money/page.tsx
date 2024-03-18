"use client";

import { useCallback, useEffect, useState } from "react";
import styles from "./page.module.css";

export default function Page() {
  const [wrong, setWrong] = useState<boolean>(false);

  const handleUserKeyPress = useCallback((event: any) => {
    const { keyCode } = event;
    switch (keyCode) {
      case 78:
        setWrong(true);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress);
    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  }, [handleUserKeyPress]);

  return <div className={`${styles.main} ${wrong && styles.wrong}`}>X</div>;
}
