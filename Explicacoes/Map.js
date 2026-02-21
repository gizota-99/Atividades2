console.log("=== AULA DE MAP === ");

let numeros = [1, 2, 3, 4, 5];
console.log("Array original: ",numeros);


//Estrutura do map;

//array.map(function(elemento)(
//   return transformacao));

let dobrados = numeros.map(function(numero){
    return numero * 2;
})

console.log("Array dobrado: ", dobrados);

//EXEMPLO COM ARRAW FUNCTION
let triplicados = numeros.map( numero => numero * 3)
    console.log("Array triplicados: ", triplicados);


let alunos = [ 
   {nome: "Ana", nota:8},
   {nome: "Bruno", nota:6},
   {nome: "Carlos", nota:9},
];

let nomes = alunos.map(aluno => {
    return aluno.nome;
})

//Exibindo novo Array
console.log("Somente nomes: ", nomes);

let nomess = ["Ana", "Maria", "Luana"]

//Retorna um novo Array como nomes com nomes em Maiusculo
let maiusculos = nomess.map(nome =>{
    return nome.toUpperCase();
})