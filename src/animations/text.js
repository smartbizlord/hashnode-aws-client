//Animation for NotFound texts and buttons

import Splitting from "splitting";
import { IO } from "./observe";
import { gsap, Power3 } from "gsap";

export const split = () => {
  const n = document.querySelector(".notFound404")
  const p = document.querySelectorAll(".middleText");
  const d = document.querySelectorAll(".bottomText");
  const btn = document.querySelector(".redirectLink404")

  
    gsap.set(n, {
      transformStyle: "preserve-3d",
    });
      gsap.to(n, {
        opacity: 1,
        css: {visibility: "visible"},
        yPercent: 0,
        delay: 0.3,
        duration: 0.8,
        ease: Power3.bounce,
        transformStyle: "preserve-3d",
      });
   
  

  p.forEach((item) => {
    Splitting({
      target: item,
      by: "chars",
    });
    gsap.set(item.querySelectorAll(".char"), {
      yPercent: 100,
      transformStyle: "preserve-3d",
    });
    IO(item, {
      threshold: 1,
    }).then(() => {
      const elem = item.querySelectorAll(".char");
      gsap.to(elem, {
        opacity: 1,
        css: {visibility: "visible"},
        yPercent: 0,
        delay: 0.5,
        stagger: elem.length > 100 ? 0.04 : 0.05,
        duration: elem.length > 100 ? 0.7 : 0.8,
        ease: "easeOut",
        transformStyle: "preserve-3d",
      });
    });
  });

  d.forEach((item) => {
    Splitting({
      target: item,
      by: "chars",
    });
    gsap.set(item.querySelectorAll(".char"), {
      // opacity: 0,
      yPercent: 100,
      transformStyle: "preserve-3d",
      
    });
    IO(item, {
      threshold: 1,
    }).then(() => {
      const elem = item.querySelectorAll(".char");
      gsap.to(elem, {
        opacity: 1,
        // autoAlpha: 1,
        css: {visibility: "visible"},
        yPercent: 0,
        delay: 1,
        stagger: elem.length > 100 ? 0.02 : 0.03,
        duration: elem.length > 100 ? 0.5 : 0.6,
        ease: "easeOut",
        transformStyle: "preserve-3d",
      });
    });
  });

  gsap.set(btn, {
    // yPercent: 5,
    transformStyle: "preserve-3d",
  });
    gsap.to(btn, {
      opacity: 1,
      css: {visibility: "visible"},
      yPercent: 0,
      delay: 1.5,
      duration: 0.8,
      ease: Power3.bounce,
      transformStyle: "preserve-3d",
    });
};
