var $  = document
const users = $.querySelector("#users").children
const taskInput = $.querySelector("#taskInput")
const employeeInput = $.querySelector("#selectEmployee")
const submitTask = $.querySelector("#submitTask")
const taskContainer = $.querySelector("#tasks")

submitTask.addEventListener("click", submitTaskFunc)
window.addEventListener("keydown", (e)=>{
    if(e.key === "Enter"){
        submitTaskFunc()
    }
})


function checkValidation(input1,input2){
    if(input1.value.length ===0 || input2.value.length === 0){
    return false
    }
    return true
}
function submitTaskFunc(){
    if(!checkValidation(taskInput,employeeInput)){
        alert("لطفا هر دو مورد را کامل کنید")
        return
    }
    const task = taskInput.value
    const employee = employeeInput.value
    addTask(task,employee)
    taskInput.value = ""
}
function addTask(task, employee) {
    const main = $.createElement("div")
    main.classList.add("main-task")
    const trashIcon = $.createElement("i")
    trashIcon.classList.add("fa","fa-trash")
    trashIcon.addEventListener("click",deleteTask)
    const taskTitle = $.createElement("h4")
    taskTitle.textContent = task
    taskTitle.classList.add("text-center")
    main.append(trashIcon)
    main.append(taskTitle)
    $.querySelector(`.${employee}-tasks`).append(main)
}
function deleteTask(e){
    e.target.parentNode.remove()
}


for (let i=0;i<users.length;i++){
    const user = users[i]
    const option = $.createElement("option")
    option.value = user.dataset.name
    option.textContent = user.innerText
    employeeInput.append(option)
}