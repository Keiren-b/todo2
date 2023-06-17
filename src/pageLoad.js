import taskInputs from "./taskInputs"
import projectInput from "./projectInput"

const pageLoad = function(){
    const content = document.getElementById('content')

    const header = document.createElement('div')
    header.textContent = 'This is my header'
    header.setAttribute('id', 'header')
    content.appendChild(header)
    header.classList.add('container')

    const taskContainer = document.createElement('div')
    taskContainer.setAttribute('id', 'taskContainer')
    // taskContainer.textContent = 'This is my task container'
    taskContainer.style.backgroundColor = 'grey'
    content.appendChild(taskContainer)

    const sidebar = document.createElement('div')
    sidebar.setAttribute('id', 'sidebar')
    sidebar.textContent = 'This is my sidebar'
    taskContainer.appendChild(sidebar)

    const projectMenu = document.createElement('div')
    projectMenu.setAttribute('id','projectMenu')
    sidebar.appendChild(projectMenu)

    const newProjectBtn = document.createElement('button')
    newProjectBtn.textContent = "Add New Project"
    newProjectBtn.setAttribute('id','newProjectBtn')
    projectMenu.appendChild(newProjectBtn)

    const taskDisplay = document.createElement('div')
    taskDisplay.setAttribute('id', 'taskDisplay')
    taskDisplay.textContent = 'This is my task display'
    taskContainer.appendChild(taskDisplay)

    // This is DOM Stuff only
const projectInputDOM = function(){
    const content = document.getElementById('content')
    const projectModal = document.createElement('div')
    projectModal.setAttribute('id','projectModal')
    projectModal.classList.add('projectModal')
    content.appendChild(projectModal)

    const modalHeader = document.createElement('div')
    modalHeader.setAttribute('id','modalHeader')
    modalHeader.textContent = 'Add New Project'
    projectModal.appendChild(modalHeader)

    const modalInputContainer = document.createElement('div')
    modalInputContainer.setAttribute('id','modalInputContainer')
    projectModal.appendChild(modalInputContainer)

    const title = document.createElement("input");
    title.name = "Title";
    title.setAttribute('id', 'title')
    const titlelabel = document.createElement("Label");
    titlelabel.setAttribute("for", title);
    titlelabel.innerHTML = "Title: ";
    modalInputContainer.appendChild(titlelabel);
    modalInputContainer.appendChild(title)

    const cancelBtn = document.createElement('button')
    cancelBtn.setAttribute('id','cancelBtn')
    cancelBtn.textContent = 'Cancel'
    modalInputContainer.appendChild(cancelBtn)

    const addBtn = document.createElement('button')
    addBtn.setAttribute('id','addBtn')
    addBtn.textContent = 'Add'
    modalInputContainer.appendChild(addBtn)
}

projectInputDOM()
projectInput()
taskInputs()
}

export default pageLoad
