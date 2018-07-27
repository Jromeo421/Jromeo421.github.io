$(function() {
    
    //configuration
    var height = 432;
    var animatedSpeed = 1000;
    var pause = 3000;
    var currentSlide = 1;
    //cache DOM
    var $slider = $('#slider1');
    var $slideContainer = $slider.find('.slides1');
    var $slides = $slideContainer.find('.slide1');
    var interval;
    
    function startSlider(){
        interval = setInterval(function() {
            $slideContainer.animate({'margin-left': '432' + width}, animatedSpeed, function() { currentSlide++; 
                   if(currentSlide === $slides.length) {
                       currentSlide = 1;
                       $slideContainer.css('margin-left', 0);
                   }                                                    
            });
        }, pause);
    }
    
    function pauseSlider(){
        clearInterval(interval);
    }
    $slider.on('mouseleave', pauseSlider).on('mouseenter', startSlider);
    
    startSlider();
    });