import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const useTextAnimation = () => {
  useEffect(() => {
    /* ---------- STYLE 1 ---------- */
    document.querySelectorAll(".text-anime-style-1").forEach((el) => {
      const split = new SplitText(el, { type: "chars,words" });

      gsap.from(split.words, {
        duration: 1,
        delay: 0.5,
        x: 20,
        autoAlpha: 0,
        stagger: 0.05,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        },
      });
    });

    /* ---------- STYLE 2 ---------- */
    document.querySelectorAll(".text-anime-style-2").forEach((el) => {
      const split = new SplitText(el, { type: "chars,words" });

      gsap.from(split.chars, {
        duration: 1,
        delay: 0.5,
        x: 20,
        autoAlpha: 0,
        stagger: 0.05,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        },
      });
    });

    /* ---------- STYLE 3 ---------- */
    document.querySelectorAll(".text-anime-style-3").forEach((el) => {
      const split = new SplitText(el, {
        type: "lines,words,chars",
        linesClass: "split-line",
      });

      gsap.set(el, { perspective: 400 });
      gsap.set(split.chars, { opacity: 0, x: 50 });

      gsap.to(split.chars, {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "back.out(1.7)",
        stagger: 0.02,
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);
};

export default useTextAnimation;
