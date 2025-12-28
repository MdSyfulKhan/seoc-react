import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useReveal(ref, options = {}) {
  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const image = container.querySelector("img");

    // Initial state
    gsap.set(container, {
      autoAlpha: 0,
      xPercent: options.xPercent || -100,
      visibility: "visible",
    });

    if (image) {
      gsap.set(image, {
        xPercent: options.imgXPercent || 100,
        scale: options.imgScale || 1.3,
      });
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        toggleActions: options.toggleActions || "play none none none",
        start: options.start || "top 80%",
      },
    });

    tl.to(container, {
      autoAlpha: 1,
      xPercent: 0,
      duration: options.duration || 1.5,
      ease: options.ease || "power2.out",
    });

    if (image) {
      tl.to(
        image,
        {
          xPercent: 0,
          scale: 1,
          duration: options.duration || 1.5,
          ease: options.ease || "power2.out",
        },
        "<" // start at same time as container animation
      );
    }

    return () => {
      if (tl.scrollTrigger) tl.scrollTrigger.kill();
      tl.kill();
    };
  }, [ref, options]);
}
