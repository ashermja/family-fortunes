"use client";

import { useCallback, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function Intro() {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleUserKeyPress = useCallback(
    (event: any) => {
      const { keyCode } = event;
      switch (keyCode) {
        case 39:
          videoRef.current?.pause();
          router.push("/game");
          break;
        case 49:
          videoRef.current?.play();
          break;
      }
    },
    [router]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress);
    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  }, [handleUserKeyPress]);

  return (
    <video
      width="100%"
      height="100%"
      controls
      preload="none"
      ref={videoRef}
      playsInline
      autoPlay
    >
      <source
        src="/video/family-fortunes-intro.mp4"
        onEnded={() => console.log("loaded")}
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  );
}
