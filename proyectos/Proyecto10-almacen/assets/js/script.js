const productos = [
    {
        nombre: "Cremas Soft",
        descripcion: "Diferentes variedades naturales.",
        precio: "Desde $1.000"
    },
    {
        nombre: "Ungüentos Medicinales",
        descripcion: "Uso tradicional y natural.",
        precio: "Desde $500"
    },
    {
        nombre: "Cápsulas Medicinales Naturales",
        descripcion: "Variedad según disponibilidad.",
        precio: "Desde $1.800"
    },
    {
        nombre: "Pomadas Medicinales",
        descripcion: "Preparaciones naturales.",
        precio: "Desde $1.500"
    },
    {
        nombre: "Gel para Friega",
        descripcion: "Producto artesanal.",
        precio: "Consultar precio"
    },
    {
        nombre: "Inciensos Naturales",
        descripcion: "Variedades aromáticas.",
        precio: "Consultar precio"
    },
    {
        nombre: "Remedios Herbolarios Tradicionales",
        descripcion: "Según disponibilidad.",
        precio: "Consultar precio"
    }
];

const container = document.getElementById("catalogo-container");

productos.forEach(prod => {
    container.innerHTML += `
        <div class="col-12 col-md-6 col-lg-4">
            <div class="card h-100">
                <div class="card-body">
                    <h5 class="card-title">${prod.nombre}</h5>
                    <p class="card-text">${prod.descripcion}</p>
                    <p class="price">${prod.precio}</p>
                    <a href="https://wa.me/56927785661" target="_blank" class="btn btn-success">
                        Consultar / Encargar
                    </a>
                </div>
            </div>
        </div>
    `;
});
