let password1El = document.querySelector("#password1");
let password2El = document.querySelector("#password2");

let btnSettingsEl = document.querySelector("#btn-settings");
let settingLength = document.querySelector("#password-lenght");
let passLen = settingLength.value;
let settingSymbol = document.querySelector("#symbols");
let settingNumber = document.querySelector("#numbers");
let btnCloseEl = document.querySelector("#btn-close");
let btnSettingsGenerateEl = document.querySelector("#btn-settings-generate");


let btnGenerateEl = document.querySelector("#btn-generate");
let btnNewEl = document.querySelector("#btn-new");

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"] ;
const charNumber = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0", "1", "2", "3", "4", "5", "6", "7", "8", "9"] ;
const charSymbol = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"] ;
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];


btnSettingsEl.addEventListener("click", function(){
    document.getElementById("settings-menu").style.display = "block";
})

btnCloseEl.addEventListener("click", function(){
    document.getElementById("settings-menu").style.display = "none";
})

btnSettingsGenerateEl.addEventListener("click", function(){
    if (passLen === true){
        securePassword(passLen);
    }
})

btnGenerateEl.addEventListener("click", function(){
    securePassword();
})

btnNewEl.addEventListener("click", function(){
    password1El.textContent = "";
    password2El.textContent = "";
})



// PASSWORD GENERATING FUNCTIONS
function securePassword(len){
    for(let i = 0; i < len ; ++i){
        let letter = Math.floor(Math.random() * characters.length);
        password1El.textContent += characters[letter];
    }
    for(let j = 0; j < len; ++j){
        let letter = Math.floor(Math.random() * characters.length);
        password2El.textContent += characters[letter];
    }
}

function symbolsPassword(){
    for(let i = 0; i < 15 ; ++i){
        let sym = Math.floor(Math.random()*symbols.length);
        password1El.textContent += symbols[sym];
    }
    for(let j = 0; j < 15 ; ++j){
        let sym = Math.floor(Math.random()*symbols.length);
        password2El.textContent += symbols[sym];
    }
}

function numericPassword(){
    for(let i = 0; i < 15; ++i){
        let num = Math.floor(Math.random() * numbers.length);
        password1El.textContent += numbers[num];
    }
     for(let j = 0; j < 15; ++j){
        let num = Math.floor(Math.random() * numbers.length);
        password2El.textContent += numbers[num];
    }
}

function letterNumberPassword(){
    for(let i = 0; i < 15; ++i){
        let numChar = Math.floor(Math.random() * charNumber.length);
        password1El.textContent += charNumber[numChar];
    }
     for(let j = 0; j < 15; ++j){
        let numChar = Math.floor(Math.random() * charNumber.length);
        password2El.textContent += charNumber[numChar];
    }
}

function letterSymbolPassword(){
    for(let i = 0; i < 15; ++i){
        let symChar = Math.floor(Math.random() * charSymbol.length);
        password1El.textContent += charSymbol[symChar];
    }
     for(let j = 0; j < 15; ++j){
        let symChar = Math.floor(Math.random() * charSymbol.length);
        password2El.textContent += charSymbol[symChar];
    }
}

function letterPassword(){
    for(let i = 0; i < 15; ++i){
        let char = Math.floor(Math.random() * letters.length);
        password1El.textContent += letters[char]
    }
    for(let j = 0; j < 15; ++j){
        let char = Math.floor(Math.random() * letters.length);
        password2El.textContent += letters[char]
    }
}

