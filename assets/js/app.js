var App = function(){

	$.fn.hasAttr = function(name) {
	  return this.attr(name) !== undefined;
	};

	function handleDefaultlink(){
        $('a[href="#"]').click(function(e){
           e.preventDefault(); 
        });
    }

    function handleNav(){
    	$('#nav-toggle').click(function() {
    		$(this).toggleClass('is-active');
    		$('#nav-menu').toggleClass('is-active');
    	});
    }

    function handleoffer(){
    	$('.offer-icon').wrapInner('<div/>');
    }

	function handleServices(){
		$(document).ready(function(){
			$('.carousel-v1').owlCarousel({
				autoplay: true,
			    loop: false,
			    margin: 10,
			    smartSpeed: 1000,
			    nav: true,
			    navText: false,
			    responsiveClass:true,
			    responsive:{
			        0:{
			            items:1,
			            margin: 20,
			        	autoWidth: true,
			        	center: true
			        },
			        1000:{
			            items:3,
			            margin: 50
			        }
			    }
			});
		});
	}

	function handleTop(){
		$('.top').click(function(){
	        $('html,body').animate({scrollTop:0});
	        return false;
	    });
	}

    return{
        init:function(){
            handleDefaultlink();
            handleoffer();
            handleServices();
            handleNav();
            handleTop();
        },
    };

}();