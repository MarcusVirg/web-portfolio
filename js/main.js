var modal = document.getElementById("btn-modal")
var blogBtn = document.getElementById("btn-blog")
var modalCloseBtn = document.getElementById("btn-close")
blogBtn.addEventListener("click", openModal);
modalCloseBtn.addEventListener("click", closeModal)

function openModal() {
  modal.classList.add("is-active")
}

function closeModal() {
  modal.classList.remove("is-active")
}