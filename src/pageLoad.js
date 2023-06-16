const pageLoad = function(){
    const content = document.getElementById('content')

    const header = document.createElement('div')
    header.textContent = 'This is my header'
    header.setAttribute('id', 'header')
    content.appendChild(header)

    const taskContainer = document.createElement('div')
    taskContainer.setAttribute('id', 'taskContainer')
    taskContainer.textContent = 'This is my task container'
    taskContainer.style.backgroundColor = 'grey'
    content.appendChild(taskContainer)

    const sidebar = document.createElement('div')
    sidebar.setAttribute('id', 'sidebar')
    sidebar.textContent = 'This is my sidebar'
    content.appendChild(sidebar)

    const taskDisplay = document.createElement('div')
    taskDisplay.setAttribute('id', 'taskDisplay')
    taskDisplay.textContent = 'This is my task display'
    content.appendChild(taskDisplay)






    
}

export default pageLoad
