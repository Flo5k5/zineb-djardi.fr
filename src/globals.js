////////////////////////////////////////////////////////////////
//
//  GLOBALS
//
////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
//
//  RESPONSIVE BREAKPOINTS (BASED ON BOOTSTRAP)
//
////////////////////////////////////////////////////////////////

global.RSP_XXS = 320;
global.RSP_XS = 375;
global.RSP_SM = 768;
global.RSP_MD = 992;
global.RSP_LG = 1200;
global.RSP_XL = 1400;
global.RSP_XXL = 1600;


//////////////////////////////////////////////////////
//MENU MOBILE
/////////////////////////////////////////////////////

const navLinks = document.querySelectorAll('.nav__link a');
const toggle = document.getElementById('toggle');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    toggle.checked = false;
  });
});

