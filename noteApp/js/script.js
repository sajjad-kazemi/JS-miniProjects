const $ = document
const noteInput = $.querySelector("#input-field")
const colors = $.querySelectorAll(".color-box")
const addNoteBtn = $.querySelector("#btn-save")
const eraseBtn = $.querySelector("#btn-delete")
const noteBox = $.querySelector("#listed")

noteInput.addEventListener("keypress",addNote)
addNoteBtn.addEventListener("click",addNote)
eraseBtn.addEventListener("click",removeNote)

colors.forEach(color =>{
    color.addEventListener("click",changeColor)
})

function addNote(e){
    if(e.target == noteInput){
        if (e.key == "Enter"){
            if(e.target.value == ""){
                alert("please insert a note!")
                return
            }else{
                const note = $.createElement("div")
                note.textContent = noteInput.value
                note.title = "click to delete"
                note.classList.add("card")
                note.classList.add("p-3")
                note.classList.add("m-1")
                note.classList.add("shadow")
                note.oncontextmenu = "return false"
                note.addEventListener("click",itemDelete)
                note.style.backgroundColor = noteInput.style.backgroundColor
                noteBox.appendChild(note)
                e.target.value = ""
                return
            }
        }
    }
    if(e.target == addNoteBtn)
        if(noteInput.value == ""){
            alert("please insert a note!")
            return
        }else{
            const note = $.createElement("div")
            note.textContent = noteInput.value
            note.title = "click to delete"
            note.classList.add("card")
            note.classList.add("p-3")
            note.classList.add("m-1")
            note.classList.add("shadow")
            note.oncontextmenu = "return false"
            note.addEventListener("click",itemDelete)
            note.style.backgroundColor = noteInput.style.backgroundColor
            noteBox.appendChild(note)
            noteInput.value = ""
            return
        }
}
function changeColor(e){
    noteInput.style.backgroundColor = e.target.style.backgroundColor
}
function removeNote(){
    noteInput.value = ""
}
function itemDelete(e){
    e.target.remove()
}
