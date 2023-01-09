const botaoMenu = document.querySelector('.cabecalho__menu')
const menu = document.querySelector('.menu-lateral')

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-lateral--inativo');
    
    if (botaoMenu.textContent == 'menu') {
        botaoMenu.textContent = 'close';
    } else {
        botaoMenu.textContent = 'menu';
    }
    

})