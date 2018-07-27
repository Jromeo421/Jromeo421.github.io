$(function() {
    
    //configuration
    var height = 432;
    var animatedSpeed = 1000;
    var pause = 5000;
    var currentSlide = 1;
    //cache DOM
    var $slider = $('#slider2');
    var $slideContainer = $slider.find('.slides2');
    var $slides = $slideContainer.find('.slide2');
    var interval;
    
    function startSlider(){
        interval = setInterval(function() {
            $slideContainer.animate({'margin-top': '-='+height}, animatedSpeed, function() { currentSlide++; 
                   if(currentSlide === $slides.length) {
                       currentSlide = 1;
                       $slideContainer.css('margin-top', 0);
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