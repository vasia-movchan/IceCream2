(() => {
  const refs = {
    openDescriptionBtn: document.querySelector('[data-description-open]'),
    closeDescriptionBtn: document.querySelector('[data-description-close]'),
    description: document.querySelector('[data-description]'),
  };

  refs.openDescriptionBtn.addEventListener('click', toggleDescription);
  refs.closeDescriptionBtn.addEventListener('click', toggleDescription);

  function toggleDescription() {
    refs.description.classList.toggle('is-hidden');
  }
})();

//
(() => {
  const refs = {
    openSecBtn: document.querySelector('[data-sec-open]'),
    closeSecBtn: document.querySelector('[data-sec-close]'),
    sec: document.querySelector('[data-sec]'),
  };

  refs.openSecBtn.addEventListener('click', toggleSec);
  refs.closeSecBtn.addEventListener('click', toggleSec);

  function toggleSec() {
    refs.sec.classList.toggle('is-hidden');
  }
})();

//
(() => {
  const refs = {
    openFrstBtn: document.querySelector('[data-frst-open]'),
    closeFrstBtn: document.querySelector('[data-frst-close]'),
    frst: document.querySelector('[data-frst]'),
  };

  refs.openFrstBtn.addEventListener('click', toggleFrst);
  refs.closeFrstBtn.addEventListener('click', toggleFrst);

  function toggleFrst() {
    refs.frst.classList.toggle('is-hidden');
  }
})();
