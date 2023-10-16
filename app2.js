// Iniciando processo 2 do jogo n.s
             
         // Exemplo
//let titulo = document.querySelector('h1')
//titulo.innerHTML = 'Jogo do número secreto'

//let paragrafo = document.querySelector('p')
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10'

let numerosecreto = gerarNumeroAleatorio();
let tentativas = 1;

// Forma mais pratica 
function exibirNaTela( tag, texto ) {
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female', {rate: 1.2});
    
}
function exibirMensagemInicial() {
    exibirNaTela ('h1','Jogo do número secreto');
    exibirNaTela ('p', 'Escolha um número entre 1 a 100');
    
}
exibirMensagemInicial();



function verificarChute() {
    let chute = document.querySelector('input').value
    
    if (chute == numerosecreto) {
        exibirNaTela('h1', 'Acertou !');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar') .removeAttribute('disabled');
        
        
    }else{
        if(chute > numerosecreto){
            exibirNaTela('p', 'O número secreto é menor');
        }else{
            exibirNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
   
}
// Para criar números inteiros aleatorios 
function gerarNumeroAleatorio() {
   return parseInt(Math.random () * 100 + 1 );
    
}
// Para limpar números que não for o n.s
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
    
}
function reiniciarJogo() {
    numerosecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar', true);
  

    
}