// console.dir(document);

// console.log(document.domain);

// console.log(document.all);

// console.log(document.all[9]);

// GET ELEMENT BY ID 
// let selection = document.getElementById('toptext');

// selection.style.backgroundColor = "red";

//GET ELEMENT BY CLASSNAME 

// let selection = document.getElementsByClassName('list-item');



// for (let i = 0; i < selection.length; i++) {
//     if ((i + 1) % 2 == 0) {
//         selection[i].style.color = "red";
//     }
// }

// querySelector

// let selection = document.querySelector('.list-item');

// selection.style.color = "red";


// console.log(selection);

// querySelectorall

// let selection = document.querySelectorAll('.list-item');

// console.log(selection);

//traversing the node

// let selection = document.querySelector('.list-item:nth-child(3)');

// console.log();

//Create Node
let newDiv = document.createElement('div');

newDiv.className = "demo";

newDiv.id = "demo ID";

newDiv.style.color = "red";

newDiv.setAttribute('title', 'hello world')


// textNode 
let newDivText = document.createTextNode("hello world");


//Append Child

newDiv.appendChild(newDivText);

//put inside HTML

let maincontain = document.querySelector('.search');

let textelement = document.querySelector('type[type="text"]');

maincontain.insertBefore(newDiv, textelement);







console.log(newDiv);