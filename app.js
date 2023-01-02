//Selectors
var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input")
var outputDiv = document.querySelector("#output");
var errorText = document.querySelector(".error")

//Server URL
var serverURL = "https://api.funtranslations.com/translate/pirate.json"
/*var serverURL1 = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"*/


//Functions and events

function getURL(input){
    return serverURL + "?" + "text=" + input
}

function errorHandler(error){
    console.log("ERROR", error);
    alert("Error with server! Try again after some time.")
}

function clickHandler(){
    var inputText = txtInput.value;
    fetch(getURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
            })
        .catch(errorHandler)    
};

btnTranslate.addEventListener("click", clickHandler);