jQuery(document).ready(function($) {

    $('#fullpage').fullpage(
        {
            css3: true,
            navigationPosition: 'right',
            navigation: true,
            responsiveWidth: 980,
            responsiveHeight: 750,
            onLeave: function(index, nextIndex, direction) {
                setTimeout(
                    function() {
                        if (nextIndex == 2) {
							$('.name').addClass('fadeInLeft').removeClass('fadeOutLeft');
                            $('.ico.thunder').addClass('bounceInLeft').removeClass('bounceOutLeft');
                            $('.ico.mobile').addClass('bounceInRight').removeClass('bounceOutRight');
                        }
                    },
                    100
                );
                if (index == 2) {
					$('.name').addClass('fadeOutLeft').removeClass('fadeInLeft');
                    $('.ico.thunder').addClass('bounceOutLeft').removeClass('bounceInLeft');
                    $('.ico.mobile').addClass('bounceOutRight').removeClass('bounceInRight');
                }
				
                setTimeout(
                    function() {
                        if (nextIndex == 3) {
							$('.name').addClass('fadeInLeft').removeClass('fadeOutLeft');
                        }
                    },
                    100
                );
                if (index == 3) {
					$('.name').addClass('fadeOutLeft').removeClass('fadeInLeft');
                }
				
                setTimeout(
                    function() {
                        if (nextIndex == 4) {
							$('.name').addClass('fadeInLeft').removeClass('fadeOutLeft');
                        }
                    },
                    100
                );
                if (index == 4) {
					$('.name').addClass('fadeOutLeft').removeClass('fadeInLeft');
                }
				
                setTimeout(
                    function() {
                        if (nextIndex == 5) {
							$('.name').addClass('fadeInLeft').removeClass('fadeOutLeft');
							$('.ico.code').addClass('bounceInDown').removeClass('bounceOutUp');
							$('.ico.newsletter').addClass('bounceInUp').removeClass('bounceOutDown');
                        }
                    },
                    100
                );
                if (index == 5) {
					$('.name').addClass('fadeOutLeft').removeClass('fadeInLeft');
					$('.ico.code').addClass('bounceOutUp').removeClass('bounceInDown');
					$('.ico.newsletter').addClass('bounceOutDown').removeClass('bounceInUp');
                }
				
            },
            afterRender: function(){
				setTimeout (
					function () {
                $('img.d').plaxify({"xRange": 40, "yRange": 40});
                $('img.r').plaxify({"xRange": 20, "yRange": 20});
                $('img.u').plaxify({"xRange": 10, "yRange": 10, "invert": true});
                $('img.p').plaxify({"xRange": 40, "yRange": 40, "invert": true});
                $('img.al').plaxify({"xRange": 30, "yRange": 30});
				$.plax.enable();
					},
					100
				);
                
            }
        }
    );

    $('.arrow.flash').css('cursor', 'pointer').bind(
        'click',
        function() {
            $.fn.fullpage.moveSectionDown();
        }
    );

});
