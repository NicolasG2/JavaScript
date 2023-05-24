const PI = 3.14;

var nome = "Nicolas";
var dtNascimento = "16/12/2006"

var anoAtual = new Date().getFullYear();
console.log(anoAtual);

var anoNasc = dtNascimento.split("/")[2];
console.log(anoNasc);

var idade = anoAtual - anoNasc;
console.log(idade);

var boolean = false;
console.log(boolean);

var conhecimentoTecnicos = ['CSS', 'HTML', 'JS', 'C', 'JAVA', 'SQL', 'ES', 'Diagramação', 'Portugol', 'Redes'];
console.log(conhecimentoTecnicos[4]);

var funcionario = {
    id: 1,
    nome: 'João',
    sobrenome: 'Pedro',
    dtNasc: '16/12/1996',
    funcao: 'Estagiário',

    departamento: {
        id: 1,
        setor: 'Compras'
    },
};

console.log(funcionario.nome, funcionario.departamento.setor);

console.log(typeof funcionario);
console.log(typeof PI);
console.log(typeof nome);


//Tempalte strings
console.log(`A pessoa com nome: ${nome} possui a idade ${idade} e nasceu em ${dtNascimento}`);

//diferenciar maiscula de minuscula

var pi = 5;

console.log(PI, pi);


//operador de atribuição =
var teste = 5;

//operador de comparação ==

//comparação entre dados da variável, independente do tipo

var x = 10;

if (x == '10') {
    console.log("É igual");
} else {
    console.log("Não é igual");
}

//comparação entre dados e tipo
//operador de comparação ===

var x = '10';

if (x === '10') {
    console.log("É igual");
} else {
    console.log("Não é igual");
}

//operador condicional ternário
//condição ? exp1 : exp2

console.log(x === 10 ? "é igual" : "não é igual");


for (let i = 0; i <= 9; i++) {
    console.log(i);
}

//iterar sobre objetos

var categorias = {
    eletronicos: "Eletrônicos",
    moveis: "Móveis",
    telefonia: "Smartphone",
    automotiva: "Automotiva",
};

//funções

var impressao = () => {
    console.log("Passou na função");
    for (let cat in categorias) {
        console.log(`Categoria: ${categorias[cat]}`)
    }
};

impressao();

console.log(typeof impressao);

//arrow function

const numeroAleatorio = () => Math.random();
console.log(numeroAleatorio());


