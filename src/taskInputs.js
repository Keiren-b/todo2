// this is all DOM related stuff

// this is a test function to give the inputs values and see if they are read correctly by other functions
const testInputValue = function(){
    const inputContainer = document.getElementById('inputContainer')

    for(let i=0; i<inputContainer.children.length; i++){
        if(i%2 == 0){
            continue
        }
        if(i==5){
            inputContainer.children[i].value = "2001-01-01"
        }
        if(i==7){
            inputContainer.children[i].value = "High"
        }
        else{
            inputContainer.children[i].value = 'test Value'
        }
    
    }
}

const taskInputs = () => {
    const content = document.getElementById('content')

    const inputContainer = document.createElement('div')
    inputContainer.setAttribute('id', 'inputContainer')

    const title = document.createElement("input");
    title.name = "Title";
    title.setAttribute('id', 'title')
    const titlelabel = document.createElement("Label");
    titlelabel.setAttribute("for", title);
    titlelabel.innerHTML = "Title: ";
    inputContainer.appendChild(titlelabel);
    inputContainer.appendChild(title)

    const desc = document.createElement("textarea");
    desc.name = "Description"
    desc.setAttribute('id', 'desc')
    const desclabel = document.createElement("Label");
    desclabel.setAttribute("for", desc);
    desclabel.innerHTML = "Description: ";
    inputContainer.appendChild(desclabel);
    inputContainer.appendChild(desc)

    const due = document.createElement("input");
    due.type = 'date'
    due.name = "Due"
    due.setAttribute('id', 'due')
    const duelabel = document.createElement("Label");
    duelabel.setAttribute("for", due);
    duelabel.innerHTML = "Due Date: ";
    inputContainer.appendChild(duelabel);
    inputContainer.appendChild(due)

    const priority = document.createElement("select");
    priority.name = "Priority"
    priority.setAttribute('id', 'priority')
    let values = ['Low', 'Medium', 'High', 'Ugent']
    for (const val of values)
    {           var option = document.createElement("option");
                option.value = val;
                option.text = val.charAt(0).toUpperCase() + val.slice(1);
                priority.appendChild(option);
            }
    const prioritylabel = document.createElement("Label");
    prioritylabel.setAttribute("for", priority);
    prioritylabel.innerHTML = "Priority: ";
    inputContainer.appendChild(prioritylabel);
    inputContainer.appendChild(priority)

    const notes = document.createElement("textarea");

    notes.name = "Notes"
    notes.setAttribute('id', 'notes')
    const noteslabel = document.createElement("Label");
    noteslabel.setAttribute("for", priority);
    noteslabel.innerHTML = "Notes: ";
    inputContainer.appendChild(noteslabel);
    inputContainer.appendChild(notes)

    // const submitBtn = document.createElement('button')
    // submitBtn.textContent = "Add To-Do"
    // submitBtn.setAttribute('id', 'printBtn')
    // inputContainer.appendChild(submitBtn)

    content.appendChild(inputContainer)
    testInputValue()
}

export default taskInputs