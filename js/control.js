let counter = 0;
let input = document.getElementById('inputTask');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaList')

function addTask() {
    //get input value
    let inputValue = input.value;

    //if it is not empty, not null, not undefined
    if((inputValue !=="") && (inputValue !== null) && (inputValue !== undefined)) {
        
        ++counter;
        
        let newItem = `<div id="${counter}" class="item">
            <div onclick="markTask(${counter})" class="item-icon">
                <i id="icon_${counter}" class="mdi mdi-circle-outline"></i>
            </div>
            <div onclick="markTask(${counter})" class="item-name">
                ${inputValue}
            </div>
            <div class="item-button">
                <button onclick="deleteTask(${counter})" class="delete"><i class="mdi mdi-delete"></i></button>

            </div>
        </div>`;

        //add new item in main
        main.innerHTML += newItem;

        //reset the fields
        input.value = "";
        input.focus();
    }
}

function deleteTask(id) {
    var task = document.getElementById(id);
    task.remove();
}

function markTask(id) {
    var item = document.getElementById(id)
    var clas = item.getAttribute('class');

    if(clas=='item') {
        item.classList.add('clicked')

        var icon = document.getElementById('icon_' + id);
        icon.classList.remove('mdi-circle-outline');
        icon.classList.add('mdi-check-circle');

        item.parentNode.appendChild(item);

    } else {
        item.classList.remove('clicked')

        var icon = document.getElementById('icon_' + id);
        icon.classList.remove('mdi-check-circle');
        icon.classList.add('mdi-circle-outline');

    }

}

input.addEventListener("keyup", function(event){
    if(event.keyCode === 13) {
        event.preventDefault();
        btnAdd.click();
    }
})