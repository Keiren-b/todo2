import { returnCurrentProject } from "./project.js"

const currentTask = {
    name: ''
}

const returnCurrentTask = function () {
    return currentTask.name
}

function getSiblings (elem) {
    return Array.from(elem.parentNode.children).filter(function (sibling) {
        return sibling !== elem;
    });
}

const deleteCurrentTask = function () {

    let x = event.currentTarget.parentNode
    let xParents = getSiblings(x)
    let targetParent = xParents[0]

    let targetParentText = targetParent.textContent
    let allTasks = JSON.parse(localStorage.getItem(returnCurrentProject()))
    delete allTasks[targetParentText]
    localStorage.setItem(returnCurrentProject(),JSON.stringify(allTasks))
    console.log(localStorage.getItem(returnCurrentProject()))
}

const editCurrentTask = function() {
    let x = event.currentTarget.parentNode
    let xParents = getSiblings(x)
    let targetParent = xParents[0]

    let targetParentText = targetParent.textContent
    let allTasks = JSON.parse(localStorage.getItem(returnCurrentProject()))

    inputContainer.classList.remove('hidden')


    const title = document.getElementById('title')
    title.value = allTasks[targetParentText].title

    const desc = document.getElementById('desc')
    desc.value = allTasks[targetParentText].description

    const due = document.getElementById('due')
    due.value = allTasks[targetParentText].due

    const priority = document.getElementById('priority')
    priority.value = allTasks[targetParentText].priority

    const notes = document.getElementById('notes')
    notes.value = allTasks[targetParentText].notes

    

    console.log(allTasks[targetParentText].title, allTasks[targetParentText].description)
    console.log(allTasks)



    
}

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
    submitBtn.addEventListener('click', () => { taskStorage(collectInputs()), clearTaskInput(), displayTasks() })


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
        if (localStorage.getItem(currentProject) == '') {
            let newTaskTitle = x.title
            let newTask = { [newTaskTitle]: x }
            localStorage.setItem(currentProject, JSON.stringify(newTask))
            console.log(localStorage)
        }
        else {
            let allTasks = JSON.parse(localStorage.getItem(currentProject))
            let newTaskTitle = x.title
            let newTask = { [newTaskTitle]: x }
            allTasks = Object.assign(allTasks, newTask)
            localStorage.setItem(currentProject, JSON.stringify(allTasks))
        }
    }

}

const clearTaskInput = function () {
    const inputContainer = document.getElementById('inputContainer')
    for (let i = 0; i < inputContainer.childElementCount; i++) {
        if (inputContainer.children[i].nodeName !== "LABEL") {
            inputContainer.children[i].value = ''
        }
    }
    inputContainer.classList.add('hidden')
}

const displayTasks = function () {
    const taskDisplay = document.getElementById('taskDisplay')
    const currentProject = returnCurrentProject()

    while (taskDisplay.childElementCount > 1) {
        taskDisplay.removeChild(taskDisplay.lastChild)
    }


    let currentProjectTasks = localStorage.getItem(currentProject)
    if (currentProjectTasks !== '') {
        currentProjectTasks = JSON.parse(currentProjectTasks)
    }
    if (currentProject !== "") {
        // let keys = [];
        // for (const item in Object.keys(currentProjectTasks)){
        //     keys.push(item)
        // }

        for (let i = 0; i < Object.keys(currentProjectTasks).length; i++) {
            const card = document.createElement('div')
            card.setAttribute('id', 'card')
            taskDisplay.appendChild(card)

            const cardTitle = document.createElement('div')
            cardTitle.setAttribute('id', 'cardTitle')
            cardTitle.textContent = Object.values(currentProjectTasks)[i].title
            card.appendChild(cardTitle)

            const cardDesc = document.createElement('div')
            cardDesc.setAttribute('id', 'cardDesc')
            cardDesc.textContent = Object.values(currentProjectTasks)[i].description
            card.appendChild(cardDesc)

            const cardDue = document.createElement('div')
            cardDue.setAttribute('id', 'cardDue')
            cardDue.textContent = Object.values(currentProjectTasks)[i].date
            card.appendChild(cardDue)

            const cardPriority = document.createElement('div')
            cardPriority.setAttribute('id', 'cardPriority')
            cardPriority.textContent = Object.values(currentProjectTasks)[i].priority
            card.appendChild(cardPriority)

            const cardNotes = document.createElement('div')
            cardNotes.setAttribute('id', 'cardNotes')
            cardNotes.textContent = Object.values(currentProjectTasks)[i].notes
            card.appendChild(cardNotes)


            const editsContainer = document.createElement('div')
            editsContainer.setAttribute('id', 'edits')
            card.appendChild(editsContainer)

            const edit = document.createElement('div')
            edit.setAttribute('id', 'edit')
            edit.textContent = 'edit'
            editsContainer.appendChild(edit)
            edit.addEventListener('click', ()=> {editCurrentTask()})

            const deleteTask = document.createElement('div')
            deleteTask.setAttribute('id', 'deleteTask')
            deleteTask.textContent = 'X'
            editsContainer.appendChild(deleteTask)
            deleteTask.addEventListener('click', () => {deleteCurrentTask()})
        }
    }
}




export { taskInputs, displayTasks }
