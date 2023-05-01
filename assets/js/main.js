const btnPlayGame = document.querySelector("#playGame");
const memoryNumber = [];
const scelteNumber = [];
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



function createElement(tagHtml, classe, content) {
    const element = document.createElement(tagHtml);
    element.classList.add(classe);
    element.innerHTML = content;
    
    return Element;
}

function chiediNumeri(){
    if (test == true) {
        for (let i = 0; i < memoryNumber.length; i++) {
            let scelta = Number(prompt("scegli numero"));

            if (memoryNumber.includes(scelta)) {
                scelteNumber.push(scelta);
                
            }
        }
    }

    
}
//===endFUNCTION======================================================



btnPlayGame.addEventListener("click", function () {
    
    createNumber(memoryNumber)
    
    for (let i = 0; i < memoryNumber.length; i++) {
        const element = memoryNumber[i];
        const containerDiv = document.querySelector(".containerList");
        const containerList = document.createElement("ul");
        const itemList = document.createElement("li");
        
        containerDiv.appendChild(containerList);
        itemList.innerText += element;
        containerList.appendChild(itemList);
        document.body.append(containerDiv);
    }
    
    setTimeout(clear, 5000);
    setTimeout(chiediNumeri, 6000);
    
    
})

