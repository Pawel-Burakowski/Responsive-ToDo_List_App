const inputField = document.querySelector(".input-field textarea")
const toDoLists = document.querySelector(".toDoLists")
const pendingNum = document.querySelector(".pending-num")
const clearButton = document.querySelector(".clear-button")
const notice = document.querySelector(".notice")

// console.log(inputField, toDoLists, pendingNum, clearButton);

function allTasks()
{
    let tasks = document.querySelectorAll(".pending")
    //console.log(tasks);
    if (tasks === 0)
    {
        pendingNum.textContent = tasks.length
    }
    else if (tasks.length === 1)
    {
        notice.textContent = "Masz 1 zadanie do wykonania"
    }
    else if (tasks.length > 1 && tasks.length < 5)
    {
        notice.textContent = `Masz ${tasks.length} zadania do wykonania`
    }
    else
    {
        notice.textContent = `Masz ${tasks.length} zadań do wykonania`
    }
}

inputField.addEventListener("keyup", (e) =>
{
    let inputVal = inputField.value.trim() //.trim remove space of front and back of input value
    console.log(inputVal);

    if (e.key === "Enter" && inputVal !== "")
    {
        let liTag = 
        `<li class="list pending" onclick="handleStatus(this)">
        <input type="checkbox">
        <span class="task"> ${inputVal} </span>
        <i class="uil uil-trash-alt" onclick="deleteTask(this)"></i>
        </li>`

        toDoLists.insertAdjacentHTML("beforeend", liTag)
        inputField.value = ""
        allTasks()
    }
})

function handleStatus(e)
{
    const checkbox = e.querySelector("input")
    console.log(checkbox);
    checkbox.checked = checkbox.checked ? false : true
    e.classList.toggle("pending")
    allTasks()
}

clearButton.addEventListener("click", () =>
{
    toDoLists.innerHTML = ""
    allTasks()
})

function deleteTask(e)
{
    e.parentElement.remove()
    allTasks()
}