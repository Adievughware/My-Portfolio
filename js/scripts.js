// TYPING TEXTS

const TypeWriiter = function(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = wait;
    this.type();
    this.isDeleting = false;
}

// Type Method
TypeWriiter.prototype.type = function(){
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current words
    const fullTxt = this.words[current];

    // Check if deleting
    if(this.isDeleting){
        //Remove char
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else{
        // Add char
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into Element
    this.txtElement.innerHTML = `<span class ="txt">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 100;

    if(this.isDeleting){
        typeSpeed /= 2;
    }

    // If word is complete
    if(!this.isDeleting && this.txt === fullTxt){
        // Make pause at end
        typeSpeed = this.wait;
        // Set delete to true
        this.isDeleting = true;
    } else if(this.isDeleting && this.txt === ''){
        this.isDeleting = false;
        // Move to next word
        this.wordIndex++;
        // Pause before start typing 
        typeSpeed = 500;
    }


    setTimeout(() => this.type(), typeSpeed)
}

// Init on DOM load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init(){
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');

    //Init Typewriter
    new TypeWriiter(txtElement, words, wait);
}


/* Description: Custom JS file */


(function($) {
    "use strict"; 
	
    /* Navbar Scripts */
    // jQuery to collapse the navbar on scroll
    $(window).on('scroll load', function() {
		if ($(".navbar").offset().top > 60) {
			$(".fixed-top").addClass("top-nav-collapse");
		} else {
			$(".fixed-top").removeClass("top-nav-collapse");
		}
    });
    
	// jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$(document).on('click', 'a.page-scroll', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 600, 'easeInOutExpo');
			event.preventDefault();
		});
    });

    // offcanvas script from Bootstrap + added element to close menu on click in small viewport
    $('[data-toggle="offcanvas"], .navbar-nav li a:not(.dropdown-toggle').on('click', function () {
        $('.top-clicks').toggleClass('open')
    })

    /* Text Slider - Swiper */
	var textSlider = new Swiper('.text-slider', {
        autoplay: {
            delay: 7000,
            disableOnInteraction: false
		},
        loop: true,
        navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		}
    });


    /* Card Slider - Swiper */
	var cardSlider = new Swiper('.card-slider', {
		autoplay: {
            delay: 7000,
            disableOnInteraction: false
		},
        loop: true,
        navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
		slidesPerView: 6,
		spaceBetween: 70,
        breakpoints: {
            // when window is <= 767px
            767: {
                slidesPerView: 1
            },
            // when window is <= 991px
            991: {
                slidesPerView: 2,
                spaceBetween: 40
            },
            // when window is <= 1222px
            1200: {
                slidesPerView: 4,
                spaceBetween: 20
            }
        }
    });


    /* Details Lightbox - Magnific Popup */
    $('.popup-with-move-anim').magnificPopup({
		type: 'inline',
		fixedContentPos: true,
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: false,
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
    });
    

    /* Filter - Isotope */
    $(window).on('load', function() {
        var $grid = $('.grid').isotope({
            // options
            itemSelector: '.element-item',
            layoutMode: 'fitRows'
        });
        
        // filter items on button click
        $('.filters-button-group').on( 'click', 'a', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });
        
        // change is-checked class on buttons
        $('.button-group').each( function( i, buttonGroup ) {
            var $buttonGroup = $( buttonGroup );
            $buttonGroup.on( 'click', 'a', function() {
                $buttonGroup.find('.is-checked').removeClass('is-checked');
                $( this ).addClass('is-checked');
            });	
        });
    });


    /* Move Form Fields Label When User Types */
    // for input and textarea fields
    $("input, textarea").keyup(function(){
		if ($(this).val() != '') {
			$(this).addClass('notEmpty');
		} else {
			$(this).removeClass('notEmpty');
		}
	});
	

    /* Back To Top Button */
    // create the back to top button
    $('body').prepend('<a href="body" class="back-to-top page-scroll">Back to Top</a>');
    var amountScrolled = 700;
    $(window).scroll(function() {
        if ($(window).scrollTop() > amountScrolled) {
            $('a.back-to-top').fadeIn('500');
        } else {
            $('a.back-to-top').fadeOut('500');
        }
    });


	/* Removes Long Focus On Buttons */
	$(".button, a, button").mouseup(function() {
		$(this).blur();
	});

})(jQuery);

