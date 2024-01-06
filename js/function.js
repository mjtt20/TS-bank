
function inputValue(firstID) {
    const getElementById = document.getElementById(firstID);
    const value = getElementById.value;
    const numberType = parseFloat(value);
    getElementById.value = '';
    return numberType;
}

function textValue(firstID) {
    const getElementById = document.getElementById(firstID);
    const innerText = getElementById.innerText;
    const numberType = parseFloat(innerText);
    return numberType;
}


function setValue(firstID, secoundID) {
    const setInnertext = document.getElementById(firstID);
    setInnertext.innerText = secoundID;
}

function updateParagraph(input) {
    var userInput = document.getElementById(input).value;
    if (isNaN(userInput)) {
        alert('!!!!please enter number!!!!')
        document.getElementById(input).value = '';
    } 
    else{
        
    }
}


