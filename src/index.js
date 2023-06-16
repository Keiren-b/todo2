import collectInputs from "./newToDo"
import taskInputs from "./taskInputs"
// import readAndStore from "./storage"
import populateStorage from "./storage"

const content = document.getElementById('content')
const btn = document.createElement('button')
btn.textContent = 'button'
content.appendChild(btn)


// creates the dom inputs - all DOM related no logic
taskInputs()






