const nameInputElement= document.querySelector('#nameInput');
const setNameButtonElement= document.querySelector('#setNameButton');
const nameElement= document.querySelector('#name');
const bonusButtonElement= document.querySelector('#bonusButton');

setNameButtonElement.addEventListener('click', function(){
    const newName= nameInputElement.value;

    nameElement.textContent=newName;
});
bonusButtonElement.addEventListener('click', function (){
    const name = nameInputElement.value;
    alert('Hello, my name is ' +name);
});