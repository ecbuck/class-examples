const squareElement= document.querySelector('#square');

if (squareElement){
    squareElement.addEventListener('click', function (){
        
        const currentValue = squareElement.textContent;

        if(currentValue ===''){
            squareElement.textContent="x";
        }
        else if(currentValue === 'x'){
            squareElement.textContent="0";
        }
        else{
            squareElement.textContent='';
        }
    });
}