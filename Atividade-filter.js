//Dado o array const notas = [4, 7, 9, 3, 10, 5];, filtre apenas as notas maiores ou iguais a 7.

let numeros = [4, 7, 9, 3, 10, 5];

console.log("Array Original", numeros);

let maioresOuIguaisA7 = numeros.filter(function(numero){

    return numero >= 7;
});

console.log("Notas maiores ou iguais a 7:", maioresOuIguaisA7);


//Dado o array const palavras = ["sol", "mar", "computador", "lua", "código"];, filtre apenas as palavras com mais de 4 letras.

const palavras = ["sol", "mar", "computador", "lua", "código"];

const palavrasComMaisDe4Letras = palavras.filter(function(palavra) {
    return palavra.length > 4;
});

console.log(palavrasComMaisDe4Letras);

//Dado o array const animais = ["gato", "cachorro", "peixe", "elefante", "abelha"];, filtre apenas os animais cujo nome começa com a letra "c".
const animais = ["gato", "cachorro", "peixe", "elefante", "abelha"];

const comLetraC = animais.filter(animal => animal[0] === "c");