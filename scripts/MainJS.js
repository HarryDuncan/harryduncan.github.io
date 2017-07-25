var slideIndex = 0;
$(document).ready(function(){
	carousel()	
$("li",".MainNav").click(function (){
var href = $(this).children('a').attr('href');
                $('html, body').animate({
                    scrollTop: $(href).offset().top
                }, 1000);
            });
	
		
});


$(window).scroll(function() {
   var hH = $('#scroll-to').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
    if(wS > 100){
	$(".MainNav").addClass("Scroll");
    } else {
        $('.MainNav').removeClass("Scroll");
	}
});








function carousel() {
    var i;
    var x = $('.DemoSlide');
    for (i = 0; i < x.length; i++) {
	$(x[i]).hide(); 
      
    }
    slideIndex++; 
    if (slideIndex > x.length) {slideIndex = 1}
    $(x[slideIndex -1]).fadeIn('slow');
    setTimeout(carousel, 4000);
}


