const cabecera = document.querySelector("header");

const galeria = document.querySelector("#galeria");

const imagenesCabecera = [
    {
        src: "assets/banner/1.jpg",
        title: "Lorem ipsum dolor  1",
        descripcion: "Esta es la descripción",
        alt: "Este es el alt de foto 1",
    },
    {
        src: "assets/banner/2.jpg",
        title: "Lorem ipsum dolor  2",
        descripcion: "Esta es la descripción",
        alt: "Este es el alt de foto 2",
    },
    {
        src: "assets/banner/3.jpg",
        title: "Lorem ipsum dolor  3",
        descripcion: "Esta es la descripción",
        alt: "Este es el alt de foto 3",
    },
    {
        src: "assets/banner/4.jpg",
        title: "Lorem ipsum dolor  4",
        descripcion: "Esta es la descripción",
        alt: "Este es el alt de foto 4",
    },
    {
        src: "assets/banner/5.jpg",
        title: "Lorem ipsum dolor  5",
        descripcion: "Esta es la descripción",
        alt: "Este es el alt de foto 5",
    },
    {
        src: "assets/banner/6.jpg",
        title: "Lorem ipsum dolor  6",
        descripcion: "Esta es la descripción",
        alt: "Este es el alt de foto 6",
    },
    {
        src: "assets/banner/7.jpg",
        title: "Lorem ipsum dolor  7",
        descripcion: "Esta es la descripción",
        alt: "Este es el alt de foto 7",
    },
    {
        src: "assets/banner/8.jpg",
        title: "Lorem ipsum dolor  8",
        descripcion: "Esta es la descripción",
        alt: "Este es el alt de foto 8",
    },
];

const imagenesGaleria = [
    {
        src: "assets/viajes/viajes-1.jpg",
        title: "Lorem ipsum dolor  1",
        descripcion:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut bibendum elit. In vitae pharetra magna. Integer vel orci venenatis lorem pulvinar bibendum. ",
        alt: "Este es el alt de foto 1",
    },
    {
        src: "assets/viajes/viajes-2.jpg",
        title: "Lorem ipsum dolor  2",
        descripcion:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut bibendum elit. In vitae pharetra magna. Integer vel orci venenatis lorem pulvinar bibendum. ",
        alt: "Este es el alt de foto 2",
    },
    {
        src: "assets/viajes/viajes-3.jpg",
        title: "Lorem ipsum dolor  3",
        descripcion:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut bibendum elit. In vitae pharetra magna. Integer vel orci venenatis lorem pulvinar bibendum.  ",
        alt: "Este es el alt de foto 3",
    },
    {
        src: "assets/viajes/viajes-4.jpg",
        title: "Lorem ipsum dolor  4",
        descripcion:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut bibendum elit. In vitae pharetra magna. Integer vel orci venenatis lorem pulvinar bibendum.  ",
        alt: "Este es el alt de foto 4",
    },
    {
        src: "assets/viajes/viajes-5.jpg",
        title: "Lorem ipsum dolor  5",
        descripcion:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut bibendum elit. In vitae pharetra magna. Integer vel orci venenatis lorem pulvinar bibendum.  ",
        alt: "Este es el alt de foto 5",
    },
    {
        src: "assets/viajes/viajes-6.jpg",
        title: "Lorem ipsum dolor  6",
        descripcion:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut bibendum elit. In vitae pharetra magna. Integer vel orci venenatis lorem pulvinar bibendum.  ",
        alt: "Este es el alt de foto 6",
    },
];

// floor para hacerlo entero, imagenesCabecera.length = 8, numero entero entre 0 y 7
// console.log(imagenesCabecera.length);

function crearImagen(arrayImagenes) {
    const numeroAleatorio = Math.floor(Math.random() * imagenesCabecera.length);
    const imagen = document.createElement("img");
    imagen.setAttribute("title", arrayImagenes[numeroAleatorio].title); // con set atribute
    imagen.setAttribute("src", arrayImagenes[numeroAleatorio].src);
    imagen.setAttribute("alt", arrayImagenes[numeroAleatorio].alt);
    cabecera.append(imagen);
}

function crearGaleria(arrayImagenes) {
    for (const imagen of arrayImagenes) {
        const contenedor = document.createElement("article");
        const divImagen = document.createElement("div");
        const img = document.createElement("img");
        const titulo = document.createElement("h2");
        const descripcion = document.createElement("p");

        img.title = imagen.title; // directamente con la propiedad
        img.src = imagen.src;
        img.alt = imagen.alt;
        divImagen.append(img);
        contenedor.append(divImagen);

        titulo.textContent = imagen.title;
        contenedor.append(titulo);
        descripcion.textContent = imagen.descripcion;
        contenedor.append(descripcion);

        galeria.append(contenedor);
    }
}

crearImagen(imagenesCabecera);
crearGaleria(imagenesGaleria);
