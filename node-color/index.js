const arguements = process.argv;
const color  = arguements[2];

let greeting='';

// Validate input is a color.
if (color !== 'red' && 
    color !== 'blue' && 
    color !== 'green' && 
    color !== 'purple' && 
    color !== 'black') {
    console.log(`your color ${color} is not supported`);
    console.log('The supported colors are red, blue,green,purple, and black')
    
    return; 
}

if (color === 'red') {
    greeting = 'Go Utah!';
} 
else if (color === 'blue') {
    greeting = 'BYU, yuck!';
} 
else if ( color ==='green'){
    greeting= 'Kermit Rules!';
}
else if (color === 'purple') {
    greeting = 'Prince Rules!';
} 
else if (color === 'black') {
    greeting = 'You have no soul!';
} 
console.log(greeting)




