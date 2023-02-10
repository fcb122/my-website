const hamburger = document.querySelector('.header nav-bar .nav-list .humburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('.header .container')

hamburger.addEventListener('click,' () => {
    hamburger.classlist.toggle('active');
});
