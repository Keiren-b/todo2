// This function creates the project input DOM. This is DOM Stuff only
const projectInputDOM = function () {
    const content = document.getElementById('content')
    const projectModal = document.createElement('div')
    projectModal.setAttribute('id', 'projectModal')
    projectModal.classList.add('projectModal')
    projectModal.classList.add('hidden')
    content.appendChild(projectModal)

    const modalHeader = document.createElement('div')
    modalHeader.setAttribute('id', 'modalHeader')
    modalHeader.textContent = 'Add New Project'
    projectModal.appendChild(modalHeader)

    const modalInputContainer = document.createElement('div')
    modalInputContainer.setAttribute('id', 'modalInputContainer')
    projectModal.appendChild(modalInputContainer)

    const projectTitle = document.createElement("input");
    projectTitle.name = "Title";
    projectTitle.setAttribute('id', 'projectTitle')
    const projectTitleLabel = document.createElement("Label");
    projectTitleLabel.setAttribute("for", projectTitle);
    projectTitleLabel.innerHTML = "Title: ";
    modalInputContainer.appendChild(projectTitleLabel);
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
    const projectModal = document.getElementById('projectModal')
    const newTaskBtn = document.getElementById('newTaskBtn')
    const newProjectBtn = document.getElementById('newProjectBtn')
    const cancelBtn = document.getElementById('cancelBtn')


    // When the user clicks on the button, open the modal
    newProjectBtn.onclick = function () {
        // projectModal.style.display = "block";
        projectModal.classList.remove('hidden')
        newTaskBtn.classList.remove('hidden')

    }

    // When the user clicks on <span> (x), close the modal
    cancelBtn.onclick = function () {
        // projectModal.style.display = "none";
        projectModal.classList.add('hidden')
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == projectModal) {
            //   projectModal.style.display = "none";
            projectModal.classList.add('hidden')
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
    let projectModal = document.getElementById('projectModal')
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
    projectModal.classList.add('hidden')
    inputContainer.classList.remove('hidden')

    // return activeProject
}


const projectDisplayDom = () => {
    const sidebar = document.getElementById('sidebar')

    while(sidebar.childElementCount>1){
        sidebar.removeChild(sidebar.lastChild)
    }

    for (let i = 0; i <= localStorage.length; i++) {
        const title = localStorage.key(i)
        const bar = document.createElement('div')
        const inputContainer = document.getElementById('inputContainer')
        bar.setAttribute('id','bar')
        bar.textContent = title
        sidebar.appendChild(bar)
        bar.addEventListener('click',()=> {
            currentProject.name = event.target.textContent,
            console.log(currentProject.name)
            inputContainer.classList.remove('hidden')
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