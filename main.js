const noButton = document.querySelector('.no-btn');
const yesButton = document.querySelector('.yes-btn');
const yesResponse = document.querySelector('.yes-response');

// variables
let yes = false;
const responses = [
    "Are you sure?",
    "Is that your final answer",
    "don't be mean :'(",
    "I know you don't mean that",
    "come on babe",
    "You're gonna make me sad"
]

function handleYesResponse() {
    yes = true;
    if (yes) {
        yesResponse.style.visibility = 'visible';
    }
}

function handleNoResponse() {
    const response = Math.floor(Math.random() * responses.length);

    console.log("Hello, World!")
    noButton.innerHTML = responses[response];
}

yesButton.addEventListener('click', handleYesResponse) 
noButton.addEventListener('click', handleNoResponse) 