
//$('.action').owlCarousel({
//  loop:true,
//  margin:30,
//// autoplay:true,
//  navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
//  nav:false,
//  dots:false,
//// autoplayHoverPause: true,
//// autoplaySpeed: 800,
//  responsive:{
//     
//  }
//});

// $('.counter').counterUp({
//    delay: 10,
//    time: 10000
//  });

//var firstName = "";
//		var lastName = "";
//		var email = "";
//		var dType = "";
//		var receipt = "";
//		var anon = "";
//		var list = "";
//		var amount = "";
//		
//		$('.set-amount').autoGrow(0);
//
//		$(".button").click(function(){
//			$(".button").removeClass("selected");
//			$(this).addClass("selected");
//			
//			$(this).find("input").focus();
//		});
//		$(".set-amount").keyup(function(){
//			
//			if (this.value != this.value.replace(/[^0-9\.]/g, '')) {
//		       this.value = this.value.replace(/[^0-9\.]/g, '');
//		    }
//
//		});
//		
//		$("input").on("change", function(){
//			firstName = $("#firstName").val();
//			lastName = $("#lastName").val();
//			email = $("#email").val();
//			
//			if ( $("#one-time").prop( "checked" ) ){
//				dType = "One-Time";
//			}
//			if ( $("#monthly").prop( "checked" ) ){
//				dType = "Monthly";
//			}
//
//		});
//
//

$.scrollIt({
    upKey: 38, // key code to navigate to the next section
    downKey: 40, // key code to navigate to the previous section
    easing: 'linear', // the easing function for animation
    scrollTime: 600, // how long (in ms) the animation takes
    activeClass: 'active', // class given to the active nav element
    onPageChange: null, // function(pageIndex) that is called when page is changed
    topOffset: 0 // offste (in px) for fixed top navigation
});

// scrollup bottom to top
$.scrollUp({
    scrollName: 'scrollUp', // Element ID
    topDistance: '4500', // Distance from top before showing element (px)
    topSpeed: 300, // Speed back to top (ms)
    animation: 'fade', // Fade, slide, none
    animationInSpeed: 200, // Animation in speed (ms)
    animationOutSpeed: 200, // Animation out speed (ms)
    scrollText: '<i class="fa fa-angle-double-up"></i>', // Text for element
    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
});
