import collectInputs from "./newToDo"
import newProject from "./newProject"

function populateStorage(x){
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

export default populateStorage
