import {taskInputs, displayTasks} from "./task.js"
import {projectInputDOM, projectInputReveal, projectDisplayDom} from "./project.js"


import './style.css';
import Icon from './icon.png';

// import taskInputs from "./taskInputs"
// import projectInput from "./projectInput"
// import newProject from "./newProject"

const pageLoad = function(){
    
    const content = document.getElementById('content')

    const header = document.createElement('div')
    const textContainer = document.createElement('div')
    const myIcon = new Image();
    myIcon.src = Icon;
    myIcon.setAttribute('id','pencil')
    header.appendChild(myIcon)
    header.appendChild(textContainer)
    textContainer.textContent = 'To-Do'
    header.setAttribute('id', 'header')
    content.appendChild(header)
    header.classList.add('container')



    const taskContainer = document.createElement('div')
    taskContainer.setAttribute('id', 'taskContainer')
    content.appendChild(taskContainer)

    const sidebar = document.createElement('div')
    sidebar.setAttribute('id', 'sidebar')
    taskContainer.appendChild(sidebar)

    const projectList = document.createElement('div')
    projectList.setAttribute('id', 'projectList')
    sidebar.appendChild(projectList)

    const projectAddContainer = document.createElement('div')
    projectAddContainer.setAttribute('id', 'projectAddContainer')
    sidebar.appendChild(projectAddContainer)

    // const projectAddContainer = document.createElement('div')
    // projectAddContainer.setAttribute('id', 'projectAddContainer')
    // projectAddContainer.textContent = 'This is my projectAddContainer'
    // taskContainer.appendChild(projectAddContainer)



    // const projectMenu = document.createElement('div')
    // projectMenu.setAttribute('id','projectMenu')
    // sidebar.appendChild(projectMenu)

    const newProjectBtn = document.createElement('button')
    projectAddContainer.appendChild(newProjectBtn)
    newProjectBtn.textContent = "Add New Project"
    newProjectBtn.setAttribute('id','newProjectBtn')
    

    const newTaskBtn = document.createElement('button')
    newTaskBtn.textContent = "Add New Task"
    newTaskBtn.setAttribute('id','newTaskBtn')
    projectAddContainer.appendChild(newTaskBtn)
    newTaskBtn.classList.add('hidden')
    newTaskBtn.addEventListener('click',()=>{
        const inputContainer=document.getElementById('inputContainer')
        inputContainer.classList.remove('hidden')
    })





    const taskDisplay = document.createElement('div')
    taskDisplay.setAttribute('id', 'taskDisplay')
    taskContainer.appendChild(taskDisplay)

    const clearBtn = document.createElement('button')
    clearBtn.textContent = 'CLEAR'
    clearBtn.addEventListener('click',()=>localStorage.clear())

    const pp = document.createElement('button')
    pp.textContent='ppp'


    const testBtns = document.createElement('div')
    content.appendChild(testBtns)
    testBtns.appendChild(clearBtn)
    testBtns.appendChild(pp)

    

taskInputs()
projectDisplayDom()
projectInputDOM()
projectInputReveal()
displayTasks()

}

export default pageLoad
