import "../styles/style.css";

if (module.hot) {
    module.hot.accept();
}
console.log("changes!!");
//alert("hello");




$(document).ready(function() {
    $("#cause-owl").owlCarousel({
        items: 3,
        autoplay: true,
        //      margin:20,
        loop: true,
        nav: true,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        dots: false,
        navText: ['<i class="lni-chevron-left-circle"></i>', '<i class="lni-chevron-right-circle"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
});

$(document).ready(function() {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});

 const nav = document.querySelector('.nav-list-mobile');
 const ham = document.querySelector('.hamburger-menu');
 ham.addEventListener('click',function(){
     console.log("clicked");
     nav.classList.toggle('active');
 });

const navbar = document.getElementById("navbar");
document.addEventListener('scroll',function(){
   if(scrollY > '100'){
       console.log("above 100");
       navbar.style.background = "rgba(60, 199, 143, 0.95)";
   }
    else{
        navbar.style.background = "transparent";
    }
});



    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

