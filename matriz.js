// Criando uma matriz de array
let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

//Acessamdp elementos da matriz
console.log(matriz[0][0]); // O primeiro 0 esta pegando a linha, e o segundo 0 esta pegando a coluna
console.log(matriz[1][2]); // O 1 representa a linha, podendo ser 4 5 6, e 2 representa a coluna, podeno ser 3 6 9

matriz[0][0] = 10;

console.log(matriz)


matriz[0][0] = 1;


for(let i = 0; i < matriz.length; i++) {
    for(let j = 0; j < matriz[i].length; j++)
    console.log(matriz[i][j])
}