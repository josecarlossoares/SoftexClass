
const readline = require('readline-sync');

//primeira questao
// let nome = readline.question('Informe seu nome.')
// let nota1 = readline.questionInt('Digite a primeira nota.')
// let nota2 = readline.questionInt('Digite a segunda nota.')
// let nota3 = readline.questionInt('Digite a terceira nota.')

// let media = (nota1 + nota2 + nota3)/3

// console.log(`Olá ${nome}, a sua media é ${media}.`)

//segunda questao
// let ano = readline.questionInt('Informe um ano.')

// if (ano % 4 === 0 && ano % 100 !== 0){
//     console.log(`O ano ${ano} é bissexto`)
// }else{
//     console.log(`O ano ${ano} não é bissexto`)
// }

//terceira questao
//MG: 7%; SP: 12%; RJ: 15%; MS: 8%
// let valor, imposto, uf, soma;

//     uf = readline.question('Digite a sigla de um dos estados a seguir. -> MG, SP, RJ, MS:')
//     valor = readline.questionInt('Informe o valor do produto:')
    
// switch(uf){
//     case 'MG':
//         imposto = (valor/100)*7
//         soma = imposto + valor
//         console.log(`O valor do produto com imposto em Minas Gerais vai ser ${soma}`)
//         break;
//     case 'SP':
//         imposto = (valor/100)*12
//         soma = imposto + valor
//         console.log(`O valor do produto com imposto em São Paulo vai ser ${soma}`)

//         break;
//     case 'RJ':
//         imposto = (valor/100)*15
//         soma = imposto + valor
//         console.log(`O valor do produto com imposto em Rio de Janeiro vai ser ${soma}`)
//         break;
//     case 'MS':
//         imposto = (valor/100)*8
//         soma = imposto + valor
//         console.log(`O valor do produto com imposto em Mato Grosso do Sul vai ser ${soma}`)
//         break;

//     default:
//         console.log('Estado inválido!')
// }

//Quarta questao
// let pares = [0];
// let index = 0, aux = 0, soma = 0

// while(pares.length <= 50){
//     aux++
//     if (aux % 2 === 0){
//         index++
//         pares.push(aux)
//         soma += pares[index]
//     }
// }

// console.log(`${soma}`)

//Quinta questao
// let impares = [0];
// let index = 0, aux = 0
// let n = readline.questionInt('Informe um número:')

// while(impares.length <= n){
//     aux++
//     if (aux % 2 !== 0){
//         index++
//         impares.push(aux)     
//         console.log(`${impares[index]}`)   
//     }
// }

//Sexta questao
// let imp = 0, tot = 0, aux = 0
// let dias = readline.questionInt('Informe o número de dias trabalhados.')

// if (dias){
//     tot = dias*30
//     imp = (tot/100)*8
//     aux = tot - imp
//     console.log(`Valor a ser pago considerando imposto: ${aux}`)
// }

//Setima questao
// let time = new Date('August 29, 2023 10:00:00')
// let hora = readline.questionInt('Informe a hora de inicio.')
// time.setHours(hora)
// let minutos = readline.questionInt('Informe quatos minutos de duração.')
// time.setMinutes(minutos)

// console.log(`O teste va terminar as ${time}`)

//Oitava questao
// let horas = readline.questionInt('Informe as horas trabalhadas.')
// let horaExtra = readline.questionInt('Informe a quantidade de horas extras.')

// let valorHora = horas*10
// let valorHoraExtra = horaExtra*15
// let total = valorHora + valorHoraExtra

// console.log(`Seu salário anual é ${total}`)

//Nona questao
// let num = []

// let num1 = readline.questionInt('Informe o primeiro número.')
// num[0] = num1

// let num2 = readline.questionInt('Informe o segundo número.')
// num[1] = num2

// let num3 = readline.questionInt('Informe o terceiro número.')
// num[2] = num3

// function ordem (a, b){
//     return (a-b)
// }
// num.sort(ordem)
// console.log(num)

//Decima questao
// console.log(`Informe a opção de conversão:
// 1.	de Celsius para Fahrenheit.
// 2.	de Celsius para Kelvin.
// 3.	de Fahrenheit para Celsius.
// 4.	de Fahrenheit para Kelvin.
// 5.	de Kelvin para Celsius.
// 6.	de Kelvin para Fahrenheit
// `)

