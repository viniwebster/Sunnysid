const btn = document.getElementById('btn');

btn.addEventListener('click', ()=>{
    const menuHamburguer = document.querySelector('.nav__container');
    
    if (menuHamburguer.style.display == 'none') {
        menuHamburguer.style.display = 'flex'
    } else {
        menuHamburguer.style.display = 'none'
    }
})