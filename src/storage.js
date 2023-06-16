import collectInputs from "./newToDo"

function populateStorage(x){
    if (localStorage.getItem(x.title)!=null){
        alert("This Task Already Exists. Choose another name")
        return
    }
    else{
        localStorage.setItem(x.title, JSON.stringify(x))
    }
}

// function readAndStore(){
// populateStorage(collectInputs())
// }

// export default readAndStore

export default populateStorage
