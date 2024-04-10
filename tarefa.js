function PrimeiroeUltimo(lista){
    primeiro = lista.shift(lista)
    ultimo = lista.pop(lista)
    return {primeiro, ultimo}
}
function MaiorqueaMedia(lista){
    const media = lista.reduce((total,agora)=>agora+total)/lista.length
    const maiorqmedia = lista.filter(lista=>lista>media)
    return {maiorqmedia}
}
function MenordaLista (lista){
    menor = Math.min(...lista)
    return {menor}
}
function SomaLista (lista){
    const somatotal = lista.reduce((total,agora)=>total+agora)
    return {somatotal}
}
function MenoresqueVinte (lista){
    const menores_vinte = lista.filter(lista=>lista<20)
    return {menores_vinte}
}

const vetor = [2,4,6,8,10,12,1001]
console.log(MaiorqueaMedia(vetor))
console.log(MenordaLista(vetor))
console.log(SomaLista(vetor))
console.log(MenoresqueVinte(vetor))
console.log(PrimeiroeUltimo(vetor))