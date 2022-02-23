const $ = document
const text = $.querySelector("textarea")
const keys = $.querySelectorAll(".key")
// for every time we use keyboard it types in the textarea
window.addEventListener("keypress",()=>{
    text.focus()
})

keys.forEach(key =>{
    key.addEventListener("mousedown",keyPressed)
})
// for Backspace and Enter key
function delEnt(e){
    if(e.target.dataset.letter == "enter"){
        text.value += "\n"
        text.focus()
        return
    }
    if(e.target.dataset.letter == "delete"){
        text.value = text.value.substr(0, text.value.length - 1)
        text.focus()
        return
    }
}
// function of key pressing
function keyPressed(e){
    if(e.target.dataset.letter == "delete" || e.target.dataset.letter == "enter"){
        delEnt(e)
        return
    }
    text.value+= e.target.dataset.letter
    text.focus()
}