//MUDAR TEMA

//Pegamos: 1. O botão que usaremos para mudar o tema; 2. O body, para futuramente adicionarmos uma classe com as mudanças de cores/tema nele, assim afetando toda a parte visível
const botaoAlternarTema = document.getElementById('botao-alternar-tema');
const corpoPagina = document.body;

//Aqui salvamos o tema que o usuário tinha definido antes (com o método localStorage), para quando ele trocar, manter o mesmo
const chaveTema = 'tema-preferido';
const temaSalvo = localStorage.getItem(chaveTema);

//Se já tiver salvo o tema 'claro', ele adiciona essa classe no body
if (temaSalvo == 'claro'){
    corpoPagina.classList.add('tema-claro')
};

//Aqui tem um evento de click no botão que pegamos lá em cima
botaoAlternarTema.addEventListener('click', function() {
    
    //Usamos o método toggle para tirar e colocar a classe 'tema-claro'
    corpoPagina.classList.toggle('tema-claro');
    
    //Aqui é mais opcional, só mudamos o texto para ficar mais intuitivo e salvamos a opção de tema 
    if (corpoPagina.classList.contains('tema-claro')) {
        botaoAlternarTema.textContent = '🌙 Mudar para Escuro'; 
        localStorage.setItem(chaveTema, 'claro')
    } else {
        botaoAlternarTema.textContent = '☀️ Mudar para Claro'; 
        localStorage.setItem(chaveTema, 'escuro')
    }
});

//DESTACAR PÁGINA ATUAL

//Aqui pegamos todos os links da nossa navbar e o caminho da página atual
const linksNav = document.querySelectorAll('.cabecalho .cabecalho__menu a');
const caminhoAtual = window.location.pathname;

//Função para colocar a classe 'link-ativo' no link, destacando com uma borda inferior a página que estamos
linksNav.forEach(link => {
    //Pegamos o que tem dentro do href, ou seja, o endereço dessa página
    const hrefLink = link.getAttribute('href');

    //Se o endereço da página atual terminar com o endereço da página que pegamos antes, quer dizer que estamos nessa página. Então adicionamos a classe 'link-ativo' no <a> e surge o sublinhado 
    if (caminhoAtual.endsWith(hrefLink)){
        link.classList.add('link-ativo');
    }
});

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