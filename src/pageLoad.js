import {taskInputs} from "./task.js"
import {projectInputDOM, projectInputReveal} from "./project.js"

// import taskInputs from "./taskInputs"
// import projectInput from "./projectInput"
// import newProject from "./newProject"

const pageLoad = function(){
// remove this line when not testing
    
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

    const clearBtn = document.createElement('button')
    taskDisplay.appendChild(clearBtn)
    clearBtn.textContent = 'CLEAR'
    clearBtn.addEventListener('click',()=>localStorage.clear())
    // This is DOM Stuff only
// const projectInputDOM = function(){
//     const content = document.getElementById('content')
//     const projectModal = document.createElement('div')
//     projectModal.setAttribute('id','projectModal')
//     projectModal.classList.add('projectModal')
//     projectModal.classList.add('hidden')
//     content.appendChild(projectModal)

//     const modalHeader = document.createElement('div')
//     modalHeader.setAttribute('id','modalHeader')
//     modalHeader.textContent = 'Add New Project'
//     projectModal.appendChild(modalHeader)

//     const modalInputContainer = document.createElement('div')
//     modalInputContainer.setAttribute('id','modalInputContainer')
//     projectModal.appendChild(modalInputContainer)

//     const projectTitle = document.createElement("input");
//     projectTitle.name = "Title";
//     projectTitle.setAttribute('id', 'projectTitle')
//     const projectTitleLabel = document.createElement("Label");
//     projectTitleLabel.setAttribute("for", projectTitle);
//     projectTitleLabel.innerHTML = "Title: ";
//     modalInputContainer.appendChild(projectTitleLabel);
//     modalInputContainer.appendChild(projectTitle)

//     const cancelBtn = document.createElement('button')
//     cancelBtn.setAttribute('id','cancelBtn')
//     cancelBtn.textContent = 'Cancel'
//     modalInputContainer.appendChild(cancelBtn)

//     const addBtn = document.createElement('button')
//     addBtn.setAttribute('id','addBtn')
//     addBtn.textContent = 'Add'
//     addBtn.addEventListener('click',()=>newProject())
//     modalInputContainer.appendChild(addBtn)
// }

projectInputDOM()
projectInputReveal()
taskInputs()

}

export default pageLoad
