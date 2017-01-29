window.onscroll = function(){ navFix() }

navFix = function(){
    var nav = document.getElementsByTagName('nav')[0];
    var banner = document.getElementById('banner');

    var scrollY = (window.pageYOffset || document.scrollTop)  - (document.clientTop || 0);
    var bannerHeight = banner.offsetHeight;

    var distanceFromTop = bannerHeight - scrollY;
    console.log(distanceFromTop);

    if(distanceFromTop < 20){
        if(!nav.classList.contains('fixedHeader'))
            nav.classList.add('fixedHeader')
    } else {
        nav.classList.remove('fixedHeader')
    }
}

returnHeight = function(ele){
    //return ele.getBoundingClientRect().top;
    return ele.offsetHeight;
}
