const passwordBox = document.getElementById("password");
const btn = document.getElementById("btn");
const copyIcon = document.getElementById("copy");

const length = 16;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!£$%^&*()_+-`¬@?><#~";

const allChars = upperCase + lowerCase + numbers + symbols;

// helper function
function getRandomChar(str) {
    return str[Math.floor(Math.random() * str.length)];
}

// shuffle function (Fisher–Yates)
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// generate password
function generatePassword() {
    let passwordArray = [];

    passwordArray.push(getRandomChar(upperCase));
    passwordArray.push(getRandomChar(lowerCase));
    passwordArray.push(getRandomChar(numbers));
    passwordArray.push(getRandomChar(symbols));

    while (passwordArray.length < length) {
        passwordArray.push(getRandomChar(allChars));
    }

    return shuffle(passwordArray).join("");
}

// button click
btn.addEventListener("click", () => {
    const password = generatePassword();
    passwordBox.value = password;
});

// copy click
copyIcon.addEventListener("click", () => {
    navigator.clipboard.writeText(passwordBox.value)
        .then(() => console.log("Copied!"))
        .catch(err => console.error(err));
});