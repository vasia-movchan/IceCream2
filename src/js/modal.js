(() => {
  const refs = {
    openModalBtn: document.querySelector('[contacts-modal-open]'),
    openModalBtn1: document.querySelector('[contacts-modal-open1]'),
    closeModalBtn: document.querySelector('[contacts-modal-close]'),
    modal: document.querySelector('[contacts-modal]'),

    openModalBtn2: document.querySelector('[buynow-modal-open]'),
      openModalBtn3: document.querySelector('[buynow-modal-open1]'),
     closeModalBtn2: document.querySelector('[buynow-modal-close]'),
    modalBuynow: document.querySelector('[buynow-modal]'),
  };

  refs.openModalBtn2.addEventListener('click', toggleModal2);
  refs.openModalBtn3.addEventListener('click', toggleModal2);
  refs.closeModalBtn2.addEventListener('click', toggleModal2);

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.openModalBtn1.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  
 

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }

    function toggleModal2() {
    refs.modalBuynow.classList.toggle('is-hidden-buynow');
    document.body.classList.toggle("modal-open");
  }

})();