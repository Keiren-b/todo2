import pageLoad from "./pageLoad"
import './style.css';
import collectInputs from "./newToDo"
import taskStorage from "./storage.js"
import taskInputs from "./taskInputs"

// import readAndStore from "./storage"

// const content = document.getElementById('content')
// const btn = document.createElement('button')
// btn.textContent = 'button'
// content.appendChild(btn)

// btn.addEventListener('click',function(){
//     taskStorage(collectInputs())
// })


// // creates the dom inputs - all DOM related no logic
// taskInputs()
pageLoad()

// test add to local storage

const defaultTasks = function () {
    const housework = {
        washing: {
            title: 'wash dishes',
            description: 'wash the dishes',
            date: '2023-01-01',
            priority: 'high',
            notes: 'there are no notes'
        },
        cooking: {
            title: 'cook dinner',
            description: 'cook the dinner',
            date: '2023-02-01',
            priority: 'low',
            notes: 'there are some notes'
        },
        yard: {
            title: 'cut grass',
            description: 'cut the grass',
            date: '2023-02-01',
            priority: 'med',
            notes: 'there are so many notes notes'
        },
    }
    localStorage.setItem('housework', JSON.stringify(housework))
}

defaultTasks()






