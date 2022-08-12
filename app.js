const input = document.querySelector('input');
const btnAdd = document.querySelector('.add-button');
const btnRemoveAll = document.querySelector('.remove-all-task');
const ul = document.querySelector('ul');
const msgNoTask = document.querySelector('.noTask');
let arrayTask = [];



if (localStorage.getItem('task')) {
    arrayTask = JSON.parse(localStorage.getItem('task'));
    render();
}

btnAdd.addEventListener('click', (e) => {
    e.preventDefault(e);
    const inputValue = input.value;
    console.log(inputValue);

    if (inputValue) {

        arrayTask.push(inputValue);
        render();

        console.log(arrayTask)

        localStorage.setItem('task', JSON.stringify(arrayTask)); 
    
        input.value = '';

    }
})

function render() {

    ul.innerHTML = '';

    for (let value of arrayTask) {
        const li = document.createElement('li');
        const p = document.createElement('p');

        p.textContent = value;

        li.appendChild(p);
        li.appendChild(removeTask()); //aquí se crea el botón de eliminar item
        ul.appendChild(li);
    }

    if (arrayTask.length === 0) {
        msgNoTask.style.display = "block";
    } else msgNoTask.style.display = "none";
}

function removeTask() {
    const removeTaskButton = document.createElement('button');
    removeTaskButton.textContent = 'X';
    removeTaskButton.className = 'remove-task';

    removeTaskButton.addEventListener('click', (e) => {

       /*  const item = e.target.parentElement;
        let itemRemove = ul.removeChild(item).textContent;
        let clearItem = itemRemove.replace("X", "")
        console.log(clearItem);

        arrayRemoveTask.push(clearItem);

        console.log(arrayRemoveTask)


        const items = document.querySelectorAll('li');
        if (items.length === 0) {
            msgNoTask.style.display = "block";
        } */

        let taskToRemove = e.target.parentElement.innerText;
        taskToRemove = taskToRemove.replace("X", "").trim();
        console.log(taskToRemove);


        arrayTask = arrayTask.filter(e => e !== taskToRemove);

        console.log(arrayTask);

        render();

        localStorage.setItem('task', JSON.stringify(arrayTask)); 
        
    })

    return removeTaskButton
}


btnRemoveAll.addEventListener('click', (e) => {
    e.preventDefault(e);
    arrayTask = [];
    render();
    localStorage.clear();
});




