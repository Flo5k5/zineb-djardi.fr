import * as responsive from "../utils/responsive";
import gsap from "gsap";
// import { transition } from "../index";

////////////////////////////////////////////////////////////////
//
//  MENU
//
////////////////////////////////////////////////////////////////

export default class Navigation {
  constructor() {
    this.menu = document.querySelector("#menu");
    this.menu_trigger = document.querySelector("#menu_trigger");
    this.menu_status = "off";
    this.menu_animation_time = 1;
    this.menu_ease = "power2.inOut";

    this.primary_menu = document.querySelector("#primary-menu");
    this.li_list = this.primary_menu.querySelectorAll("li");

    this.home_url = document.querySelector("#logo").href;

    this.menuTrigger();
  }

  menuTrigger() {
    this.menu_trigger.addEventListener("click", (e) => {
      if (this.menu_trigger.classList.contains("active")) {
        this.closeMenu();
      } else {
        this.menu_trigger.classList.add("active");
        this.menu_status = "on";
        this.openMenu();
      }
    });
  }

  openMenu() {
    this.menu_trigger.classList.add("active");
    this.menu_status = "on";

    gsap.to("#menu", {
      duration: this.menu_animation_time,
      ease: this.menu_ease,
      height: "100%",
    });

    gsap.fromTo(
      "#menu li a",
      {
        yPercent: -100,
      },
      {
        delay: 0.5,
        duration: 0.8,
        ease: "power3.out",
        yPercent: 0,
        stagger: 0.1,
      }
    );
  }

  closeMenu() {
    this.menu_trigger.classList.remove("active");
    this.menu_status = "off";

    gsap.to("#menu", {
      duration: this.menu_animation_time,
      ease: this.menu_ease,
      height: 0,
    });
  }

  test() {
    if (responsive.rsp(RSP_MD)) {
      console.log("BIGGER THAN MOBILE");
    }
  }
}
