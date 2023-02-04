import GLOBALS from "./globals";
import * as responsive from "./utils/responsive";
//import Navigation from "./classes/Navigation";
import Scroll from "./classes/Scroll";
//import Animation from "./classes/Animation";
//import Transition from "./classes/Transition";
//import RAF from "./classes/RAF";
//import Videoblock from "./classes/Videoblock";
//import Loader from "./classes/Loader";

responsive.cssSetTouchDevices("html", "touch", "no_touch");

//export const navigation = new Navigation();
export const scroll = new Scroll();
//export const transition = new Transition();
//export const animation = new Animation();
//const raf = new RAF();
//export const videoblock = new Videoblock();
//const loader = new Loader();



window.addEventListener("load", () => {
 // loader.hideLoader();
  scroll.init();
 // scroll.action();
 // raf.render();
});

const header = document.querySelector("#header");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 200) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});
