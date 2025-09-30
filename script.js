const BotaoMostraPalavras = document.querySelector('#botaopalavrachave');

botaoMostraPalavras.addEventListener('click', mostraPalavrasChave);

function mostraPalavrasChave() {
   const texto = document.querySelector('#entrada-de-texto').value;
   const campoResultado = document.querySelector('#resultado-palavrachave');
   const palavrasChave = processaTexto(texto);
campoResultado.textContent = palavrasChave.join(", ");
}

function processaTexto(texto) {
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

   console.log(frequencias)