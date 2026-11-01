/*
pseudocodigo:

- Seleccionar los elementos header y galeria del HTML.
- Crear dos arrays con los datos de las imágenes.

Función para crear la imagen del header (aleatoria)
- Comprobar si el array está vacío. Si lo está, mostrar un mensaje y finalizar.
- llamar a la funcion que genera un número aleatorio.
- Seleccionar una imagen del array.
- Comprobar si existe etiqueta imagen en el header.
- Si no existe, crearla y añadirla.
- Asignar la ruta, el título y el texto alternativo como atributos a la etiqueta img.

Función para crear la galeria de imagens
- Comprobar si el array está vacío. Si lo está, mostrar un mensaje y finalizar.
- Recorrer el array con un bucle.
- Crear para cada imagen un article, un div, una imagen, un título y una descripción.
- Asignar los atributos a la imagen.
- Añadir cada elemento dentro del correspondiente y finalmente el article a la galería.

Función para crear un numero aleatorio
- Generar y devolver un número entero aleatorio entre 0 y elementos del array.

llamar a las funciones de crear imagen y galeria.
*/


const cabecera = document.querySelector("header");

const galeria = document.querySelector("#galeria");

const imagenesCabecera = [
    {
        src: "assets/banner/1.jpg",
        title: "Lorem ipsum dolor  1",
        descripcion: "Imagen 1",
        alt: "Este es el alt de foto 1",
    },
    {
        src: "assets/banner/2.jpg",
        title: "Lorem ipsum dolor  2",
        descripcion: "Imagen 2",
        alt: "Este es el alt de foto 2",
    },
    {
        src: "assets/banner/3.jpg",
        title: "Lorem ipsum dolor  3",
        descripcion: "Imagen 3",
        alt: "Este es el alt de foto 3",
    },
    {
        src: "assets/banner/4.jpg",
        title: "Lorem ipsum dolor  4",
        descripcion: "Imagen 4",
        alt: "Este es el alt de foto 4",
    },
    {
        src: "assets/banner/5.jpg",
        title: "Lorem ipsum dolor  5",
        descripcion: "Imagen 5",
        alt: "Este es el alt de foto 5",
    },
    {
        src: "assets/banner/6.jpg",
        title: "Lorem ipsum dolor  6",
        descripcion: "Imagen 6",
        alt: "Este es el alt de foto 6",
    },
    {
        src: "assets/banner/7.jpg",
        title: "Lorem ipsum dolor  7",
        descripcion: "Imagen 7",
        alt: "Este es el alt de foto 7",
    },
    {
        src: "assets/banner/8.jpg",
        title: "Lorem ipsum dolor  8",
        descripcion: "Imagen 8",
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


function crearImagen(arrayImagenes) {
    
    // Comprobamos que el array tenga imágenes si no escribimos un mensaje
    if (arrayImagenes.length === 0) {
        galeria.textContent = 'No hay imágenes disponibles.';
        return;
    } 

    const numeroAleatorio = crearNumeroAleatorio (imagenesCabecera.length) // llamamos a la funcion para crear el aleatorio
    const imagen = document.querySelector('header > img'); // seleccionamos del html la etiqueta imagen

    if (!imagen) {
        imagen = document.createElement('img'); // si no existe la creamos
        cabecera.append(imagen); // Añadimos la imagen al header
    }

    const imagenSeleccionada = arrayImagenes[numeroAleatorio];

    /*
        imagen.setAttribute("src", imagenSeleccionada.src);
        imagen.setAttribute("title", imagenSeleccionada.title); 
        imagen.setAttribute("alt", imagenSeleccionada.alt);
    */

    imagen.src = imagenSeleccionada.src;
    imagen.title = imagenSeleccionada.title;
    imagen.alt = imagenSeleccionada.alt;

}

function crearGaleria(arrayImagenes) {
    // Comprobamos que el array tenga imágenes si no escribimos un mensaje
    if (arrayImagenes.length === 0) {
        cabecera.textContent = 'No hay imágenes disponibles.';
        return;
    } 

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

// floor para hacerlo entero, imagenesCabecera.length = 8, numero entero entre 0 y 7

function crearNumeroAleatorio (numFinal){
    return Math.floor(Math.random() * numFinal);
}

crearImagen(imagenesCabecera);
crearGaleria(imagenesGaleria);
