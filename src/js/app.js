const nav = document.querySelector('.navbar');
const headerMenu = document.querySelector('.header__menu');
const body = document.body;
const postre = document.querySelector('.menu-index__postres');
const desayuno = document.querySelector('.menu-index__desayunos');
const bebida = document.querySelector('.menu-index__bebidas');
const siguientes = document.querySelectorAll('.after');
const anteriores = document.querySelectorAll('.before');
const galeria = document.querySelector('.galeria-container')
const visualizarImg = document.querySelector(".visualizar-img");
const tache = document.querySelector(".tache");
const imgAnt = document.querySelector('.flecha1');
const imgSig = document.querySelector('.flecha2');
const btnForm = document.querySelector('.formulario-btn');
const mensaje = document.querySelector('.mensaje');

// Datos de los productos
let postreDatos = {
    "Pastel mil hojas de durazno": ["50", "Delicioso pastel con capas finas de hojaldre y relleno de durazno, perfecto para los amantes de los postres."],
    "Galletas de fresa": ["30", "Galletas caseras con trozos de fresa, ideales para acompañar tu café o té."],
    "HotCakes": ["40", "Tortitas esponjosas, ideales para un desayuno clásico con sirope y mantequilla."],
    "Brauni": ["20", "Un postre exquisito, similar a un brownie, con un centro suave y un exterior crujiente, que hará las delicias de tu paladar."],
    "Pastel de naranja": ["20", "Un pastel húmedo y cítrico con sabor a naranja, perfecto para los amantes de los sabores frescos."]
}

let bebidaDatos = {
    "Jugo de naranja": ["30", "Refrescante jugo de naranja recién exprimido, lleno de vitamina C."],
    "Jugo de Limón": ["30", "Un refrescante jugo de limón, ideal para refrescar tu paladar."],
    "Capuchino": ["40", "Una bebida de café indulgente con espresso, leche vaporizada y una capa de espuma cremosa."],
    "Jugo de Zanahoria": ["20", "Una bebida saludable y refrescante, hecha con zanahorias frescas."],
    "Café Negro": ["20", "El clásico café negro, fuerte y aromático, para los amantes del café puro."]
}

let desayunoDatos = {
    "Chilaquiles": ["60", "Un platillo tradicional mexicano con tortillas de maíz, salsa y queso, una opción sabrosa para el desayuno o el almuerzo."],
    "Cuernitos rellenos": ["50", "Un croissant relleno de tus ingredientes favoritos, ya sea jamón y queso o chocolate."],
    "Fruta Picada": ["40", "Una mezcla fresca de frutas de temporada, perfecta como opción saludable o postre."],
    "Tostadas con aguacate": ["50", "Tostadas de pan crujiente cubiertas con aguacate fresco y otros ingredientes deliciosos."],
    "combo bebida-postre": ["50", "Una combinación perfecta que incluye tu elección de bebida y postre, para disfrutar de lo mejor de ambos mundos."]
}

// hacer aparecer la barra de navegacion al hacer click en el bar
nav.addEventListener('click', () => {
    headerMenu.classList.toggle('header__menu-active');
    body.classList.toggle('body-desactive');

    /* let links = document.querySelectorAll(".nav__link");

    links.forEach(link => {
        link.addEventListener('click', () => {
            headerMenu.classList.remove('header__menu-active');
            body.classList.remove('body-desactive');
        });
    }); */

});

agregarMenu();

// añadir imagenes al menu en cada seccion
function agregarMenu() {
    const contenedores = [desayuno, postre, bebida];
    const contenedoresString = ['desayuno', 'postre', 'bebida'];
    const diccionarios = [desayunoDatos, postreDatos, bebidaDatos]
 
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 5; j++) {
            let cardNew = document.createElement('div');
            cardNew.classList.add("card");

            let imagen = contenedoresString[i] + (j+1);
            let diccionario = diccionarios[i];
            let titulos = Object.keys(diccionario);

            cardNew.innerHTML = `
                <div class="card__imagen">
                    <picture>
                        <source srcset="build/img/${imagen}.avif" type="image/avif">
                        <source srcset="build/img/${imagen}.webp" type="image/webp">
                        <img loading="lazy" src="build/img/${imagen}.png" alt="">
                    </picture>
                </div>
                <div class="card__info">
                    <p class="producto">${titulos[j]}</p>
                    <p class="descripcion">${diccionario[titulos[j]][1]}</p>
                    <p class="precio">$${diccionario[titulos[j]][0]}.00</p>
                </div>
            `;
        
            contenedores[i].appendChild(cardNew);

        }
    }
}

