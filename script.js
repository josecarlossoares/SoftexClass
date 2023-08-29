
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
//     console.log(`O ano ${ano} é bissesto`)
// }else{
//     console.log(`O ano ${ano} não é bissexto`)
// }

//terceira questao
//MG: 7%; SP: 12%; RJ: 15%; MS: 8%
let valor, imposto, uf, soma;
do{
    uf = readline.question('Digite a sigla de um dos estados a seguir. -> MG, SP, RJ, MS:')
    valor = readline.questionInt('Informe o valor do produto:')
    
    if(uf != 'MG' && uf != 'SP' && uf != 'RJ' && uf != 'MS'){
        uf = '';
    }

}while(uf == '' || valor !== Number || valor <= 0)

switch(uf){
    case 'MG':
        imposto = (valor/100)*7
        soma = imposto + valor
        console.log(`O valor do produto com imposto em Minas Gerais vai ser ${soma}`)
        break;
    case 'SP':
        break;
    case 'RJ':
        break;
    case 'MS':
        break;
}