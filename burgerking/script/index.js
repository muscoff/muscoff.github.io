const divBreak = document.querySelector('.div-break');
const nav = document.querySelector('nav');
const navHeight = nav.offsetHeight;

const yearHolder = document.querySelector("#year")
const year = new Date().getFullYear();

divBreak.style.height = navHeight + 'px';
yearHolder.innerText = year;

const bkMore = document.querySelector("#more");
const moreDiv = document.querySelector('.bk-more');

bkMore.addEventListener('click', e =>{
    e.preventDefault();

    if(moreDiv.classList.contains('open')){
        moreDiv.classList.remove('open');
        moreDiv.classList.add('close');
    }else{
        moreDiv.classList.remove('close');
        moreDiv.classList.add('open');
    }
});