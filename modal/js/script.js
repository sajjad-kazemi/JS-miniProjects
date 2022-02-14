var $ = document
const modalParent =  $.getElementById("modal-parent")
const xBtn = $.getElementById("X")
const showModal = $.getElementById("show-modal")
const section = $.querySelector("section")

xBtn.addEventListener("click",closeModalWithX)
showModal.addEventListener("click",openModal)
modalParent.addEventListener("click",closeModal)


function closeModalWithX(e) {
    modalParent.style.display = "none"
    section.style.filter = ""
}
function openModal(e) {
    const target = $.getElementById(e.target.dataset.target)
    section.style.filter = "blur(8px)"
    target.style.display = 'inline'
}
function closeModal(e){
    if(e.target == modalParent){
        modalParent.style.display = "none"
        section.style.filter = ""
    }
}