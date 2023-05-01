const btnPlayGame = document.querySelector("#playGame");
let computerNumber = [];
let userNumber = [];
let test = false;


// const main = document.querySelector(".main");


// const  containerDiv = document.createElement("div");
// const containerList = document.createElement("ul");
// const itemList = document.createElement("li");

//===startFUNCTION======================================================

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function clear() {
    document.querySelector(".containerList").innerHTML = "";
    test = true
}

function createNumber(array) {
    while (array.length < 5) {

        let number = getRandomArbitrary(1, 50);

        if (!array.includes[number]) {
            array.push(number);
        }

    }
}

function controlArray(arr1, arr2) {
    let intersection = arr1.filter(x => arr2.includes(x));
    return intersection
}

function createElement(tagHtml, classe, content) {
    const element = document.createElement(tagHtml);
    element.classList.add(classe);
    element.innerHTML = content;

    return Element;
}

function writeToElement(elementId, content) {
    document.getElementById(elementId).innerHTML = content;
}

function chiediNumeri() {
    if (test == true) {
        for (let i = 0; i < computerNumber.length; i++) {
            let scelta = Number(prompt("scegli numero"));

            if (computerNumber.includes(scelta)) {
                userNumber.push(scelta);
                // console.log(computerNumber);
                // console.log(userNumber);
            }
        }
    }
    let guessedIt = controlArray(computerNumber, userNumber);
    writeToElement("title", `Numbers remembered: ${guessedIt}`)
}

function countdown(timeLeft, timerId, elem) {
    if (timeLeft == 0) {
        clearTimeout(timerId);
        doSomething();
    } else {
        elem.innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
    }
}

//===endFUNCTION======================================================

btnPlayGame.addEventListener("click", function () {

    computerNumber = [];
    userNumber = [];

    let time = 30;
    let timer = document.getElementById('timer');

    let timerId = setInterval(countdown, 1000);

    function countdown() {
        if (time == -1) {
            clearTimeout(timerId);
            doSomething();
        } else {
            timer.innerHTML = time + ' seconds remaining';
            time--;
        }
    }       

    let title = document.getElementById("title");
    title.innerText = "Remeber this number"

    createNumber(computerNumber)

    for (let i = 0; i < computerNumber.length; i++) {
        const element = computerNumber[i];
        const containerDiv = document.querySelector(".containerList");
        const containerList = document.createElement("ul");
        const itemList = document.createElement("li");

        containerDiv.appendChild(containerList);
        itemList.innerText += element;
        containerList.appendChild(itemList);
        document.body.append(containerDiv);
    }



    setTimeout(clear, 31000);

    setTimeout(chiediNumeri, 32000);


})




function countdown(time, timerId) {
    if (time == 0) {
        clearTimeout(timerId);
        doSomething();
    } else {
        elem.innerHTML = time + ' seconds remaining';
        time--;
    }
}
