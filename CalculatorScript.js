
let pressedNumber;
function registerNumberInput(pressedNumber){
    document.getElementById("numberLabel").innerHTML += pressedNumber
    console.log(pressedNumber)
    console.log(document.getElementById("numberLabel").innerHTML)
}

function addNumbers(){
    if(document.getElementById("numberLabel").includes("2")){
        consolelog("yes");
    }
}