import prompt from 'prompt-sync'
import { alunos, notas } from './vetores.js'
import { media, status } from './gerenciadorBoletim.js'

const ler = prompt()

console.log("Uma matéria genérica de faculdade tem a média definida como: 2x Prova 1 + 2X Prova 2 + 1x Ado / 5\nQual foi a nota da sua prova 1")

let prova1 = Number(ler())

console.log("Qual foi a nota da sua prova 2?")

let prova2 = Number(ler())

console.log("Qual foi a nota da sua ado?")

let ado = Number(ler())

console.log("A sua média da matéria genérica é: "+media(prova1, prova2, ado)+"\nSeu Status é: "+status(media(prova1, prova2, ado)))


console.log("\nAqui estão as médias e status dos outros alunos:")
for (let index = 0; index < alunos.length; index++) {
    console.log(
    "Aluno "+alunos[index]+
    " tem média: "+media(notas[index][0], notas[index][1], notas[index][2])+
    " e está: "+status(media(notas[index][0], notas[index][1], notas[index][2])))
}
