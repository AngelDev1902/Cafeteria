const nav=document.querySelector(".navbar"),headerMenu=document.querySelector(".header__menu"),body=document.body;nav.addEventListener("click",()=>{headerMenu.classList.toggle("header__menu-active"),body.classList.toggle("body-desactive"),body.addEventListener("click",e=>{e.target!=headerMenu&&(headerMenu.classList.remove("header__menu-active"),body.classList.remove("body-desactive"))})});