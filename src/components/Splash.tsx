"use client";

import { useEffect, useRef, useState } from "react";

export default function Splash() {
  const [visible, setVisible] = useState(true);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const start = () => {
      const splashImg = imgRef.current;
      const navImg = document.getElementById("nav-logo") as
        | HTMLImageElement
        | null;

      if (!splashImg || !navImg) {
        // if nav logo isn't mounted yet, fade out soon
        setTimeout(() => setVisible(false), 1050);
        return;
      }

      // wait for images to load so measurements are correct
      Promise.all([
        new Promise<void>((res) => {
          if (splashImg.complete) res();
          else splashImg.onload = () => res();
        }),
        new Promise<void>((res) => {
          if (navImg.complete) res();
          else navImg.onload = () => res();
        }),
      ]).then(() => {
        const splashRect = splashImg.getBoundingClientRect();
        const navRect = navImg.getBoundingClientRect();

        const scale = navRect.width / splashRect.width;
        const translateX =
          navRect.left + navRect.width / 2 - (splashRect.left + splashRect.width / 2);
        const translateY =
          navRect.top + navRect.height / 2 - (splashRect.top + splashRect.height / 2);

        // animate transform to nav logo (50% longer)
        requestAnimationFrame(() => {
          if (!splashImg) return;
          splashImg.style.transition =
            "transform 2000ms cubic-bezier(0.2,0.8,0.2,1), opacity 875ms linear 2000ms";
          splashImg.style.transformOrigin = "center center";
          splashImg.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;

          // remove overlay after animation completes
          setTimeout(() => setVisible(false), 1900);
        });
      });
    };

    // slight delay to ensure layout/ navbar is mounted and painted (50% longer)
    const t = setTimeout(start, 120);
    return () => clearTimeout(t);
  }, []);

  if (!visible) return null;

  return (
    <div className="splash-overlay">
      <img
        ref={imgRef}
        src="/logo.png"
        alt="Logo"
        className="splash-logo"
        aria-hidden
      />
    </div>
  );
}
