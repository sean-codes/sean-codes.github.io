window.onscroll = function(){ navFix() }

navFix = function(){
    var nav = document.getElementsByTagName('nav')[0];
    var banner = document.getElementById('banner');

    var scrollY = (window.pageYOffset || document.scrollTop)  - (document.clientTop || 0);
    var bannerHeight = banner.offsetHeight;

    var distanceFromTop = bannerHeight - scrollY;

    if(distanceFromTop < 20){
        nav.style.top = ((0 - distanceFromTop) - 300) + 'px';
        if(!nav.classList.contains('fixedHeader'))
            nav.classList.add('fixedHeader')
    } else {
        nav.classList.remove('fixedHeader')
    }
}
