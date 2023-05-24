//Pedra, papel ou tesoura

//Receber onome do jogador
//Receber a opção selecionada (Pedra, papel ou tesoura)

//Gerar um número randomico

//Comparar quem é o vencedor

const jogar = (nomeJogador, opcaoJogador) => {
    let opcaoComputador = Math.floor(Math.random() * 3) + 1;

    definirOpcoes(`Jogador ${nomeJogador}`, opcaoJogador);
    definirOpcoes(`Computador`, opcaoComputador);

    compararOpcoes(opcaoJogador, opcaoComputador);
};

const definirOpcoes = (descricao, opcao) => {
    switch (opcao) {
        case 1:
            console.log(`${descricao} selecionou a opção Pedra`);
            break;
        case 2:
            console.log(`${descricao} selecionou a opção Papel`);
            break;
        case 3:
            console.log(`${descricao} selecionou a opção Tesoura`);
            break;
    }
}

const compararOpcoes = (opcaoJogador, opcaoComputador) => {

    if(opcaoJogador == opcaoComputador){
        console.log("Empate!");
    } else if (
        (opcaoComputador === 1 && opcaoJogador === 2) || 
        (opcaoComputador === 2 && opcaoJogador === 3) || 
        (opcaoComputador === 3 && opcaoJogador === 1)
    ){
        console.log("Jogador venceu!");
    } else {
        console.log("Computador venceu!");
    }
};

var nomeJogador = prompt('Informe seu nome');
console.log(nomeJogador);

var opcao = prompt(`
    Selecione uma opção: \n
    1 - Pedra \n
    2 - Papel \n
    3 - Tesoura
`);

opcao = parseInt(opcao);
jogar(nomeJogador, opcao);