let menuToggle = document.querySelector('.menu-toggle');
let menu = document.querySelector('.menu');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('nav ul li a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                let target = document.querySelector('nav ul li a[href*=' + id + ']');
                if (target) target.classList.add('active');
            });
        }
    });
};
if (menuToggle) {
    menuToggle.onclick = () => {
        menu.classList.toggle('active');
        menuToggle.classList.toggle('open');
    };
}

document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    let targetId = this.getAttribute('href');
    let targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
