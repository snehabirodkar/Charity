import "../styles/style.css";
if(module.hot){
    module.hot.accept();
}
console.log("changes!!");


$('.action').owlCarousel({
  loop:true,
  margin:30,
// autoplay:true,
  navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
  nav:false,
  dots:false,
// autoplayHoverPause: true,
// autoplaySpeed: 800,
  responsive:{
     
  }
});