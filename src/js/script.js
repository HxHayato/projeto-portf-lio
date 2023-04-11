function menuShow(){
    let menuMobile = document.querySelector('.menu-mobile');
    let menuIcon = document.querySelector('#menu-icon');
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');

        menuIcon.classList.remove('bx-x');
        menuIcon.classList.add('bx-menu-alt-right');
    } else {
        menuMobile.classList.add('open');
        
        menuIcon.classList.remove('bx-menu-alt-right');
        menuIcon.classList.add('bx-x');
    }
}