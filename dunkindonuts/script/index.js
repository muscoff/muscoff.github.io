const topHeader = document.querySelector('#top-header');
const divBreak = document.querySelector('.break');

const topHeaderHeight = topHeader.offsetHeight
divBreak.style.height = topHeaderHeight + 'px';

const bannerImg = document.querySelector('#banner-img');

resetImage = () => {
    let screenWidth = window.innerWidth;
    let bImg = bannerImg.getAttribute('data-img');
    let replaceImage = bannerImg.getAttribute('data-replace');

    if(screenWidth <= 420){
        bannerImg.src = replaceImage;
    }else if(screenWidth <= 620 && screenWidth >= 421){
        bannerImg.src = replaceImage;
    }else if(screenWidth <=820 && screenWidth >= 621){
        bannerImg.src = replaceImage;
    }else{
        bannerImg.src = bImg;
    }
    setTimeout(() =>{resetImage();},);
}
resetImage();