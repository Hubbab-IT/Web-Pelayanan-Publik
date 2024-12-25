//navbar fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top');
    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else {
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
};
// hamburger
const hamburger = document.querySelector('#hamburger');
const navmenu = document.querySelector('#nav-menu');
hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navmenu.classList.toggle('hidden');
});
//klik di luar hamburger
window.addEventListener('click', function (e) {
    if(e.target != hamburger & e.target != navmenu) {
        hamburger.classList.remove('hamburger-active');
        navmenu.classList.add('hidden');
    }
})
//dark mode
const darktoggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');
darktoggle.addEventListener('click', function () {
    if(darktoggle.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
});
// pindahkan posisi toggle sesuai mode
if (localStorage.theme === 'dark' || (!( 'theme' in localStorage) && window.matchMedia ('(prefes-color-scheme: dark)').matches)) {
    darktoggle.checked = true;
} else {
    darktoggle.checked = false;
}
//tombol hero
const button = document.getElementById("services-button");
const servicesList = document.getElementById("services-list");

button.addEventListener("click", () => {
  servicesList.classList.toggle("hidden");
});




