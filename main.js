console.dir(document);

//ASSIGNMENT --1 
let h1Element = document.body.children[0];
console.dir(h1Element);

//ASSIGNMENT --2
let parentElement = h1Element.parentElement;
console.dir(parentElement);

let siblingElement = h1Element.nextElementSibling;
console.dir(siblingElement);

//ASSIGNMENT --3
let h1ElementUsingIds = document.getElementById('fetchH1');
console.dir(h1ElementUsingIds);

//ASSIGNMENT--4
let pElement = document.querySelector('.fetchPTag');
console.dir(pElement);

//ASSIGNMENT--5
pElement = 'The link is gone';
console.dir(pElement);

//HOW TO CREATE ELEMENT IN JAVASCRIPT
//1. FIRST CREATE THE Element
let newAnchourtag = document.createElement('a');
// newAnchourtag.setAttribute('.set');
newAnchourtag.textContent = 'checkout my github profile and repository';
newAnchourtag.href = 'https://github.com/iwarimie';

//2. Locate the parent element that it would be attached
let parentElementToBeAttached = document.querySelector('main p');

//3. attach it to the parent element
parentElementToBeAttached.append(newAnchourtag);

//HOW TO REMOVE ELEMENT
//1. locate the element and remove it
let paragraphToDelete = parentElementToBeAttached.nextElementSibling;

// remove it
paragraphToDelete.remove();

//MOVE H1 TOTHE END
let moveh1 = document.querySelector('h1');
console.dir(moveh1);
console.dir(parentElementToBeAttached);
let parentElementForH1 = document.querySelector('main');
console.dir(parentElementForH1);

let checkparent = moveh1.parentElement;
console.dir(checkparent);
moveh1.parentElement.append(moveh1);

// moveh1.parentElementToBeAttached.append(moveh1);

//Working with innerHTML

let newParagraph = document.createElement('p');
newParagraph.textContent = 'This is a new paragraph I want to use to test "innerHTML"';

// console.dir(parentElementToBeAttached);

let parentToAttach = document.querySelector('main');

parentToAttach.append(newParagraph);

newParagraph.innerHTML = 'I think I am getting along with <strong>JavaScript</strong>';

