// const storeProject = function(){
//     const projecModal = document.getElementById('projectModal')
//     const activeProject = activeProject()

//     // const activeProject = {
//     //     'name':''
//     // }
//     const projectName = document.getElementById('projectTitle')
//     activeProject.name = projectName.value

//     if (localStorage.getItem(activeProject.name)!=null){
//         alert("This Project Already Exists. Choose another name")
//         return
//     }
//     else{
//         localStorage.setItem(activeProject.name, 'projects')
//     }

//     console.log(localStorage)

function newProject(name){
    this.name = name
}

const storeProject = function(){
    if(event.currentTarget.getAttribute('id')=='addBtn'){
        alert('you have clicked ' + event.currentTarget.getAttribute('id'))
    }
}

const adder = document.getElementById('taskContainer')
const tester = document.createElement('button')
tester.textContent = 'tester'
adder.appendChild(tester)

// testing testing
const adder = document.getElementById('taskContainer')
const tester = document.createElement('button')
tester.textContent = 'tester'
adder.appendChild(tester)
tester.setAttribute('id','blahblah')
tester.addEventListener('click',()=>alert(event.currentTarget.getAttribute('id')))