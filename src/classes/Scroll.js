import LocomotiveScroll from "locomotive-scroll";
// import gsap from 'gsap';
// import { animation } from '../index';

////////////////////////////////////////////////////////////////
//
//  SCROLL LOCOMOTIVE
//
////////////////////////////////////////////////////////////////

export default class Scroll {
  constructor() {
    this.scroll;
  }

  init() {
    this.scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      lerp: 0.09,
      multiplier: 2,
      scrollFromAnywhere: true,
      getSpeed: true,
    });
    console.log(this.scroll);
  }

  reset() {
    // this.scroll.scroll.instance.scroll.y = 0;
    this.scroll.update();
    this.scroll.scrollTo("top", { duration: 0, disableLerp: true });
    setTimeout(() => {
      this.scroll.update();
    }, 200);
  }

  scrollto(target) {
    this.scroll.scrollTo(target, {
      callback: function () {},
      duration: 1000,
      easing: [0.25, 0.0, 0.35, 1.0],
      disableLerp: true,
    });
  }

  info() {
    // console.log(this.scroll.scroll.instance.scroll.y);
    // console.log(this.scroll.scroll.instance.speed);
    // console.log(this.scroll.scroll);
  }

  // action() {
  //     this.scroll.on('call', ( a ) => {
  //         let call_obj = this.scroll.scroll.callObj;
  //         switch( a ){
  //             case 'c_text': animation.texIn( call_obj ); break;
  //             case 'c_img': animation.imageIn( call_obj ); break;
  //             case 'c_video': animation.videoIn( call_obj ); break;
  //         }
  //     } );
  // }
}
