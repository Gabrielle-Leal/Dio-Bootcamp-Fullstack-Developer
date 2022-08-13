const pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissao: 'desenvolvedora'
}

pessoa.idade = 25;

const andre: {nome: string, idade: number, profissao: string} = {
    nome: 'Andre',
    idade: 25,
    profissao: 'pintor'
}

const paula: {nome: string, idade: number, profissao: string} = {
    nome: 'Paula',
    idade: 25,
    profissao: 'Desenvolvedora'
}

enum Profissao{
    Professora,
    Atriz,
    Desenvolvedora,
    JogadoraDeFutebol
}

interface Pessoa{
    nome: string,
    idade: number,
    profissao?: Profissao
}

interface Estudante extends Pessoa{
    materias: string[]
}

const vanessa: Pessoa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Desenvolvedora
}

const maria: Pessoa = {
    nome: 'Maria',
    idade: 23,
    profissao: Profissao.Desenvolvedora
}


const jessica: Estudante = {
    nome: 'Jessica',
    idade: 28,
    profissao: Profissao.Desenvolvedora,
    materias: ['Matematica discreta', 'programação']
}

const monica: Estudante = {
    nome: 'Monica',
    idade: 28,
    materias: ['Matematica discreta', 'programação']
}

function listar(lista: string[]){
    for (const item of lista){
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






































