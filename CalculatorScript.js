
let pressedNumber;
let pressedNumberArray = [];
let numberModifier;
let labelContent;
let calculatedLabelContent;
function registerNumberInput(pressedNumber){
    labelContent = document.getElementById("numberLabel").textContent
    if(labelContent.includes("=")){
        labelContent = labelContent.replace("=",'')
        console.log(labelContent)
        document.getElementById("numberLabel").innerHTML = labelContent
    }
    
    document.getElementById("numberLabel").innerHTML += pressedNumber;}

function Calculate(){
    labelContent = document.getElementById("numberLabel").textContent
    if(!labelContent){
        return;
    }else if(labelContent.includes("=")){
        return;
    }
    console.log(labelContent)
    calculatedLabelContent = eval(labelContent)
    console.log(calculatedLabelContent)
    document.getElementById("numberLabel").innerHTML = "= " + calculatedLabelContent;}
         

function Clear(){
    document.getElementById("numberLabel").innerHTML = '';}
