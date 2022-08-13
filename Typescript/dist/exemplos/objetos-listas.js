"use strict";
const pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissao: 'desenvolvedora'
};
pessoa.idade = 25;
const andre = {
    nome: 'Andre',
    idade: 25,
    profissao: 'pintor'
};
const paula = {
    nome: 'Paula',
    idade: 25,
    profissao: 'Desenvolvedora'
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["JogadoraDeFutebol"] = 3] = "JogadoraDeFutebol";
})(Profissao || (Profissao = {}));
const vanessa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Desenvolvedora
};
const maria = {
    nome: 'Maria',
    idade: 23,
    profissao: Profissao.Desenvolvedora
};
const jessica = {
    nome: 'Jessica',
    idade: 28,
    profissao: Profissao.Desenvolvedora,
    materias: ['Matematica discreta', 'programação']
};
const monica = {
    nome: 'Monica',
    idade: 28,
    materias: ['Matematica discreta', 'programação']
};
function listar(lista) {
    for (const item of lista) {
        console.log('- ', item);
    }
}
listar(monica.materias);
//                                 EXEMPLO 01
// let button = document.getElementById('button');
// let input1 = document.getElementById('input1') as HTMLInputElement;
// let input2 = document.getElementById('input2') as HTMLInputElement;
// function adicionarNumero(numero1: number, numero2: number, devePrintar: boolean, frase: string) {
//     let resultado = numero1 + numero2
//     if(devePrintar){
//         console.log(frase + resultado)
//     }
//     return numero1 + numero2
// }
// let devePrintar = true;
// let frase = 'O valor é: '
// if (button) {
//     button.addEventListener('click', () => {
//         if(input1 && input2){
//             console.log(adicionarNumero(Number(input1.value), Number(input2.value), devePrintar, frase));
//         }
//     }) 
// }
