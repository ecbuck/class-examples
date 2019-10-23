const nameInputElement= document.querySelector('#nameInput');
const setNameButtonElement= document.querySelector('#setNameButton');
const nameElement= document.querySelector('#name');

setNameButtonElement.addEventListener('click', function(){
    const newName= nameInputElement.value;

    nameElement.textContent=newName;
});