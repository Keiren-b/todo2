const projectInput = function(){
const projectModalContainer = document.getElementById('projectModalContainer')
const newProjectBtn = document.getElementById('newProjectBtn')
const cancelBtn = document.getElementById('cancelBtn')


// When the user clicks on the button, open the modal
newProjectBtn.onclick = function() {
    projectModalContainer.classList.remove('hidden')
  }
  
  // When the user clicks on <span> (x), close the modal
  cancelBtn.onclick = function() {
    projectModalContainer.classList.add('hidden')
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == projectModalContainer) {
    projectModalContainer.classList.add('hidden')
    }
}
}

export {projectInput,}