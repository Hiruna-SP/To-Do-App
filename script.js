const inputfield = document.getElementById('inputfield');
const listContainer = document.getElementById('listContainer');

function AddTask(){
    if (inputfield.value === '') {
        alert('Please enter a task');
        return;
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputfield.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00D7'; // Unicode for multiplication sign (×)
        li.appendChild(span);
    }
    inputfield.value = '';
    savedata();


}

listContainer.addEventListener('click', function(e) {
    if (e.target.tagName === "LI"){
        e.target.classList.toggle('checked');
        savedata();

    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedata();
    }

}, false);

const savedata = () => {
    localStorage.setItem('data', listContainer.innerHTML);
}

const showtask = () => {
    listContainer.innerHTML = localStorage.getItem('data');
}

showtask();