
let allOpen = document.querySelectorAll('.block-pets .learn-more');


for (let i = 0; i < allOpen.length; i++) {
    allOpen[i].addEventListener('click', openFun);
}
let modalBg = document.querySelector('.modal_bg');
let modalCont = document.querySelector('.modal_content');

function openFun() {
    let content = this.parentElement.cloneNode(true);
    let image = content.querySelector('img').src;
    let title = content.querySelector('span').innerHTML;
    let info = content.querySelector('.info').innerHTML;
    //console.log(content);
   //console.log(content.querySelector('img'));
    //console.log('123');
    modalBg.style.display = 'flex';
    modalCont.innerHTML = `<img src="${image}" /><div class="md-r"><b>${title}</b> ${info}</div>`;
	document.querySelector('body').classList.add('hidden');
}


document.querySelector('.modal_close').addEventListener('click', function () {
    modalBg.style.display = 'none';
    modalCont.innerHTML = '';
	document.querySelector('body').classList.remove('hidden');
})
	