import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText);
}

export { gsap, ScrollTrigger, SplitText };
export const ease = {
  out: "power3.out",
  inOut: "power3.inOut",
  cubic: [0.76, 0, 0.24, 1],
};
