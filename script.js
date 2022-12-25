//DOM Selectors
const form = document.querySelector('#new-task-form');
const form_submit = document.querySelector('#new-task-submit');
const todoList = document.querySelector('#tasks');
const inputEl = document.querySelector('#new-task-input');

form.addEventListener('submit', (e) => {    
    e.preventDefault();
    let task = inputEl.value.trim();
    let taskS = inputEl.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");
    if(!task || !taskS){
        console.log('Enter a valid task');
        alert('Enter Valid task')
        return
    }
    
    //Create a new todo Item once the user submits the form
    const task_el = document.createElement('div')
    task_el.classList.add('task');
    // task_el.innerText = task;

    //Append new todo item to todoList
    todoList.appendChild(task_el);

    //
    const content_el = document.createElement('div');
    content_el.classList.add('content')

    const input_el = document.createElement('input');
    input_el.setAttribute('readonly', 'readonly');
    input_el.classList.add('text');
    input_el.type = 'text';
    input_el.value = task;

    //Append content_el to task_el
    task_el.appendChild(content_el);

    content_el.appendChild(input_el)

    const controls = document.createElement('div');
    controls.classList.add('actions');

    task_el.appendChild(controls)
   
    const editBtn = document.createElement('button');
    editBtn.classList.add('edit')
    editBtn.innerText = 'Edit'
    controls.appendChild(editBtn)

    const delBtn = document.createElement('button');
    delBtn.classList.add('delete')
    delBtn.innerText = 'Delete'
    controls.appendChild(delBtn);

    editBtn.addEventListener('click', () => {
        if(editBtn.innerText.toLowerCase() == 'edit'){
            input_el.removeAttribute('readonly')
            input_el.focus();
            editBtn.innerText = 'Save';
        }else{
            input_el.setAttribute('readonly', 'readonly')
            editBtn.innerText = 'Edit';
        }
       
    })

    delBtn.addEventListener('click', () => {
        todoList.removeChild(task_el);
    })

    console.log(todoList)
    inputEl.value ='';
})