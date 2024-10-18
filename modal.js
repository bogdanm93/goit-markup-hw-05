(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
      form: document.querySelector(".modal-form")
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }

    // Prevent form submission and close modal
    refs.form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the default form submission
        toggleModal(); // Close the modal
    });
})();
