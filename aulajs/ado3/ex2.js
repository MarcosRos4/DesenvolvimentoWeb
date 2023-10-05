import prompt from 'prompt-sync'
import colors from 'colors'

const cores = colors
const input = prompt()

console.log("Qual é o status do semáforo?")

let status = String(input())

console.log(farol(status))

function farol(cor) {
    if (cor=="Verde") {
        return "Atravesse".green
    }
    else if (cor=="Vermelho") {
        return "Espere".red
    }
    else{
        return "Erro no Semáforo!".magenta
    }
}
