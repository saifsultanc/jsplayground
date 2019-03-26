// create the variables
const addItemsAction = document.querySelector('.addItems-action');
const input = document.querySelector('.addItems-input');
const submit = document.querySelector('.addItems-submit');

const list = document.querySelector('.grocery-list');
const displayItemsAction = document.querySelector('.displayItems-action');
const clear = document.querySelector('.displayItems-clear');

// event listeners
submit.addEventListener('click', addItem);
document.addEventListener('DOMContentLoaded', displayStorage);
clear.addEventListener('click', removeItems);
list.addEventListener('click', removeItem);

// functions
function addItem(event){
    event.preventDefault();

    // get the input value from the user form
    let value = input.value;

    // for empty value, display an error message
    if (value === ''){
        showAction(addItemsAction, 'Please add grocery item', false);
    }
    // for non empty values, process add item to the grocery list
    else {
        showAction(addItemsAction,`${value} added to the list`, true);
        // create the item in the dom
        createItem(value);
        // also update the new item to local storage
        updateStorage(value);
    }
}

// show Action function
function showAction(element, text, value){
    
    if (value === true){
        element.classList.add('success');
        element.innerText = text;
        input.value = '';
        setTimeout(function(){
            element.classList.remove('success');
        }, 3000);
    }
    else {
        element.classList.add('alert');
        element.innerText = text;
        setTimeout(function(){
            element.classList.remove('alert');
        }, 3000);        
    }
}

// create item function
function createItem(value){

    let parent = document.createElement('div');
    parent.classList.add('grocery-item');
    parent.innerHTML = `
        <h4 class="grocery-item__title">${value}</h4>
        <a href='#' class="grocery-item__link">
            <i class="far fa-trash-alt"></i>
        </a>
    `;
    list.appendChild(parent);
}

// update storage function
function updateStorage(value){
    let groceryList;  

    // check if the groceryList storage data is already created on the local Storage
    let exists = localStorage.getItem('groceryList');

    // if it does, then we have to read in all the previously stored data
    if (exists){
        groceryList = JSON.parse(localStorage.getItem('groceryList'));
    }
    // if it does not, then groceryList must be initialized as empty
    else{
        groceryList = [];
    }

    // now push the new value
    groceryList.push(value);

    // finally update on the local storage
    localStorage.setItem('groceryList', JSON.stringify(groceryList));
}

// display storage function
function displayStorage(){
    // check if the groceryList storage data is already created on the local Storage
    let exists = localStorage.getItem('groceryList');

    // if it does, then we have to read in all the previously stored data
    if (exists){
        let storageItems = JSON.parse(localStorage.getItem('groceryList'));

        storageItems.forEach(function(element){
            createItem(element);
        });
    }    
}

// clear items function
function removeItems(){
    // empty out local storage
    localStorage.removeItem('groceryList');

    // empty out values from dom
    let items = document.querySelectorAll('.grocery-item');
    if (items.length > 0){
        
        showAction(displayItemsAction,'All items deleted', false);
        items.forEach(function(element){
            list.removeChild(element);
        });
    }
    else {
        showAction(displayItemsAction, 'No more items to delete', true);
    }
}

// remove single item function
function removeItem(){
    event.preventDefault();

    let link = event.target.parentElement;
    if (link.classList.contains('grocery-item__link')){
        let text = link.previousElementSibling.textContent;

        let groceryItem = event.target.parentElement.parentElement;

        // remove from the list
        list.removeChild(groceryItem);
        showAction(displayItemsAction, `${text} removed from the list`, true);

        // remove from the local storage
        editStorage(text);
    }
}

// remove item from storage
function editStorage(item){
    let groceryItems = JSON.parse(localStorage.getItem('groceryList'));

    let index = groceryItems.indexOf(item);

    groceryItems.splice(index, 1);

    localStorage.removeItem('groceryList');
    localStorage.setItem('groceryList', JSON.stringify(groceryItems));
}