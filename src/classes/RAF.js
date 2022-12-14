import { scroll } from "../index";

////////////////////////////////////////////////////////////////
//
//  RAF
//
////////////////////////////////////////////////////////////////

export default class RAF {
  constructor() {}

  render() {
    scroll.info();
    scroll.optimisation();
    window.requestAnimationFrame(this.render.bind(this));
  }
}
