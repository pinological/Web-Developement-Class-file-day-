// let x = 10;
// let y = 13;

// checkoddeve(x);
// checkoddeve(y);

// multi(x, y);

//void non return 

// function checkoddeve(num) {
//     if (num % 2 == 0) {
//         console.log("The given number is even");
//     } else {
//         console.log("The given number is odd");
//     }
// }

// function multi(num1, num2) {
//     console.log("The multi of " + num1 + " and " + num2 + " is " + (num1 * num2));
// }

//return function

// function checkoddeven(num) {
//     if (num % 2 == 0) {
//         return "Yes the number is even";
//     } else {
//         return "No the number is not even";
//     }

// }

//calculator 
//  add div multi sub 
let num1, num2, opration, ans;
num1 = parseInt(prompt("Enter your 1st number : "));
num2 = parseInt(prompt("Enter your 2nd number : "));
opration = prompt("Enter your oprtation [ + - * / : ]");

if (opration == "+") {
    ans = add(num1, num2);
} else if (opration == "-") {
    ans = subb(num1, num2);
} else if (opration == "-") {
    ans = subb(num1, num2);
} else if (opration == "*") {
    ans = multi(num1, num2);
} else if (opration == "/") {
    ans = division(num1, num2);
} else {
    console.log("Invalid symbole");
}

console.log("the oprtation of " + num1 + " " + opration + " " + num2 + " is " + ans);

function add(num1, num2) {
    return (num1 + num2)
}

function subb(num1, num2) {
    return (num1 - num2)
}

function division(num1, num2) {
    return (num1 / num2)
}

function multi(num1, num2) {
    return (num1 * num2)
}