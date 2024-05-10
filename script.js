//1. Declare uma variável de nome weight
let weight;

//2. Que tipo de dado é a variável a cima?
console.log(typeof weight)

/* 
3. Declare uma variável e atribua valores para cada um dos dados:

nome: String
age: number (integer)
stars: number (float)
isSubscribed: Boolean

*/

let name = 'Jhon'
let age = 30
let float = 24.5
let isSubscribed = true 

/* 
4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.

4.2 Mostre no console a seguinte mensagem: 

<name> de idade <age> pesa <weight> kg.

Atenção, substitua <name> <age>  <weight> pelos valores de cada propriedade do objetivo

*/

let student = {
name: 'Jhon',
age: 30,
weight: 80.7,
isSubscribed: true 
}

console.log (`${student.name} de idade ${student.age} pesa ${student.weight} kg`)


// 5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio 

let students = []

/* 
6. Retribua valor para a variável a cima, colocando dentro dela o objeto student da questão 4. 
(não copiar e colar o objeto. mas usar o objeto criado e inserir ele no Array)
*/

students = [
  student
]

console.log(students)


// 7. Coloque no console o valor a posição zero do Array a cima 

console.log(student[0])

// 8. Crie um novo students e coloque na posição 1 do Array students

const Jhon = {
  name: 'Jhon',
  age: 30,
  weight: 80.7,
  isSubscribed: true
}

students[1] = Jhon 

/*
9. Sem rodar o código responda qual é a resposta do código abaixo e porque?
Após sua resposta, rode o código e veja se você acertou.

console.log(a)
var a = 1 

*/

console.log(a)
var a = 1 




