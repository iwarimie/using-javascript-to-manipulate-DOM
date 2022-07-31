//To Listen To An Event
// a) locate the DOM element that you anticipate the js event
//b) add event listener
//c) write the function that wuld be triggered when the event occurs

//a)
 let checkClickEvent = document.querySelector('.just-click');

//c)
function clickedMe () {
    checkClickEvent.textContent = 'Why Did You Click Me?';
    console.log('paragraph clicked!');
}
//b)
checkClickEvent.addEventListener('click', clickedMe);

//Adding Event Listener to input field

let inputField = document.querySelector('input');

function ifCliked (event) {
    // let getwhatIsTyped = inputField.value;
    let getwhatIsTyped = event.target.value;
    console.log(getwhatIsTyped);
}

inputField.addEventListener('input', ifCliked);

//listn to moveover event

let movehover = document.querySelector('a');
function checkMouseMove (event) {
    let listenTomouse = event.target.value;
    console.log(listenTomouse);
}

movehover.addEventListener ('mouseover', checkMouseMove);
