function $(selector) {
    return document.querySelector(selector);
}

const passwordOutput = $('#password');
const copyPasswordBtn = $('#copy-password-btn');
const generatePasswordBtn = $('#generate-password-btn');
const upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const lowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '=', '+', '[', ']', '{', '}', '\\', '|', '<', ',', '>', '.', '?', '/', '"', '\'', ';', ':'];
const characterMapping = [
    {
        length: 26,
        options: upperCaseLetters
    },
    {
        length: 26,
        options: lowerCaseLetters,
    },
    {
        length: 10,
        options: digits
    },
    {
        length: 30,
        options: specialCharacters
    }
];

generatePasswordBtn.addEventListener('click', handleGeneratePasswordBtnClick);

function handleGeneratePasswordBtnClick() {
    const password = generatePassword();
    passwordOutput.value = password;
}

function generatePassword() {
    let password = '';

    for (let i = 0; i < 16; ++i) {
        const type = Math.floor(Math.random() * 4);
        const mapping = characterMapping[type];
        const length = mapping.length;
        const options = mapping.options;
        const randomIndex = Math.floor(Math.random() * length);
        const randomCharacter = options[randomIndex];
        password = password.concat(randomCharacter);
    }

    return password;
}

copyPasswordBtn.addEventListener('click', handleCopyPasswordBtn);

function handleCopyPasswordBtn() {
    navigator.clipboard.writeText(passwordOutput.value);
}