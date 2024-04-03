let meuArray = [10,20,30];

//push pode adicionar varios elementos de uma vez
meuArray.push(40,50,60)

console.log(meuArray)//Retorno:[10,20,30,40,50,60]

//para alterar o valor de um elemento do array
meuArray[2] = 35
console.log(meuArray)//Retorno:[10,20,35,40,50,60]


meuArray[2] = 30


// Removendo último elemento do array
let elementoRemovido = meuArray.pop();

console.log("Elemento a ser removido:", elementoRemovido);

console.log(meuArray);


meuArray.push(60)


let tamanhoArray = meuArray.length;

console.log("Quantos elemento tem no meu array?:",tamanhoArray)