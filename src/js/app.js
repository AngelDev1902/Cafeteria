const nav = document.querySelector('.navbar');
const headerMenu = document.querySelector('.header__menu');
const body = document.body;
const postre = document.querySelector('.menu-index__postres');
const desayuno = document.querySelector('.menu-index__desayunos');
const bebida = document.querySelector('.menu-index__bebidas');

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
