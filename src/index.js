import pageLoad from "./pageLoad"
import './style.css';
import collectInputs from "./newToDo"
import taskStorage from "./storage.js"
import taskInputs from "./taskInputs"

pageLoad()

// test add to local storage

const defaultTasks = function () {
    const housework = {
        'wash dishes': {
            title: 'wash dishes',
            description: 'wash the dishes',
            dueDate: '2023-01-01',
            priority: 'High',
            notes: 'there are no notes'
        },
        'cook dinner': {
            title: 'cook dinner',
            description: 'cook the dinner',
            dueDate: '2023-02-01',
            priority: 'Low',
            notes: 'there are some notes'
        },
        'cut grass': {
            title: 'cut grass',
            description: 'cut the grass',
            dueDate: '2023-02-01',
            priority: 'Medium',
            notes: 'there are so many notes notes'
        },
    }
    localStorage.setItem('housework', JSON.stringify(housework))
}

defaultTasks()






