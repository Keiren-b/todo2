import { displayTasks } from "./task"

// This function creates the project input DOM. This is DOM Stuff only
const projectInputDOM = function () {
    const content = document.getElementById('content')
    const projectModalContainer = document.createElement('div')
    projectModalContainer.setAttribute('id', 'projectModalContainer')
    projectModalContainer.classList.add('hidden')
    // projectModalContainer.classList.add('projectModal')
    content.appendChild(projectModalContainer)
    

    const modalBox = document.createElement('div')
    modalBox.setAttribute('id','modalBox')
    projectModalContainer.appendChild(modalBox)


    const modalHeader = document.createElement('div')
    modalHeader.setAttribute('id', 'modalHeader')
    modalHeader.textContent = 'Create a New Project'
    modalBox.appendChild(modalHeader)

    const modalInputContainer = document.createElement('div')
    modalInputContainer.setAttribute('id', 'modalInputContainer')
    modalBox.appendChild(modalInputContainer)

    const projectTitle = document.createElement("input");
    projectTitle.name = "Title";
    projectTitle.setAttribute('id', 'projectTitle')
    projectTitle.setAttribute('placeholder','Name Your Project')
    // const projectTitleLabel = document.createElement("Label");
    // projectTitleLabel.setAttribute("for", projectTitle);
    // projectTitleLabel.innerHTML = "Title: ";
    // modalInputContainer.appendChild(projectTitleLabel);
    modalInputContainer.appendChild(projectTitle)

    const cancelBtn = document.createElement('button')
    cancelBtn.setAttribute('id', 'cancelBtn')
    cancelBtn.textContent = 'Cancel'
    modalInputContainer.appendChild(cancelBtn)

    const addBtn = document.createElement('button')
    addBtn.setAttribute('id', 'addBtn')
    addBtn.textContent = 'Add'
    addBtn.addEventListener('click', () => {storeProject(),projectDisplayDom()})
    modalInputContainer.appendChild(addBtn)
}

// this function reveals or hides the project inputs by adding/removing hidden class *** NAME CHANGED
const projectInputReveal = function () {
    const projectModalContainer = document.getElementById('projectModalContainer')
    const newTaskBtn = document.getElementById('newTaskBtn')
    const newProjectBtn = document.getElementById('newProjectBtn')
    const cancelBtn = document.getElementById('cancelBtn')


    // When the user clicks on the button, open the modal
    newProjectBtn.onclick = function () {
        projectModalContainer.classList.remove('hidden')
        projectModalContainer.classList.add('projectModal')
        modalBox.classList.remove('hidden')

        newTaskBtn.classList.remove('hidden')

    }

    // When the user clicks on <span> (x), close the modal
    cancelBtn.onclick = function () {
        projectModalContainer.classList.add('hidden')
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == projectModalContainer) {
            projectModalContainer.classList.add('hidden')
        }
    }
}
const currentProject = {
    name: ''
}

const returnCurrentProject = function () {
    return currentProject.name
}

const storeProject = function () {
    let projectModalContainer = document.getElementById('projectModalContainer')
    let projectName = document.getElementById('projectTitle')

    if (event.currentTarget.getAttribute('id') == 'addBtn') {

        if (localStorage.getItem(projectName.value) != null) {
            alert("This Project Already Exists. Choose another name")
            // let projectName = ""

            return
        }
        else {
            localStorage.setItem(projectName.value, '')
            currentProject.name = projectName.value
        }
    }
    projectModalContainer.classList.add('hidden')
    projectModalContainer.classList.remove('projectModal')
    inputContainer.classList.remove('hidden')

    // return activeProject
}


const projectDisplayDom = () => {
    // const sidebar = document.getElementById('sidebar')
    const projectList = document.getElementById('projectList')

    // while(sidebar.childElementCount>2){
         // sidebar.removeChild(sidebar.lastChild)
    // }
    while(projectList.childElementCount>2){
         projectList.removeChild(projectList.lastChild)
    }    

    for (let i = 0; i <= localStorage.length; i++) {
        const title = localStorage.key(i)
        const bar = document.createElement('div')
        const inputContainer = document.getElementById('inputContainer')
        bar.setAttribute('id','bar')
        bar.textContent = title
        // sidebar.appendChild(bar)
        projectList.appendChild(bar)
        bar.addEventListener('click',()=> {
            currentProject.name = event.target.textContent,
            displayTasks()
            inputContainer.classList.add('hidden')
        })
    // }
}
}

export {
    projectInputDOM,
    projectInputReveal,
    storeProject,
    returnCurrentProject,
    projectDisplayDom
}