siguientes.forEach(after => {
    after.addEventListener('click', () => {
        let menu = after.parentNode.querySelector('.menu-producto');
        
        let pos = menu.style.left;
        pos = parseFloat(pos) || 0;

        let anchoContenedor = after.parentNode.offsetWidth;
        let anchoMenu = menu.offsetWidth;
        let ancho = (anchoMenu - anchoContenedor) / 10;
        
        if (pos > -ancho) {
            pos -= 30;
            console.log(menu.style.left);
        }

        menu.style.left = pos + "rem";
    })
});

anteriores.forEach(before => {
    before.addEventListener('click', () => {
        let menu = before.parentNode.querySelector('.menu-producto');
        
        let pos = menu.style.left;
        pos = parseFloat(pos) || 0;

        
        if (pos < 0) {
            pos += 30;
        }

        menu.style.left = pos + "rem";
    })
});

// Añadir imagenes de instalaciones
for (let i = 1; i <= 6; i++) {
    
    let imagen = document.createElement('div');
    imagen.classList.add("galeria__img");

    imagen.innerHTML = `
        <picture>
            <source srcset="build/img/cafe${i}.avif" type="image/avif">
            <source srcset="build/img/cafe${i}.webp" type="image/webp">
            <img loading="lazy" src="build/img/cafe${i}.png" alt="">
        </picture>
    `;

    galeria.appendChild(imagen);
}

// visualizar imagenes
const imagenes = document.querySelectorAll(".galeria__img");

imagenes.forEach(imagen => {
    imagen.addEventListener('click', (e) => {
        let imgNombre = e.target['currentSrc'];
        let num = obtenerNum(imgNombre);

        agregarImagen(num);

        visualizarImg.classList.add("visualizar-img-active");
        body.classList.add("body-desactive");
    });
});

tache.addEventListener('click', () => {
    document.querySelector('.imagenAmplificada').remove();
    visualizarImg.classList.remove("visualizar-img-active");
    body.classList.remove("body-desactive");
});

imgAnt.addEventListener('click', () => {
    let num = document.querySelector('.imagenAmplificada')
    num = num.classList[1];

    if (num > 1) {
        document.querySelector('.imagenAmplificada').remove();
        agregarImagen(parseInt(num) - 1);
    }
});

imgSig.addEventListener('click', () => {
    let num = document.querySelector('.imagenAmplificada')
    num = num.classList[1];
    
    if (num < 7) {
        document.querySelector('.imagenAmplificada').remove();
        agregarImagen(parseInt(num) + 1);
    }
});

function obtenerNum(imgNombre) { 
    imgNombre = imgNombre.split('/');
    imgNombre = imgNombre[imgNombre.length - 1];
    imgNombre = imgNombre.split('.');
    imgNombre = imgNombre[0];
    imgNombre = imgNombre.charAt(imgNombre.length - 1);

    return imgNombre;
}

function agregarImagen(num) {
    let imagen = document.createElement('picture');
    imagen.classList.add("imagenAmplificada");
    imagen.classList.add(num);

    imagen.innerHTML = `
        <source srcset="build/img/cafe${num}.avif" type="image/avif">
        <source srcset="build/img/cafe${num}.webp" type="image/webp">
        <img loading="lazy" src="build/img/cafe${num}.png" alt="">
    `;

    visualizarImg.appendChild(imagen);
}

// mensaje de formulario
btnForm.addEventListener('click', (event) => {
    event.preventDefault();

    mensaje.classList.add("mensaje-active");

    setTimeout(function() {
        mensaje.classList.remove("mensaje-active");
    }, 4000);
})