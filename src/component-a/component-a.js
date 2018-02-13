import './component-a.scss';


console.log('Module a.js');


const MULTIPLIER = 3;


function someFunction(value) {
    return value * MULTIPLIER;
}


function logMessage(message) {
    console.log(message);
}

export { someFunction, logMessage };
