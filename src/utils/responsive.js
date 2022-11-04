////////////////////////////////////////////////////////////////
//
//  RESPONSIVE
//
////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
//
//  RESPONSIVE BREAKPOINTS CONTROL
//
////////////////////////////////////////////////////////////////

export function rsp(val_, reverse_) {
  let rv = "";
  if (reverse_) reverse_ == true ? (rv = true) : (rv = false);
  else rv = false;
  let val = val_;
  let w = window.innerWidth;
  if (w > val && !rv) return true;
  if (w < val && rv) return true;
}

////////////////////////////////////////////////////////////////
//
//  IS TOUCH
//
////////////////////////////////////////////////////////////////

export function isTouch() {
  let touch;
  "ontouchstart" in document.documentElement ||
  navigator.maxTouchPoints > 0 ||
  navigator.msMaxTouchPoints > 0
    ? (touch = true)
    : (touch = false);
  return touch;
}

////////////////////////////////////////////////////////////////
//
//  SET TOUCH / NO TOUCH CLASSES
//
////////////////////////////////////////////////////////////////

export function cssSetTouchDevices(tag_, touch_, no_touch_) {
  let touch;
  let tag = document.querySelector(tag_);
  let touch_class = touch_;
  let no_touch_class = no_touch_;
  touch = isTouch();
  if (touch) {
    tag.classList.add(touch_class);
    tag.classList.remove(no_touch_class);
  } else {
    tag.classList.add(no_touch_class);
    tag.classList.remove(touch_class);
  }
}
