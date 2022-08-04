const input = document.querySelector('input');
const btnAdd = document.querySelector('.add-button');
const btnRemoveAll = document.querySelector('.remove-all-task');
const ul = document.querySelector('ul');
const msgNoTask = document.querySelector('.noTask');


btnAdd.addEventListener('click', (e) => {
    e.preventDefault(e);
    const inputValue = input.value;
    console.log(inputValue);

    if (inputValue !== '');

    const li = document.createElement('li');
    const p = document.createElement('p');
    
    p.textContent = inputValue;

    li.appendChild(p);
    li.appendChild(removeTask());
    ul.appendChild(li);

    input.value = '';
    msgNoTask.style.display = "none";


})

function removeTask() {
    const removeTaskButton = document.createElement('button');
    removeTaskButton.textContent = 'X';
    removeTaskButton.className = 'remove-task';

    removeTaskButton.addEventListener('click', (e) => {
        const item = e.target.parentElement;
        ul.removeChild(item);
        
        const items = document.querySelectorAll('li');
        if (items.length === 0) {
            msgNoTask.style.display = "block";
        } 
    });

    return removeTaskButton
}

msgNoTask.addEventListener('click', removeTask());
