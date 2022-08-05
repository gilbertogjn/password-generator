const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R",
    "S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n",
    "o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7",
    "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",
    ",","|",":",";","<",">",".","?","/"];
let password1 = document.getElementById("password-1")
let password2 = document.getElementById("password-2")
let copyTextPw1 = document.getElementById("copy-text-pw1")
let copyTextPw2 = document.getElementById("copy-text-pw2")

function generatePasswords() {
    setPassword1()
    setPassword2()
    copyTextPw1.textContent = ""
    copyTextPw2.textContent = ""
}

function setPassword1() {
    let digitsPassword = generate()
    password1.textContent = digitsPassword.join("")
}

function setPassword2() {
    let digitsPassword = generate()
    password2.textContent = digitsPassword.join("")
}

function generate() {
    let digits = []
    for(let i = 0; i < 15; i++) {
        let randomNum = Math.floor(Math.random() * characters.length)
        digits.push(characters[randomNum])
    }
    return digits
}

function copyPassword1() {
    navigator.clipboard.writeText(password1.textContent)
    if(password1.textContent === "") {
    } else {
        copyTextPw1.textContent = "Password copied."
    }
}

function copyPassword2() {
    navigator.clipboard.writeText(password2.textContent)
    if(password2.textContent === "") {
    } else {
        copyTextPw2.textContent = "Password copied."
    }
}