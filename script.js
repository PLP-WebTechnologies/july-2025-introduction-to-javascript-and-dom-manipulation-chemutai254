// Variables
let main_title = "Mastering JavaScript Fundamentals <br>";
let part_1 = "Mastering JavaScript Basics <br>";
let part_2 = "JavaScript Functions - The Heart of Reusability <br>";
let part_3 = "JavaScript Loops - Embrace the Power of Repetition! <br>";
let part_4 = "Mastering the DOM with JavaScript";
// let string = "JavaScript - variables, data types, operators, and conditionals building blocks";

document.getElementById("output").innerHTML = main_title + part_1 + part_2 + part_3 + part_4;

// Functions, arrays, loops, and objects building blocks
// If statements
let num1 = 10;
if (num1 % 2 === 0) {
    console.log(`${num1} is an even number.`);
} else {
    console.log('${num1} is an odd number.');
}

// Loop
for (let i = 1; i <= 15; i++) {
    console.log(`Counting: ${i}`);
}

// Arrays
let subjects = ["HTML", "CSS", "JavaScript", "Math", "English", "Swahili", "Data Science"];
// for (let i = 0; i < subjects.length; i++) {
//     console.log(`Subject ${i + 1}: ${subjects[i]}`);
// }

// Functions
function listSubjects() {
    for (let i = 0; i < subjects.length; i++) {
    console.log(`Subject ${i + 1}: ${subjects[i]}`);
    }
}
listSubjects();

// Objects
// let student = {
//     name: "Nancy Chemutai",
//     age: 20,
//     courses: ["HTML", "CSS", "JavaScript"]
// };

// Listeners
document.getElementById("output").addEventListener('click', function(){
    alert("You Clicked Me!");
        }
);


