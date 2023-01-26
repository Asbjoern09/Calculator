
let pressedNumber;
let pressedNumberArray = [];
let numberModifier;
let labelContent;
let addedNumbers = [];
let subtractedNumbers = [];
let multipliedNumbers = [];
let dividedNumbers = [];
function registerNumberInput(pressedNumber){
    document.getElementById("numberLabel").innerHTML += pressedNumber;
    pressedNumberArray.push(pressedNumber)
    console.log(pressedNumber)
    console.log(pressedNumberArray)
}



function Calculate(){
    labelContent = document.getElementById("numberLabel").textContent

    //while(labelContent.includes("*") || labelContent.includes("+") || labelContent.includes("-")){

    if(labelContent.includes("*")){
        multipliedNumbers = labelContent.split('*')
        labelContent = labelContent.replace("*", '');
        for (let i = 0; i<multipliedNumbers.length; i++) {
            multipliedNumbers[i] = parseInt(multipliedNumbers[i])
         }
         let result = multipliedNumbers[0] * multipliedNumbers[1]
         console.log(multipliedNumbers)
         console.log(result)
         console.log(labelContent)
    }
    else if(labelContent.includes("/")){
        dividedNumbers = labelContent.split('/')
        labelContent = labelContent.replace("/", '');
        for (let i = 0; i<dividedNumbers.length; i++) {
            dividedNumbers[i] = parseInt(dividedNumbers[i])
         }
         let result = dividedNumbers[0] / dividedNumbers[1]
         console.log(dividedNumbers)
         console.log(result)
         console.log(labelContent)
    }
    else if(labelContent.includes("+")){
        addedNumbers = labelContent.split('+');
        labelContent = labelContent.replace("+", '');
        for (let i = 0; i<addedNumbers.length; i++) {
           addedNumbers[i] = parseInt(addedNumbers[i])
        }
        let sum = addedNumbers[0] + addedNumbers[1]
        console.log(addedNumbers)
        console.log(sum)
        console.log(labelContent)
        return sum;
    }
    else if(labelContent.includes("-")){
        labelContent = labelContent.replace("-", '');
        subtractedNumbers = labelContent.split('-')
        for (let i = 0; i<subtractedNumbers.length; i++) {
            subtractedNumbers[i] = parseInt(subtractedNumbers[i])
         }
         let result = subtractedNumbers[0] - subtractedNumbers[1]
         console.log(subtractedNumbers)
         console.log(result)
         console.log(labelContent)
         
    //}
}
}