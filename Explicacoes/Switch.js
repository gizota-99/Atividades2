console.log("=== EXEMPLO DE SWITCH CASE ===");

const prompt = require("prompt-sync")();

let dia = prompt(
    "Digite um nmero de 1 a 7 para representar o dia da semana: \n"+
"1 - Domingo\n"+
"2 - Segunda-Feira\n"+
"3 - Terca-Feira\n"+
"4 - Quarta-Feira\n"+
"5 - Quinta-Feira\n"+
"6 - Sexta-Feira\n"+
"7 - Sabado\n"+
)


switch(dia){
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-Feira");
        break;
    case 3:
        console.log("Terca-Feira");
        break;
    case 4:
        console.log("Quarta-Feira");
        break;
    case 5:
        console.log("Quinta-Feira");
        break;
    case 6:
        console.log("Sexta-Feira");
        break;
    case 7:
        console.log("Sabado");
        break;

        default:
            console.log("Dia Invalido!");
}