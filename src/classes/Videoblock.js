import gsap from "gsap";

////////////////////////////////////////////////////////////////
//
//  VIDEO BLOCK
//
////////////////////////////////////////////////////////////////

export default class Videoblock {
  constructor() {
    this.startAutoplay();
    this.coverAction();
  }

  startAutoplay() {
    let video_list = document.querySelectorAll(".block_video .video");
    video_list.forEach((o) => {
      o.play();
    });
  }

  coverAction() {
    let video_list = document.querySelectorAll(".block_video .cover");
    video_list.forEach((o) => {
      let parent = o.parentNode;
      let embedded = parent.querySelector(".embedded iframe");
      o.addEventListener("pointerdown", (event) => {
        embedded.src += "&autoplay=1";
        this.hideCover(o);
      });
    });
  }

  hideCover(target_) {
    let t = target_;

    gsap.to(t, {
      duration: 1,
      ease: "power2.inOut",
      opacity: 0,
      onComplete: () => {
        t.remove();
      },
    });
  }
}
