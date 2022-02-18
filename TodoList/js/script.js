var $ = document;
var todoCounter = localStorage.getItem("todoCounter")
var Todo = $.getElementById("Todo");
var items = $.getElementById("items");
var addBtn = $.getElementById("add");
if(localStorage.length === 0){
    localStorage.setItem("todoCounter",0)
}else{
    for(var i in localStorage){
        if (i === "todoCounter"){
            continue;
        } else if("savedTodo" === i.substring(0,9)){
            let item = $.createElement('div');
            item.innerHTML = localStorage.getItem(i)
            item.setAttribute("class","todoItem"+" "+"savedTodo"+i[9])
            item.setAttribute("oncontextmenu","deleteItem(event)")
            item.style.userSelect = "none"
            items.appendChild(item)
        }
    }
};
function addItem(){
    if (Todo.value ===""){
    alert("insert a note!")
    return
}
    var item = $.createElement('div');
    item.innerHTML = Todo.value
    item.setAttribute("class","todoItem"+" "+"savedTodo"+todoCounter)
    item.setAttribute("oncontextmenu","deleteItem(event)")
    item.style.userSelect = "none"
    items.appendChild(item)
    Todo.value = ""
    localStorage.setItem("savedTodo"+todoCounter,item.innerHTML)
    todoCounter++
    localStorage.todoCounter++
    console.log(localStorage.todoCounter)
};
function enterFunc(event){
    if (event.key === "Enter"){
        event.preventDefault();
        addBtn.click();
    }
};
function deleteItem(event){
    event.preventDefault();
    var itemClass = event.target.classList[1];
    items.removeChild(event.target);
    localStorage.removeItem(itemClass);
};
console.log(localStorage.length)
for (var b in localStorage) {
    console.log(b)
}