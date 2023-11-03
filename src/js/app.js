const nav = document.querySelector('.navbar');
const headerMenu = document.querySelector('.header__menu');
const body = document.body;

nav.addEventListener('click', () => {
    headerMenu.classList.toggle('header__menu-active');
    body.classList.toggle('body-desactive');

        body.addEventListener('click', (event) => {
            if(event.target != headerMenu){
                headerMenu.classList.remove('header__menu-active');
                body.classList.remove('body-desactive');
            }
        })   

});

