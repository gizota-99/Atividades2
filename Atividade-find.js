// Dado o array const filmes = ["Avatar", "Batman", "Vingadores", "Matrix", "Barbie"];, encontre o primeiro filme que começa com a letra "B".

const filmes = ["Avatar", "Batman", "Vingadores", "Matrix", "Barbie"];

const primeiroComB = filmes.find(filme => filme.startsWith("B"));

console.log(primeiroComB);


//Dado o array const numeros = [2, 4, 6, 9, 12, 15];, encontre o primeiro número ímpar.

let encontrado = numeros.find(numero =>{
    return numero % 2 !== 0;
});

console.log("Numero encontrado: ", encontrado);


//Dado o array const alunos = [{nome: "Ana", nota: 8}, {nome: "Carlos", nota: 5}, {nome: "Beatriz", nota: 9}];, encontre o primeiro aluno com nota maior ou igual a 7.

const alunos = [
  { nome: "Ana", nota: 8 },
  { nome: "Carlos", nota: 5 },
  { nome: "Beatriz", nota: 9 }
];

const primeiroComNotaMaiorQue7 = alunos.find(aluno => aluno.nota >= 7);

console.log(primeiroComNotaMaiorQue7);