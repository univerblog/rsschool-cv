
/// SCROLL TO ANKOR
const allAnkorLink = document.querySelectorAll('a[href*="#"]');
const regexp = /(?<=^#).+/g;

allAnkorLink.forEach ( el => {
    let blockID = el.getAttribute('href').match(regexp);
    
    if (blockID) { 
        el.addEventListener ('click', function (e) {
            e.preventDefault();
            document.getElementById(blockID + '').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              })
              document.querySelector('#nav-toggle').classList.remove('active');
              document.querySelector('body').classList.remove('hide');
              document.querySelector('nav').classList.remove('open-menu');  
        })  
        console.log( blockID + '' );
    }
    
} )




///// MODAL PETS

let allOpen = document.querySelectorAll('.block-pets');

for (let i = 0; i < allOpen.length; i++) {
    allOpen[i].addEventListener('click', openFun);
}
let modalBg = document.querySelector('.modal_bg');
let modalCont = document.querySelector('.modal_content');

function openFun() {
    let content = this;
    let image = content.querySelector('img').src;
    let title = content.querySelector('span').innerHTML;
    let info = content.querySelector('.info').innerHTML;
    modalBg.style.display = 'flex';
    modalCont.innerHTML = `<img src="${image}" /><div class="md-r"><b>${title}</b> ${info}</div>`;
    document.querySelector('body').classList.add('hidden');
}

document.querySelector('.modal_close').addEventListener('click', function () {
    modalBg.style.display = 'none';
    modalCont.innerHTML = '';
    document.querySelector('body').classList.remove('hidden');
})
// ------------------------

//// adaptive menu
document.querySelector('#nav-toggle').addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('body').classList.toggle('hide');
    document.querySelector('nav').classList.toggle('open-menu');
});
