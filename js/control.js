let input = document.getElementById('inputTask');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaList')

function addTask() {
    //get input value
    let inputValue = input.value;

    //if it is not empty, not null, not undefined
    if((inputValue !=="") && (inputValue !== null) && (inputValue !== undefined)) {
        let newItem = `<div class="item">
            <div class="item-icon">
                <i class="mdi mdi-circle-outline"></i>
            </div>
            <div class="item-name">
                ${inputValue}
            </div>
            <div class="item-button">
                <button class="delete"><i class="mdi mdi-delete"></i>Delete</button>

            </div>
        </div>`;

        //add new item in main
        main.innerHTML += newItem;

        //reset the fields
        input.value = "";
        input.focus();
    }
}

input.addEventListener("keyup", function(event){
    if(event.keyCode === 13) {
        event.preventDefault();
        btnAdd.click();
    }
})