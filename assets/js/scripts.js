// Seleção de Elementos

const generatePasswordButton = document.querySelector("#generate-password");
const generatedPasswordElement = document.querySelector("#generated-password");

// Funções
const getLetterLowerCase = () => {
  return console.log(String.fromCharCode(Math.floor(Math.random() * 26) + 97));
};

const getLetterUperCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  };

  const getNumber = () => {
    return Math.floor( Math.random() * 10).toString();
  }

  const getSymbol = () => {
    const symbols = "() {} [] = <> / , . ! @ & # $ % - _ +";
    return symbols[Math.floor(Math.random() * symbols.length)];
  }

 const generatePassword = (getLetterLowerCase, getLetterUperCase, getNumber, getSymbol) => {
  let password = "";

  const passwordLength = 10;

  const generators = [
    getLetterLowerCase,
    getLetterUperCase,
    getNumber,
    getSymbol
  ]
  for(i = 0; i < passwordLength; i = i + generators.length) {
    generators.forEach(() =>{
      const randomValue = generators[Math.floor(Math.random() * generators.length)]()

      console.log(randomValue);
    } )
  }

 }

// Eventos

generatePasswordButton.addEventListener("click", () => {
   generatePassword(
     getLetterLowerCase,
     getLetterUperCase,
     getNumber,
     getSymbol
    );
})