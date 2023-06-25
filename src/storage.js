import collectInputs from "./newToDo"
import newProject from "./newProject"

function taskStorage(x){
    // find current project, loop through keys to find if it already exists then proceed
    // for Object.keys()
    if (localStorage.getItem(x.title)!=null){
        alert("This Task Already Exists. Choose another name")
        return
    }
    else{
        localStorage.setItem(x.title, JSON.stringify(x))
    }

    console.log(localStorage)
}

// this function stores the current project in local storage *** NAME CHANGED

const storeProject = function(){
    const projectModal = document.getElementById('projectModal')
    const projectName = document.getElementById('projectTitle')

    if(event.currentTarget.getAttribute('id')=='addBtn'){

        if (localStorage.getItem(projectName.value)!=null){
        alert("This Project Already Exists. Choose another name")
        return
        }
        else{
            localStorage.setItem(projectName.value, 'projects')
        }
    }
    projectModal.classList.add('hidden')
    inputContainer.classList.remove('hidden')

    // return activeProject
}
export {taskStorage, storeProject}
