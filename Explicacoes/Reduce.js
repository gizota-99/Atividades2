console.log("=== AULA DE REDUCE ===")

let numeros = [10, 20, 30, 40];
console.log("Array original: ", numeros);

//estrutura do reduce

//array.reduce(function(acumulador, elemento atual){
//   return novoValor;
//}, valorinicial);

let soma = numeros.reduce(function(acumulador, numero){
    return acumulador + numero;
},0);

console.log("Soma total : ", soma);

let alunos = [
    {nome: "Ana", nota: 8},
    {nome: "Bruno", nota: 6},
    {nome: "Carlos", nota: 10},
];

let totalNotas = alunos.reduce((acumulador, aluno)=>{
    return acumulador + aluno.nota;
},0);

//media = soma das notas / quantidades de alunos 
let media = totalNotas / alunos.length;