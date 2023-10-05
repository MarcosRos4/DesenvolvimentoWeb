import prompt from "prompt-sync";

const input = prompt()

console.log("Bem vindo ao Cinema Municipal de Embu das Artes!\nQuantos Ingressos vai querer comprar?\nInteira: ")
let inteira = Number(input())
console.log("Meia: ")
let meia = Number(input())

let total = 28.50 * inteira + 14.25 * meia
console.log("O total da compra foi: R$ "+total)