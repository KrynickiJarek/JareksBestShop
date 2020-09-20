const btn = document.querySelector(".header__burger");
const menu = document.querySelector(".header__nav");
const burger = document.querySelector(".header__burger");

btn.addEventListener("click", function(){
    menu.classList.toggle("header__nav--show");

});

btn.addEventListener("click", function(){
    burger.classList.toggle("header__burger--click");
});
