const projetos = [
  {
    nome: "PetMatch",
    descricao:
      "Aplicativo para facilitar a adoção responsável de cães e gatos.",

    tecnologias: [
      "React Native",
      "JavaScript",
      "Expo"
    ],

    link: "https://snack.expo.dev/@manumohr/pets"
  },

  {
    nome: "Projeto em desenvolvimento",
    descricao:
      "Este espaço está preparado para receber um novo projeto futuramente.",

    tecnologias: [
      "React Native"
    ],

    link: "#"
  }
];

const listaProjetos = document.getElementById("listaProjetos");
const quantidadeProjetos = document.getElementById("quantidadeProjetos");

function mostrarProjetos() {
  listaProjetos.innerHTML = "";

  projetos.forEach((projeto, indice) => {
    const card = document.createElement("article");

    card.classList.add("card-projeto");

    const tecnologiasHTML = projeto.tecnologias
      .map(
        tecnologia =>
          `<span class="tecnologia">${tecnologia}</span>`
      )
      .join("");

    const botaoDesativado = projeto.link === "#";

    card.innerHTML = `
      <div class="numero-projeto">
        ${String(indice + 1).padStart(2, "0")}
      </div>

      <h3>${projeto.nome}</h3>

      <p class="descricao-projeto">
        ${projeto.descricao}
      </p>

      <div class="tecnologias">
        ${tecnologiasHTML}
      </div>

      <a
        href="${projeto.link}"
        class="botao-projeto ${
          botaoDesativado ? "botao-desativado" : ""
        }"
        ${botaoDesativado ? "" : 'target="_blank"'}
      >
        ${
          botaoDesativado
            ? "Projeto em breve"
            : "Abrir projeto"
        }
      </a>
    `;

    listaProjetos.appendChild(card);
  });

  quantidadeProjetos.textContent = projetos.length;
}

mostrarProjetos();