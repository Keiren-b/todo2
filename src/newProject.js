const newProject = function(){
    const projecModal = document.getElementById('projectModal')
    const activeProject = {
        'name':''
    }
    const projectName = document.getElementById('projectTitle')
    activeProject.name = projectName.value

    if (localStorage.getItem(activeProject.name)!=null){
        alert("This Project Already Exists. Choose another name")
        return
    }
    else{
        localStorage.setItem(activeProject.name, '')
    }

    console.log(localStorage)
    projectModal.style.display = "none";

alertActiveProject()

    return activeProject
}

export default newProject



    



// const updateActiveProject=function(){
//     const activeProject = collectProjectTitle()

// }
// export default collectProjectTitle


// const determineActiveProject = function(){
//     const activeProject = {
//         'name':'test'
//     }
//     return activeProject
// }
// export default determineActiveProject

