//let number =20;

//const number3=30;


// while (true) {
//     let nota=parseFloat(prompt("Digite uma nota"));

//     if (nota>=0 && nota<=10) {
//         alert("Sua nota eh: " +nota);
//         break;
//     }else{
//         alert("Nota invalida");
//     }
// }

// let j=0;
// for(let i=0;i<=10;i++){
//     j=i;
//     console.log(i)
// }
// console.log("j eh: "+j)

// 3.    Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual
// ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.

// let compara = true;
// while (compara) {
//     let nome=prompt("Digite seu usuario");
//     let senha=prompt("Digite sua senha:");
//     if (nome===senha) {
//         alert("ERRO: usuario e senha igais, repita as informacoes");
//     }
//     else {
//         compara =false;
//         alert("Cadastro realizado");
//     }
// }
// 4.    Faça um programa que imprima na tela os números de 1 a 20, um abaixo do outro.
// Depois modifique o programa para que ele mostre os números um ao lado do outro.

// for(let i=1;i<=20;i++){
//     console.log(i)
// }

// 5.    Faça um programa que leia 5 números e informe o maior número.


// let maior=0;
// for(let i=0;i<5;i++){
//     let num=parseInt(prompt("Digite um numero"));
//     if(i===0){
//         maior=num;
//     }
//     if(num>maior){
//         maior=num;
//     }
// }
// prompt("O numero maior eh:"+ maior)

// 9.    Dado um número n, para cada número interior i no intervalo de 1 a n, 
// imprime um valor por linha da seguinte maneira:

// Se i for múltiplo de 3 e 5, imprima o FizzBuzz.
// Se i for múltiplo de 3 (mas não de 5), imprima o Fizz.
// Se i for múltiplo de 5 (mas não de 3), imprima o Buzz.
// Se i não for múltiplo de 3 ou 5, imprima o valor de i.

// let n=100;
// for(let i=1;i<=n;i++){
//     if (i%3===0 && i%5===0) {
//         console.log("FizzBuzz "+i)
//     }else if (i%3===0 && i%5!=0) {
//         console.log("Fizz " +i)
//     }else if (i%3!=0 && i%5===0) {
//         console.log("Buzz " +i)
//     }
//     else if(i%3!=0 && i%5!=0) {
//         console.log(i)
//     }
// }
