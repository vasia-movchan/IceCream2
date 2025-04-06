(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    backDrop: document.querySelector('[menu-backdrop]'),
    closeHomeLink: document.querySelector('[menu-home-link]'),
    closeAboutLink: document.querySelector('[menu-about-link]'),
    closeHowLink: document.querySelector('[menu-how-link]'),
    closeOurLink: document.querySelector('[menu-our-link]'),
    closeContactLink: document.querySelector('[menu-contact-link]'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.backDrop.classList.toggle('is-hidden');
    document.body.classList.toggle("menu-open");
  }

  refs.closeHomeLink.addEventListener('click', toggleLink);
  refs.closeAboutLink.addEventListener('click', toggleLink);
  refs.closeHowLink.addEventListener('click', toggleLink);
  refs.closeOurLink.addEventListener('click', toggleLink);
  refs.closeContactLink.addEventListener('click', toggleLink);

  function toggleLink() {
    refs.backDrop.classList.toggle('is-hidden');
    document.body.classList.toggle("menu-open");
  }
})();