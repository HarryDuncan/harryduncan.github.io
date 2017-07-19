$('.DemoThumbnail').mouseover(function(){
		$(this).parent('div').children('p').fadeIn('fast');

	});

$('.DemoThumbnail').mouseout(function(){
		$(this).parent('div').children('p').fadeOut('fast');
});