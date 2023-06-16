
function Todo(title, description, dueDate, priority,notes) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
}

const collectInputs = function(){
    const title = document.getElementById('title').value
    const desc = document.getElementById('desc').value
    const due = document.getElementById('due').value
    const priority = document.getElementById('priority').value
    const notes = document.getElementById('notes').value

    return new Todo (title, desc, due, priority, notes)
}



export default collectInputs

