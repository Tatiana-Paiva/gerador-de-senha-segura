// Seleção de Elementos

const generatePasswordButton = document.querySelector("#generate-password");
const generatedPasswordElement = document.querySelector("#generated-password");

// Funções

const getLetterLowerCase = () => {
     return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

const getLetterUperCase = () =>  {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

const getNumber = () => {
    return Math.floor(Math.random() * 10).toString();
}

const getSymbol = () => {
const symbols = "() {} [] ! _ - + = , . _ $ & # @ ' %  < > /";
return symbols[Math.floor(Math.random() * symbols.length)];
}

console.log(getSymbol());

// Eventos

generatePasswordButton.addEventListener("click", () => {
    console.log("testando evento");
})