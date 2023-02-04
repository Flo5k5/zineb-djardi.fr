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


////////////////////////////////////////////////////////////////
// SLIDER METHODE
////////////////////////////////////////////////////////////////


    // Select the slide container and menu list items
const slideContainer = document.querySelector('.slide_container');
const menuItems = document.querySelectorAll('.menu li');

// Loop through the menu items and add a click event to each one
menuItems.forEach((menuItem, index) => {
  menuItem.addEventListener('click', () => {
    // Remove the active class from all menu items
    menuItems.forEach(item => item.classList.remove('active'));
    // Add the active class to the clicked menu item
    menuItem.classList.add('active');
    // Update the slideContainer to show the corresponding slide
    slideContainer.style.transform = `translateX(-${index * 100}%)`;
  });
});

  
  