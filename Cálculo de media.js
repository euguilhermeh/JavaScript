let nota1 = 4;
let nota2 = 6;
let nota3 = 7;

const media = (nota1 + nota2 + nota3) /3;
console.log (media);


if (media > 7) {
 console.log ('Aprovado');
} else if (media >= 5 && media <= 7) {
    console.log ('Recuperação');
} else {
    console.log ('Reprovado');
}