// let op = readline.questionInt('')
// let valor = 0
// switch(op){
//     case 1:
//         valor = readline.questionInt(`Digite o valor para conversão`)
//         valor = (valor * (9/5)) + 32 
//         console.log(`Conversão : ${valor}`)
//         break;
//     case 2:
//         valor = readline.questionInt(`Digite o valor para conversão`)
//         valor = valor + 273.15
//         console.log(`Conversão : ${valor}`)
//         break;
//     case 3:
//         valor = readline.questionInt(`Digite o valor para conversão`)
//         valor =(valor-32)/1.8
//         console.log(`Conversão : ${valor}`)
//         break;
//     case 4:
//         valor = readline.questionInt(`Digite o valor para conversão`)
//         valor =(valor - 32) * 5/9 + 273,15
//         console.log(`Conversão : ${valor}`)
//         break;
//     case 5:
//         valor = readline.questionInt(`Digite o valor para conversão`)
//         valor = valor - 273.15 
//         console.log(`Conversão : ${valor}`)
//         break;
//     case 6:
//         valor = readline.questionInt(`Digite o valor para conversão`)
//         valor = (valor - 273.15) * 9/5 + 32 
//         console.log(`Conversão : ${valor}`)
//         break;
//     default:
//         console.log('Erro')
// }

//Decima primeira
// let mes = readline.question('Digite um mês.')
// let ano = readline.questionInt('Agora digite um ano.')
// const meses = {
//     janeiro: 31,
//     fevereiro: 28,
//     marco: 31,
//     abril: 30,
//     maio: 31,
//     junho: 30,
//     julho: 31,
//     agosto: 31,
//     setembro: 30,
//     outubro: 31,
//     novembro: 30,
//     dezembro: 31
// }
// function insiraMes (mes, ano){
//     if(ano % 4 === 0 && ano % 100 !== 0){
//         meses.fevereiro = 29
//     }
//     for (let index in meses){
//         if(mes == index){
//             return meses[index]
//         }
//     }
// }
// let dias = insiraMes(mes, ano);
// console.log(dias)

//Decima segunda
// let horaInicio = 0
// let horaTermino = 0
// do{
//     horaInicio = readline.questionInt('Informe a hora de inicio.')
//     horaTermino = readline.questionInt('Digite a hora de termino.')

// }while(horaTermino >= 24 || horaTermino < 0 || horaInicio >= 24 || horaInicio < 0)

// function duracaoJogo(horaI, horaT){
//     let res = (horaTermino - horaInicio) * 60
//     if(res < 0){
//         res = Math.abs(res)
//     }
//     return res
// }


// let duracao = duracaoJogo(horaInicio, horaTermino)
// console.log(`A duração é ${duracao} minutos.`)

//===========================================================
let horaInicio = 0
let horaTermino = 0
let tempoIni, tempoTer
let horaIniTest
let minIniTest
let horaTerTest
let minTerTest

do{
    horaInicio = readline.question('Informe a hora de inicio. (hh:mm)')
    horaTermino = readline.question('Digite a hora de termino. (hh:mm)')

    tempoIni = horaInicio.split(':')
    tempoTer = horaTermino.split(':')

    
    horaIniTest = parseInt(tempoIni[0])
    minIniTest = parseInt(tempoIni[1])
    horaTerTest = parseInt(tempoTer[0])
    minTerTest = parseInt(tempoTer[1])

}while(horaIniTest >= 24 || minIniTest >= 60 || horaTerTest >= 24 || minTerTest >= 60)

function duracaoJogo(horaI, horaT, minI, minT){
    let hora = parseInt(horaT - horaI)
    let min = parseInt(minT - minI)
    hora = hora * 60

    let res = hora + min
    res = Math.abs(res)

    return res
}

let duracao = duracaoJogo(tempoIni[0], tempoTer[0], tempoIni[1], tempoTer[1]);
console.log(`A duração é ${duracao} minutos.`)

//==========================================================================


//Decima terceira
// function fibo(n){
//     if(n < 2){
//         return n;
//     }else{
//         return fibo(n-1) + fibo(n-2)
//     }
// }

// let res = fibo(5)
// console.log(res)
