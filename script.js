const $btnMenu = document.querySelector('.btn-menu');
const $menu = document.querySelector('.menu');
const $main = document.querySelector('main');

$btnMenu.addEventListener('click', ()=>{
    $menu.classList.toggle('aparecendo');
})

$main.addEventListener('click', ()=>{
    $menu.classList.remove('aparecendo');
})