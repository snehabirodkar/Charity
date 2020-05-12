
import "../styles/style.css";

if (module.hot) {
    module.hot.accept();
}
console.log("changes!!");
//alert("hello");



$(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 400) {
        $("#sticky-header").removeClass("sticky");
        $('#back-top').fadeIn(500);
    } else {
        $("#sticky-header").addClass("sticky");
        $('#back-top').fadeIn(500);
    }
});
$(document).ready(function(){

// mobile_menu
var menu = $('ul#navigation');
if(menu.length){
	menu.slicknav({
		prependTo: ".mobile_menu",
		closedSymbol: '+',
		openedSymbol:'-'
	});
};
});
$(document).ready(function () {
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
