import prompt from 'prompt-sync'

const ler = prompt()

console.log("Uma matéria genérica de faculdade tem a média definida como: 2x Prova 1 + 2X Prova 2 + 1x Ado / 5\nQual foi a nota da sua prova 1")

let prova1 = Number(ler())

console.log("Qual foi a nota da sua prova 2?")

let prova2 = Number(ler())

console.log("Qual foi a nota da sua ado?")

let ado = Number(ler())

console.log("A sua média da matéria genérica é: "+media(prova1, prova2, ado))


function media(prova1, prova2, ado){
    let media = (2 * prova1 + 2 * prova2 + ado) / 5
    return media
}
