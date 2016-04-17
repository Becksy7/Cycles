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
});