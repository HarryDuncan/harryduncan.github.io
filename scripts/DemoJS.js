var slideIndex = 0

$(document).ready(function(){
	carousel()
	
});

function carousel() {
    var i;
    var x = $(".DemoImage");
    for (i = 0; i < x.length; i++) {
	$(x[i]).hide(); 
      
    }
    slideIndex++; 
    if (slideIndex > x.length) {slideIndex = 1}
    $(x[slideIndex -1]).fadeIn('slow');
    setTimeout(carousel, 4000);
}
