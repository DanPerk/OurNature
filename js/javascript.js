//  navbar size on scroll

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("oceans-nav-scroll").style.backgroundColor = "#fe9262";
        document.getElementById("oceans-nav-scroll").style.borderRadius = "15px";
        document.getElementById("oceans-nav-scroll").style.marginTop = "35px";
        document.getElementById("oceans-nav-scroll").style.marginRight = "35px";
    }
    else {
        document.getElementById("oceans-nav-scroll").style.backgroundColor = "rgba(255, 255, 255, 0)";
        document.getElementById("oceans-nav-scroll").style.marginTop = "5px";
        document.getElementById("oceans-nav-scroll").style.marginRight = "10px";
    }
}