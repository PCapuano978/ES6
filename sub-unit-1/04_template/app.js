"use strict"

// Sets variable "John".
let name = 'class';

// Function declaration that capitillizes returned text it's applied to.
function makeUppercase(word){
    return word.toUpperCase();
}

// String varaible with temperate litteral applied to input both "class" for name and to uppercase "Hello"
let template = 
`<h1>${makeUppercase('Hello')}, ${name}!</h1>
<p> This is a simple template in JavaScript</p>`;

// Inputs the string varaible of "template" into HTML.
document.getElementById('template').innerHTML = template;