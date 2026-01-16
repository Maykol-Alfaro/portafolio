const projects = [
    {
        title: "Proyecto 1",
        description: "Mi Curriculum Vitae en HTML. Uso solo de HTML.",
        image: "./assets/img/desafio1captura.png",
        link: "./proyectos/proyecto1-html/index.html",
    },
    {
        title: "Proyecto 2",
        description: "Construyendo una landing page. HTML y CSS.",
        image: "./assets/img/desafio2captura.png",
        link: "./proyectos/proyecto2-css/index.html",
    },
    {
        title: "Proyecto 3",
        description: "Iguana page. HTML - CSS - Flexbox.",
        image: "./assets/img/desafio3captura.png",
        link: "./proyectos/proyecto3-flexbox/index.html",
    },
    {
        title: "Proyecto 4",
        description: "Página tipo Cuppon. HTML - CSS - Bootstrap.",
        image: "./assets/img/desafio4captura.png",
        link: "./proyectos/proyecto4-bootstrap/index.html",
    },
    {
        title: "Proyecto 5",
        description:
            "Creadora de contenido gastronómico. HTML - CSS - Bootstrap - Git y GitHub.",
        image: "./assets/img/desafio5captura.png",
        link: "./proyectos/proyecto5-terminalGitYGithub/index.html",
    },
    {
        title: "Proyecto 6",
        description:
            "chats. HTML - CSS - Flexbox.",
        image: "./assets/img/desafio6captura.png",
        link: "./proyectos/proyecto6-Flexbox/index.html",
    },
    {
        title: "Proyecto 7",
        description:
            "Mi Tienda De Té Medicinal. HTML - CSS - Grid.",
        image: "./assets/img/desafio7captura.png",
        link: "./proyectos/proyecto7-Grid/index.html",
    },
    {
        title: "Proyecto 8",
        description:
            "Electric Cars. HTML - CSS - Media queries.",
        image: "./assets/img/desafio8captura.png",
        link: "./proyectos/proyecto8-MediaQueries/index.html",
    },
    {
        title: "Proyecto 9",
        description:
            "Arte a Medida, Venta de cuadros. HTML - CSS - Animaciones.",
        image: "./assets/img/desafio9captura.png",
        link: "./proyectos/proyecto9-Animaciones/index.html",
    },
    {
        title: "Proyecto 10",
        description:
            "Donde la Riveritos, almacen local. HTML - CSS - js -Proyecto de almacen local.",
        image: "./assets/img/desafio10captura.png",
        link: "./proyectos/proyecto-almacen/index.html",
    },
    // 👉 aquí puedes seguir agregando hasta 10 o más, recuerda las mayusculas y minusculas en el nombre del proyecto
];

const container = document.getElementById("projects-container");

projects.forEach((project) => {
    const col = document.createElement("div");
    col.classList.add("col");

    col.innerHTML = `
    <div class="card h-100 shadow-sm">
      <img src="${project.image}" class="card-img-top" alt="${project.title}">
      <div class="card-body">
        <h5 class="card-title">${project.title}</h5>
        <p class="card-text">${project.description}</p>
        <a href="${project.link}" class="btn btn-outline-primary btn-sm" target="_blank">
          Ver proyecto
        </a>
      </div>
    </div>
  `;

    container.appendChild(col);
});