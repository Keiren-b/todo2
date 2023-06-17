const projectInput = function(){
const projectModal = document.getElementById('projectModal')
const newProjectBtn = document.getElementById('newProjectBtn')
const cancelBtn = document.getElementById('cancelBtn')


// When the user clicks on the button, open the modal
newProjectBtn.onclick = function() {
    // projectModal.style.display = "block";
    projectModal.classList.remove('hidden')
  }
  
  // When the user clicks on <span> (x), close the modal
  cancelBtn.onclick = function() {
    // projectModal.style.display = "none";
    projectModal.classList.add('hidden')
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == projectModal) {
    //   projectModal.style.display = "none";
    projectModal.classList.add('hidden')
    }
}
}

export {projectInput,}