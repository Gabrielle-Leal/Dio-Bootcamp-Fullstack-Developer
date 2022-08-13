// Como podemos melhorar o esse código usando TS? 

// let pessoa1 = {};
// pessoa1.nome = "maria";
// pessoa1.idade = 29;
// pessoa1.profissao = "atriz"

// let pessoa2 = {}
// pessoa2.nome = "roberto";
// pessoa2.idade = 19;
// pessoa2.profissao = "Padeiro";

// let pessoa3 = {
//     nome: "laura",
//     idade: "32",
//     profissao: "Atriz"
// };

// let pessoa4 = {
//     nome = "carlos",
//     idade = 19,
//     profissao = "padeiro"
// }

// RESPOSTA:

enum Trabalho {
    Desenvolvedora,
    medico
}

type Humano = {
    nome: string,
    idade: number,
    profissao: Trabalho
}

let pessoa1: Humano = {
    nome: 'maria',
    idade: 29,
    profissao: Trabalho.Desenvolvedora
};

let pessoa2: Humano = {
    nome: 'roberto',
    idade: 19,
    profissao: Trabalho.medico
};

let pessoa3: Humano = {
    nome: 'laura',
    idade: 32,
    profissao: Trabalho.Desenvolvedora
};

let pessoa4: Humano = {
    nome: "carlos",
    idade: 19,
    profissao: Trabalho.medico
}