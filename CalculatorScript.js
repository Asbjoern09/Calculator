
let pressedNumber;
let pressedNumberArray = [];
let numberModifier;
let labelContent;
let addedNumbers = [];
function registerNumberInput(pressedNumber){
    document.getElementById("numberLabel").innerHTML += pressedNumber;
    pressedNumberArray.push(pressedNumber)
    console.log(pressedNumber)
    console.log(pressedNumberArray)
}



function Calculate(){
    labelContent = document.getElementById("numberLabel").textContent
    
    let wherePlusAt = labelContent.indexOf("+")
    if(labelContent.includes("+")){
        addedNumbers = labelContent.split('+')
        for (let i = 0; i<addedNumbers.length; i++) {
           addedNumbers[i] = parseInt(addedNumbers[i])
        }
        let sum = addedNumbers[0] + addedNumbers[1]
        console.log(addedNumbers)
        console.log(sum)
        return sum;
    }
    
}