jQuery(document).ready(function($){
	var ofsetTop = 	$('.side-bar').offset().top, offsetMenu = $('.submenu').offset().top, headerHeight = $('.main-header').outerHeight();
	$(window).scroll(function(){
		if($(this).scrollTop() > headerHeight-100){
			$('.main-header').addClass('sticky-color');
		}else{
			$('.main-header').removeClass('sticky-color');
		}

		if($(this).scrollTop() > ofsetTop-34){
			$('.side-bar').addClass('sticky-top');
		}else{
			$('.side-bar').removeClass('sticky-top');
		}
				
	});
	$(window).on('load',function(){
		$('.img-flight').addClass('selected');
		if($(this).scrollTop() > headerHeight){
			$('.main-header').addClass('sticky-color');
			$('.side-bar').addClass('sticky-top');
		}
		
		if($(window).width()< 767){
			$('.col-left').toggleClass('toggle-nav');
			$('.col-right').toggleClass('expand');
			$('.main-nav li').removeClass('selected');			
		}
	});

	if($(window).width()> 767){
		$('body').on('click','.icon-nav',function(){
			$('.col-left').toggleClass('toggle-nav');
			$('.col-right').toggleClass('expand');
			$('.main-nav li').removeClass('selected');
		});
	}else{
		$('body').on('click','.icon-nav',function(){
			$('.side-bar').toggleClass('mob-toggle');
		});
	}

});
