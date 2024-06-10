const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "0123456789";
const symbolChars = "!-$^+";
const spaceChars = " ";

const getRandonChar = chars => chars[Math.floor(Math.random() * chars.length)];

const generatePassword = () => {
    const passwordInput = document.getElementById("password");
    const lowercaseCheckbox = document.getElementById("lowercase");
    const uppercaseCheckbox = document.getElementById("uppercase");
    const numberCheckbox = document.getElementById("numbers");
    const symbolsCheckbox = document.getElementById("symbols");
    const excludeDuplicateCheckbox = document.getElementById("exc-duplicate");
    const spacesCheckbox = document.getElementById("spaces");

    let characters = "";
    if (lowercaseCheckbox.checked) characters += lowercaseChars;
    if (uppercaseCheckbox.checked) characters += uppercaseChars;
    if (numberCheckbox.checked) characters += numberChars;
    if (symbolsCheckbox.checked) characters += symbolChars;
    if (spacesCheckbox.checked) characters += spaceChars;

    if (characters === ""){
        passwordInput.value = "";
        return;
    }

    let password = "";
    const length = 12;

    while(password.length < length) {
        let char = getRandonChar(characters);
        if (excludeDuplicateCheckbox.checked && password.includes(char)) continue;
        password += char;
    }

    passwordInput.value = password;
}

const copyPassword = () => {
    const passwordInput = document.getElementById("password");
    const copyButton = document.getElementById("copy");

    passwordInput.disabled = false;
    passwordInput.select();
    document.execCommand("copy");
    passwordInput.disabled = true;

    copyButton.textContent ="copied";
    setTimeout(() => {
        copyButton.textContent = "copy";
    }, 2000);
}
