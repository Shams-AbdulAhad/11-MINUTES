
 /*Loading Effect */
 $(document).ready(function() {
  //Preloader
  preloaderFadeOutTime = 6000;
  function hidePreloader() {
  var preloader = $('.spinner-wrapper');
  preloader.fadeOut(preloaderFadeOutTime);
  }
  hidePreloader();
  });
 /*END */
 
 
 
 
 /* window.addEventListener('scroll', function() {
    if (window.scrollY > 200) {
      document
        .querySelector('.navigation')
        .classList.remove('bg-transparent');
      document
        .querySelector('.navigation')
        .classList.add('bg-dark');
        
    } else {
      document
        .querySelector('.navigation')
        .classList.remove('bg-dark');
      document
        .querySelector('.navigation')
        .classList.add('bg-transparent');
    }
  });*/


  /*FAQS*/
const items = document.querySelectorAll(".accordion a");
 
function toggleAccordion(){
  this.classList.toggle('active');
  this.nextElementSibling.classList.toggle('active');
}
 
items.forEach(item => item.addEventListener('click', toggleAccordion));
/*End*/

/*Teams*/
var $el = $(".table-responsive");
function anim() {
  var st = $el.scrollTop();
  var sb = $el.prop("scrollHeight")-$el.innerHeight();
  $el.animate({scrollTop: st<sb/2 ? sb : 0}, 20000, anim);
}
function stop(){
  $el.stop();
}
anim();
$el.hover(stop, anim);
/*End*/
