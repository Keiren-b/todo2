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
            date: '2023-01-01',
            priority: 'high',
            notes: 'there are no notes'
        },
        'cook dinner': {
            title: 'cook dinner',
            description: 'cook the dinner',
            date: '2023-02-01',
            priority: 'low',
            notes: 'there are some notes'
        },
        'cut grass': {
            title: 'cut grass',
            description: 'cut the grass',
            date: '2023-02-01',
            priority: 'med',
            notes: 'there are so many notes notes'
        },
    }
    localStorage.setItem('housework', JSON.stringify(housework))   

    const finances = {
        'super': {
            title: 'super',
            description: 'look at super contributions',
            date: '2023-01-01',
            priority: 'high',
            notes: 'find a good one this time'
        },
        'Budget': {
            title: 'Budget',
            description: 'calculate the budget',
            date: '2023-02-01',
            priority: 'low',
            notes: 'Dont forget the extra income source'
        },
        'Investing': {
            title: 'Investing',
            description: 'find 3 companies to invest in',
            date: '2023-02-01',
            priority: 'med',
            notes: 'No oil stocks'
        },
    }
    localStorage.setItem('Housework', JSON.stringify(housework)) 
    localStorage.setItem('Finances', JSON.stringify(finances))   

}

defaultTasks()






