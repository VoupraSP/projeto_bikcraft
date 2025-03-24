// Ativa itens navegacao
const links = document.querySelectorAll('.header-menu a');

function ativaLinks(link) {
    const url = window.location.href;
    const href = link.href;

    if (url.includes(href)) {
        link.classList.add("ativo");
    }
}

links.forEach(ativaLinks);


// Ativa itens orcamento

const parametros = new URLSearchParams(location.search);

function ativaParametro(parametro) {
    const elemento = document.getElementById(parametro);
    if (elemento) {
        elemento.checked = true;
    }
}

parametros.forEach(ativaParametro);


// ativa pergunta

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);
