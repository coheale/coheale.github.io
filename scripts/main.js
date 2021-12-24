let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');

    if(mySrc === 'images/cody.jpg') {
        myImage.setAttribute('src', 'images/test.jpg');
    } else {
        myImage.setAttribute('src', 'images/cody.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

// Sets user's name and uses in welcome prompt
// --Stores user's name in local storage
function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Welcome to my website, ' + myName;
    }
    
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome to my website, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}




// const myHeading = document.querySelector('.heading')
// myHeading.textContent = 'CODY WAS HERE';

// document.querySelector('.uw').onclick = function() {
//     alert('That was not very epic of you!');
// }
// function getSquareRoot(num) {
//     return Math.sqrt(num);
// }

// console.log(getSquareRoot(25));

// Messing around in JS
// let arr = [];

// arr[1] = 5;

// arr.push(5);
// arr.push("cheese");

// let set = new Set();

// set.add(5);
// set.add("hot dog");


// console.log(arr);
// console.log(set);
// console.log(set.has("hot dog"));