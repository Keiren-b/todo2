import { returnCurrentProject } from "./project.js"

// constructor for new todo
function Todo(title, description, dueDate, priority, notes) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
}

// reads inputs and returns new todo using the constructor above
const collectInputs = function () {
    const title = document.getElementById('title').value
    const desc = document.getElementById('desc').value
    const due = document.getElementById('due').value
    const priority = document.getElementById('priority').value
    const notes = document.getElementById('notes').value

    return new Todo(title, desc, due, priority, notes)
}

// this is a test function to give the inputs values and see if they are read correctly by other functions
const testInputValue = function () {
    const inputContainer = document.getElementById('inputContainer')

    for (let i = 0; i < inputContainer.children.length; i++) {
        if (i % 2 == 0) {
            continue
        }
        if (i == 5) {
            inputContainer.children[i].value = "2001-01-01"
        }
        if (i == 7) {
            inputContainer.children[i].value = "High"
        }
        else {
            inputContainer.children[i].value = 'test Value'
        }

    }
}

// this creates the task input doms
const taskInputs = () => {
    const taskDisplay = document.getElementById('taskDisplay')


    const inputContainer = document.createElement('div')
    inputContainer.setAttribute('id', 'inputContainer')
    inputContainer.classList.add('hidden')

    const title = document.createElement("input");
    title.name = "Title";
    title.setAttribute('id', 'title')
    const titlelabel = document.createElement("Label");
    titlelabel.setAttribute("for", title);
    titlelabel.innerHTML = "Title: ";
    inputContainer.appendChild(titlelabel);
    inputContainer.appendChild(title)

    const desc = document.createElement("textarea");
    desc.name = "Description"
    desc.setAttribute('id', 'desc')
    const desclabel = document.createElement("Label");
    desclabel.setAttribute("for", desc);
    desclabel.innerHTML = "Description: ";
    inputContainer.appendChild(desclabel);
    inputContainer.appendChild(desc)

    const due = document.createElement("input");
    due.type = 'date'
    due.name = "Due"
    due.setAttribute('id', 'due')
    const duelabel = document.createElement("Label");
    duelabel.setAttribute("for", due);
    duelabel.innerHTML = "Due Date: ";
    inputContainer.appendChild(duelabel);
    inputContainer.appendChild(due)

    const priority = document.createElement("select");
    priority.name = "Priority"
    priority.setAttribute('id', 'priority')
    let values = ['Low', 'Medium', 'High', 'Ugent']
    for (const val of values) {
        var option = document.createElement("option");
        option.value = val;
        option.text = val.charAt(0).toUpperCase() + val.slice(1);
        priority.appendChild(option);
    }
    const prioritylabel = document.createElement("Label");
    prioritylabel.setAttribute("for", priority);
    prioritylabel.innerHTML = "Priority: ";
    inputContainer.appendChild(prioritylabel);
    inputContainer.appendChild(priority)

    const notes = document.createElement("textarea");

    notes.name = "Notes"
    notes.setAttribute('id', 'notes')
    const noteslabel = document.createElement("Label");
    noteslabel.setAttribute("for", priority);
    noteslabel.innerHTML = "Notes: ";
    inputContainer.appendChild(noteslabel);
    inputContainer.appendChild(notes)

    const submitBtn = document.createElement('button')
    submitBtn.textContent = "Add To-Do"
    submitBtn.setAttribute('id', 'printBtn')
    inputContainer.appendChild(submitBtn)
    submitBtn.addEventListener('click', () => {taskStorage(collectInputs()),clearTaskInput()})


    taskDisplay.appendChild(inputContainer)
    testInputValue()
}

function taskStorage(x) {
    let currentProject = returnCurrentProject()
    if (localStorage.getItem(x.title) != null) {
        alert("This Task Already Exists. Choose another name")
        return
    }
    else {
        if (localStorage.getItem(currentProject)==''){
            let newTaskTitle = x.title
            let newTask = {[newTaskTitle]:x}
            localStorage.setItem(currentProject,JSON.stringify(newTask))
            console.log(localStorage)
        }
        else{
            let allTasks = JSON.parse(localStorage.getItem(currentProject))
            let newTaskTitle = x.title
            let newTask = {[newTaskTitle]:x}
            allTasks = Object.assign(allTasks,newTask)
            localStorage.setItem(currentProject,JSON.stringify(allTasks))
        }
    }

}

const clearTaskInput = function(){
    const inputContainer = document.getElementById('inputContainer')
    for(let i = 0; i<inputContainer.childElementCount; i++){
        if(inputContainer.children[i].nodeName!=="LABEL"){
            inputContainer.children[i].value=''
        }
    }
    inputContainer.classList.add('hidden')
}
    
export {taskInputs}
