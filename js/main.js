document.addEventListener("DOMContentLoaded", () => {
    
    // Dados dos Projetos
    const infoProjetos = {
        projeto1: {
            titulo: "Mural de Pensamentos",
            descricao: "Aplicação interativa com gerenciamento completo de dados (CRUD) e consumo de API REST. Foco em lógica assíncrona e filtragem dinâmica de interface.",
            imagem: "./imagens/muralPensamentos.png",
            github: "https://github.com/rafael-gtavares/mural-pensamentos.git",
            demo: "https://rafael-gtavares.github.io/mural-pensamentos/"
        },
        projeto2: {
            titulo: "Pauta do Dia",
            descricao: "Agenda inteligente com persistência de dados local (LocalStorage). Apresenta manipulação avançada de listas e organização temporal de tarefas.",
            imagem: "./imagens/pautaDoDia.png",
            github: "https://github.com/rafael-gtavares/pautaDoDia.git",
            demo: "https://rafael-gtavares.github.io/pautaDoDia/"
        },
        projeto3: {
            titulo: "RT Imóveis",
            descricao: "Landing Page profissional para consultoria imobiliária com foco em conversão e UX. Apresenta design responsivo avançado e interface de alta performance.",
            imagem: "./imagens/ricardo-corretor.png",
            github: "https://github.com/rafael-gtavares/ricardotavares-corretor.git",
            demo: "https://rafael-gtavares.github.io/ricardotavares-corretor/"
        }
    };

    const modal = document.getElementById("modal-projeto");
    const modalBody = document.getElementById("modal-body");
    const btnFechar = document.querySelector(".fechar-modal");

    // Abrir Modal
    document.querySelectorAll(".btn-detalhes").forEach(botao => {
        botao.addEventListener("click", (e) => {
            e.preventDefault();
            const id = botao.getAttribute("data-projeto");
            const projeto = infoProjetos[id];

            if (projeto) {
                modalBody.innerHTML = `
                    <div class="modal-flex">
                        <img src="${projeto.imagem}" class="modal-img">
                        <div class="modal-info">
                            <h2 style="font-family: var(--fonte-primaria); font-size: 1.1rem; color: var(--cor-terciaria); margin-bottom: 1rem">${projeto.titulo}</h2>
                            <p style="margin-bottom: 2rem; line-height: 1.6; font-family: var(--fonte-secundaria);">${projeto.descricao}</p>
                            <div class="modal-btns">
                                <a href="${projeto.github}" target="_blank" class="cabecalho__botao">GitHub</a>
                                <a href="${projeto.demo}" target="_blank" class="cabecalho__botao" style="background: transparent; border: 1px solid var(--cor-terciaria)">Deploy</a>
                            </div>
                        </div>
                    </div>
                `;
                modal.style.display = "flex";
            }
        });
    });

    // Fechar Modal
    btnFechar.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});

async function exibirNotificacao(mensagem) {
    const container = document.querySelector('#container-notificacoes');
    const elemento = document.createElement('div');
    
    elemento.classList.add('notificacao');
    elemento.textContent = mensagem;
    
    container.appendChild(elemento);

    setTimeout(() => {
        elemento.classList.add('fade-out');
        
        setTimeout(() => {
            elemento.remove();
        }, 1000); 
    }, 2500);
}

const formulario = document.getElementById('meu-formulario');

formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    const btn = formulario.querySelector('button');
    const textoOriginal = btn.innerText;
    
    // Feedback visual de "Enviando..."
    btn.innerText = "Enviando...";
    btn.disabled = true;
    btn.style.opacity = "0.7";

    const formData = new FormData(this);

    fetch(this.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            exibirNotificacao("✅ Mensagem enviada com sucesso! Em breve entrarei em contato.");
            formulario.reset();
        } else {
            exibirNotificacao("❌ Ocorreu um erro ao enviar. Tente novamente mais tarde.");
        }
    })
    .catch(error => {
        exibirNotificacao("❌ Erro de conexão. Verifique sua internet.");
    })
    .finally(() => {
        // Restaura o botão
        btn.innerText = textoOriginal;
        btn.disabled = false;
        btn.style.opacity = "1";
    });
});