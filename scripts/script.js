//MUDAR TEMA
const botaoAlternarTema = document.getElementById('botao-alternar-tema');
const corpoPagina = document.body;
const chaveTema = 'tema-preferido';
const temaSalvo = localStorage.getItem(chaveTema);

// Definição da Media Query para o JavaScript
const mediaQuery = window.matchMedia('(max-width: 640px)');

if(temaSalvo == 'claro'){
    corpoPagina.classList.add('tema-claro');
}

function atualizarTextoBotao(){
    let textoClaro;
    let textoEscuro;

    if (mediaQuery.matches) {
        // TELA PEQUENA (<= 640px) - Usar textos curtos
        textoClaro = '🌙 Escuro'; 
        textoEscuro = '☀️ Claro';
    } else {
        // TELA GRANDE (> 640px) - Usar textos longos
        textoClaro = '🌙 Mudar para Escuro'; 
        textoEscuro = '☀️ Mudar para Claro';
    }

    if (corpoPagina.classList.contains('tema-claro')) {
        // Se o tema atual é CLARO, o botão deve oferecer a troca para ESCURO
        botaoAlternarTema.textContent = textoClaro; 
    } else {
        // Se o tema atual é ESCURO, o botão deve oferecer a troca para CLARO
        botaoAlternarTema.textContent = textoEscuro; 
    }
}

botaoAlternarTema.addEventListener('click', function() {
    corpoPagina.classList.toggle('tema-claro');

    const novoTema = corpoPagina.classList.contains('tema-claro') ? 'claro' : 'escuro';
    localStorage.setItem(chaveTema, novoTema);

    atualizarTextoBotao();
})

atualizarTextoBotao();

mediaQuery.addEventListener('change', atualizarTextoBotao); 


//DESTACAR PÁGINA ATUAL

//TORNAR ELEMENTOS DA PÁGINA 'resume.html' EM ACORDEÕES (que podem ser expandidos)

//Pegamos todos os títulos-acordeões (que poderam ser expandidos e mostrar mais informações)
const titulosAcordeao = document.querySelectorAll('.titulo-acordeao');

//Para cado item que tem a classe 'titulo-acordeao', iremos executar o evento abaixo
titulosAcordeao.forEach(titulo => {
    //Se um titulo for clicado, ativa a função abaixo
    titulo.addEventListener('click', function() {

        //Pegamos o ancestral mais próximo na hierarquia com a classe '.bloco-acordeao' se já tiver a classe 'aberto' ele tira, e se não tiver ele coloca, f
        const blocoAcordeao = this.closest('.bloco-acordeao');

        //Se já tiver a classe 'aberto' ele tira, e se não tiver ele coloca, fazendo com que o conteúdo mostre e desapareça com o toque (a função 'aberto' faz isso)
        blocoAcordeao.classList.toggle('aberto');
    });
});