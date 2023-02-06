import gsap from "gsap";
//import { ScrollTrigger } from "gsap/ScrollTrigger";

//gsap.registerPlugin(ScrollTrigger);





////////////////////////////////////////////////////////////////
//
//  ANIMATION
//
////////////////////////////////////////////////////////////////

export default class Animation {
  constructor() {}


  //  BLOCK TEXT
  textIn(target_) {
    let id = target_.el.dataset.id;
    let t = document.querySelector('[data-id="' + id + '"]');
    gsap.fromTo(
      t,
      {
        yPercent: 20,
        rotate: 3,
        opacity: 0,
      },
      {
        duration: 2,
        ease: "power2.out",
        opacity: 1,
        rotate: 0,
        yPercent: 0,
      }
    );
  }

  //  BLOCK IMAGES
  imageIn(target_) {
    let id = target_.el.dataset.id;
    let t = document.querySelector('[data-id="' + id + '"]');

    gsap.fromTo(
      t,
      {
        yPercent: 20,
        opacity: 0,
      },
      {
        duration: 2,
        ease: "power2.out",
        yPercent: 0,
        opacity: 1,
      }
    );
  }

  //  BLOCK VIDEO
  videoIn(target_) {
    let id = target_.el.dataset.id;
    let t = document.querySelector('[data-id="' + id + '"]');

    gsap.fromTo(
      t,
      {
        yPercent: 20,
        opacity: 0,
      },
      {
        duration: 2,
        ease: "power2.out",
        yPercent: 0,
        opacity: 1,
      }
    );
  }
}


