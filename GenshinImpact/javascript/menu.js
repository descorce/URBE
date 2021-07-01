function scrollToElement(element){
    window.scrollTo({
        'behavior':'smooth',
        'top':element.offsetTop
    });
}

document.querySelector('.menu').addEventListener('click',function(){
    document.querySelector('.menu-screen').classList.add('active');
});

document.querySelector('.close').addEventListener('click',function(){
    document.querySelector('.menu-screen').classList.remove('active');
});
