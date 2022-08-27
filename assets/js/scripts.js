// Seleção de Elementos

const generatePasswordButton = document.querySelector("#generate-password");
const generatedPasswordElement = document.querySelector("#generated-password");

// Funções
const getLetterLowerCase = () => {
  return console.log(String.fromCharCode(Math.floor(Math.random() * 26) + 97));
};

const getLetterUperCase = () => {
    return console.log(String.fromCharCode(Math.floor(Math.random() * 26) + 65));
  };

  const getNumber = () => {
    return Math.floor( Math.random() * 10).toString();
  }

  console.log(getNumber());

// Eventos

generatePasswordButton.addEventListener("click", () => {
    console.log("Teste");
})