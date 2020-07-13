// SHOW MENU
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
  }
};

showMenu('nav-toggle', 'nav-menu');

// ACTIVE AND HIDE MENU
const navLink = document.querySelectorAll('.nav-link');

function linkAction() {
  navLink.forEach((link) => link.classList.remove('active'));
  this.classList.add('active');
}

// SCROLL REVEAL ANIMATION

// SCROLL HOME

// SCROLL ABOUT

// SCROLL SKILLS

// SCROLL PROJECTS

// SCROLL CONTACT
