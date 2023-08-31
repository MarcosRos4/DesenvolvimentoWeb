export function media(prova1, prova2, ado){
    return (2 * prova1 + 2 * prova2 + ado) / 5
}

export function status(media){
    return media >=6
    ? "\u001b[32m"+"Aprovado"+"\u001b[0m"
    : "\u001b[31m"+"Reprovado"+"\u001b[0m"
}