document.addEventListener("DOMContentLoaded", function () {

    // MENÚ DESPLEGABLE

    const boton = document.querySelector(".dropbtn");
    const menu = document.querySelector(".dropdown-content");

    if (boton && menu) {

        // ABRIR / CERRAR MENÚ

        boton.addEventListener("click", function (e) {

            e.stopPropagation();

            menu.classList.toggle("mostrar");

        });

        // CERRAR SI HACEN CLICK FUERA

        document.addEventListener("click", function (e) {

            if (!e.target.closest(".dropdown")) {

                menu.classList.remove("mostrar");

            }

        });

    }

    // CARRUSEL SOLO ESTACIONES

    const imagenCarrusel =
    document.getElementById("imagen-carrusel");

    // SOLO SI EXISTE EL CARRUSEL

    if (imagenCarrusel) {

        let imagenes = [];
        let indice = 0;

        // DETECTAR PÁGINA

        const pagina =
        window.location.pathname.toLowerCase();

        // PRIMAVERA

        if (pagina.includes("primavera")) {

            imagenes = [

                "images/primavera.jpg",
                "images/primavera2.webp"

            ];

        }

        // VERANO

        else if (pagina.includes("verano")) {

            imagenes = [

                "images/Verano.jpg",
                "images/Verano2.jpg",
                "images/Verano3.jpg"

            ];

        }

        // OTOÑO

        else if (pagina.includes("otono")) {

            imagenes = [

                "images/otono3.jpg",
                "images/otono4.jpg",
                "images/otono5.jpg"

            ];

        }

        // INVIERNO

        else if (pagina.includes("invierno")) {

            imagenes = [

                "images/invierno4.jpg",
                "images/invierno5.jpg",
                "images/invierno6.jpg"

            ];

        }

        // MOSTRAR IMAGEN

        function mostrarImagen() {

            imagenCarrusel.src = imagenes[indice];

        }

        // SIGUIENTE

        window.siguiente = function () {

            indice++;

            if (indice >= imagenes.length) {

                indice = 0;

            }

            mostrarImagen();

        };

        // ANTERIOR

        window.anterior = function () {

            indice--;

            if (indice < 0) {

                indice = imagenes.length - 1;

            }

            mostrarImagen();

        };

        // CAMBIO AUTOMÁTICO

        if (imagenes.length > 1) {

            setInterval(function () {

                siguiente();

            }, 3000);

        }

    }

});

// MENSAJE INDEX

function saludo() {

    const mensaje =
    document.getElementById("mensaje");

    if (mensaje) {

        mensaje.textContent =
        "Bienvenido a Japón 🇯🇵 Explora sus estaciones y cultura.";

    }

}