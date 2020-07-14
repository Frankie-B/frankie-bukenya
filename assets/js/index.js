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
  // Active link
  navLink.forEach((link) => link.classList.remove('active'));
  this.classList.add('active');

  // Remove menu(mobile)
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show');
}

navLink.forEach((link) => link.addEventListener('click', linkAction));

// SPANS
const spans = document.querySelectorAll('h1 span');

spans.forEach((span) =>
  span.addEventListener('mouseover', function (e) {
    span.classList.add('animate__animated', 'animate__rubberBand');
  })
);

spans.forEach((span) =>
  span.addEventListener('mouseout', function (e) {
    span.classList.remove('animated', 'rubberBand');
  })
);
