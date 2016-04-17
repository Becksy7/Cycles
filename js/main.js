$(function(){
	$('[data-slick]').each(function(i, slider){
		$(slider).slick({
		});
	});
	$('[data-main-slick]').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		$(slick.$slides).each(function(i, slide){
			$(slide).removeClass('shifted-left shifted-right');
		})
	});
	$(document).on('mouseover','[data-main-slick] .slick-prev', function(){
		var $this = $(this);
		var $currentSlide = $this.parent().find('.slick-slide.slick-active');
		var $prevSlide = $currentSlide.prev();
		$prevSlide.addClass('shifted-left');
	});
	$(document).on('mouseout','[data-main-slick] .slick-prev', function(){
		var $this = $(this);
		var $currentSlide = $this.parent().find('.slick-slide.slick-active');
		var $prevSlide = $currentSlide.prev();
		$prevSlide.removeClass('shifted-left');
	});
	$(document).on('mouseover','[data-main-slick] .slick-next', function(){
		var $this = $(this);
		var $currentSlide = $this.parent().find('.slick-slide.slick-active');
		var $prevSlide = $currentSlide.next();
		$prevSlide.addClass('shifted-right');
	});
	$(document).on('mouseout','[data-main-slick] .slick-next', function(){
		var $this = $(this);
		var $currentSlide = $this.parent().find('.slick-slide.slick-active');
		var $prevSlide = $currentSlide.next();
		$prevSlide.removeClass('shifted-right');
	});

	//feedbacks slider




	var feedbackSlick = function(slick){
		var $slick = $(slick);
		var id = $slick.attr('id');
		var $navs = $('[data-slick-logos-for='+id+']');
		$slick.slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			swipeToSlide: true,
			asNavFor: $navs,
			arrows: false,
			responsive: [
				//{
				//	breakpoint: 99999,
				//	settings: "unslick"
				//},
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});
		$navs.slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			asNavFor: $slick,
			arrows: false,
			responsive: [
				//{
				//	breakpoint: 99999,
				//	settings: "unslick"
				//},
				{
					breakpoint: 767,
					settings: {
						centerMode: true,
						focusOnSelect: true,
						slidesToShow: 3,
						slidesToScroll: 1
					}
				}
			]
		});
	}
	$('[data-slick-feedbacks]').each(function(i, slick) {
		feedbackSlick(slick);
	});

});