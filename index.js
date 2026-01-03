let password1El = document.querySelector("#password1");
let password2El = document.querySelector("#password2");

let btnSettingsEl = document.querySelector("#btn-settings");
let settingLength = document.querySelector("#password-lenght");

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
    emptyMemory();
    const passLen = Number(settingLength.value);
    if(isNaN(passLen) || passLen < 10 || passLen > 30){
        defaultPassword();
        return;
    }
    else if(settingNumber.checked && settingSymbol.checked){
        securePassword(passLen);
    }
    else if(settingSymbol.checked){
        letterSymbolPassword(passLen);
    }
    else if(settingNumber.checked){
        letterNumberPassword(passLen);
    }
    else{
        letterPassword(passLen);
    }
})

btnGenerateEl.addEventListener("click", function(){
    defaultPassword();
})

btnNewEl.addEventListener("click", function(){
    emptyMemory();
})

password1El.addEventListener("click", function(){
    copyText();
})

password2El.addEventListener("click",function(){
    copyText();
})

// FUNCTION TO CLEAR PREVIOUS PASSWORD
function emptyMemory(){
    if((password1El.textContent != "") && (password2El.textContent != "")){
        password1El.textContent = "";
        password2El.textContent = "";
    }
}

// PASSWORD GENERATING FUNCTIONS
function defaultPassword(){
    emptyMemory();
    for(let i = 0; i < 15 ; ++i){
        let char = Math.floor(Math.random() * characters.length);
        password1El.textContent += characters[char];
    }
    for(let j = 0; j < 15; ++j){
        let char = Math.floor(Math.random() * characters.length);
        password2El.textContent += characters[char];
    }
}

function securePassword(len){
    for(let i = 0; i < len ; ++i){
        let char = Math.floor(Math.random() * characters.length);
        password1El.textContent += characters[char];
    }
    for(let j = 0; j < len; ++j){
        let char = Math.floor(Math.random() * characters.length);
        password2El.textContent += characters[char];
    }
}

function letterNumberPassword(len){
    emptyMemory();
    for(let i = 0; i < len; ++i){
        let numChar = Math.floor(Math.random() * charNumber.length);
        password1El.textContent += charNumber[numChar];
    }
     for(let j = 0; j < len; ++j){
        let numChar = Math.floor(Math.random() * charNumber.length);
        password2El.textContent += charNumber[numChar];
    }
}

function letterSymbolPassword(len){
    emptyMemory();
    for(let i = 0; i < len; ++i){
        let symChar = Math.floor(Math.random() * charSymbol.length);
        password1El.textContent += charSymbol[symChar];
    }
     for(let j = 0; j < len; ++j){
        let symChar = Math.floor(Math.random() * charSymbol.length);
        password2El.textContent += charSymbol[symChar];
    }
}

function letterPassword(len){
    for(let i = 0; i < len; ++i){
        let char = Math.floor(Math.random() * letters.length);
        password1El.textContent += letters[char]
    }
    for(let j = 0; j < len; ++j){
        let char = Math.floor(Math.random() * letters.length);
        password2El.textContent += letters[char]
    }
}

function copyText(){
    const text1 = document.querySelector(".copy-text").textContent;
    navigator.clipboard.writeText(text1).then(()=>{
        alert("Password Copied!");
    }).catch(err =>{
        alert("Could not copy text");
    })
}