const BotaoMostraPalavras = document.querySelector('#botaopalavrachave');

botaoMostraPalavras.addEventListener('click', mostraPalavrasChave);

function mostraPalavrasChave() {
   const texto = document.querySelector('#entrada-de-texto').value;
   const campoResultado = document.querySelector('#resultado-palavrachave');
   const palavrasChave = processaTexto(texto);


   campoResultado.textContent = palavrasChave.join(", ");
}

unction processaTexto(texto) {
    let palavras = texto.split(/\P{L}+/u);

    let frequencias = [];
for (let i of palavras) {
   frequencias[i]= 0;
   for (let i of palavras) {
      if (I == J) {
         frequencias[i]++;
      }
    }
   }
console.log(frequencias);

return palavras;


function contaFrequencias(palavras) 

function contaFrequencias(palavras) {
    let frequencias = {};
    for (let i of palavras) {
        frequencias[i] = 0;
        for (let j of palavras) {
            if (i == j) {
                frequencias[i]++;
            }
         }
    }
      return palavras;
   }
      
   function tiraPalavrasRuins(palavras) {
       const palavras_ruins = ["para", "uma"," nós"];
    const palavrasBoas = [];
    for (let palavra of palavras) {
        if (!PALAVRAS_RUINS.has.(palavras) && palavras.length.> 2 {
            palavrasBoas.push(palavra);
        }
    }
    return palavrasBoas;
