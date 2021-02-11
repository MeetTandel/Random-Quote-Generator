//Time of the day
function greet() {
    let today = new Date();
    let currentHour = today.getHours();
    let currentTime;

    if (currentHour >= 0 && currentHour < 12) {
        currentTime = "morning";
    }
    else if (currentHour >= 12 && currentHour < 17) {
        currentTime = "afternoon";
    }
    else if (currentHour >= 17 && currentHour < 20) {
        currentTime = "evening";
    }
    else {
        currentTime = "night";
    }

    return currentTime;
}
document.querySelector("#day").innerHTML = greet();

//Quote of the day
let quoteArr = [
    ["Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", "– Martin Fowler"],
    ["First, solve the problem. Then, write the code.", "– John Johnson"],
    ["Experience is the name everyone gives to their mistakes.", "– Oscar Wilde"],
    ["In order to be irreplaceable, one must always be different.", "– Coco Chanel"],
    ["Java is to JavaScript what car is to Carpet.", "- Chris Heilmann"],
    ["Code is like humor. When you have to explain it, it’s bad.", "– Cory House"],
    ["Fix the cause, not the symptom.", "– Steve Maguire"],
    ["Simplicity is the soul of efficiency.", "– Austin Freeman"],
    ["Before software can be reusable it first has to be usable.", "– Ralph Johnson"],
    ["Make it work, make it right, make it fast.", "– Kent Beck"]
];
let colorArr = [
    ['#be9e2a'],
    ['#cc8d8d'],
    ['#c06c84'],
    ['#1da1a3'],
    ['#6778c5'],
    ['#f67280'],
    ['#6a78b8'],
    ['#ff847c'],
    ['#46b995'],
    ['#1891ac']
];
function newQuote() {
    let randomNumber = Math.floor(Math.random() * quoteArr.length);
    console.log(quoteArr[randomNumber][quoteArr.length - 1]);

    //change quote when button is clicked 
    document.querySelector("#quoteDisplay").innerHTML = quoteArr[randomNumber][0];
    document.querySelector("#author").innerHTML = quoteArr[randomNumber][1];

    //change color of container button and quotes when button is clicked
    document.body.style.backgroundColor = colorArr[randomNumber];
    document.querySelector("#btn").style.backgroundColor = colorArr[randomNumber];
    document.querySelector("#quoteDisplay").style.color = colorArr[randomNumber];
    document.querySelector("#author").style.color = colorArr[randomNumber];
}

